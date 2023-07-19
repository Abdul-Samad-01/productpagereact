import React from "react";
import {Container} from "reactstrap";
import Homecard from "../Component/homecard";

export default function Home(params) {
    return(
        <>
        <Container>
        <div className="homepage">
        <img className="homeimg" src="img/homepng.png" alt=""/>
        <h1>Silent, smooth, and sustainable – our e-rickshaws will win you over!</h1>
        </div>
        <Homecard/>
        </Container>

        </>
    );
}