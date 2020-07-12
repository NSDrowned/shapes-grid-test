import React, { useState } from "react";
import styled from "styled-components";

const BoxStyle = styled.li`
    margin-right: 22px;
    border: ${props => (props.selected ? "2px solid #323433" : "2px solid #FFF")};
    height: 28px;
    width: 28px;
    box-sizing: content-box;
    cursor: pointer;
`;

function Box(props) {

    const [status, changeStatus] = useState(true);

    const toggleSelected = () => {
        changeStatus(!status);
    }

    return (
        <BoxStyle
            onClick={toggleSelected}
            selected={status}
            style={{backgroundColor: props.color}}
        />
    )
}

export default Box;
