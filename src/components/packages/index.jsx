import React from "react";
import "./packages.scss";
import ButtonsData from "./buttons/buttonsData.js";
import ButtonsItem from "./buttons/buttonsItem.jsx";
import PackagesData from "./packagesItems/packagesData";
import PackagesItem from "./packagesItems/packagesItem";

function Packages (){
    return(
        <div className="packages-block G-container">
            <h2 className="packages-header G-section-header">Best Packages For You</h2>
            <div className="buttons-list G-flex G-flex-between">
                {ButtonsData.map((el)=>{
                    return <ButtonsItem name={el.name} key={el.id} />
                })}
            </div>
            <div className="packages-list G-flex G-flex-between">
                {PackagesData.map((el)=>{
                    return <PackagesItem key={el.id} img={el.img} length={el.length} price={el.price} description={el.description} country={el.country}/>
                })}
            </div>
            <button className="discover-more-btn G-button">Discover More</button>
        </div>
    )
}

export default Packages
