import React from 'react'
import Feature3Img from "../../../images/feature3-img.webp"
import "./feature3.css"

const Feature3 = () => {

    const spanStyle = {
        color: 'rgb(254,129,98)',
    };

    return (
        <>
            <header className="feature3">
                <div className="feature3-main">
                    <div className="feature3-heading">
                        <div className="feature3-text">
                            🛠 <span className="feature3-span-text"> INTEGRATIONS </span>
                        </div>
                        <div className="feature3-text-frame-1">
                            <h4 className="feature3-text-msg-1">
                            Enable <span style={spanStyle}>integration</span> with other popular tools and platforms
                            </h4>
                        </div>
                        <div className="feature3-text-frame-2">
                            <p className="feature3-text-msg-2">
                            Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
                            </p>
                        </div>
                    </div>
                    <div className="feature3-img">
                        <img src={Feature3Img} alt="" className="feature3-card" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Feature3