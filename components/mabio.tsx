import Image from 'next/image'

export default function Mabio() {
    const contains = [
        { nom: "Stéphanie Bainville", realisation: "danseuse, chorégraphe et metteur en scène..." },
        { nom: "Axel de Boserey", realisation: "Daniil Harms." },
        { nom: "Adel Akim", realisation: "Falk Richter." },
        { nom: "Guy Freix", realisation: "la comedia del arte." },
        { nom: "Patrice Thibault", realisation: "le jeu burlesque." },
        { nom: "Raphaël Glucksman", realisation: "" },
        { nom: "Jean-François Auguste", realisation: "La tragédie du Vengeur de C. Tourneur." },
        { nom: "Michel Serda", realisation: "Ma Solange comment t’écrire mon désastre, Alex Roux de N. Renaude." },
    ]
    return (
        <>
            <hr />
            <h3 className="text-center"><span className="material-icons">auto_stories</span> Ma biographie <span className="material-icons">auto_stories</span></h3>
            <hr />
            <style jsx>{`
                .background {
                    background-image: url("/img/olga-thelavart.png");
                }
                .signature {
                    font-family: "Calligraffitti", cursive;
                    color: #dba400
                }
                .color {
                    color: #dba400
                }
                `}</style>
            <div className="background container">
                <div className="row">
                    <div className="col-3 bg-dark text-white">
                        <br />
                        <Image
                            src="/img/francois.png"
                            alt="/img/francois.png"
                            className="rounded-circle"
                            width="300"
                            height="300"
                        />
                        <br />
                        {contains.map(({ nom, realisation }) => {
                            return (<>
                                <p className="text-start fs-6 fw-lighter color">`&ldquo;`<span className="fw-bold">{nom}</span>{realisation != "" ? <span className="fst-italic"> - {realisation}</span> : ""}`&rdquo;` </p>
                            </>)
                        })}
                    </div>
                    <div className="col-9">
                        <br />

                        <p className="text-break">J’ai débuté le théâtre à l’âge de 17 ans dans des clubs scolaires. </p>

                        <p className="text-break">En 2005, j’intègre l’École de théâtre l’Éponyme. Durant 2 ans je suis une formation pluridisciplinaire (interprétation, chant, danse, clown, acting in english ect.).</p>

                        <p className="text-break">En parallèle j’ai intégré en 2006 la compagnie La Ruche dirigée par Mme Stéphanie Bainville, danseuse, chorégraphe et metteur en scène.. Elle m’a formé pendant plus d’un an à la danse contemporaine et j’ai participé à deux créations de la compagnie: une jeune public autour du conte Rumpelstichen, et à la pièce «l’heure où nous ne savions rien de l’autre» de Peter Handke.</p>

                        <p className="text-break">Puis j’ai approfondi mon enseignement, de 2007 à 2009, au conservatoire à rayonnement départemental du Val Maubuée à Noisiel en banlieue parisienne. Je suis rentré en Cycle d’Enseignement Professionnel initial de Théâtre (CEPIT: ancien COP).</p>

                        <p className="text-break">Pendant ces deux années, j’ai fait une spécialisation en jeu masqué, en jeu burlesque et en clown. Dans le cadre de ce cursus nous avons eu l’opportunité de travailler lors de stage avec différents artistes renommés: Mr Axel de Boserey sur Daniil Harms, Mr Adel Akim sur Falk Richter, Mr Guy Freix sur la comedia del arte, Mr Patrice Thibault sur le jeu burlesque, Mr Raphaël Glucksman, Mr Jean-François Auguste pour La tragédie du Vengeur de C. Tourneur, Mr Michel Serda sur Ma Solange comment t’écrire mon désastre, Alex Roux de N. Renaude.</p>

                        <p className="text-break">A la fin de mon cursus au conservatoire, j’ai créé pour l’une des épreuves de l’examen de sortie: Un Mort tiré de Dramuscule de T. Bernard, en jeu masqué et suite à cela j’ai obtenu mon diplôme d’étude théâtral. </p>

                        <p className="text-break">De 2010 à 2012, j’ai intégré le GEIQ compagnonnage théâtre à Lyon dirigé par la Compagnie les Trois Huit. Plusieurs stages avec les compagnies associées au dispositif du Groupement d’Employeur pour l’Insertion et la Qualification nous ont été proposés.</p>

                        <p className="text-break">Puis j’ai peu travaillé comme comédien sur de nombreuses formes artistiques comme par exemple la performance, ou encore sur des créations des compagnies associées au dispositif comme la Compagnie IN Time avec Pacamabo de Wajdi Mouwad, la Compagnie des Trois Huits avec Electre se réveille de Ximena Escalante, ou encore le Théâtre du Verseau avec Neuf petites filles de Sandrine Roche</p>

                        <p className="text-break">En clôture de cette formation, nous avions l’opportunité de présenter une forme courte. Pour l’occasion, j’ai proposé un projet performatif autour du clown avec un montage de différents textes, de l’écriture ou encore de la bande dessinée et du chant: Xp ou expérience à titre provisoire.</p>

                        <p className="text-break">Enfin en octobre 2012, j’intègre la formation professionnelle de comédien de la compagnie de l’Œil du silence dirigée par Mme Anne Sicco. </p>

                        <p className="text-break">Depuis 2013, je travaille avec différentes compagnies franciliennes sur des créations diverses comme Psychiatrie/Déconniatrie avec la compagnie Rêve de moi j’Rêve de toi en 2014, Phèdre et Contes, Voyage aux quatres coins du monde en 2015 avec la compagnie Khadra, Si d’aventure tu partais mise en scène par Nichola Soudière depuis 2017, ou encore La coloc du brancardier, comédie dramatique avec la compagnie Pompe et Macadam.</p>

                        <p className="text-break">Depuis 2019, je travaille avec l’artiste chorégraphe et metteure-en-scène Diane Broman sur un laboratoire de recherche artistique et j’ai rejoins l’équipe de la compagnie Les Libres Penseurs basée en Normandie pour leur nouvelle création: Magda.</p>

                        <p className="text-break">J’ai continué mes explorations artistiques grâce à différents stages, avec notamment Patrice Bigel, metteur en scène de la compagnie La Rumeur, avec Pascal Ben, comédienne et chanteuse de la compagnie La Voix est Libre. Mais aussi encore en suivant des cours de chants lyriques avec la professeure et artiste lyrique Françoise Detchenik ou encore la photographie.</p>
                        <p className="signature text-end fs-1">François Leviste</p>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>)
}