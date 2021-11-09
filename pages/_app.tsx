import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Loader from "../components/Loader"

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const handleStart = (url) => {
          url !== router.pathname ? setLoading(true) : setLoading(false)
        };
        const handleComplete = (url) => setLoading(false)
    
        router.events.on("routeChangeStart", handleStart)
        router.events.on("routeChangeComplete", handleComplete)
        router.events.on("routeChangeError", handleComplete)
    }, [router])

    return (
        <>
            <Layout>
                <main className="p-6" >
                <Loader loading={loading} />  
                <Component {...pageProps} />
                </main>
            </Layout>
        </>
    )
    
}
