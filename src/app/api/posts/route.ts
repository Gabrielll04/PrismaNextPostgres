import { getCurrentUser } from "@/lib/session"
import prisma from "@/lib/prisma"
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  return NextResponse.json('teste');
}
export async function POST(req: Request) {
  const session = getCurrentUser()

  if (!session) {
    return NextResponse.json('Não autorizado, error: 403',)
  }

  const body = await req.json()
  const newpost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: true
    },
    select: {
      id: true,
    }
  })

  return NextResponse.json(newpost)
 } 