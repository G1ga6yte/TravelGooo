import React from "react";

function Item (props){
    return (
        <button className="packages-button G-button">{props.name}</button>
    )
}

export default Item