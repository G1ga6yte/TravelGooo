import React from "react";
import {images} from "../../assets/images/imagesData";
import "./about-us.scss"
import {svgs} from "../../assets/svg/svgData";


function AboutUs (){
    return(
        <div className="about-us-block G-container">
            <h2 className="G-section-header">What People Say About Us</h2>
            <div className="img-text-block G-flex">
                <img src={images.aboutus1} className="about-us-img-next" height="400" alt=""/>
                <img src={images.aboutUsBck} className="about-us-img"  alt=""/>
                <img src={images.aboutus1} className="about-us-img-next" height="400" alt=""/>
            </div>
            <div className="text-people-center">
                <div className="text-block">
                    <p className="about-us-prg">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                    <h4 className="about-us-name">-Jeo Stanlee</h4>
                </div>
                <img className="people-img" src={images.faceImage} width="150px" height="150px" alt=""/>
            </div>

            <div className="subscribe-block">
                <h3 className="subscribe-header">Subscribe to get information, latest news and other interesting offers about Cobham</h3>
                <div className="input-button-block G-flex G-flex-around">
                    <div className="input-icon-block G-flex">
                        <img src={svgs.email} width="20px" alt=""/>
                        <input type="text" className="email-input" placeholder="Your email"/>
                    </div>
                    <button className="subscribe-button G-button">Subscribe</button>
                </div>
                <img src={svgs.subscribeSend} width="70px" className="subscribe-send-icon" alt=""/>
            </div>
        </div>
    )
}

export default AboutUs