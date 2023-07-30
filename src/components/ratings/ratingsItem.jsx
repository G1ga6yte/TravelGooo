import React from "react";

function Item(props){
    return(
        <div className="ratings-item G-rating-item G-flex G-flex-column" key={props.id}>
            <img src={props.icon} alt="" width="42px"/>
            <span className="item-rate">{props.count}</span>
            <h3 className="ratings-item-h3">{props.name}</h3>
        </div>
    )
}

export default Item