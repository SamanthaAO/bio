import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Slider, SliderLabel } from "@microsoft/fast-components-react-msft";

const range = {
    "minValue": 0,
    "maxValue": 50
};

const x = 10;

export default function MySlider(props) {
    return (
        <Grid className="marginTop">
            <Column
                position={1}
                span={12}
            >
                <Slider
                    range={range}
                    id="mySlider"
                    initialValue={0}
                    onValueChange={props.changeColor}
                >
                    <SliderLabel
                        valuePositionBinding={0}
                        label={"white"}
                    />
                    <SliderLabel
                        valuePositionBinding={x}
                        label={"yellow"}
                    />
                    <SliderLabel
                        valuePositionBinding={2*x}
                        label={"green"}
                    />
                    <SliderLabel
                        valuePositionBinding={3*x}
                        label={"red"}
                    />
                    <SliderLabel
                        valuePositionBinding={4*x}
                        label={"blue"}
                    />
                    <SliderLabel
                        valuePositionBinding={5*x}
                        label={"black"}
                    />
                </Slider>
            </Column>
        </Grid>

    )

}