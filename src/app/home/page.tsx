import PostCard from '@/components/PostCard'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function HomePage() {
    const user = await getCurrentUser()
    console.log(user?.image)
    if (!user) {
        redirect('/login')
    }

    const posts = await HomePage.getServerProps()

    return (
        <main className='flex w-screen h-screen'>
            <article className='mx-auto flex flex-col w-[45rem] h-full'>
                <div className='flex w-full h-20 items-center px-5 mt-5'>
                    <div className='flex items-center space-x-3'>
                        <img src={`${user.image}`} className='w-16 h-16 rounded-full' />
                        <span className='font-semibold text-lg'>{user.name}</span>
                    </div>
                    <div className='ml-auto'>
                        <Link href='/posts/create' className='flex items-center justify-center w-20 h-8 rounded text-black font-bold bg-white active:opacity-70'>+ post</Link>
                    </div>
                </div>
                <section className='flex flex-col w-full max-h-none'>
                    {posts.map((post) => (
                        <PostCard key={post.id} PostContent={post}/>
                    ))}
                </section>
            </article>
        </main>
    )
}

HomePage.getServerProps = async () => {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true }
            }
        }
    })

    return posts
}