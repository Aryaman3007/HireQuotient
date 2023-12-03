import React from 'react'
import "./faq.css"

const Faq = () => {

    const spanStyle = {
        color: 'rgb(254,129,98)',
    };

    return (
        <>
            <div className="FAQ">
                <div className="Faq-section">
                    <div className="Faq-left">
                        <div className="faq-msg">
                            🙋‍♀️ <span className="faq-span-text"> FAQ </span>
                        </div>
                        <div className="faq-text-frame-1">
                            <h5 className="faq-text-msg-1">
                                Need <br></br><span style={spanStyle}>Answers?</span>
                            </h5>
                        </div>
                        <div className="faq-text-frame-2">
                            <p className="faq-text-msg-2">
                                Check out our most commonly asked questions below to find the information you need.
                            </p>
                        </div>
                    </div>
                    <div className="Faq-right">
                        <div className="Faq-questions">
                            <div className="faq-question-content">
                                <div className="faq-text">
                                    <h6 className="faq-title">
                                        What is Manage Wise and what does it offer?
                                    </h6>
                                </div>
                                <div className="faq-svg">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#8247FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                            </div>

                        </div>
                        <div className="Faq-questions">
                            <div className="faq-question-content">
                                <div className="faq-text">
                                    <h6 className="faq-title">
                                        Is Manage Wise suitable for small businesses and larger enterprise alike?
                                    </h6>
                                </div>
                                <div className="faq-svg">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#8247FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                            </div>

                        </div>
                        <div className="Faq-questions">
                            <div className="faq-question-content">
                                <div className="faq-text">
                                    <h6 className="faq-title">
                                        Can I access Manage Wise from different devices anf platforms?
                                    </h6>
                                </div>
                                <div className="faq-svg">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#8247FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                            </div>

                        </div>
                        <div className="Faq-questions">
                            <div className="faq-question-content">
                                <div className="faq-text">
                                    <h6 className="faq-title">
                                        What kind of support options do you offer to users?
                                    </h6>
                                </div>
                                <div className="faq-svg">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#8247FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                            </div>

                        </div>
                        <div className="Faq-questions">
                            <div className="faq-question-content">
                                <div className="faq-text">
                                    <h6 className="faq-title">
                                        How secure is the data stored within Manage Wise?
                                    </h6>
                                </div>
                                <div className="faq-svg">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#8247FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Faq