import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

var listOfTraditional =[];
function importAll(r) {
  return r.keys().map(r);
}

function componentWillMount() {
  listOfTraditional = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg|jpg|webp|mp4)$/));
}

componentWillMount()

// console.log(listOfTraditional);
// listOfImages.map((item, index) => {
//   console.log("item", item);
//   console.log("index", index);
// })

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Works</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {listOfTraditional.map((project, index) => (
                <Card
                key={index}
                imgUrl={project}
                projectLink={project}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
