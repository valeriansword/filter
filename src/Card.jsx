import React from "react";
import "./Card.css";
function Card(props){
    return(
        <div className="container">
            <div className="row justify-content-center">
                {props.item.map((val)=>(
                        <div key={val.id} className="col-md-4 col-sm-6 card border-0">
                            <div className="card-img-top text-center ">
                                <img id="cardImg" src={val.img} className="img-fluid w-75"/>
                            </div>
                            <div className="card-body">
                                <div className="card-tile fw-bold fs-4">
                                    {val.title}--Rs.{val.price}
                                </div>
                                <div className="card-text">{val.desc}</div>
                            </div>
                            

                        </div>
                ))}

            </div>
            
        </div>
    )
}
export default Card;