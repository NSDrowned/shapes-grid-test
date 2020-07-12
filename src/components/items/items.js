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
    const storeFilters = useSelector(state => state.filters);

    let items = [];

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch])

    const filterItems = (items, filters) => {

        // filter out false keys

        let colors = Object.keys(filters.colors);
        let colorFilter = colors.filter(key => { return filters.colors[key] });

        let shapes = Object.keys(filters.shapes);
        let shapeFilter = shapes.filter(key => { return filters.shapes[key] });

        // create items

        let filteredItems = items;

        // filter items based on arrays of shapes and colors that should be visible

        if((colorFilter && colorFilter.length > 0) || (shapeFilter && shapeFilter.length > 0)) {
            filteredItems = items.filter(item => colorFilter.indexOf(item.color) !== -1).filter(item => shapeFilter.indexOf(item.shape) !== -1);
        }

        // return all item || filtered items

        return filteredItems.map((item) => {
            return <Item key={item.id} color={item.color} shape={item.shape} />
        });
    }

    if(storeItems.length > 0) {
        items = filterItems(storeItems, storeFilters);
    }

    return (
        <ItemsStyle>
            {items}
        </ItemsStyle>
    )
}

export default Items;
