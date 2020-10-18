import React from 'react';
import '@atlaskit/css-reset';
import { hot } from 'react-hot-loader/root';

import { Description, Code, Component, Properties } from '@scripty/react-examples';
import { ColorFilter } from '../../src';

const Example = () => {

    const code = `import React from 'react';
import { ColorFilter } from '@scripty/react-color-filter';

const App = () => {
    return <ColorFilter color={'#000'}/>
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
        <Description title={'ColorFilter'}>
            <Component>
                <ColorFilter color={'#000'}/>
            </Component>

            <Code>
                {code}
            </Code>

            <Properties data={propertiesData}/>
        </Description>
    );
};

export default hot(Example);
