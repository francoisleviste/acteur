import MesExperiencesArtistiques from "../components/mesexperiencesartistiques"
import Layout from "../components/layout"

export default function ExperiencesArtistiques() {
    const props: any = {
        titre: "Autres expériences artistiques",
        children: <MesExperiencesArtistiques></MesExperiencesArtistiques>
    }
    return (<>
        <Layout page={props.titre}>
            {props.children}
        </Layout>
    </>)
}