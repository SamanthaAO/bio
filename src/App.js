import React from 'react';

import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem } from "@microsoft/fast-jss-manager";

import { Button} from "@microsoft/fast-components-react-msft";

import { Page, Grid, Column } from "@microsoft/fast-layouts-react";

import './assets/styles/App.css';
import { info } from "./data/info";


import MyHeading from "./components/MyHeading.js";
import MyInfo from "./components/MyInfo.js";
import InfoChanger from "./components/InfoChanger.js";
import {AnimateDino} from "./components/AnimateDino.js";
import AnimateDinoButton from "./components/AnimateDinoButton.js";

const newDesign = {
  backgroundColor: "#000"
};

const myDesign = mergeDesignSystem(DesignSystemDefaults, newDesign);



class App extends React.Component {
  
  constructor (props){
    super(props);

    this.increaseInfo = this.increaseInfo.bind(this);
    this.decreaseInfo = this.decreaseInfo.bind(this);

    this.state = {
      info: 0
    }
  }

  increaseInfo(){
    this.state.info>=info.sections.length-1 ? this.setState({info:0}) : this.setState({info: this.state.info+1});
  }

  decreaseInfo(){
    this.state.info<=0 ? this.setState({info:info.sections.length-1}) : this.setState({info: this.state.info-1});
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

            <MyInfo 
            i = {this.state.info}
            />
            
            <InfoChanger
            i = {this.state.info}
            onClickIncrease = {this.increaseInfo}
            onClickDecrease = {this.decreaseInfo}
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
