import { createAdminClient, createSessionClient } from "@/appwrite/config"
import { NextResponse, NextRequest } from "next/server"
import { cookies } from "next/headers"

export async function GET(request) {
        const sessionCookie  = cookies().get('session')

        try {
            const {databases} = await createSessionClient(sessionCookie.value)
            const {documents:orders, total} = await databases.listDocuments(
                process.env.NEXT_PUBLIC_DATABASE_ID!,
                process.env.NEXT_PUBLIC_COLLECTION_ORDERS!,
            );
            
            return NextResponse.json({orders, total})
        } catch (error:any) {
            console.error(error)
            return NextResponse.json('access denied', {status: 403},)
        }

 

        
}   