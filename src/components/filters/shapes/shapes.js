import * as React from "react";
import styled from "styled-components";

import Shape from './shape/shape';

const ShapesStyle = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: space-between;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    li:last-child {
        margin-right: 0;
    }

    @media (min-width: 965px) {
        width: 100%;
        justify-content: start;
    }
`;

function Shapes(props) {

    const colors = ['round', 'square', 'triangle', 'oval', 'rectangle'];

    const shapes = colors.map((value, index) => {
        return <Shape shape={value} key={index}><span>{value}</span></Shape>
    });

    return (
        <ShapesStyle>
            {shapes}
        </ShapesStyle>
    )
}

export default Shapes;
