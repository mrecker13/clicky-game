import React from "react";
import "./Cards.css";

const Card = props => (
    <div className="card" onClick={() => props.selectCard(props.id)}>
        <img alt={props.name} src={props.image} />
    </div>
);

export default Card;
