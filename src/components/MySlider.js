import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Slider, SliderLabel } from "@microsoft/fast-components-react-msft";

const range = {
    "minValue": 0,
    "maxValue": 50
};

const x = 10;

export default function MySlider(props) {
    //console.log(props);
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
                    onValueChange={typeof props.changeColor === "function" ? props.changeColor : null}
                >
                    <SliderLabel
                        id="sliderLabel-white"
                        valuePositionBinding={0}
                        label={"white"}
                    />
                    <SliderLabel
                        id="sliderLabel-yellow"
                        valuePositionBinding={x}
                        label={"yellow"}
                    />
                    <SliderLabel
                        id="sliderLabel-green"
                        valuePositionBinding={2*x}
                        label={"green"}
                    />
                    <SliderLabel
                        id="sliderLabel-red"
                        valuePositionBinding={3*x}
                        label={"red"}
                    />
                    <SliderLabel
                        id="sliderLabel-blue"
                        valuePositionBinding={4*x}
                        label={"blue"}
                    />
                    <SliderLabel
                        id="sliderLabel-black"
                        valuePositionBinding={5*x}
                        label={"black"}
                    />
                </Slider>
            </Column>
        </Grid>

    )

}