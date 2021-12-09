import React from "react"
import MonCinema from "../components/moncinema"
import Layout from "../components/layout"

export default function Cinema() {
    const props: any = {
        titre: "Cinéma",
        children: <MonCinema></MonCinema>
    }
    return (
        <Layout page={props.titre}>
            {props.children}
        </Layout>
    )
}