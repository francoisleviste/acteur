import Image from "next/dist/client/image"

export default function MonTheatre() {
    const props: any = {
        width: 150,
        height: 180
    }
    const contains = [
        { img: "/img/magda.png", title: "2021 - Magda", description: "Texte et Mise en scène de Samuel Delasalle.", Cie: "Cie Les Libres Penseurs", role: "Rôle de Heinz Linge" },
        { img: "/img/neuf_petites_filles.png", title: "2021, 2018, 2015 et 2011 Neuf petites filles", description: "Texte de Sandrine Roche Mise en scène de Philippe Labaune.", Cie: "Le Lieu-dit, collectif Artistique", role: "Rôle d’une des petites filles" },
        { img: "/img/si_d_aventure_tu_partais.png", title: "2019 et 2018 Si d’aventure tu partais", description: "Texte et mise en scène de Nichola Soudière", Cie: "", role: "Rôle de Didier" },
        { img: "/img/la_coloc_du brancardier.png", title: "2018 et 2017 La coloc’ du brancardier", description: "Texte de H. GuillemotMise en scène de Charlotte Pradeille", Cie: "Cie Pompe et Macadam", role: "Rôle de Bruno" },
        { img: "/img/et_si_on_dansait.png", title: "2017 Et si on dansait", description: "Création théâtre/danse de M. Nectoux", Cie: "Alrakis Production", role: "" },
        { img: "/img/phedre.png", title: "2015 Phèdre", description: "Texte de Jean Racine Mise en scène de Aura Coben", Cie: "Cie Kâdra", role: "Rôle de Théramène" },
        { img: "/img/voyage_aux_quatre_coins_du_monde.png", title: "2015 Contes, voyages aux 4 coins du monde", description: "Création jeune public de Jean Baptiste Forest", Cie: "Cie Kâdra", role: "Rôles de Revolin, du Capitaine, de Krug et du Cheik" },
        { img: "/img/psychiatrie_deconiatrie_2.png", title: "2014 Psychiatrie/Déconiatrie II", description: "Texte adapté de Serge Valetti, Mise en scène d'Alexandre Galiacy", Cie: "Cie Rêves de Moi, J'Rêve de Toi", role: "" },
        { img: "/img/senza_tempo.png", title: "2014 Senza Tempo", description: "Création et mise en scène de Patrice Bigel", Cie: "Cie la Rumeur", role: "" },
        { img: "/img/pacamambo.png", title: "2014 Pacamambo", description: "Texte de Wajdi Mouawad Mise en scène de Carine Pauchon", Cie: "Cie In Time", role: "Rôle du Psychiatre" },
    ]
    //pacamambo.png
    return (
        <>
            <hr />
            <h3 className="text-center"><span className="material-icons">theaters</span> Théâtre <span className="material-icons">theaters</span></h3>
            <hr />
            <div className="row">
                {contains.map(({ img, title, description, Cie, role }) => {
                    return (<>
                        <div className="col-6">
                            <div className="p-1 card mb-2">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image
                                            src={img}
                                            alt={img}
                                            className="rounded mx-auto d-block"
                                            width={props.width}
                                            height={props.height}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description}</p>
                                            {Cie != "" ? <p className="card-text">{Cie}</p> : " "}
                                            {role != "" ? <p className="card-text"><small className="text-muted">{role}</small></p> : " "}
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