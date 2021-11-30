import React from "react"

var listOfPreviews =[];
function importAll(r) {
  return r.keys().map(r);
}

function componentWillMount() {
  listOfPreviews = importAll(require.context('../../images/gallery/video-thumbnails', false, /\.(png|jpe?g|svg|jpg|)$/));
}

componentWillMount()
console.log(listOfPreviews);

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  if(imgUrl.split('.').pop() === "mp4"){
    // console.log("mp4!1", imgUrl)
    // console.log(parseInt(imgUrl.split('/').pop().split('-')[1], 10))
    // console.log("mp4!3", listOfPreviews[parseInt(imgUrl.split('/').pop().split('-')[1], 10)-1])
    imgUrl = listOfPreviews[parseInt(imgUrl.split('/').pop().split('-')[1], 10)-1]
  }
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Open
        </a>
      </div>
    </div>
  )
}

export default Card
