import React from "react";
import "./navbar.css"

const Navbar = () =>{
    return (
        <>
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-left-img">
                    <img className="navbar-logo"src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"/>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-heading">
                    <div className="navbar-items">
                        <a href="" className="navbar-a">
                            <p className="navbar-text">Features</p>
                        </a>
                    </div>
                    <div className="navbar-items">
                        <a href="" className="navbar-a">
                            <p className="navbar-text">FAQ</p>
                        </a>
                    </div>
                    <div className="navbar-items">
                        <a href="" className="navbar-a">
                            <p className="navbar-text">Pricing</p>
                        </a>
                    </div>
                    <div className="navbar-items">
                        <a href="" className="navbar-a">
                            <p className="navbar-text">Testimonials</p>
                        </a>
                    </div>
                </div> 
                <div className="navbar-button">
                    Buy Template
                </div>              
            </div>
        </div>
        </>
    )
}

export default Navbar