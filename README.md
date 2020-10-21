# @scripty/react-color-filter

# Description

react-color-filter component.

# Usage
```bash
npm install -s @scripty/react-color-filter
```

##### Client: Example.jsx

```javascript
import React, {useState} from 'react';
import { ColorFilter } from '@scripty/react-color-filter';

const App = () => {
    const [colors] = useState(['#cd1212', '#53e239']);
    const [filter, setFilter] = useState(['#cd1212']);

    return <ColorFilter setFilter={setFilter} colors={colors} filter={filter} />;
}
```
