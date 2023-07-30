import React, {useState} from "react";
import "./header.scss";
import {svgs} from "../../assets/svg/svgData";



function Header (){

    const [menu,setMenu] = useState(true)
    return(
        <div className="header-block G-background-cover">
            <div className="header-inside-block">
                <div className={ menu ? 'minisize-phone-menu active' : "minisize-phone-menu disabled"}>
                    <div className="close-button"
                         onClick={() => setMenu(false)}
                    >
                        <span className="btn-span button-span1"></span>
                        <span className="btn-span button-span2"></span>
                    </div>
                    <a href="" className="nav-buttons-link">Home</a>
                    <a href="" className="nav-buttons-link">About Us</a>
                    <a href="" className="nav-buttons-link">Packages</a>
                </div>
                <div className="navigation-block G-container G-flex G-flex-between">
                    <div className="travel-goo G-flex-column">
                        <span className="text-travel travel-goo-span">Travel</span>
                        <span className="text-goo travel-goo-span">Goo</span>
                    </div>

                    <div className="navigation-buttons G-flex G-flex-between">
                        <a href="" className="nav-buttons-link">Home</a>
                        <a href="" className="nav-buttons-link">About Us</a>
                        <a href="" className="nav-buttons-link">Packages</a>
                    </div>

                    <div className="favorites-login-block">
                        <a href="" className="favorites-link">
                            <img src={svgs.favorites} alt=""/>
                        </a>
                        <a href="" className="log-in">
                            <img src={svgs.logIn} alt=""/>
                        </a>
                        <div className="nav-menu-button" onClick={()=> {
                            setMenu(!menu)
                        }}>
                            <span className="menu-line"></span>
                            <span className="menu-line menu-line2"></span>
                            <span className="menu-line"></span>
                        </div>
                    </div>
                </div>
                <div className="header-content G-container">
                    <h1 className="header-h1">Your Imagination Is Your Only Limit</h1>
                    <p className="header-paragraph">We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority</p>
                    <button className="header-button G-button">Discover more</button>
                </div>
            </div>
        </div>
    )
}

export default Header