import React, { useState } from "react";
import styled from "styled-components";

const ShapeStyle = styled.li`
    color: ${props => (props.selected ? "#333333" : "#808080")};
    margin-right: 22px;
    text-transform: uppercase;
    font-style: italic;
    font-size: 22px;
    cursor: pointer;
    user-select: none;
`;

function Shape(props) {

    const [status, changeStatus] = useState(true);

    const toggleSelected = () => {
        changeStatus(!status);
    }

    return (
        <ShapeStyle
            onClick={toggleSelected}
            selected={status}
        >
            {props.children}
        </ShapeStyle>
    )
}

export default Shape;
