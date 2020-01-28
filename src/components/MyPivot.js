import React from 'react';
import { Column } from "@microsoft/fast-layouts-react";
import { Pivot } from "@microsoft/fast-components-react-msft";
//import { uniqueId } from "lodash-es";


import { info } from "../data/info";

export default function MyPivot() {
    return (
        
              <Column
                position={[1, 6]}
                span={[12, 9]}
              >

                <Pivot
                  id="myPivot"
                  label="Pivot Component containing information about Samantha Orcutt"
                  items={info.sections.map((x, i) => {
                    let obj = {};
                    obj.tab = (className) => (   
                       <h2  className={className} id={`tab-${i}`}>{x.headingText} </h2>
                    );
                    obj.content = (className) => (
                      <p className={className}>{x.paragraphText}</p>
                    );
                    obj.id = i.toString();
                    // uniqueId();
                    return obj;
                  })
                  }
                />
              </Column>
            

    )

}