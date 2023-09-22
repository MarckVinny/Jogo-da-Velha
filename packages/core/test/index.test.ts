import { somar } from '../src'

test('Deve somar dois números', () => {
  const resultado = somar(2, 3)
  expect(resultado).toBe(5)
})
