import { GetServerSideProps, GetServerSidePropsContext} from 'next'
import prisma from '../../../lib/prisma'

export default function () {
  return (
    <div>Hello</div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: String(params?.id),
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    })
    return {
      props: { post },
    }
  } catch {
    console.log('Error has ocurred')
    return {
      props: {},
    }
  }
}