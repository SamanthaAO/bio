import React from 'react';
import { Button } from "@microsoft/fast-components-react-msft";
import { Column, Grid } from "@microsoft/fast-layouts-react";
import { info } from "../data/info";


export default  function InfoChanger(props){

    return (
        
        <Grid>

        <Column
        span= {2}
        position={4}
        >
            <Button onClick={props.onClickIncrease}>
                {info.sections[props.i >= info.sections.length-1 ? 0 : props.i + 1].headingText}
            </Button>
        </Column>

        
        <Column
        span= {2}
        position={10}
        >
            <Button onClick={props.onClickDecrease}>
                {info.sections[props.i <= 0 ? info.sections.length-1 : props.i - 1].headingText}
            </Button>
        </Column>
   
        </Grid>
    )
};

