import React, { Component, Fragment } from "react";
import Noticia from "./Noticia";

class ClassComponent extends Component {
    render() {

        /* const titulo = "Mi class component" */

        const {titulo} = this.props
        return(
/*             <>
                <h1>{titulo}</h1>
                <Noticia></Noticia>
            </> */

            <Fragment>
                <h1 className="titulo-verde"> {titulo} </h1>
            </Fragment>

            //Fragment es el equivalente a
            // <></>
        )
    }
}

export default ClassComponent