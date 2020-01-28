import React from 'react';

import { Grid } from "@microsoft/fast-layouts-react";

import MyImage from "./MyImage.js";
import MyPivot from "./MyPivot.js";


export default function MyMain(props) {
    return (
        <Grid id="main">

            <MyImage i={props.i} />

            <MyPivot />

        </Grid>

    )

}