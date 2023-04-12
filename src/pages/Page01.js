import React from "react";
import { Headerstyle } from "../components/HeaderPg1";
import Global from "../theme/GlobalStyle";
import { Bloco01 } from "../components/bloco01";

export default function Page01() {
        return (
          <React.Fragment>
            <Bloco01/>
            <React.Fragment>
            <Headerstyle/>
            <Global/>
            </React.Fragment>
          </React.Fragment>
           
    );
  }