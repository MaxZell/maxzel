import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import ThumbGrid from "./thumbnails"
import LightBox from "./lightbox"
import { Grid } from "@material-ui/core"

const Digital = () => {
  const [showLightbox, setShowLightbox] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const handleOpen = i => e => {
        setShowLightbox(true)
        setSelectedImage(i)
    }
    const handleClose = () => {
        setShowLightbox(false)
        setSelectedImage(null)
    }
    const handlePrevRequest = (i, length) => e => {
        setSelectedImage((i - 1 + length) % length)
    }
    const handleNextRequest = (i, length) => e => {
        setSelectedImage((i + 1) % length)
    }
  return (
    <StaticQuery
      query={graphql`
      query digitalImgQuery {
          source: allFile(filter: { absolutePath: { regex: "/digital/" } }) {
          edges {
              node {
              childImageSharp {
                  fluid(maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                  }
              }
              }
          }
          }
      }
      `}
      render={data => {
      const images = data.source.edges
      return (
        <div className="section" id="digital">
          <div className="container">
            <div className="work-wrapper">
              <Fade bottom>
                <h1>Digital</h1>
              </Fade>
              <Grid container spacing={24} justify="center">
                  <ThumbGrid images={images} handleOpen={handleOpen} />
                  {showLightbox && selectedImage !== null && (
                      <LightBox
                          images={images}
                          handleClose={handleClose}
                          handleNextRequest={handleNextRequest}
                          handlePrevRequest={handlePrevRequest}
                          selectedImage={selectedImage}
                      />
                  )}
              </Grid>
            </div>
          </div>
        </div>
      )
      }}
    />
  )
}

export default Digital