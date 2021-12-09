export default function MesExperiencesArtistiques() {
    const contains = [
        { annee: "2021", titre: "Laboratoire de recherche artistique danse-théâtre", realisateur: "Diane Broman", Cie: "Speak With the Dog" },
        { annee: "2019-2018", titre: "Atelier Chorégraphique", realisateur: "Michaela Meschke", Cie: "Moveo" },
        { annee: "2014", titre: "Laboratoire danse-théâtre", realisateur: "Patrice Bige", Cie: "La Rumeur" },
    ]
    return (<>
        <hr />
        <h3 className="text-center"><span className="material-icons">emoji_people</span> Mes experiences artistiques <span className="material-icons">emoji_people</span></h3>
        <hr />
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Années</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Direction</th>
                    <th scope="col">Compagnie</th>
                </tr>
            </thead>
            <tbody>
                {contains.map(({ annee, titre, realisateur, Cie }) => {
                    return (<>
                        <tr>
                            <td>{annee}</td>
                            <td className="fw-bold">{titre}</td>
                            <td>{realisateur}</td>
                            <td className="fst-italic">{Cie}</td>
                        </tr>
                    </>)
                })}
                <br />
                <br />
            </tbody>
        </table>
    </>)
}