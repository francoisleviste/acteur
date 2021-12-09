import Layout from "../components/layout"
import MonTheatre from "../components/montheatre"

export default function Theatre() {
    const props: any = {
        titre: "Théatre",
        children: <MonTheatre></MonTheatre>
    }
    return (
        <Layout page={props.titre}>
            {props.children}
        </Layout>
    )
}