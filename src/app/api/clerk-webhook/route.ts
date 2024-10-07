import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
 const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

 if (!WEBHOOK_SECRET) {
   throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
 }

 // Get the headers
 const headerPayload = headers();
 const svix_id = headerPayload.get("svix-id");
 const svix_timestamp = headerPayload.get("svix-timestamp");
 const svix_signature = headerPayload.get("svix-signature");

 // If there are no headers, error out
 if (!svix_id || !svix_timestamp || !svix_signature) {
   return new Response('Error occured -- no svix headers', {
     status: 400
   })
 }

 // Get the body
 const payload = await req.json()
 const body = JSON.stringify(payload);

 // Create a new Svix instance with your secret.
 const wh = new Webhook(WEBHOOK_SECRET);

 let evt: WebhookEvent

 // Verify the payload with the headers
 try {
   evt = wh.verify(body, {
     "svix-id": svix_id,
     "svix-timestamp": svix_timestamp,
     "svix-signature": svix_signature,
   }) as WebhookEvent
 } catch (err) {
   console.error('Error verifying webhook:', err);
   return new Response('Error occured', {
     status: 400
   })
 }

 // Handle the webhook
 const { id, email_addresses, first_name, image_url }: any = evt.data;
 const email = email_addresses[0]?.email_address;

 try {
   await db.user.upsert({
     where: { clerkId: id },
     update: {
       email,
       name: first_name,
       profileImage: image_url,
     },
     create: {
       clerkId: id,
       email,
       name: first_name || "",
       profileImage: image_url || "",
     },
   });
   return new NextResponse("User updated in database successfully", { status: 200 });
 } catch (error) {
   console.error('Error updating user in database:', error);
   return new NextResponse("Error updating user in database", { status: 500 });
 }
}