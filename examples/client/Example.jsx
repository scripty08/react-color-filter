import React, { useState } from 'react';
import '@atlaskit/css-reset';
import { hot } from 'react-hot-loader/root';
import { Description, Code, Component, Properties } from '@scripty/react-examples';
import { ColorFilter } from '../../src';

export const App = () => {
    const [colors] = useState(['#cd1212', '#53e239']);
    const [filter, setFilter] = useState(['#cd1212']);

    return <ColorFilter setFilter={setFilter} colors={colors} filter={filter} />;
}

const Example = () => {
    const code = `import React from 'react';
import { ColorFilter } from '@scripty/react-color-filter';
const App = () => {
    const [colors] = useState(['#cd1212', '#53e239']);
    const [filter, setFilter] = useState(['#cd1212']);

    return <ColorFilter setFilter={setFilter} colors={colors} filter={filter} />;
}
`;

    const propertiesData = [
        {
            property: 'color',
            description: 'list of hex colors',
            type: 'array',
            default: ''
        },
        {
            property: 'filter',
            description: 'list of filtered hex colors',
            type: 'array',
            default: ''
        },
        {
            property: 'setFilter',
            description: 'set filter function',
            type: 'function',
            default: ''
        }
    ]

    return (
        <Description title={'ColorFilter'}>
            <Component>
                <App />
            </Component>

            <Code>
                {code}
            </Code>

            <Properties data={propertiesData}/>
        </Description>
    );
};

export default hot(Example);
