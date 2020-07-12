import * as React from "react";
import styled from "styled-components";

import Box from './box/box';

const ColorsStyle = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;

    li:last-child {
        margin-right: 0;
    }
`;

function Colors() {

    const colors = ['purple', 'red', 'green', 'blue', 'yellow', 'gray'];

    const boxes = colors.map((value, index) => {
        return <Box color={value} key={index}></Box>
    });

    return (
        <ColorsStyle>
            {boxes}
        </ColorsStyle>
    )
}

export default Colors;
