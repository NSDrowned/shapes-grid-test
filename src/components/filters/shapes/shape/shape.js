import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import styled from "styled-components";

import { toggleShape } from "../../../../slices/filters";

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

    const dispatch = useDispatch();
    const [status, changeStatus] = useState(true);

    const toggleSelected = () => {
        changeStatus(!status);
        dispatch(toggleShape(props.shape));
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
