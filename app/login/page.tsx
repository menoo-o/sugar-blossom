import { log } from 'console'
import React from 'react'
import { createAdminClient } from '@/appwrite/config'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default function Loginpage() {
  async function createSession(formData:FormData) {
    "use server"
    const data = Object.fromEntries(formData)
    const {email, password} = data;

    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password)
    cookies().set('session', session.secret, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      expires: new Date(session.expire),
      path: '/',
    })

    redirect("/");
  }
  return (
    <div>
      <h1>login page</h1> <br /><br />

      <form action={createSession}>
      <div className='email-box'>
            <label htmlFor="email">Enter Email:</label>
            <input type="email" name="email" id="email"
              placeholder='enter email'
              defaultValue={"chai@gmail.com"}
            />
          </div>
          <br /><br /><br />

          <div className='password-box'>
            <label htmlFor="password">Enter Password</label>
            <input type='password' name="password" id='password'
              placeholder='enter password'
              defaultValue={'ABCabc!!'}
            >
            </input>

          </div>
          <br /><br />
          <div>
            <input type="submit" value='Login' />
          </div>


      </form>
      
          
      
    </div>
  )
}
