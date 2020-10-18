import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 8px;
    margin: 8px;
    width: ${props => (props.width ? props.width : 'none')}
`;

const Title = styled.div`
    padding: 8px;
`;

const Content = styled.div`
    padding: 25px;
    background-color: #ececec;
`;

export const Description = (props) => {
    const {
        title,
        children,
        ...restProps
    } = props;

    return (
        <Container>

            <Title>
                {title}
            </Title>

            <Content>
                {children}
            </Content>

        </Container>
    );
};
