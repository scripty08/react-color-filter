import React from 'react';

import { Container } from './Styles';

export const ReactSkeleton = (props) => {
    const {
        color = '#fff',
    } = props;

    return (
        <Container color={color}>
            react-skeleton
        </Container>
    );
};
