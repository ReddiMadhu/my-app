import React from "react";
function Card(props) {
    return <div className="card">
        <img className="card-image" src={props.image} alt=""></img>
        <h2>{props.Car_Type}</h2>
        <h3>{props.Model_name}</h3>
    </div>
}
export default Card;