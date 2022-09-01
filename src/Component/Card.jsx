import React from "react";
import { Link } from "react-router-dom";
import '../style/Card.css'


export default function Card({ id, name, image, temperament, weight}){
    return(
    <div className="padre">
        <div className="unico">
            <div className="card">
            <Link  to={`/home/${id}`}>
                <h1 className="name-dog" >{name}</h1>
            </Link>
                <img className="incledible"  src={image} alt={name}  />
                
                <p className="description-temp">{temperament}</p>
                <p className="description-dog">{weight} Kgs</p>
            </div>

        </div> 
        </div>   
        )
}