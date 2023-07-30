import React from "react";
import "./ratings.scss"
import RatingsItem from "./ratingsItem.jsx";
import RatingsData from "./ratingsData.js";

function Ratings (){
    return (
        <div className="ratings-block G-container">
            <h2 className="ratings-header G-section-header">We always try to give you the best service</h2>
            <p className="ratings-prg">We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority.</p>
            <div className="ratings-list G-flex G-flex-between G-flex-wrap">
                {RatingsData.map((el)=>{
                      return  <RatingsItem key={el.id} icon={el.icon} count={el.count} name={el.name} />
                })}
            </div>
        </div>
    )
}
export default Ratings