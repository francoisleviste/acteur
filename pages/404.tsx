import Layout from "../components/layout"
import Mycustom404 from "../components/mycustom404"

export default function Custom404() {
    const props: any = {
        titre: "404",
        children: <Mycustom404></Mycustom404>
    }
    return (<>
        <Layout page={props.titre}>
            {props.children}
        </Layout>
    </>)
}