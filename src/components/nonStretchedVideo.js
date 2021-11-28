import React from "react"
import Video from "gatsby-video"

const NonStretchedVideo = props => {
  console.log(props);
  return (
    <Video
      muted
      loop
      sources={props}
    />
  )
}
export default NonStretchedVideo
