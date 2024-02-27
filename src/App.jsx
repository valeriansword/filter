import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Data from "./Data";
import Buttons from "./Buttons";
function App(){
  const [item,setItem]=useState(Data);
  const menuItems=[...new Set(Data.map((val)=>val.category))];
  const filterItems=(cat)=>{
    const newItems=Data.filter((newval)=>newval.category===cat)
    setItem(newItems);
  }
    return(
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center col-12 fw-bold mt-3 mb-5">Foot Wear</h1>
          <Buttons 
          menuItems={menuItems}
          filterItems={filterItems}
          setItem={setItem}
          />
          <Card item={item}/>
        </div>
        
      </div>
    )
}
export default App;
