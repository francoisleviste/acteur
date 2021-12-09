import Layout from "../components/layout"
import Mabio from "../components/mabio"

export default function Bio() {
    const props: any = {
        titre: "Cinéma",
        children: <Mabio></Mabio>
    }
    return (
        <Layout page={props.titre}>
            {props.children}
        </Layout>
    )
}