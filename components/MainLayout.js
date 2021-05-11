import Link from "next/link";
import Head from 'next/head'

export default function MainLayout({ children, title = 'Next App' }) {
    return (
        <div>
            <Head>
                <title>{title} | NextJs</title>
            </Head>
            <nav><Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/posts'><a>Posts</a></Link></nav>
            <main>{children}</main>
            <style jsx>{`
            nav {
                display:flex;
                justify-content:space-around;
                background:yellow;
                height:60px;
            }
            nav a {
                text-decoration: none
            }
            `}</style>
        </div>

    )
}