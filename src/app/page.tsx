import prisma from '../lib/prisma'

export default function Page({feed}: any) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <span>{`feed: ${JSON.stringify(feed)}`}</span>
    </div>
  )
}

export async function getInitialProps() {
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