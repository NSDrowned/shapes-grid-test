import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";

import { getItems } from "../../slices/getItems";

import Item from './item/item';

const ItemsStyle = styled.ul`
    max-width: ${(props) => `${props.theme.globals.maxWidth}`};
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    padding: 0;

    li:nth-child(4n+4) {
        margin-right: 0;
    }
`;

function Items() {

    const dispatch = useDispatch();
    const storeItems = useSelector(state => state.items);
    let items = [];

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch])

    if(storeItems.length > 0) {
        items = storeItems.map((item) => {
            return <Item key={item.id} color={item.color}></Item>
        })
    }

    return (
        <ItemsStyle>
            {items}
        </ItemsStyle>
    )
}

export default Items;
