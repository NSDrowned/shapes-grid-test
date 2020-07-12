import React from "react";
import styled from "styled-components";

const ItemStyle = styled.li`
    border: 2px solid #f3f3f3;
    height: 320px;
    border-radius: 4px;
    display: grid;
    place-items: center;

    div {
        box-shadow: inset 0px 0px 1px 0px #000;
    }
`;
const Square = styled.div`
    width: 200px;
    height: 200px;
`
const Round = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`
const Triangle = styled.div`
    width: 0;
    height: 0;
	border-left: 100px solid transparent;
	border-right: 100px solid transparent;
	border-bottom: 200px solid ${(props) => `${props.color}`};
`
const Oval = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 50%;
`
const Rectangle = styled.div`
    width: 200px;
    height: 100px;
`
function Items(props) {

    const shapeSwitch = (param) => {
        switch(param) {
            case 'square':
                return <Square style={{backgroundColor: props.color}}></Square>;
            case 'round':
                return <Round style={{backgroundColor: props.color}}></Round>;
            case 'triangle':
                return <Triangle color={props.color}></Triangle>;
            case 'oval':
                return <Oval style={{backgroundColor: props.color}}></Oval>;
            case 'rectangle':
                return <Rectangle style={{backgroundColor: props.color}}></Rectangle>;
            default:
                return '';
        }
    }

    return (
        <ItemStyle>
            {shapeSwitch(props.shape)}
        </ItemStyle>
    )
}

export default Items;
