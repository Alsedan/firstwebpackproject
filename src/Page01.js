import React from "react"
import { HeaderPage01, Menu } from "./components/HeaderPage01";

export default function Page01() {
    return( 
        <div className="Header">
            <Menu name="Produtos"/>
            <Menu name="Soluções"/>
        </div>
    
    );
}