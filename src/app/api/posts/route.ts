import prisma from "@/lib/prisma"
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";

export async function GET(request: Request) {
  return NextResponse.json('teste');
}
export async function POST(req: Request) {
  const session: any = await getServerSession(AuthOptions)

  if (!session) {
    return NextResponse.json('Não autorizado, error: 403',)
  }

  const body = await req.json()
  const newpost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: true,
      authorId: session.user?.id
    },
    select: {
      id: true,
    }
  })

  return NextResponse.json(newpost)
 } 