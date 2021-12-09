import Layout from '../components/layout'
import Index from '../components'


export default function Home() {
  const props: any = {
    titre: "François Leviste",
    children: <Index></Index>
  }
  return (
    <Layout page={props.titre}>
      {props.children}
    </Layout>
  )
}