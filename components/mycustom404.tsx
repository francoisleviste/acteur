import Image from "next/dist/client/image"

export default function Mycustom404() {
    return (<>
        <br />
        <style jsx>{`
                .card {
                    width: 30rem;
                }
                `}</style>
        <div className="card mx-auto d-block">
            <Image
                src="/img/404.png"
                alt="/img/404.png"
                className="card-img-top"
                width="600"
                height="600"
            />

            <div className="card-body">
                <h5 className="text-center card-title">404 - Not found</h5>
            </div>
        </div>
        <br />
        <br />
    </>)
}
