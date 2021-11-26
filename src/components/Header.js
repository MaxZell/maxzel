import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {"Art portfolio"}
              </h1>
             
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`${
                data.contactEmail ? data.contactEmail : "https://linktr.ee/MaxZel"
              }`}
              className="primary-btn"
              target="_blank"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
