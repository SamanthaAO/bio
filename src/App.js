import React from 'react';

import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem } from "@microsoft/fast-jss-manager";

import { Page } from "@microsoft/fast-layouts-react";

import './assets/styles/App.css';


import MyHeading from "./components/MyHeading.js";
import MyInfo from "./components/MyInfo.js";

import {AnimateDino} from "./components/AnimateDino.js";
import AnimateDinoButton from "./components/AnimateDinoButton.js";

const newDesign = {
  backgroundColor: "#000"
};

const myDesign = mergeDesignSystem(DesignSystemDefaults, newDesign);



class App extends React.Component {

  render() {
    console.log(DesignSystemDefaults.backgroundColor);
    console.log(newDesign.backgroundColor);
    // console.log(this.myDesign.backgroundColor);
    return (
      <DesignSystemProvider designSystem={myDesign}>

        <div className="App" style={{ backgroundColor: myDesign.backgroundColor }}>
          <Page >

            <MyHeading />

            <MyInfo />

            <AnimateDinoButton />

            <AnimateDino />

          </Page>
        </div>

      </DesignSystemProvider>

    );
  }

}


export default App;
