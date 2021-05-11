import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'

export default function Posts({ posts }) {
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts')
    //         const json = await response.json()
    //         setPosts(json)
    //     }
    //     load()
    // }, [])
    return (

        <MainLayout title='Posts'>
            <div>
                <h1>Posts </h1>
            </div>
            {/* <pre>{JSON.stringify(posts)}</pre>
             */}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}>
                            <a>{post.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

// Posts.getInitialProps = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const posts = await response.json()
//     return {
//         posts
//     }
// }

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await response.json()
    return {
         props: { posts } 
}
}