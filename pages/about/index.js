import Link from "next/link"
import Router from 'next/router'
import Head from 'next/head'
import MainLayout from "../../components/MainLayout"
export default function About({title}) {
    const linkClickHandle = () => {
        Router.push('/')
    }
    return (
        <MainLayout title='About'>
            <div>
                <h1>
                    About Page {title}
                </h1>
                <button onClick={linkClickHandle}>Go Back Home</button>
                <button onClick={() => { Router.push('/posts') }}>Go To Posts</button>

            </div>
        </MainLayout>
    )
}


About.getInitialProps = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return {
            title: data.title
        }
}