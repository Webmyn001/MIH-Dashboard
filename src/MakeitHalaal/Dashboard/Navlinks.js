import React from "react";
import {Link} from "react-router-dom";


 function Navlinks (props) {

    const Links = [
        {name: "Home Page",
         link : "/"
        },
        {name: "Updates",
         link : "/update"
       },
        
       
       
    ]
    return(
        <>
       
            {
                Links.map((link,i) => (
                     
                     <div key={i}>
                          <li key={i} className={`"font-semibold text-xl tracking-wide hover:text-gray-200
                           ${props.alternative ? "hover:text-[#3f4447]" :"hover:text-gray-200" }`} onClick={props.handleClick} >
                       <Link to={link.link} onClick={props.handleClick} >{link.name} </Link>
                          </li>
                    </div>

                    
                ))
            }
             
        </> 
    )
 }

  export default Navlinks