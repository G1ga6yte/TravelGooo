import React from "react";

function Item (props){
    return(
        <div className="steps-item G-flex G-flex-between">
            <img src={props.logo} width="65px" alt=""/>
            <div className="item-text-block G-flex G-flex-column">
                <h4 className="item-name">{props.name}</h4>
                <p className="item-description">{props.description}</p>
            </div>
        </div>
    )
}
export default Item