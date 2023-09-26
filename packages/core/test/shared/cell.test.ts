import { Cell, PlayerType } from '../../src'

test('Deve criar uma Célula preenchida com o Jogador X.', () => {
  const cell = new Cell(0, 2, PlayerType.X) //* Cria uma Célula preenchida na Posição (0,2)
  expect(cell.row).toBe(0) //* verifica se é a Linha 0
  expect(cell.col).toBe(2) //* verifica se é a coluna 2
  expect(cell.type).toBe(PlayerType.X) //* verifica se é o Jogador X
  expect(cell.isEmpty()).toBeFalsy() //* verifica se está vazio "FALSO"
  expect(cell.isNotEmpty()).toBeTruthy() //* verifica se está preenchido "VERDADEIRO"
})

test('Deve criar uma Célula Vazia.', () => {
  const cell = new Cell(0, 2) //* Cria uma Célula Vazia na Posição (0,2)
  expect(cell.row).toBe(0) //* verifica se é a Linha 0
  expect(cell.col).toBe(2) //* verifica se é a coluna 2
  expect(cell.type).toBeNull() //* verifica se é um Jogador
  expect(cell.isEmpty()).toBeTruthy() //* verifica se está vazio "VERDADEIRO"
  expect(cell.isNotEmpty()).toBeFalsy() //* verifica se está preenchido "FALSO"
})

test('Deve criar uma Célula Vazia e transformar em uma Célula Preenchida.', () => {
  const emptyCell = new Cell(0, 2)
  expect(emptyCell.type).toBeNull()

  const cell = emptyCell.markWith(PlayerType.O)
  expect(cell.type).toBe(PlayerType.O)
})

test('Deve ignorar uma marcação em uma Célula já Preenchida.', () => {
  const cell = new Cell(0, 2).markWith(PlayerType.O) //* Marcar a Posição (0, 2) com Jogador O
  const sameCell = cell.markWith(PlayerType.X) //* Se tentar marcar a mesma Célula com o Jogador X
  expect(cell === sameCell).toBeTruthy() //* Se as Duas Células estão Preenchidas, não deve fazer nada.
})
