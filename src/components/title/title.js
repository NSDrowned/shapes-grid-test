import React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
    height: 100px;
    max-width: ${(props) => `${props.theme.globals.maxWidth}`};
    margin-left: auto;
    margin-right: auto;
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    font-size: 40px;
`;

function Title(props) {
    return (
        <TitleStyle>
            All items:
        </TitleStyle>
    )
}

export default Title;
