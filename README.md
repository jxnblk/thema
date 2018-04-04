
# thema

Schema validation for design system theme objects.
Intended for use with [styled-system][sys]

```sh
npm i thema
```

```js
import { isValid } from 'thema'
import theme from './theme'

isValid(theme)
// returns true for valid theme objects
```

## Schema

This schema is based on the theme structure used in [styled-system][sys],
but can be used for other purposes as well, where a standardize theme
shape can help with interoperability.

```js
Theme {
  space: NumberOrStringArray,
  fontSizes: NumberOrStringArray,
  lineHeights: NumberOrStringObject,
  fontWeights: NumberOrStringObject,
  letterSpacings: NumberOrStringObject,
  colors: Object,
  maxWidths: NumberOrStringObject,
  minWidths: NumberOrStringObject,
  heights: NumberOrStringObject,
  maxHeights: NumberOrStringObject,
  minHeights: NumberOrStringObject,
  radii: NumberOrStringObject,
  borders: ArrayOrObject,
  shadows: ArrayOrObject,
  textStyles: NestedObject,
  colorStyles: NestedObject,
  buttons: NestedObject
}
```

[sys]: https://github.com/jxnblk/styled-system
