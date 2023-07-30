import React from "react";
import {svgs} from "../../assets/svg/svgData";

function DistinationCountry (props){
    return(
        <div className="country-item G-flex G-flex-between">
            <img src={props.img} className="item-img" width="223px" alt=""/>
            <h3 className="country-item-h3">{props.country}</h3>
            <p className="country-item-text">{props.text}</p>
            <a href="" className="right-navigation"><img src={svgs.rightNavigation} width="30px" alt=""/></a>
        </div>
    )
}

export default DistinationCountry