import Head from 'next/head'
import PostCard from "../../components/PostCard"
import { GetStaticProps } from "next"
import Link from "next/link"


const Home = ({posts}) => {
  return (
    <>
      <Head>
          <title>Posts Page</title>
      </Head>
      <div className="grid lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
            <a className='mb-5'><PostCard  props = {post}/></a>
            </Link>
          ))}
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=15')
  const posts = await res.json()

  return {
    props: {
      posts
    },
  }
}
