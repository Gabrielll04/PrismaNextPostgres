import PostCard from '@/components/PostCard'
import prisma from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function HomePage() {
    const user = await getCurrentUser()
    if (!user) {
        redirect('/login')
    }

    const posts = await HomePage.getServerProps()

    return (
        <main className='flex w-screen h-screen max-h-none overflow-x-hidden overflow-scroll '>
            <article className='mx-auto flex flex-col w-[45rem] h-full gap-5'>
                <div className='flex w-full h-20 items-center px-5 mt-5'>
                    <div className='flex items-center space-x-3'>
                        <img src={`${user.image}`} className='w-16 h-16 rounded-full' />
                        <span className='font-semibold text-lg'>{user.name}</span>
                    </div>
                    <div className='ml-auto'>
                        <Link href='/posts/create' className='flex items-center justify-center w-20 h-8 rounded text-black font-bold bg-white active:opacity-70'>+ post</Link>
                    </div>
                </div>
                <section className='flex flex-col w-full h-auto max-h-none space-y-4'>
                    {posts.map((post) => (
                        <PostCard key={post.id} PostContent={post}/>
                    ))}
                </section>
            </article>
        </main>
    )
}

HomePage.getServerProps = async () => {
    const allPosts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true, image: true }
            }
        }
    })

    return allPosts
}