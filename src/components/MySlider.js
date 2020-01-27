import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Slider, SliderLabel} from "@microsoft/fast-components-react-msft";

const range = {
    "minValue": 0,
    "maxValue": 100
  };

export default function MySlider (props){
return(
<Grid id="slider">
              <Column
              position= {1}
              span={12}
              >
            <Slider
              range={range}
              id="mySlider"
              initialValue={5}
              onValueChange={props.changeColor}
            >
              <SliderLabel
                valuePositionBinding={5}
                label={"white"}
              />
              <SliderLabel
                valuePositionBinding={20}
                label={"yellow"}
              />
              <SliderLabel
                valuePositionBinding={40}
                label={"green"}
              />
              <SliderLabel
                valuePositionBinding={60}
                label={"red"}
              />
              <SliderLabel
                valuePositionBinding={80}
                label={"blue"}
              />
              <SliderLabel
                valuePositionBinding={95}
                label={"black"}
              />
            </Slider>
            </Column>
            </Grid>

)
    
}