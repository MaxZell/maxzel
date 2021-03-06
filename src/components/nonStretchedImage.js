import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        // maxHeight: props.fluid.presentationWidth - 60,
        maxHeight: 80 + "vh",
        maxWidth: 80 + "vh",
        height: 80 + "vh",
        width: "auto",
        margin: "50px auto 0", // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}
export default NonStretchedImage
