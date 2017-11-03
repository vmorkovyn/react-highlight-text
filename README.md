[![npm downloads](https://img.shields.io/npm/dm/react-highlight-text.svg?style=flat-square)](https://www.npmjs.com/package/react-highlight-text)

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
