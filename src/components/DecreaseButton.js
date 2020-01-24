import React from 'react';
import { Button } from "@microsoft/fast-components-react-msft";
import { Column } from "@microsoft/fast-layouts-react";
import { info } from "../data/info";

export default function DecreaseButton(i, onClickDecrease) {
    return (
        <Column>
            <Button onClick={onClickDecrease}>
                {console.log(i <= 0 ? 2 : i - 1)}
                {info.sections[0].headingText}
            </Button>
        </Column>
    );
};