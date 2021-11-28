import React from "react"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import LightBox from "./lightbox_video"
import { Grid } from "@material-ui/core"

const Animation = () => {
  return (
    <StaticQuery
      query={graphql`
      query animationImgQuery {
          source: allFile(filter: { relativePath: { regex: "/animation/" } }) {
          edges {
              node {
                extension
                publicURL
              }
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
                <LightBox images={images} />
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