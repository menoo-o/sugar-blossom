import { createAdminClient } from "@/appwrite/config"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request) {
        const {databases} = await createAdminClient()
        const {documents:orders, total} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_COLLECTION_ORDERS!,
        )

        return NextResponse.json({orders, total})
}   