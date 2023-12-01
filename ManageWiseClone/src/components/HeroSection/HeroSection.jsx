import React , {useEffect,useState} from "react";
import playButton from "../../images/play-button.svg"
import Hero1 from "../../images/Hero1.webp"
import "./heroSection.css"

const Body1 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateImageSize = () => {
        // Calculate the image size based on the scroll position
        const minSize = 1150; // Minimum image size
        const maxSize = 1250; // Maximum image size
        const scrollRange = 500; // Range of scroll for the effect
        const imageSize = minSize + (maxSize - minSize) * (scrollPosition / scrollRange);

        return Math.min(maxSize, Math.max(minSize, imageSize));
    };

    const spanStyle = {
        color: 'rgb(254,129,98)',
    };

    return (
        <>
            <div className="Hero-section">
                <div className="Hero-container">
                    <div className="Hero-wrapper">
                        <div className="Hero-welcome">
                            👋 <span className="Welcome-text">WELCOME TO MANAGE WISE!</span>
                        </div>
                        <div className="Hero-text-frame-1">
                            <p className="Hero-text-msg-1">
                                Empower your business with <span style={spanStyle}>Strategic</span> insights
                            </p>
                        </div>
                        <div className="Hero-text-frame-2">
                            <p className="Hero-text-msg-2">
                                Powerful management platform designed to streamline your business operations, boost productivity, and drive success
                            </p>
                        </div>
                        <div className="dual-button">
                            <button className="button-1">
                                Get Started
                            </button>
                            <button className="button-2">
                                Watch Demo
                                <img src={playButton} alt="My SVG Image"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Hero-img">
                    <img src={Hero1} alt="My SVG Image" style={{ width: calculateImageSize(), height: 'auto' }} />
                </div>
            </div>
        </>
    )
}

export default Body1