import MesFigurations from "../components/mesfigurations"
import Layout from "../components/layout"
export default function Figuration() {
    const props: any = {
        titre: "Mes figurations",
        children: <MesFigurations></MesFigurations>
    }
    return (<>
        <Layout page={props.titre}>
            {props.children}
        </Layout>
    </>)
}