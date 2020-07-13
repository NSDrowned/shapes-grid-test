import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";

import { getItems } from "../../slices/getItems";

import Item from './item/item';

const ItemsStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
    padding: 0;

    li:nth-child(2n+2) {
        margin-right: 0;
    }

    @media (min-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        max-width: ${(props) => `${props.theme.globals.maxWidth}`};
        grid-gap: 24px;
        grid-template-columns: repeat(4, 1fr);

        li:nth-child(4n+4) {
            margin-right: 0;
        }
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
        let colorFilters = colors.filter(key => { return filters.colors[key] });

        let shapes = Object.keys(filters.shapes);
        let shapeFilters = shapes.filter(key => { return filters.shapes[key] });

        // create items

        let filteredItems = items;

        // filter items based on arrays of shapes and colors that should be visible

        if((colorFilters && colorFilters.length > 0) || (shapeFilters && shapeFilters.length > 0)) {
            filteredItems = items.filter(item => colorFilters.indexOf(item.color) !== -1).filter(item => shapeFilters.indexOf(item.shape) !== -1);
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
