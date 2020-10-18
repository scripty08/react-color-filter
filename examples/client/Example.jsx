import React from 'react';
import { Description } from './Description';
import { ReactSkeleton } from '../../src';

export const Example = () => {

    return (
        <Description title={'Simple Card'}>
            <ReactSkeleton
                title={'Simple Card'}
                width={300}
            >
                Simple Card Content
            </ReactSkeleton>
        </Description>
    );
};
