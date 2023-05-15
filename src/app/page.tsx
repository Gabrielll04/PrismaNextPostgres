import prisma from '../lib/prisma'
import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'
import LoginButton from '../components/LoginButton'

export default async function Page() {
  const feed = await Page.getInitialProps()
  const user = await getCurrentUser()

  if (user) {
    redirect('/home')
  }

  return (
    <div className='flex flex-col h-[40rem] w-screen justify-center items-center'>
      <div className='heroBlurAnimationPurple'></div>
      <div className='heroBlurAnimationGreen'></div>
      <span className='font-bold text-7xl'>ShenzenChat</span>
      <div className='flex justify-center items-center w-full h-32'>
        <LoginButton />
      </div>
     
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