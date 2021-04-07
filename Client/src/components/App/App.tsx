import React, {useState} from "react";
import Resume from "../Resume/Resume";
import Carousel from '../Carousel/Carousel';
import Paragraph from '../Paragraph/Paragraph';
import From from '../ContactForm/Form';
import './AppS.scss';


const App = () => {

      return (
        <div className="App">

          <h1 className="title" >Samuel's Portfolio</h1>
          {/* <button className="popOpenMenu">Menu</button> */}


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
        {/*
          <div className='fromInApp'>
            <From />
          </div> */}

        </div>
        );
    }




export default App;