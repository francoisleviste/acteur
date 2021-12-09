export default function MesFigurations() {
    const contains = [
        { annee: "2021", titre: "Fidelio, de Beethoven", realisateur: "Paul-Emile Fourny", lieu: "Metz Métropole" },
        { annee: "2021", titre: "Roméo Et Juliette, de Prokofiev", realisateur: "Conception, dramaturgie, arrangements musicaux et chorégraphie de Valentina Turcu", lieu: "Metz Métropole" },
        { annee: "2020", titre: "La Traviata, de Verdi", realisateur: "Paul-Émile Fourny", lieu: "Metz Métropole" },
        { annee: "2019", titre: "Carmen, de Bizet", realisateur: "Paul-Émile Fourny", lieu: "Metz Métropole" },
        { annee: "2018", titre: "Le Barbier de Séville, de Rossini", realisateur: "Adriano Sinivia Chorégies d'Orange", lieu: "Opéra de Toulon" },
        { annee: "2018", titre: "Mefistofele, de Boito", realisateur: "Jean-Louis Grinda", lieu: "Orange" },
        { annee: "2017", titre: "La Cenerentola, de Rossini", realisateur: "Sandrine Anglade", lieu: "Limoges" },
        { annee: "2017", titre: "Amélia va au bal, de Menotti", realisateur: "Sylvie Laligne", lieu: "Metz Métropole" },
        { annee: "2016", titre: "Benjamin, dernière Nuit, de Tabachnik", realisateur: "John Fulljame", lieu: "Lyon" },
        { annee: "2015", titre: "Le Turc en Italie, de Rossini", realisateur: "Federico Bertolani", lieu: "Metz Métropole" },
    ]
    return (<>
        <hr />
        <h3 className="text-center"><span className="material-icons">emoji_emotions</span> Mes figurations <span className="material-icons">emoji_emotions</span></h3>
        <hr />
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Années</th>
                    <th scope="col"><span className="text-uppercase">œ</span>uvres</th>
                    <th scope="col">Mise en scène</th>
                    <th scope="col">Opéra-Théâtre</th>
                </tr>
            </thead>
            <tbody>
                {contains.map(({ annee, titre, realisateur, lieu }) => {
                    return (<>
                        <tr>
                            <td>{annee}</td>
                            <td><strong>{titre}</strong></td>
                            <td>{realisateur}</td>
                            <td className="fst-italic">{lieu}</td>
                        </tr>
                    </>)
                })}
                <br />
                <br />
            </tbody>
        </table>
    </>)
}