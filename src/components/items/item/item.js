import React from "react";
import styled from "styled-components";

const ItemStyle = styled.li`
    border: 2px solid #f3f3f3;
    height: 320px;
    border-radius: 4px;
    display: grid;
    place-items: center;

    div {
        width: 200px;
        height: 200px;
        box-shadow: inset 0px 0px 1px 0px #000;
    }
`;

function Items(props) {
    return (
        <ItemStyle>
            <div style={{backgroundColor: props.color}}></div>
        </ItemStyle>
    )
}

export default Items;
