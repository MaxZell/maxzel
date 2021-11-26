import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { withStyles, ButtonBase, Grid } from "@material-ui/core"

const style = theme => ({
  previewButton: {
    // display: "inline-block",
    background: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    height: 200,
    width: 200
  },
  thumbnail: {
    width: 200,
    height: 200
  },
})

const ThumbGrid = ({ images, handleOpen, classes }) => {
  return images.map((image, i) => (
    <Grid item key={i}>
      <ButtonBase onClick={handleOpen(i)} className={classes.previewButton}>
        <Img
          fluid={image.node.childImageSharp.fluid}
          className={classes.thumbnail}
        />
      </ButtonBase>
    </Grid>
  ))
}

ThumbGrid.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
}
export default withStyles(style)(ThumbGrid)
