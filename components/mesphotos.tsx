import Image from 'next/image'
import Link from 'next/link'

export default function MesPhotos({ children, page }: any) {
    const props: any = {
        width: 400,
        height: 500
    }

    const contains = [
        { img: "/img/Solenne_Hardy.png", credit: "Solenne Hardy", lien: "https://fr-fr.facebook.com/solene.hardy" },
        { img: "/img/Lilian_Barreteau.png", credit: "Lilian Barreteau", lien: "https://www.linkedin.com/in/lilian-barreteau-31a9b11a0/?originalSubdomain=fr" },
        { img: "/img/Julie_Reggiani.png", credit: "Julie Reggiani", lien: "http://juliereggiani.fr/" },
        { img: "/img/Solenne_Hardy_2.png", credit: "Solenne Hardy", lien: "https://fr-fr.facebook.com/solene.hardy" },
        { img: "/img/francois.png", credit: "NC", lien: "" },
    ]
    return (<>
        <hr />
        <h3 className="text-center"><span className="material-icons">photo_camera</span> Mes photos <span className="material-icons">photo_camera</span></h3>
        <hr />
        <div className="row row-cols-1 row-cols-md-5 g-3">
            {contains.map(({ img, credit, lien }) => {
                return (<>
                    <div className="col">
                        <div className="card">
                            <Link href={img}>
                                <a target="_blank">
                                    <Image
                                        src={img}
                                        alt={img}
                                        className="rounded mx-auto d-block"
                                        width={props.width}
                                        height={props.height}
                                    /></a>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">Crédit Photo
                                    {lien != "" ? <Link href={lien}><a target="_blank"> {credit}</a></Link> : <span> {credit}</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </>)
            })}
        </div>
        <br />
        <br />
    </>
    )
}