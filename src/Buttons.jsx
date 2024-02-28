import React from "react";
import Data from "./Data";
function Buttons(props){
    return(
    <div className=" row d-flex justify-content-center">
        {
            props.menuItems.map((val)=>(
                <button className="col-md-4 col-sm-3 btn btn-dark text-white fw-bold p-1 mb-4 mx-5"
                onClick={()=>{props.filterItems(val)}}>
                    {val}
                </button>
            ))
        }
       <button className="col-md-4 col-sm-3 btn btn-dark text-white fw-bold p-1 mb-4 px-2 mx-5"
       onClick={()=>{props.setItem(Data)}}>
                    All
        </button>

    </div>)
}
export default Buttons;
