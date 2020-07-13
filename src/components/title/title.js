import React from "react";
import { useSelector } from 'react-redux'
import styled from "styled-components";

const TitleStyle = styled.div`
    height: 50px;
    max-width: ${(props) => `${props.theme.globals.maxWidth}`};
    margin-left: auto;
    margin-right: auto;
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
    line-height: 54px;

    @media (min-width: 965px) {
        height: 100px;
        font-size: 40px;
    }
`;

function Title(props) {

    const storeFilters = useSelector(state => state.filters);

    let colors = Object.keys(storeFilters.colors);
    let colorFilters = colors.filter(key => { return storeFilters.colors[key] });

    let shapes = Object.keys(storeFilters.shapes);
    let shapeFilters = shapes.filter(key => { return storeFilters.shapes[key] });

    const titleSwitch = (totalColors, totalShapes) => {
        switch(true) {
            case (totalColors === 6 && totalShapes === 5):
                return 'All items:';
            case (totalColors === 6 && totalShapes < 5 && totalShapes > 1):
                return 'Multiple items:';
            case (totalColors < 6 && totalColors > 1 && totalShapes === 5):
                return 'Multiple items:';
            case (totalColors === 1 && totalShapes === 5):
                return `All ${colorFilters[0]} items:`;
            case (totalColors === 6 && totalShapes === 1):
                return `All ${shapeFilters[0]} items:`;
            case (totalColors === 1 && totalShapes < 5 && totalShapes > 1):
                return `Multiple ${colorFilters[0]} items:`;
            case (totalColors < 6 && totalColors > 1 && totalShapes === 1):
                return `Multiple ${shapeFilters[0]} items:`;
            case (totalColors === 1 && totalShapes === 1):
                return `${shapeFilters[0]} ${colorFilters[0]} items:`;
            default:
                return 'Multiple items:';
        }
    }

    return (
        <TitleStyle>
            {titleSwitch(colorFilters.length, shapeFilters.length)}
        </TitleStyle>
    )
}

export default Title;
