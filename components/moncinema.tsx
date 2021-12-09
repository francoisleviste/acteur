import Image from "next/dist/client/image"
import Link from "next/link"

export default function MonCinema() {
    const props: any = {
        width: 150,
        height: 180
    }

    const contains = [
        { img: "/img/heroes_therapy.png", title: "2021 - Heroes Therapy", realisateur: "Chris Moreira.", role: "du Psy" },
        { img: "/img/rendez-vous.png", title: "2019 - Rendez-vous", realisateur: "Chris Moreira.", role: "de l’infirmier" },
        { img: "/img/marius.png", title: "2019 - Marius", realisateur: "Chris Moreira.", role: "de Marius" },
        { img: "/img/la_cource_a_l_heritage.png", title: "2018 - La Course à l’Héritage", realisateur: "Chris Moreira.", role: "de Franck" },
        { img: "/img/la_cible.png", title: "2017 - La Cible", realisateur: "Chris Moreira.", role: "de la cible" },
    ]

    return (<>
        <style jsx>{`
                .card mb-3{
                    max-width: 540px;
                }
                `}</style>
        <hr />
        <h3 className="text-center"><span className="material-icons">movie</span> Cinéma <span className="material-icons">movie</span></h3>
        <hr />
        <div className="row">
            {contains.map(({ img, title, realisateur, role }) => {
                return (<>
                    <div className="col-6">
                        <div className="p-1 card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image
                                        src={img}
                                        alt={img}
                                        className="rounded mx-auto d-block"
                                        width={props.width}
                                        height={props.height}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">Court-Métrage réalisé par
                                            <Link href="https://www.chrismoreira-films.com/biographie">
                                                <a target="_blank"> {realisateur}</a>
                                            </Link>
                                        </p>
                                        <p className="card-text"><small className="text-muted">Rôle {role}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            })}
        </div>

    </>
    )
}
