import React from 'react';
import { Description, Code, Component, Properties } from '@scripty/react-examples';
import { ReactSkeleton } from '../../src';

export const Example = () => {

    const code = `import { ReactSkeleton } from '@scripty/react-skeleton';

const App = () => {
    return <ReactSkeleton color={'#000'}/>
}
`

    const propertiesData = [
        {
            property: 'color',
            description: 'hex color',
            type: 'string',
            default: '#fff'
        }
    ]

    return (
        <Description title={'Simple Description Component'}>
            <Component>
                <ReactSkeleton color={'#000'}/>
            </Component>

            <Code>
                {code}
            </Code>

            <Properties data={propertiesData}/>
        </Description>
    );
};
