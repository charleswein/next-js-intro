import Link from 'next/link'
import posts from '../post.json'

const Blog = () => {
    return (
        <div className='flex justify-start bg-blue-500 font-extrabold p-2'>
            <h1>Blog</h1>
            <ul className='p-2'>
                {Object.keys(posts).map((id, index) =>
                    <li key={index}>
                        <Link href='/blog/[id]' as={'/blog/' + id}>
                            <a>{posts[id as keyof typeof posts].title}</a>
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default Blog
