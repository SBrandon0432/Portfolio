import React from "react";
import Resume from "../Resume/Resume";
import Carousel from '../Carousel/Carousel';
import Paragraph from '../Paragraph/Paragraph';
import './AppS.scss';


class App extends React.Component {

  render() {
    return (
      <div className="App">

        <h1 className="title" >Samuel's Personal Portfolio</h1>

        <div className="resumeDivInApp">
          <Resume />
        </div>

        <h1 className="about"> About Me</h1>
        <div className="carouselInApp">
          <Carousel />
        </div>

        <div className="aboutInApp">
          <Paragraph />
        </div>

        <h1>contact form?</h1>

      </div>
      );
  }
  // return (
  // <div className="App">

  //   <div id="test">Samuel Brandon's Personal Portfolio</div>

  //   <div className="resumeDivInApp">
  //     <Resume />
  //   </div>

  //   <h1 className="about"> About Me</h1>
  //   <div className="carouselInApp">
  //     <Carousel />
  //   </div>

  //   <div className="aboutInApp">
  //     <Paragraph />
  //   </div>

  //   <h1>contact form?</h1>

  // </div>
  // );
}

export default App;