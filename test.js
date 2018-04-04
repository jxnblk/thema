import test from 'ava'
import thema, {
  validate,
  isValid
} from '.'

test('returns a boolean', t => {
  const a = isValid({})
  t.is(a, true)
})

test('validates space', t => {
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
