import * as React from "react";
import styled from "styled-components";

import Color from './color/color';

const ColorsStyle = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;

    li:first-child {
        margin-left: 0;
    }

    @media (min-width: 640px) {
        width: 90%;
    }

    @media (min-width: 965px) {
        width: 100%;
        justify-content: flex-end;
    }
`;

function Colors() {

    const colors = ['purple', 'red', 'green', 'blue', 'yellow', 'grey'];

    const boxes = colors.map((value, index) => {
        return <Color color={value} key={index} />
    });

    return (
        <ColorsStyle>
            {boxes}
        </ColorsStyle>
    )
}

export default Colors;
