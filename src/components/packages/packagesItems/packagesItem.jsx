import React from "react";
import {images} from "../../../assets/images/imagesData";
import {svgs} from "../../../assets/svg/svgData";

function Item(props){
    return(
        <div className="packages-item G-flex G-flex-column">
            <img className="item-img" src={props.img} width="100%" alt=""/>
            <div className="item-text-block G-flex G-flex-column">
                <div className="length-price-block G-flex G-flex-between">
                    <span className="length-span">{props.length}</span>
                    <span className="price-span">{props.price}</span>
                </div>
                <p className="item-description">{props.description}</p>
                <div className="location-more-block G-flex G-flex-between">
                    <div className="location-block G-flex">
                        <img src={svgs.location} width="20px" alt=""/>
                        <h4 className="country-name">{props.country}</h4>
                    </div>
                    <a href="" className="know-more-link">Know More</a>
                </div>
            </div>
        </div>
    )
}

export default Item