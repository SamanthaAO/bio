import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Heading, Image, Paragraph} from "@microsoft/fast-components-react-msft";

import {info} from "../data/info.js";



export default function MyInfo (props){

        return (
            <Grid id="infoDisplay">
                <Column 
                id="profile1"
                span={info.column1.span}
                position={info.column1.position}
                >
                    <Image
                        id="profilePicture"
                        src={info.sections[props.i].image.src}
                        alt={info.sections[props.i].image.alt}
                    />
                </Column>

                <Column 
                span={info.column2.span}
                position={info.column2.position}
                >
                
                <Heading
                    tag={info.heading.tag}
                    size={info.heading.size}
                >
                    {info.sections[props.i].headingText}
                </Heading>
                <Paragraph
                    size={info.paragraph.size}
                >
                    {info.sections[props.i].paragraphText}
                </Paragraph>

                </Column>
            </Grid>
        )
    
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

            
