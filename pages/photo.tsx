import type { NextPage } from 'next'
import MesPhotos from '../components/mesphotos'
import Layout from '../components/layout'


export default function Photo() {
    const props: any = {
        titre: "Mes photos",
        children: <MesPhotos></MesPhotos>
    }
    console.log(props.children);
    return (
        <Layout page={props.titre}>
            {props.children}
        </Layout >
    )
}