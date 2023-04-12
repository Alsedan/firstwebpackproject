import React from "react";
import styled from "styled-components";
import fundobloco01 from "../assets/fundobloco01.jpg"

const Bloco01style = styled.div`
margin: none;
display: flex;
width: 100%;
height: 700px;
`

const Imagebloco01 = styled.img`
width: 100%;
height: 700px;
margin: none;
background-size: cover;
background-image: url(${fundobloco01});
`

export function Bloco01(){
    return(
        <Bloco01style>
           <Imagebloco01></Imagebloco01>     
        </Bloco01style>
    );
}