import React from 'react';
import dino from './newDino.png';
import tree from './tree.png';
import table from './table.js';
import { AnimateTo, AnimateSequence } from "@microsoft/fast-animation";
import { Button, ButtonAppearance, Image, Heading, Paragraph, Pivot, TextAction } from "@microsoft/fast-components-react-msft";
// import {TestGlyph} from "@microsoft/fast-glyphs-msft";
import { Page, Grid, Column} from "@microsoft/fast-layouts-react";

import './App.css';

class App extends React.Component {


  animate() {
    const dinoAnimate = document.querySelector("#dino");
    const treeAnimate1 = document.querySelector("#tree1");
    const treeAnimate2 = document.querySelector("#tree2");

    const x = 80;
    const angle = 22.5;
    
    

    const mySequence = new AnimateSequence([
      // new AnimateTo(dinoAnimate, { x: 250, y: 50, top: "50%", left: "50%" }, { duration: 200 }),
      new AnimateTo(dinoAnimate, { x: 100}, { duration: x }),
      new AnimateTo(treeAnimate1, { rotate: 90}, { delay:x }),
      new AnimateTo(dinoAnimate, { x: 300}, { duration: x }),
      new AnimateTo(treeAnimate2, { rotate: 90}, { delay:x }),
      new AnimateTo(dinoAnimate, { x: 300}, { duration: x }),
      new AnimateTo(treeAnimate2, { rotate: 90}, { delay:x }),
      new AnimateTo(dinoAnimate, { x: 500}, { duration: x }),

      // new AnimateTo(dinoAnimate, { rotate: angle/2 }, { duration: x }),
      // new AnimateTo(dinoAnimate, { rotate: -angle }, { duration: x, delay:x }),
      // new AnimateTo(dinoAnimate, { rotate: angle }, { duration: x, delay:x*2 }),
      // new AnimateTo(dinoAnimate, { rotate: -angle }, { duration: x, delay:x*3 })
    ]);

    mySequence.onFinish = () => {
      console.log("Did you like my animations?");
    }

    
    mySequence.play();



    // const fadeOptions= new AnimateConfig ({ opacity: 0 });
    // new AnimateFrom(myHtmlElement2, fadeOptions, { duration: 100 }).play();

  };



  render() {
    return (
      <div className="App">
        <Page >
          <Grid>
            <Column>
              <Heading 
                id="name"
                tag={"h1"}
                size={1}
              >
                Samantha Orcutt
              </Heading>
            </Column>
          </Grid>
          <Grid>
            <Column-1 id="profile1">
              <Image
                id="profilePicture"
                src="https://via.placeholder.com/200/09f/fff.png"
                alt="Samantha Orcutt"
              />
            </Column-1>

            <Column-2 id="profile2">

              <Heading
                id="about"
                tag={"h1"}
                size={3}
              >
                About Me
              </Heading>
              <Paragraph
                size={1}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </Column-2>
          </Grid>

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
        {/* <Pivot
                label={"A set of example text content"}
                items={table}
              /> */}

          <Grid>
            <Column id="animateButtonColumn">
              <Button appearance={ButtonAppearance.primary} onClick={this.animate} >
                Click me!
              </Button>
            </Column>
          </Grid>

          <Grid id="animationGrid">

            <Column-1 id="dinoColumn">
              <Image
                id="dino"
                src={dino}
                alt="dino"
              />
            </Column-1>

            <Column-2 id="treeColumn1">
              <Image
                id="tree1"
                src={tree}
                alt="tropical tree"
              />
            </Column-2>

            <Column-3 id="treeColumn2">
              <Image
                id="tree2"
                src={tree}
                alt="tropical tree"
              />
            </Column-3>

            <Column-4 id="treeColumn3">
              <Image
                id="tree3"
                src={tree}
                alt="tropical tree"
              />
            </Column-4>
            
          </Grid>







        </Page>
      </div>

    );
  }

}


export default App;
