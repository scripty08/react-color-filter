import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.color };
    width: ${props => (props.active) ? '26px' : '30px' };
    border: ${props => (props.active) ? `3px solid ${'#000'}` : '1px solid grey' };
    height: ${props => (props.active) ? '26px' : '30px' };
    opacity: ${props => (props.active) ? '1' : '0.3' };
    margin: 5px;
    padding: 2px;
    float:left;
    cursor: pointer;
`;
