import Link from 'next/dist/client/link'
import Image from 'next/image'


export default function Index() {

    const diplomes = [
        "Diplôme d’Études Théâtrales du Conservatoire à Rayonnement Départemental du Val Maubuée",
        "Diplôme d’accès aux études universitaires A",
        "Permis B"
    ]

    const parcours = [
        "École de Théâtre l’Eponyme - Paris", "Crd du Val Maub - Noisiel",
        "Compagnonnage GEIQ Théâtre - Lyon",
        "Formation Professionnelle d’Acteu - Cie L'Oeil du Silence - Anglars-Juilla"
    ]

    const artistiques = [
        "Laboratoire de recherche artistique danse-théâtre : Dirigé par Diane Broman Cie Speak With the Dog",
        "Atelier Chorégraphique: Dirigé par Michaela Meschke Cie Moveo",
        "Laboratoire danse-théâtre: Dirigé par Patrice Bigel Cie La Rumeu"
    ]
    return (
        <>
            <br />
            <style jsx>{`
                .credit {
                    font-size: x-small;
                }
                `}</style>
            <hr />
            <h3 className="card-title text-center">
                <span className="material-icons">theater_comedy</span> Comédie & Baryton <span className="material-icons">theater_comedy</span>
            </h3>
            <h5 className="card-title text-center">Née en 1984 -  Taille : 1m87</h5>
            <hr />
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="p-2 col-md-3">
                        <br />
                        <Image
                            src="/img/index.png"
                            alt="Picture of the author"
                            className="rounded mx-auto d-block"
                            width={400}
                            height={550} />
                        <p className="fst-italic text-center credit">Crédit Photo
                            <Link href="http://juliereggiani.fr/">
                                <a target="_blank"> Julie Reggiani</a>
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <div className="text-start fs-5">
                                <Link href="mailto:contact.francois.leviste@gmail.com?subject=Notre affaire&body=Bonjour">
                                    <a>Mon E-mail</a>
                                </Link>
                                <span> | </span>
                                <Link href="/pdf/francois_leviste_cv.pdf">
                                    <a target="_blank">Mon cv</a>
                                </Link>
                                <span> | </span>
                                <Link href="/pdf/francois_leviste_bio.pdf">
                                    <a target="_blank">Ma bio</a>
                                </Link>
                            </div>
                            <br />
                            <hr />
                            <h5 className="card-title">Mes Diplômes</h5>
                            <ul>
                                {diplomes.map(element => {
                                    return (<>
                                        <li>{element}</li>
                                    </>)
                                })
                                }</ul>
                            <hr />
                            <h5 className="card-title">Mon parcours</h5>
                            <ul>
                                {parcours.map(element => {
                                    return (<>
                                        <li>{element}</li>
                                    </>)
                                })
                                }</ul>
                            <hr />
                            <h5 className="card-title">Autres expériences artistiques</h5>
                            <ul>
                                {artistiques.map(element => {
                                    return (<>
                                        <li>{element}</li>
                                    </>)
                                })
                                }</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}