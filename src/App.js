import React from 'react';

import { Grid, Column, Page } from "@microsoft/fast-layouts-react";
import { Pivot, Image } from "@microsoft/fast-components-react-msft";
//import { uniqueId } from "lodash-es";

import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem } from "@microsoft/fast-jss-manager";

import { AnimateFrom } from "@microsoft/fast-animation";

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
    
    
    this.onTabUpdate = this.onTabUpdate.bind(this);
    this.animateImage = this.animateImage.bind(this);

    this.state = {
      imageId: 0,
      backgroundColor: "#FFF",
      myDesign: mergeDesignSystem(DesignSystemDefaults, newDesign),
    }
  }

// when active tab changes change image
  onTabUpdate(activeTab) {
    const newImageId = activeTab;
    this.setState({ imageId: newImageId });
    // this.animateImage();
  }

  
  //animates image
  animateImage() {
    const imageDisplay = document.querySelector(".imageDisplay");
    const imageAnimate = new AnimateFrom(imageDisplay, { scale: 0 }, { duration: 400 });
    imageAnimate.play();
  }


  //switch for slider that changes the state of background color
  changeColor = (newValue) => {
    // var x = document.querySelector("input").value;
    let x = newValue;
    let background;

    switch (true) {
      case (x >= 0 && x <= 5):
        default:
        background = "#FFF";
        break;

      case (x >= 6 && x <= 15):
        background = "#CB2";
        break;

      case (x >= 16 && x <= 25):
        background = "#362";
        break;

      case (x >= 26 && x <= 35):
        background = "#A00";
        break;

      case (x >= 36 && x <= 45):
        background = "#005";
        break;

      case (x >= 46 && x <= 50):
        background = "#000";
        break;
    }
    //console.log(background)
    this.setState({myDesign: Object.assign({}, DesignSystemDefaults, {backgroundColor: background})})

  }

  // //changes color display based on this.state.backgroundColor
  changeColorDisplay = () => {
    newDesign.backgroundColor = this.state.backgroundColor;
    this.setState({ myDesign: mergeDesignSystem(DesignSystemDefaults, newDesign) })
  }

  componentDidMount () {
    this.animateImage();
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
                 style={{ backgroundColor: this.state.myDesign.backgroundColor }}
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
                    onUpdate={(activeTab) => this.onTabUpdate(activeTab)}
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
