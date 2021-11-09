import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"

import { GetStaticPaths, GetStaticProps } from 'next'
import CommentCard from "../../components/CommentCard"
import Comments from "../../lib/comments"

export default function PostDetails({post}){
    
    const [allComments, setAllComments] = useState(Comments)
    const [comment, setComment] = useState('')

    useEffect(() => {
        setAllComments(allComments)
    }, [])

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        setComment('')
        setAllComments(data)
    }

    return (
        
        <>
            <Head>
                <title>{post.title}</title>
            </Head>

            <h1 className="text-2xl font-bold tracking-tight">{post.title}</h1>
            <p className="text-gray-500 w-4/5 py-5">{post.body}</p>
            <Link href="/posts">
                <button className="my-2 bg-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
            </Link>

            <div className="m-4 w-full">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Wrtie you comment</h3>
                <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)} className="border p-2 rounded w-full" placeholder="Write something..."></textarea>
                
                <div className="flex justify-between mt-3">
                    <button onClick = {submitComment} className="px-4 py-1 bg-gray-600 text-white rounded font-light hover:bg-gray-700">Submit</button>
                </div>
            </div>

            <div className="antialiased max-w-screen-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
                <div className="space-y-4">
                    {allComments.map((data) => (
                        <CommentCard key={data.id} props = {data}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    const postsData = posts.map((post)=>{
        return {
            params: {
                id: post.id.toString()
            } 
        }
    })
    return {
        paths: postsData,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({ params }) => {

    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await postRes.json()
   
    return {
        props:{
            post
        }
    }
}