import React from 'react'
import "./feature2.css"

const Feature2 = () => {

    const spanStyle = {
        color: 'rgb(254,129,98)',
    };

    return (
        <div className="feature-2">
            <div className="feature2-main">
                <div className="feature2-heading">
                    <div className="feature2-text">
                        🤩<span className="feature2-span-text">AND MORE...</span>
                    </div>
                    <div className="feature2-text-frame-1">
                        <p className="feature2-text-msg-1">
                            Explore an array of features that elevate your <span style={spanStyle}>Productivity</span> to new heights
                        </p>
                    </div>
                    <div className="feature2-text-frame-2">
                        <p className="feature2-text-msg-2">
                            Discover the tools that will revolutionize the way you manage and optimize your operations
                        </p>
                    </div>
                </div>
                <div className="feature2-cards">
                    <div className="feature2-card1">
                        <div className="feature2-card-content">
                            <div className="feature2-img">
                                <img src="" alt="" className="svg1-img" />
                            </div>
                            <div className="feature2-card-heading">
                            <p>Cross-Platform Compatibility</p>
                            </div>
                            <div className="feature2-card-text">
                                <p>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature2-card1">
                        <div className="feature2-card-content">
                            <div className="feature2-img">
                                <img src="" alt="" className="svg1-img" />                                
                            </div>
                            <div className="feature2-card-heading">
                            <p>Stay Informed with Essential Notifications</p>                                
                            </div>
                            <div className="feature2-card-text">
                                <p>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature2-card1">
                        <div className="feature2-card-content">
                            <div className="feature2-img">
                                <img src="" alt="" className="svg1-img" />
                            </div>
                            <div className="feature2-card-heading">
                            <p>Secure Data Encryption at all times</p>                               
                            </div>
                            <div className="feature2-card-text">
                                <p>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature2