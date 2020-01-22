import React from 'react';
import dino from './newDino.png';

import { AnimateTo, AnimateSequence } from "@microsoft/fast-animation";
import { Button, ButtonAppearance, Image, Heading, Paragraph, TextAction} from "@microsoft/fast-components-react-msft";
import {TestGlyph} from "@microsoft/fast-glyphs-msft";
import './App.css';

class App extends React.Component {
  

  animate() {
    const myHtmlElement = document.querySelector("#dino");
    const myHtmlElement2 = document.querySelector("#App-link");

    const mySequence = new AnimateSequence([
      new AnimateTo(myHtmlElement, { x: 800, y: 50, top: "50%", left: "50%" }, { duration: 4500 }),
      new AnimateTo(myHtmlElement2, { y: -800 }, { duration: 5 })
    ]);

    mySequence.onFinish = () => {
      console.log("Did you like our animations?");
    }

    mySequence.play();



    // const fadeOptions= new AnimateConfig ({ opacity: 0 });
    // new AnimateFrom(myHtmlElement2, fadeOptions, { duration: 100 }).play();

  };



  render() {
    return (
      <div className="App">
        <Image
          id="profilePicture"
          src="https://via.placeholder.com/200/09f/fff.png"
          alt="Samantha Orcutt"
        />

        <Heading
          tag={"h1"}
          size={1}
        >
          Samantha Orcutt
        </Heading>

        <Paragraph
          size={1}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        {/* <TextAction
        appearance={"filled"}

        button={
        <Button>
          <TestGlyph
              path={"arrow"}
          />
        </Button>}

        beforeGlyph={
        <TestGlyph
          path={"user"}/>}
        />  */}


        <Image
          id="dino"
          src={dino}
          alt="dino"
        />




        <Button appearance={ButtonAppearance.primary} onClick={this.animate}>
          Click me!
        </Button>

      </div>
    );
  }

}


export default App;
