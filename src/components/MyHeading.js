import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Heading } from "@microsoft/fast-components-react-msft";


export default class MyHeading extends React.Component {

    render() {
        return(
            <Grid className="marginTop">

                <Column
                    span={12}
                    position={1}
                    gutter={50}
                >


                    <Heading
                        tag={"h1"}
                        size={2}
                    >
                        Samantha Orcutt: <span id="myHeadingSpan">About Me</span>
                    </Heading>

                </Column>


            </Grid>
        )
    }

}