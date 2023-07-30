import React from "react";

function Item (props){
    return(
        <div className="service-item G-service-item" >
            <img src={props.icon} alt=""/>
            <h3 className="item-header">{props.name}</h3>
            <p className="item-about-text">{props.about}</p>
        </div>
    )
}

export default Item