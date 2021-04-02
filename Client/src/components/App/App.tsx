import React from "react";
import Resume from "../Resume/Resume";
import Carousel from '../Carousel/Carousel';
import Paragraph from '../Paragraph/Paragraph';

const App = () => {
  return (
  <div className="App">
    <h1 className="title">Samuel Brandon's Personal Portfolio</h1>
    <Resume />
    <h1 className="about"> About Me</h1>
    <Carousel />
    <Paragraph />
    <h1>contact form?</h1>
  </div>);
}

export default App;