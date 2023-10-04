import { Cell, GameResult, PlayerType } from '../../src'

test('Deve criar um Resultado em Progresso.', () => {
  const gameResult = new GameResult() //* Cria um Resultado do Jogo Vazio
  expect(gameResult.finished).toBeFalsy() //* O Resultado do Jogo finalizou? FALSO
  expect(gameResult.tied).toBeFalsy() //* O Resultado do Jogo é um Empate? FALSO
  expect(gameResult.inProgress).toBeTruthy() //* O Resultado do Jogo está em progresso? VERDADEIRO
})

test('Deve criar um Resultado Empatado.', () => {
  const empatado = new GameResult([], true) //* Cria um Resultado do Jogo sem uma Jogada Vencedora e um Empate "true"
  expect(empatado.finished).toBeTruthy() //* O Resultado do Jogo finalizou? VERDADEIRO
  expect(empatado.tied).toBeTruthy() //* O Resultado do Jogo é um Empate? VERDADEIRO
  expect(empatado.inProgress).toBeFalsy() //* O Resultado do Jogo está em progresso? FALSO
})

test('Deve criar um Resultado com vitória do "Jogador X"', () => {
  const c1 = new Cell(0, 0, PlayerType.X) //* Faz uma Jogada na Posição (0,0) com o Jogador X
  const c2 = new Cell(0, 1, PlayerType.X) //* Faz uma Jogada na Posição (0,1) com o Jogador X
  const c3 = new Cell(0, 2, PlayerType.X) //* Faz uma Jogada na Posição (0,2) com o Jogador X
  const victory = new GameResult([c1, c2, c3]) //* A Jogada Vencedora

  expect(victory.finished).toBeTruthy() //* O Resultado do Jogo finalizou? VERDADEIRO
  expect(victory.tied).toBeFalsy() //* O Resultado do Jogo é um Empate? FALSO
  expect(victory.inProgress).toBeFalsy() //* O Resultado do Jogo está em progresso? FALSO
  expect(victory.hasCell(0, 0)).toBeTruthy() //* Tem uma Jogada na posição (0,0)? VERDADEIRO
  expect(victory.hasCell(1, 1)).toBeFalsy() //* Tem uma Jogada na posição (1,1)? FALSO
})

test('Deve criar um Resultado com vitória do "Jogador O"', () => {
  const c1 = new Cell(0, 0, PlayerType.O) //* Faz uma Jogada na Posição (0,0) com o Jogador O
  const c2 = new Cell(1, 1, PlayerType.O) //* Faz uma Jogada na Posição (1,1) com o Jogador O
  const c3 = new Cell(2, 2, PlayerType.O) //* Faz uma Jogada na Posição (2,2) com o Jogador O
  const victory = new GameResult([c1, c2, c3]) //* A Jogada Vencedora

  expect(victory.finished).toBeTruthy() //* O Resultado do Jogo finalizou? VERDADEIRO
  expect(victory.tied).toBeFalsy() //* O Resultado do Jogo é um Empate? FALSO
  expect(victory.inProgress).toBeFalsy() //* O Resultado do Jogo está em progresso? FALSO
  expect(victory.hasCell(0, 0)).toBeTruthy() //* Tem uma Jogada na posição (0,0)? VERDADEIRO
  expect(victory.hasCell(0, 1)).toBeFalsy() //* Tem uma Jogada na posição (0,1)? FALSO
})
