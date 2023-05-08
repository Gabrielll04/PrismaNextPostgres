import Home from './homepage'
import prisma from '../lib/prisma'

export default async function getInitialProps() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  console.log("testes")
  return <Home feed={feed} />
}