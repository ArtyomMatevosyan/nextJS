import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
            />
            <Component {...pageProps} />
            <style jsx global>{`
            body {
                font-family: 'Roboto', sans-serif;
            }
            `}</style>
        </div>

    )
}


export default MyApp