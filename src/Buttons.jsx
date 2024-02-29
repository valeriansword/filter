import React from "react";
import Data from "./Data";
function Buttons(props){
    return(
    <div className=" row d-flex justify-content-center">
        
            <div className="dropdown mb-2">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Filter
            </a>
            <ul className="dropdown-menu">
            {props.menuItems.map((val)=>(
               <li><a className="dropdown-item" href="#" onClick={()=>{props.filterItems(val)}}>{val}</a></li>
             ))
        }
        <li><a className="dropdown-item" href="#"  onClick={()=>{props.setItem(Data)}}>All</a></li>
        </ul></div>
       

    </div>)
}
export default Buttons;



  
    
  
