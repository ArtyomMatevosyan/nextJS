import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Index() {
    return (
        <div>
            <MainLayout title='Home'>
               
                <h1>
                    Home page
            </h1>
                <p>
                    <Link href={'/about'}>About</Link>
                </p>
                <p><Link href="/posts">Posts</Link></p>
            </MainLayout>
        </div>
    )
}