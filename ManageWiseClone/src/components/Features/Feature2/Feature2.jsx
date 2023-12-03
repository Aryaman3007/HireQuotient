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
                            <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#FFFFFFCCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
                            <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                            
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
                            <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C10.1113 21.8742 8 21.064 8 18.4442C8 16.3949 9.49507 15.0085 10.631 14.3346C10.9365 14.1533 11.2941 14.3887 11.2941 14.7439V15.3331C11.2941 15.784 11.4685 16.4889 11.8836 16.9714C12.3534 17.5174 13.0429 16.9454 13.0985 16.2273C13.1161 16.0008 13.3439 15.8564 13.5401 15.9711C14.1814 16.3459 15 17.1465 15 18.4442C15 20.4922 13.871 21.4343 12.8324 21.8013Z" fill="#FFFFFF"></path> </g></svg>                                
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