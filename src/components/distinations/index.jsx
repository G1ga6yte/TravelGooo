import React from "react";
import "./distinations.scss";
import DistinationsData from "./distinationsData";
import DistinationCountry from "./distinationCountry";
import {images} from "../../assets/images/imagesData";
import Map from "../../assets/images/world_map.png"
import {svgs} from "../../assets/svg/svgData";

function Distinations (){
    return (
        <div className="distination-block G-container">
            <h2 className="G-section-header">Our Popular Distinations</h2>
            <div className="distination-inside-block G-flex G-flex-between">
                <div className="map-block">
                    <div className="map-img">
                        <img className="map-image" src={svgs.worldmap} alt=""/>
                        <div className="map-point map-point-1"><div className="map-point-blue map-point-1-blue"></div></div>
                        <div className="map-point map-point-2"><div className="map-point-blue map-point-2-blue"></div></div>
                        <div className="map-point map-point-3"><div className="map-point-blue map-point-3-blue"></div></div>
                    </div>
                </div>

                <div className="countries-block G-flex G-flex-column">
                    {DistinationsData.map((el)=>{
                        return <DistinationCountry key={el.id} img={el.img} country={el.country} text={el.text}/>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Distinations