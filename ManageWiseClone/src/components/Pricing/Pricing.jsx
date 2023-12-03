import React from 'react'
import "./pricing.css"

const Pricing = () => {

    const spanStyle = {
        color: 'rgb(254,129,98)',
    };

    return (
        <>
            <section className="pricing">
                <div className="pricing-section">
                    <div className="pricing-heading">
                        <div className="pricing-text">
                            💲 <span className="pricing-span-text"> PRICING </span>
                        </div>
                        <div className="pricing-text-frame-1">
                            <h4 className="pricing-text-msg-1">
                                Select your ideal <span style={spanStyle}>Pricing</span> plan
                            </h4>
                        </div>
                        <div className="pricing-text-frame-2">
                            <p className="pricing-text-msg-2">
                                At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
                            </p>
                        </div>
                    </div>
                    <div className="pricing-card-section">
                        <div className="pricing-card1">
                            <div className="pricing-card-size">
                                <div className="pricing-card-content">
                                    <div className="tracking-wide pricing-tag w-12 h-23px text-xs h-6 flex items-center justify-center bg-white rounded-lg">
                                        <p style={spanStyle}>FREE</p>
                                    </div>
                                    <div className="pricing-price" class='my-5'>
                                        <p class='text-base text-gray-800'><span class='text-black text-6xl tracking-tighter font-semibold'>$0</span> /month</p>
                                    </div>
                                    <div className="pricing-list-top">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Access to all basic features
                                        </div>
                                    </div>
                                    <div className="pricing-list">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Reporting and analytics
                                        </div>
                                    </div>
                                    <div className="pricing-list">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Up to 5 individual users
                                        </div>
                                    </div>
                                    <div className="pricing-list">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Chat and email support
                                        </div>
                                    </div>
                                    <button className="button-pricing-1">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card2">
                            <div className="pricing-card-size">
                                <div className="pricing-card-content2">
                                    <div className="pricing-card-items">
                                        <div className="pricing-tag" class="tracking-wide w-20 text-xs h-6 font-semibold flex items-center justify-center bg-white rounded-lg">
                                            <p style={spanStyle}>STANDARD</p>
                                        </div>
                                        <div className="pricing-price" class='my-4'>
                                            <p class='text-base text-white'><span class='text-white text-6xl tracking-tighter font-semibold'>$25</span> /month</p>
                                        </div>
                                        <div className="pricing-list-top">
                                            <div className="pricing-list1">
                                                <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </div>
                                            <div className="pricing-text1">
                                                Access to all basic features
                                            </div>
                                        </div>
                                        <div className="pricing-list">
                                            <div className="pricing-list1">
                                                <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </div>
                                            <div className="pricing-text1">
                                                Reporting and analytics
                                            </div>
                                        </div>
                                        <div className="pricing-list">
                                            <div className="pricing-list1">
                                                <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </div>
                                            <div className="pricing-text1">
                                                Up to 5 individual users
                                            </div>
                                        </div>
                                        <div className="pricing-list">
                                            <div className="pricing-list1">
                                                <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </div>
                                            <div className="pricing-text1">
                                                Chat and email support
                                            </div>
                                        </div>
                                        <div className="pricing-list">
                                            <div className="pricing-list1">
                                                <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </div>
                                            <div className="pricing-text1">
                                                3+ integrations
                                            </div>
                                        </div>
                                        <div className="pricing-list">
                                            <div className="pricing-list1">
                                                <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </div>
                                            <div className="pricing-text1">
                                                Account performance reporting
                                            </div>
                                        </div>
                                        <button className="button-pricing-2">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card1">
                            <div className="pricing-card-size">
                                <div className="pricing-card-content">
                                    <div className="pricing-tag" class="tracking-wide w-20 text-xs h-6 font-semibold flex items-center justify-center bg-white rounded-lg">
                                        <p style={spanStyle}>BUSINESS</p>
                                    </div>
                                    <div className="pricing-price" class='my-4'>
                                        <p class='text-base text-gray-800'><span class='text-black text-6xl tracking-tighter font-semibold'>$42</span> /month</p>
                                    </div>
                                    <div className="pricing-list-top">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Access to all basic features
                                        </div>
                                    </div>
                                    <div className="pricing-list">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Reporting and analytics
                                        </div>
                                    </div>
                                    <div className="pricing-list">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Up to 5 individual users
                                        </div>
                                    </div>
                                    <div className="pricing-list">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            Chat and email support
                                        </div>
                                    </div>
                                    <div className="pricing-list">
                                        <div className="pricing-list1">
                                            <svg width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#43D67E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="pricing-text1">
                                            3+ integrations
                                        </div>
                                    </div>
                                    <button className="button-pricing-3">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing