import React from 'react';

import { Container } from './Styles';

export const ColorFilter = (props) => {
    const {
        colors,
        filter,
        setFilter
    } = props;

    return colors.map((color, key) => {

        let active = false;
        let filteredColors = [...filter]
        if(filter.includes(color)) active=true;

        const onColorClick = () => {
            if (!filter.includes(color)) {
                filteredColors.push(color);
                return setFilter(filteredColors);
            }

            filteredColors.splice(filteredColors.indexOf(color), 1);
            return setFilter(filteredColors);
        };

        return (
            <Container filter={filter} active={active} onClick={onColorClick} key={key} color={color} />
        )
    });
};
