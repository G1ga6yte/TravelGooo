import React from "react";
import "./service.scss";
import ServiceData from "./serviceData";
import ServiceItem from "./serviceItem";


function Service (){
    return(
        <div className="service-block">
            <h2 className="our-service-h2 G-section-header">Our Service</h2>
            <div className="service-items-list G-container G-flex G-flex-between">
                {ServiceData.map((el)=>{
                    return  <ServiceItem  icon={el.icon} name={el.name} about={el.about} key={el.id}/>
                })}
            </div>
        </div>
    )
}

export default Service