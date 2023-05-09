// import prisma from '../lib/prisma'

export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
// export async function getInitialProps() {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   })

//   console.log("testes")
//   return <Home feed={feed} />
// }