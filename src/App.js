import React from 'react';
import dino from './newDino.png';
import tree from './tree.png';
import animate from './animate.js';
import { DesignSystemDefaults } from '@microsoft/fast-components-styles-msft';
import { Button, ButtonAppearance, Image, Heading, Paragraph} from "@microsoft/fast-components-react-msft";

import { DesignSystemProvider } from "@microsoft/fast-jss-manager-react";
import { mergeDesignSystem} from "@microsoft/fast-jss-manager";
import { Page, Grid, Column} from "@microsoft/fast-layouts-react";

import './App.css';

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
      <DesignSystemProvider designSystem= {myDesign}>
        
        <div className="App" style={{backgroundColor: myDesign.backgroundColor}}>
          <Page >

            <Grid>
            
              <Column 
              span={12}
              position={1}
              gutter={50}
              >
            

                <Heading 
                  tag={"h1"}
                  size={1}
                >
                  Samantha Orcutt
                </Heading>

              </Column>
              

            </Grid>

            <Grid>

              <Column 
                id="profile1"
                span={3}
                position={1}
              >
                <Image
                  id="profilePicture"
                  src="https://via.placeholder.com/200/09f/fff.png"
                  alt="Samantha Orcutt"
                />
              </Column>

              <Column 
              span={9}
              position={4}
              >
                
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

              </Column>

            </Grid>

            <Grid>

              <Column id="animateButtonColumn"
                span={2}
                position={6}
              >
                <Button appearance={ButtonAppearance.primary} onClick={animate} >
                  Click me!
                </Button>
              </Column>

            </Grid>

            <Grid id="animationGrid">

              <Column id="dinoColumn"
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

          </Page>
        </div>
        
      </DesignSystemProvider>

    );
  }

}


export default App;
