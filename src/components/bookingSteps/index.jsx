import React from "react";
import "./bookingSteps.scss"
import Steps from "./steps";
import StepsData from "./steps/stepsData";
import {images} from "../../assets/images/imagesData";
import {svgs} from "../../assets/svg/svgData";

//ACCQ957965CWZLY

function BookingSteps (){
    return(
        <div className="booking-steps-block G-container">
            <h2 className="G-section-header">Book Your Next Trip in 3 Easy Steps</h2>
            <span className="booking-span">Easy and Fast</span>
            <div className="steps-block G-flex G-flex-around">
                <div className="steps-list G-flex G-flex-column">
                    {StepsData.map((el)=>{
                        return <Steps key={el.id}  logo={el.logo} name={el.name} description={el.description}/>
                    })}
                </div>

                <div className="trip-to-grace">
                    <img className="trip-to-greece-img" src={images.tripToGrace} width="320px" alt=""/>
                    <div className="trip-text-block">

                        <div className="data-rome-block G-flex G-flex-between">
                            <div className="data-icons-block G-flex G-flex-column">
                                <h4 className="trip-to-greece-h4">Trip To Greece</h4>
                                <span className="trip-data">14-29 June | by Robbin joseph</span>
                                <div className="icons-block G-flex G-flex-around">
                                    <img src={svgs.leafIcon} width="14px" alt=""/>
                                    <img src={svgs.mapIcon} width="14px" alt=""/>
                                    <img src={svgs.sendIcon} width="14px" alt=""/>
                                </div>
                            </div>

                            <div className="rome-block G-flex">
                                <img className="rome-img" src={images.tripToRom} height="50px" width="50px" alt=""/>
                                <div className="rome-text-block G-flex G-flex-column">
                                    <span className="ongoing-span">Ongoing</span>
                                    <h4 className="rome-h4">Trip to rome</h4>
                                    <span className="completed-percent"><span className="percent">40%</span>completed</span>
                                    <div className="completed-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="people-going-block G-flex G-flex-between">
                            <div className="icon-people">
                                <img src={svgs.building} width="16px" alt=""/>
                                <span className="people-going-span">24 people going</span>
                            </div>
                            <img src={svgs.hearth} width="20px" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookingSteps