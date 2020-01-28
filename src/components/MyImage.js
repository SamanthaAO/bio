import React from 'react';
import { Column } from "@microsoft/fast-layouts-react";
import { Image } from "@microsoft/fast-components-react-msft";


import { info } from "../data/info";

export default function MyImage (props) {
    return (
              <Column
                id="imageColumn"
                position={[1, 1]}
                span={[12, 5]}
              >
                <Image
                  className="imageDisplay"
                  id={`${info.sections[props.i].headingText}-image`}
                  src={info.sections[props.i].image.src}
                  alt={info.sections[props.i].image.alt}
                />
              </Column>

    )

}