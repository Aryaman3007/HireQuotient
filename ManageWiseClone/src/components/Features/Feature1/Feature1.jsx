import React from 'react'
import "./feature1.css"
import BigCardRight from "../../../images/Big-card-left-img.webp"
import SmallCard1 from "../../../images/Small-card-1.webp"
import SmallCard2 from "../../../images/Small-card-2.webp"
import SmallCard3 from "../../../images/Small-card-3.webp"

const Feature = () => {

  const spanStyle = {
    color: 'rgb(254,129,98)',
  };

  return (
    <>
      <section className="feature-1">
        <div className="feature-main">
          <div className="Heading-wrapper">
            <div className="Heading-text">
              🔥<span className="feature-text">PREMIER FEATURES</span>
            </div>
            <div className="Heading-text-frame-1">
              <p className="Heading-text-msg-1">
                Discover our product's <span style={spanStyle}>Capabilities</span>
              </p>
            </div>
            <div className="Heading-text-frame-2">
              <p className="Heading-text-msg-2">
                Don't settle for mediocrity - embrace the future of management with Manage Wise.
              </p>
            </div>
          </div>
          <div className="Big-cards">
            <div className="Big-card-left">
              <div className="Big-card-left-1">
                <p className="star">⭐</p>
              </div>
              <div className="Big-card-left-2">
                <p className="star-text">
                  Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
                </p>
              </div>
            </div>
            <div className="Big-card-right">
              <div className="Big-card-right-1">
                <img src={BigCardRight} alt="Card-image" />
              </div>
              <div className="Big-card-right-2">
                <div className="Big-card-right-text-1">
                  <p>Smart Task Management</p>
                </div>
                <div className="Big-card-right-text-2">
                  <p>Say goodbye to chaos with our smart task management system</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Small-cards">
            <div className="small-card">
              <div className="small-card-1">
                <div className="small-card-img">
                  <img src={SmallCard1} alt="small-card-1" />
                </div>
              </div>
              <div className="small-card-text">
                <div className="small-card-text1">
                  <h3>Flexible Scheduling</h3>
                </div>
                <div className="small-card-text2">
                  <p>Stay productive with our flexible scheduling system</p>
                </div>
              </div>
            </div>
            <div className="small-card">
              <div className="small-card-2">
                <div className="small-card-img">
                  <img src={SmallCard2} alt="small-card-1" />
                </div>
              </div>
              <div className="small-card-text">
                <div className="small-card-text1">
                  <h3>Easy Communication</h3>
                </div>
                <div className="small-card-text2">
                  <p>Collaborate seamlessly with your team in real-time</p>
                </div>
              </div>
            </div>
            <div className="small-card">
              <div className="small-card-3">
                <div className="small-card-img">
                  <img src={SmallCard3} alt="small-card-1" />
                </div>
              </div>
              <div className="small-card-text">
                <div className="small-card-text1">
                  <h3>Analytics</h3>
                </div>
                <div className="small-card-text2">
                  <p>Gain valuable insights with our advanced analytics feature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature