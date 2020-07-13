import * as React from "react";
import styled from "styled-components";

import Shapes from './shapes/shapes';
import Colors from './colors/colors';

const FiltersStyle = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 965px) {
        max-width: ${(props) => `${props.theme.globals.maxWidth}`};
        margin-left: auto;
        margin-right: auto;
        height: 120px;
        grid-template-columns: repeat(2, 1fr);
    }
`;

function Filters() {
  return (
    <FiltersStyle>
        <Shapes/>
        <Colors />
    </FiltersStyle>
  )
}

export default Filters;
