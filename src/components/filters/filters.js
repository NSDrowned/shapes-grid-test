import * as React from "react";
import styled from "styled-components";

import Shapes from './shapes/shapes';
import Colors from './colors/colors';

const FiltersStyle = styled.div`
    max-width: ${(props) => `${props.theme.globals.maxWidth}`};
    color: ${(props) => `${props.theme.filters.textcolor}`};
    height: 120px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: bold;

    @media (min-width: 768px) {
        height: 120px;
        flex-direction: row;
        justify-content: space-between;
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
