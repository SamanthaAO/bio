import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Heading, Image, Paragraph, Card } from "@microsoft/fast-components-react-msft";

import info from "../data/info.js";



export default class MyInfo extends React.Component {

    render() {
        return (
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
                    tag={"h2"}
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
        )
    }
}









// WITH CARD?? text below instead of to the right

//             <Grid>
//                 <Column
//                 span={12}
//                 position={1}
//                 >
//                     <Card>
//                         <Image
//                         src="https://via.placeholder.com/200/09f/fff.png"
//                         alt="Samantha Orcutt"
//                         />

//                         <Paragraph
//                         size={1}
//                         >
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                         </Paragraph>
                        
//                     </Card>
//                 </Column>
//             </Grid>

            
