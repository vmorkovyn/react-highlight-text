# react-highlight-text

## Quick start

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HighlightText from 'react-highlight-text';

const Text = () => {
    const style = { backgroundColor: 'yellow' };
    return (
        <div>
            <HighlightText text={'example text'} searchQuery={'text'} style={style} />
            <HighlightText text={'example text'} searchQuery={'exam'} style={style} />
        </div>
    );
};
```

## Installation

`react-highlight-text` requires React >= 0.14

### npm

```
npm install --save react-highlight-text
```