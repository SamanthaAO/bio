import React from 'react';

import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem } from "@microsoft/fast-jss-manager";

import { AnimateFrom } from "@microsoft/fast-animation";


import { Page} from "@microsoft/fast-layouts-react";

import './assets/styles/App.css';
import { info } from "./data/info";


import MyHeading from "./components/MyHeading.js";
import MySlider from "./components/MySlider.js";
import MyMain from "./components/MyMain.js"

let newDesign = {
  backgroundColor: "#FFF"
};


class App extends React.Component {

  constructor(props) {
    super(props);

    this.changeColor = this.changeColor.bind(this);
    this.changeColorDisplay = this.changeColorDisplay.bind(this);

    this.handleClickImage = this.handleClickImage.bind(this);
    this.animateImage = this.animateImage.bind(this);

    this.state = {
      imageId: 0,
      backgroundColor: "#FFF",
      myDesign: mergeDesignSystem(DesignSystemDefaults, newDesign),
    }
  }

// on click of a tab gets number off the end of the id and sets image Id to that and runs animation
  handleClickImage= event => {
    const newImageId = parseInt(event.target.id.slice(-1));
    this.animateImage();
    this.setState({ imageId: newImageId });
  }

//animates image
  animateImage() {
    const imageDisplay = document.querySelector(".imageDisplay");
    const imageAnimate = new AnimateFrom(imageDisplay, { scale: 0 }, { duration: 500 });
    imageAnimate.play();
  }


//switch for slider that changes the state of background color
  changeColor() {
    var x = document.querySelector("input").value;
    switch (true) {
      case (x>=0 && x<=5):
        this.setState({ backgroundColor: "#FFF" })
        break;

      case (x>=6 && x<=15):
        this.setState({ backgroundColor: "#CB2" })

        break;

      case (x>=16 && x<=25):
        this.setState({ backgroundColor: "#362" })
        break;

      case (x>=26 && x<=35):
        this.setState({ backgroundColor: "#A00" })
        break;

      case (x>=36 && x<=45):
        this.setState({ backgroundColor: "#005" })
        break;

      case (x>=46 && x<=50):
        this.setState({ backgroundColor: "#000" })
        break;

      default:
        this.setState({ backgroundColor: this.state.backgroundColor });

    }

    this.changeColorDisplay();

  }

//changes color display based on this.state.backgroundColor
  changeColorDisplay() {
    newDesign.backgroundColor = this.state.backgroundColor;
    this.setState({ myDesign: mergeDesignSystem(DesignSystemDefaults, newDesign) })
  }

//assigns id to the tab div and adds a click event to run image animation off of
  componentDidMount() {
    info.sections.forEach((section, i) => {
      document.getElementById(`tab-${i}`).parentNode.setAttribute("id", `div-tab-${i}`);
      document.getElementById(`div-tab-${i}`).addEventListener("click", this.handleClickImage);
    })
  }

  render() {
  
    return (
      <DesignSystemProvider designSystem={this.state.myDesign}>

        <div className="App" style={{ backgroundColor: this.state.myDesign.backgroundColor}}>
          <Page >

            <MyHeading />

            <MySlider
              changeColor={this.changeColor}
            />

            <MyMain 
              i={this.state.imageId}
            />

          </Page>
        </div>

      </DesignSystemProvider>

    );
  }

}


export default App;
