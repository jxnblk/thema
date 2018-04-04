import test from 'ava'
import thema, {
  validate,
  validateSync,
  isValid
} from './index'

test('isValid returns a boolean', t => {
  const a = isValid({})
  t.is(a, true)
})

test('validate returns an object', t => {
  const a = validate({})
  t.is(typeof a, 'object')
})

test('isValid checks if theme is valid', t => {
  const a = isValid({
    space: [ 0, 4, 8, 16, 32 ]
  })
  t.is(a, true)
})

test('invalidates space', t => {
  const a = isValid({
    space: [
      {},
      null,
      []
    ]
  })
  t.is(a, false)
})

test('validate returns a errors for invalid themes', t => {
  t.throws(() => {
    validateSync({
      space: [ {} ]
    })
  })
})
