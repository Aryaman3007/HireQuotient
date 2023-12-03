import React, { useEffect, useState } from 'react';
import { Link, Events, scrollSpy, animateScroll as scroll } from 'react-scroll';
import "./navbar.css"

const Navbar = () => {

    useEffect(() => {

        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <div className="navbar-left-img">
                        <img className="navbar-logo" src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" />
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="navbar-heading">
                        <div className="navbar-items">
                            <Link to="feature-1" activeClass="active" smooth={true} spy={true} offset={0} duration={700} className="navbar-text">
                                Features
                            </Link>
                        </div>
                        <div className="navbar-items">
                            <Link to='FAQ' activeClass="active" smooth={true} spy={true} offset={50} duration={900} className="navbar-text">
                                FAQ
                            </Link>
                        </div>
                        <div className="navbar-items">
                            <Link to='pricing' activeClass="active" smooth={true} spy={true} offset={250} duration={900} className="navbar-text">
                                Pricing
                            </Link>
                        </div>
                        <div className="navbar-items">
                            <Link className="navbar-text">
                                Testimonials
                            </Link>
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