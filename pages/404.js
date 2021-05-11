import Link from "next/link";

export default function ErrorPage() {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Please <Link href={'/'}><a>Go Back</a> to safety</Link></p>
        </div>
    )
}