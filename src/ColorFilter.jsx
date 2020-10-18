import React from 'react';

import { Container } from './Styles';

export const ColorFilter = (props) => {
    const {
        color = '#fff',
    } = props;

    return (
        <Container color={color}>
            react-color-filter
        </Container>
    );
};
