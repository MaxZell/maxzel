import React from "react"
import Video from "gatsby-video"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        // maxWidth: props.fluid.presentationWidth,
        maxHeight: window.innerHeight - 50,
        height: "100%",
        width: "auto",
        margin: "50px auto 0", // Used to center the image
      },
    }
  }

  return <Video {...normalizedProps} />
}
export default NonStretchedImage
