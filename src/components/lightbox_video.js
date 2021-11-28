import React from "react"

const Animation = {
  display: "inline-block",
  background: "transparent",
  border: "none",
  padding: 0,
  margin: 10,
  width: "auto",
  height: 40+"vh",
}

const Lightbox = (props) => {
  console.log(props.images);
  return (
    <div className="Animations">
      {props.images.map(video => (
        <video style={Animation} controls mute className="Animation">
          <source src={video.node.publicURL} />
          <track kind="captions" src={video.node.publicURL} srclang="en"></track>
        </video>
      ))}
    </div>
  );
};

// export default withStyles(style)(Lightbox)
export default Lightbox