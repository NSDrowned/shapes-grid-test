import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import styled from "styled-components";

import { toggleColor } from "../../../../slices/filters";

const ColorStyle = styled.li`
    border: ${props => (props.selected ? "2px solid #323433" : "2px solid #FFF")};
    height: 28px;
    width: 28px;
    box-sizing: content-box;
    cursor: pointer;

    @media (min-width: 768px) {
        margin-left: 24px;
    }
`;

function Color(props) {

    const dispatch = useDispatch();
    const [status, changeStatus] = useState(true);

    const toggleSelected = () => {
        changeStatus(!status);
        dispatch(toggleColor(props.color));
    }

    return (
        <ColorStyle
            onClick={toggleSelected}
            selected={status}
            style={{backgroundColor: props.color}}
        />
    )
}

export default Color;
