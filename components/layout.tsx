import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, page }: any) {

    return (
        <>
            <Head>
                <title>{page}</title>
            </Head>
            <div className="container colortitle">
                <br />
                <h1 className="signature text-center">
                    François Leviste</h1>
                <style jsx>{`
                .signature {
                    font-family: 'Calligraffitti', cursive;
                    color: #dba400
                }
                `}</style>
            </div>
            <div className="container">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </div>
        </>
    )
}