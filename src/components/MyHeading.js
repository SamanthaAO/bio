import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Heading } from "@microsoft/fast-components-react-msft";


export default class App extends React.Component {

    render() {
        return(
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
                        Samantha Orcutt: About Me
                    </Heading>

                </Column>


            </Grid>
        )
    }

}