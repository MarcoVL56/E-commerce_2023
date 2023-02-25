import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navegacion.css"


function Navegacion(){

     const [dropdown, setDropdown] = useState(false);
   
    

    return(
      <>
        <nav className="navegacion">

          <div className="menu-container">
            <div className="menu-trigger" onClick={ ()=>{ setDropdown(!dropdown
              ) } } >
              <span className="menu-item">Laptops</span>
            </div>
            <div className= {`dropdown-menu ${ dropdown ? 'active' :'inactive' }`}>

              <ul className="ul-items">
                <li className="li-item"><NavLink>Toshia</NavLink></li>
                <li className="li-item"><NavLink>Acer</NavLink></li>
                <li className="li-item"><NavLink>Asus</NavLink></li>
                
              </ul>

            </div>

          </div>


       
              
        </nav>
      </>
    )
    
}


export default Navegacion