import { Player, PlayerType } from '../../src'

test('Deve retornar a mesma instância quando quando adicionar 0 pontos.', () => {
  const player = new Player('P1', PlayerType.O)
  expect(player.addScore(0) === player).toBeTruthy()
})

test('Deve mudar de Jogador quando adicionar ponto ao Jogador Atual.', () => {
  const player = new Player('P1', PlayerType.O)
  expect(player.addScore(1) === player).toBeFalsy()
})

test('Deve adicionar 10 pontos ao Jogador!', () => {
  const player = new Player('P1', PlayerType.O).addScore(10)
  expect(player.name).toBe('P1')
  expect(player.type).toBe(PlayerType.O)
  expect(player.score).toBe(10)
})

test('Deve limpar a Pontuação existente dos Jogadores.', () => {
  const player = new Player('P1', PlayerType.O, 100).clear()
  expect(player.name).toBe('P1')
  expect(player.type).toBe(PlayerType.O)
  expect(player.score).toBe(0)
})
