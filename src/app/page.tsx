import prisma from '../lib/prisma'

import ButtonLogin from '../../components/RegisterForm'
import { getCurrentUser } from '@/lib/session'
import { getServerSession } from 'next-auth'

export default async function Page() {
  const feed = await Page.getInitialProps()
  const user = await getCurrentUser()

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <span>{`feed: ${JSON.stringify(feed)}`}</span><br />
      <span>{`user: ${user?.email}`}</span><br />
      <ButtonLogin/>
    </div>
  )
}

Page.getInitialProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  return {
    feed
  }
}