import React from "react";
import Data from "./Data";
function Buttons(props){
    return(
    <div className="d-flex justify-content-center">
        {
            props.menuItems.map((val)=>(
                <button className="btn btn-dark text-white fw-bold p-1 mb-4 mx-5"
                onClick={()=>{props.filterItems(val)}}>
                    {val}
                </button>
            ))
        }
       <button className="btn btn-dark text-white fw-bold p-1 mb-4 px-2 mx-5"
       onClick={()=>{props.setItem(Data)}}>
                    All
        </button>

    </div>)
}
export default Buttons;