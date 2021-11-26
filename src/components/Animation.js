import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import ThumbGrid from "./thumbnails"
import LightBox from "./lightbox_video"
import { Grid } from "@material-ui/core"

const Animation = () => {
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
      query animationImgQuery {
        markdownRemark(frontmatter: { path: { regex: "/animation/" } }) {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            videoSrcURL
            videoTitle
          }
        }
      }
      `}
      render={data => {
      const images = data.source.edges
      return (
        <div className="section" id="animation">
          <div className="container">
            <div className="work-wrapper">
              <Fade bottom>
                <h1>Animation</h1>
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

export default Animation