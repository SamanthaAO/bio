import React from 'react';

import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem } from "@microsoft/fast-jss-manager";

import { Image } from "@microsoft/fast-components-react-msft";
import { AnimateFrom } from "@microsoft/fast-animation";
import { Pivot } from "@microsoft/fast-components-react-msft";
//import { PivotState} from "@microsoft/fast-components-react-msft/src/pivot/pivot";
import { uniqueId } from "lodash-es";

import { Page, Grid, Column } from "@microsoft/fast-layouts-react";

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
    this.animateImage = this.animateImage.bind(this);

    this.state = {
      imageId: 0,
      backgroundColor: "#FFF",
      myDesign: mergeDesignSystem(DesignSystemDefaults, newDesign),
    }
  }


  handleClickImage= event => {
    const newImageId = parseInt(event.target.id.slice(-1));
    this.animateImage();
    this.setState({ imageId: newImageId });
  }

  animateImage() {
    const imageDisplay = document.querySelector(".imageDisplay");
    const imageAnimate = new AnimateFrom(imageDisplay, { scale: 0 }, { duration: 500 });
    imageAnimate.play();
  }



  changeColor() {
    var x = document.querySelector("input").value;
    switch (x) {
      case "5":
        this.setState({ backgroundColor: "#FFF" })
        console.log(this.state.backgroundColor);
        break;

      case "20":
        this.setState({ backgroundColor: "#FF0" })
        console.log(this.state.backgroundColor);

        break;

      case "40":
        this.setState({ backgroundColor: "#050" })
        console.log(this.state.backgroundColor);
        break;

      case "60":
        this.setState({ backgroundColor: "#900" })
        console.log(this.state.backgroundColor);
        break;

      case "80":
        this.setState({ backgroundColor: "#005" })
        console.log(this.state.backgroundColor);
        break;

      case "95":
        this.setState({ backgroundColor: "#000" })
        console.log(this.state.backgroundColor);
        break;

      default:
        this.setState({ backgroundColor: this.state.backgroundColor });

    }

    this.changeColorDisplay();

  }

  changeColorDisplay() {
    newDesign.backgroundColor = this.state.backgroundColor;
    this.setState({ myDesign: mergeDesignSystem(DesignSystemDefaults, newDesign) })
  }

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

            <Grid id="main">
              <Column
                position={1}
                span={5}
              >
                <Image
                  className="imageDisplay"
                  id={`${info.sections[this.state.imageId].headingText}-image`}
                  src={info.sections[this.state.imageId].image.src}
                  alt={info.sections[this.state.imageId].image.alt}
                />
              </Column>

              <Column
                position={7}
                span={8}
              >

                <Pivot
                  id="myPivot"
                  label="Pivot Component containing information about Samantha Orcutt"
                  items={info.sections.map((x, i) => {
                    let obj = {};
                    obj.tab = (className) => (   
                      <p  className={className} id={`tab-${i}`}>{x.headingText} </p>
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
          </Page>
        </div>

      </DesignSystemProvider>

    );
  }

}


export default App;
