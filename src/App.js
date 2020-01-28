import React from 'react';

import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Pivot, Image } from "@microsoft/fast-components-react-msft";
//import { uniqueId } from "lodash-es";

import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem } from "@microsoft/fast-jss-manager";

import { AnimateFrom } from "@microsoft/fast-animation";


import { Page } from "@microsoft/fast-layouts-react";

import './assets/styles/App.css';
import { info } from "./data/info";


import MyHeading from "./components/MyHeading.js";
import MySlider from "./components/MySlider.js";


let newDesign = {
  backgroundColor: "#FFF"
};


class App extends React.Component {

  constructor(props) {
    super(props);

    this.changeColor = this.changeColor.bind(this);
    this.changeColorDisplay = this.changeColorDisplay.bind(this);

    this.handleClickImage = this.handleClickImage.bind(this);
    this.handleKeyUpImage = this.handleKeyUpImage.bind(this);
    this.animateImage = this.animateImage.bind(this);

    this.state = {
      imageId: 0,
      backgroundColor: "#FFF",
      myDesign: mergeDesignSystem(DesignSystemDefaults, newDesign),
    }
  }

  // on click of a tab gets number off the end of the id and sets image Id to that and runs animation
  handleClickImage = event => {
    const newImageId = parseInt(event.target.id.slice(-1));
    this.animateImage();
    this.setState({ imageId: newImageId });
  }

  // on keyup to change tab gets number off the end of the id and sets image Id to that and runs animation
  handleKeyUpImage() {
    info.sections.forEach((section, i) => {
      if (document.getElementById(`div-tab-${i}`).getAttribute("tabIndex") === "0") {
        const newImageId = i;
        this.animateImage();
        this.setState({ imageId: newImageId });
      }

    })
  }

  //animates image
  animateImage() {
    const imageDisplay = document.querySelector(".imageDisplay");
    const imageAnimate = new AnimateFrom(imageDisplay, { scale: 0 }, { duration: 400 });
    imageAnimate.play();
  }


  //switch for slider that changes the state of background color
  changeColor() {
    var x = document.querySelector("input").value;
    switch (true) {
      case (x >= 0 && x <= 5):
        this.setState({ backgroundColor: "#FFF" })
        break;

      case (x >= 6 && x <= 15):
        this.setState({ backgroundColor: "#CB2" })

        break;

      case (x >= 16 && x <= 25):
        this.setState({ backgroundColor: "#362" })
        break;

      case (x >= 26 && x <= 35):
        this.setState({ backgroundColor: "#A00" })
        break;

      case (x >= 36 && x <= 45):
        this.setState({ backgroundColor: "#005" })
        break;

      case (x >= 46 && x <= 50):
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
      document.getElementById(`div-tab-${i}`).addEventListener("keyup", this.handleKeyUpImage);
    })

  }


  render() {

    return (
      

        
          <Page >

            <MyHeading />

            <MySlider
              changeColor={this.changeColor}
            />
            <DesignSystemProvider designSystem={this.state.myDesign}>
              
                <Grid id="main"
                  className="App" style={{ backgroundColor: this.state.myDesign.backgroundColor }}
                >

                
                <Column
                  id="imageColumn"
                  position={[1, 1, 1, 1]}
                  span={[12, 12, 5, 5]}
                >
                  <Image
                    className="imageDisplay"
                    id={`${info.sections[this.state.imageId].headingText}-image`}
                    src={info.sections[this.state.imageId].image.src}
                    alt={info.sections[this.state.imageId].image.alt}
                  />
                </Column>

                <Column
                  position={[1, 1, 7, 6]}
                  span={[12, 12, 8, 9]}
                >

                  <Pivot
                    id="myPivot"
                    jssStyleSheet={
                      {
                        pivot_tabPanelContent: {
                          fontSize: "20px",
                          border: "5px dotted indianred",
                          padding: "1em"
                        },
                        pivot_activeIndicator: {
                          backgroundColor: "cadetblue"
                        }
                      }}
                    label="Pivot Component containing information about Samantha Orcutt"
                    onUpdate={(activeTab) => console.log(activeTab)}
                    items={info.sections.map((x, i) => {
                      let obj = {};
                      obj.tab = (className) => (
                        <h2 className={className} id={`tab-${i}`}>{x.headingText} </h2>
                      );
                      obj.content = (className) => (
                        <p className={className}>{x.paragraphText}</p>
                      );
                      obj.id = i.toString();
                      // uniqueId();
                      return obj;
                    })
                    }
                  />
                </Column>

              </Grid>
              
            </DesignSystemProvider>
          </Page>
        

      

    );
  }

}


export default App;
