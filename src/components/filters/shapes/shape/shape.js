import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import styled from "styled-components";

import { toggleShape } from "../../../../slices/filters";

const ShapeStyle = styled.li`
    color: ${props => (props.selected ? "#333333" : "#808080")};
    margin-right: 22px;
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    font-size: 22px;
    cursor: pointer;
    user-select: none;
    border: 2px ${props => (props.selected ? "solid #333333;" : "solid #BBB")};

    span {
        display: none;
    }

    @media (max-width: 767px) {
        &:first-child {
            border-radius: 50%;
            width: 29px;
            height: 29px;
        }
        &:nth-child(2) {
            width: 28px;
            height: 28px;
        }
        &:nth-child(3) {
            width: 0;
            height: 0;
            border: 0;
            border-left: 14px solid transparent;
            border-right: 14px solid transparent;
            border-bottom: 27px ${props => (props.selected ? "solid #333333;" : "solid #BBB")};
            position: relative;
            top: -1px;

            &:after {
                content: '';
                width: 0;
                height: 0;
                border: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 20px solid #FFF;
                position: absolute;
                left: -10px;
                top: 5px;
            }
            &:before {
                font-style: normal !important;
                font-size: 29px;
                content: '';
                width: 28px;
                height: 1px;
                border: 0;
                position: absolute;
                bottom: 4px;
                left: -16px;
                color: red;
            }
        }
        &:nth-child(4) {
            width: 28px;
            height: 14px;
            border-radius: 50%;
        }
        &:nth-child(5) {
            width: 28px;
            height: 18px;
        }
    }

    @media (min-width: 768px) {
        border: 0;
        width: auto;
        height: auto;

        span {
            display: block;
        }
    }
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
