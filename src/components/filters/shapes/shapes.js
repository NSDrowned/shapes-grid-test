import * as React from "react";
import styled from "styled-components";

import Shape from './shape/shape';

const ShapesStyle = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;

    li:last-child {
        margin-right: 0;
    }
`;

function Shapes(props) {

    const colors = ['round', 'square', 'triangle', 'oval', 'rectangle'];

    const shapes = colors.map((value, index) => {
        return <Shape shape={value} key={index}>{value}</Shape>
    });

    return (
        <ShapesStyle>
            {shapes}
        </ShapesStyle>
    )
}

export default Shapes;
