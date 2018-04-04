import yup from 'yup'

export const numberOrStringArray = yup.array().of(
  yup.mixed().concat(
    yup.number().integer(),
    yup.string(),
  )
)

export const numberStringArrayOrObject = yup.mixed().concat(
  numberOrStringArray,
  yup.object()
)

export const arrayOrObject = yup.mixed().concat(
  yup.array().of(
    yup.string()
  ),
  yup.object()
)

export const complex = yup.object()

export const space = numberOrStringArray
export const fontSizes = numberOrStringArray
export const lineHeights = numberStringArrayOrObject
export const fontWeights = numberStringArrayOrObject
export const letterSpacings = numberStringArrayOrObject
export const colors = yup.object()
export const maxWidths = numberStringArrayOrObject
export const minWidths = numberStringArrayOrObject
export const heights = numberStringArrayOrObject
export const maxHeights = numberStringArrayOrObject
export const minHeights = numberStringArrayOrObject

export const radii = numberStringArrayOrObject
export const borders = arrayOrObject
export const shadows = arrayOrObject

export const textStyles = complex
export const colorStyles = complex
export const buttons = complex

export const thema = yup.object().shape({
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  colors,
  maxWidths,
  minWidths,
  heights,
  maxHeights,
  minHeights,
  radii,
  borders,
  shadows,
  textStyles,
  colorStyles,
  buttons,
})

export const isValid = theme => thema.isValidSync(theme)
export const validate = theme => thema.validateSync(theme)

export default validate
