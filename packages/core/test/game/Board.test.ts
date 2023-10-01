import { PlayerType } from '../../src'
import Board from '../../src/game/Board'

test('Deve criar um Tabuleiro Vazio.', () => {
  const board = Board.empty() //* Cria um Tabuleiro Vazio
  expect(board.rows).toBe(3) //* Verifica se tem 3 Linas
  expect(board.cols).toBe(3) //* Verifica se tem 3 Colunas
  expect(board.isFull()).toBeFalsy() //* Verifica se o Tabuleiro está Preenchido "FALSO"
})

test('Deve retornar todas a Células do Tabuleiro', () => {
  const board = Board.empty() //* Cria um Tabuleiro Vazio
  expect(board.items.length).toBe(9) //* Verifica a quantidade de Itens do Tabuleiro "9"
})

test('Deve marcar a Posição de uma Jogada (linha, coluna), com o Jogador X', () => {
  const board = Board.empty().set(1, 1, PlayerType.X) //* Cria um Tabuleiro Vazio e marca a Jogada (1, 1) com o Jogador X
  expect(board.isNotEmpty(1, 1)).toBeTruthy() //* Verifica se a Célula na Posição (1, 1) está marcada "VERDADEIRO"
  expect(board.isEmpty(1, 1)).toBeFalsy() //* Verifica se a Célula na Posição (1, 1) está vazia "FALSO"
})

test('Deve verificar se a Posição da Célula existe no Tabuleiro.', () => {
  const board = Board.empty() //* Cria um Tabuleiro Vazio
  expect(board.isEmpty(10, 1)).toBeTruthy() //* Verifica se a Célula na Posição (10, 1) está Vazia "VERDADEIRO", pois a Célula não existe no tabuleiro
  expect(board.isNotEmpty(10, 1)).toBeFalsy() //* Verifica se a Célula na Posição (10, 1) Não está vazia "FALSO", pois a Célula não existe no tabuleiro
})

test('Deve ignorar se a Posição da Célula Não existe no Tabuleiro', () => {
  const board = Board.empty() //* Cria um Tabuleiro Vazio
  const sameBoard = board.set(10, 1, PlayerType.X) //* Cria uma Jogada em uma Posição Inexistente
  expect(board === sameBoard).toBeTruthy() //* Verifica se o Tabuleiro Vazio e a Jogada Inexistente são estritamente iguais "VERDADEIRO"
})
