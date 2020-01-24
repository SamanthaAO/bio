import React from 'react';
import dino from '../assets/images/newDino.png';
import tree from '../assets/images/tree.png';

import {Image} from "@microsoft/fast-components-react-msft";
import { Grid, Column} from "@microsoft/fast-layouts-react";
import { AnimateTo, AnimateGroup } from "@microsoft/fast-animation";
// import { AnimateSequence} from "@microsoft/fast-animation";

export function  animate() {
    const dinoAnimate = document.querySelector("#dino");
    const treeAnimate1 = document.querySelector("#tree1");
    const treeAnimate2 = document.querySelector("#tree2");
    const treeAnimate3 = document.querySelector("#tree3");


    const x = 80;
    // const angle = 22.5;
    
    

    const mySequence = new AnimateGroup([
      
      new AnimateTo(dinoAnimate, { x: 2000}, { duration: x*20 }),
      new AnimateTo(treeAnimate1, { rotate: 90}, { delay:x }),
      new AnimateTo(treeAnimate2, { rotate: 90}, { delay:x*5 }),
      new AnimateTo(treeAnimate3, { rotate: 90}, { delay:x*6 }),
    ]);

    mySequence.onFinish = () => {
      console.log("Did you like my animations?");
    }

    
    mySequence.play(); 

  };

  export class AnimateDino extends React.Component {
    render(){
      return (
        <Grid id="animationGrid">

                <Column
                  span={4}
                  position={1}
                >
                  <Image
                    id="dino"
                    src={dino}
                    alt="dino"
                  />
                </Column>

                <Column
                span={1}
                position={9}
                >
                  <Image
                    id="tree1"
                    src={tree}
                    alt="tropical tree"
                  />
                </Column>

                <Column 
                span={2}
                position={10}
                >
                  <Image
                    id="tree2"
                    src={tree}
                    alt="tropical tree"
                  />
                </Column>

                <Column 
                  span={1}
                  position={12}
                >
                  <Image
                    id="tree3"
                    src={tree}
                    alt="tropical tree"
                  />
                </Column>
                
              </Grid>
      )
    }
  }