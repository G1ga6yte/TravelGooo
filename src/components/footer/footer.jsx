import React from "react";
import "./footer.scss";
import {images} from "../../assets/images/imagesData";
import {svgs} from "../../assets/svg/svgData";

function Footer (){
    return (
        <footer className="footer-block">
            <div className="links-container G-flex G-flex-around">

                <div className="logo-block">
                    <div className="travel-goo G-flex-column">
                        <span className="text-travel travel-goo-span">Travel</span>
                        <span className="text-goo travel-goo-span">Goo</span>
                    </div>
                    <p className="logo-block-prg">Book your trip in minute, get full Control for much longer.</p>
                </div>

                <div className="ul-links-block G-flex">
                    <ul className="section-block">
                        <h4 className="section-h4">Company</h4>
                        <li className="section-link">About</li>
                        <li className="section-link">Careers</li>
                        <li className="section-link">Mobile</li>
                    </ul>
                    <ul className="section-block">
                        <h4 className="section-h4">Contact</h4>
                        <li className="section-link">Help/FAQ</li>
                        <li className="section-link">Press</li>
                        <li className="section-link">Affilates</li>
                    </ul>
                    <ul className="section-block">
                        <h4 className="section-h4">More</h4>
                        <li className="section-link">Airlinefees</li>
                        <li className="section-link">Airline</li>
                        <li className="section-link">Low fare tips</li>
                    </ul>
                </div>

                <div className="contacts-web -block">
                    <div className="facebook-instagram-logos">
                        <a href=""><img src={svgs.facebookIcon} width="57px" alt=""/></a>
                        <a className="instagram-link-block" href=""><img src={images.instagramBck} width="63px" alt=""/>
                            <img src={svgs.instagramIcon} width="22px" className="instagram"  alt=""/></a>
                    </div>
                    <p className="discover-our-app">Discover our app</p>
                    <div className="stores-links G-flex">
                        <div className="google-play-block G-flex G-flex-around">
                            <img src={svgs.googlePlayLogo} width="28px" className="google-play-img" alt=""/>
                            <img src={svgs.googlePlayText} width="75px" className="google-play-img" alt=""/>
                        </div>
                        <img src={svgs.appStore} width="140px" alt=""/>
                    </div>
                </div>

            </div>
            <span className="rights-text">All rights <a className="right-link" href="reserved@travelgoo.com">reserved@travelgoo.com</a></span>
        </footer>
    )
}

export default Footer