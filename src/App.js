import React from 'react';

import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem } from "@microsoft/fast-jss-manager";

import { Slider, SliderLabel } from "@microsoft/fast-components-react-msft";
import { AnimateFrom } from "@microsoft/fast-animation";

import { Page, Grid, Column } from "@microsoft/fast-layouts-react";

import './assets/styles/App.css';
import { info } from "./data/info";


import MyHeading from "./components/MyHeading.js";
import MyInfo from "./components/MyInfo.js";
import InfoChanger from "./components/InfoChanger.js";
import { AnimateDino } from "./components/AnimateDino.js";
import AnimateDinoButton from "./components/AnimateDinoButton.js";

const newDesign = {
  backgroundColor: "#FFF"
};

const myDesign = mergeDesignSystem(DesignSystemDefaults, newDesign);


const range = {
  "minValue": 0,
  "maxValue": 125
};


class App extends React.Component {

  constructor(props) {
    super(props);

    this.increaseInfo = this.increaseInfo.bind(this);
    this.decreaseInfo = this.decreaseInfo.bind(this);
    this.animateInfo = this.animateInfo.bind(this);
    this.changeColor = this.changeColor.bind(this);

    this.state = {
      info: 0,
      backgroundColor: "#FFF"
    }
  }

  animateInfo() {
    const infoDisplay = document.querySelector("#infoDisplay");
    const textAnimate = new AnimateFrom(infoDisplay, { scale: 0 }, { duration: 500 });
    textAnimate.play();
  }

  increaseInfo() {
    this.animateInfo();
    this.state.info >= info.sections.length - 1 ? this.setState({ info: 0 }) : this.setState({ info: this.state.info + 1 });
  }

  decreaseInfo() {
    this.animateInfo();
    this.state.info <= 0 ? this.setState({ info: info.sections.length - 1 }) : this.setState({ info: this.state.info - 1 });
  }

  changeColor() {
    var x = document.querySelector("input").value;
    //console.log(x);
    switch(x) {
        case "1":
        this.setState({ backgroundColor: "#FFF" })
        console.log(this.state.backgroundColor);
        break;

        case "25" :
        this.setState({ backgroundColor: "#FF0" })
        console.log(this.state.backgroundColor);
        break;

        case "50" :
        this.setState({ backgroundColor: "#050" })
        console.log(this.state.backgroundColor);
        break;

        case "75" :
        this.setState({ backgroundColor: "#900" })
        console.log(this.state.backgroundColor);
        break;

        case "100" :
        this.setState({ backgroundColor: "#005" })
        console.log(this.state.backgroundColor);
        break;

        case "125" :
        this.setState({ backgroundColor: "#000" })
        console.log(this.state.backgroundColor);
        break;

        default:
        console.log(x)
    }

    

  }

  render() {

    // console.log(DesignSystemDefaults.backgroundColor);
    // console.log(newDesign.backgroundColor);
    // console.log(this.myDesign.backgroundColor);
    return (
      <DesignSystemProvider designSystem={myDesign}>

        <div className="App" style={{ backgroundColor: myDesign.backgroundColor }}>
          <Page >

            <MyHeading />

            <Grid>
              <Column
              position= {1}
              span={10}
              >
            <Slider
              range={range}
              id="mySlider"
              onValueChange={this.changeColor}
            >
              <SliderLabel
                valuePositionBinding={0}
                label={"white"}
              />
              <SliderLabel
                valuePositionBinding={25}
                label={"yellow"}
              />
              <SliderLabel
                valuePositionBinding={50}
                label={"green"}
              />
              <SliderLabel
                valuePositionBinding={75}
                label={"red"}
              />
              <SliderLabel
                valuePositionBinding={100}
                label={"blue"}
              />
              <SliderLabel
                valuePositionBinding={125}
                label={"black"}
              />
            </Slider>
            </Column>
            </Grid>


            <MyInfo
              i={this.state.info}
            />

            <InfoChanger
              i={this.state.info}
              onClickIncrease={this.increaseInfo}
              onClickDecrease={this.decreaseInfo}
            />

            <AnimateDinoButton />

            <AnimateDino />

          </Page>
        </div>

      </DesignSystemProvider>

    );
  }

}


export default App;
