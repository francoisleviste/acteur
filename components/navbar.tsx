import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/photo">
                                <a className="nav-link active" aria-current="page" href="#">| Mes photos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cinema">
                                <a className="nav-link active" aria-current="page" href="#">| Cinéma</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/theatre">
                                <a className="nav-link active" aria-current="page" href="#">| Théâtre</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/figuration">
                                <a className="nav-link active" aria-current="page" href="#">| Figuration</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experiencesartistiques">
                                <a className="nav-link active" aria-current="page" href="#">| Expériences artistiques</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/bio">
                                <a className="nav-link active" aria-current="page" href="#">| Ma biographie</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

