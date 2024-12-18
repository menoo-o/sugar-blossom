import { log } from 'console'
import React from 'react'

export default function Loginpage() {
  async function createSession(formData:any) {
    "use server"

    console.log(formData);
    
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
              defaultValue={12345}
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
