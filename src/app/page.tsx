import prisma from '../lib/prisma'

import ButtonLogin from '../../components/RegisterForm'

export default async function Page() {
  const feed = await Page.getInitialProps()

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <span>{`feed: ${JSON.stringify(feed)}`}</span>
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