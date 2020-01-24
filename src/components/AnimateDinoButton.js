import React from 'react';
import { Grid, Column } from "@microsoft/fast-layouts-react";
import { Button, ButtonAppearance, } from "@microsoft/fast-components-react-msft";
import { animate} from './AnimateDino.js';



export default class AnimateDinoButton extends React.Component {
    render() {
        return (
            <Grid>

                <Column id="animateButtonColumn"
                    span={2}
                    position={6}
                >
                    <Button appearance={ButtonAppearance.primary} onClick={animate} >
                        Click me!
                    </Button>
                </Column>

            </Grid>
        )
    }
}

