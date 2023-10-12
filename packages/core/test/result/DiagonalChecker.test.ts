import { Board, PlayerType } from '../../src'
import DiagonalChecker from '../../src/result/DiagonalChecker'

test('Deve finalizar a Jogada com a Vitória do "Jogador X."', () => {
  const board = Board.empty() //* Cria um Tabuleiro Vazio
    .set(0, 0, PlayerType.X) //* Marca a Célula na posição 0,0 com o "Jogador X"
    .set(1, 1, PlayerType.X) //* Marca a Célula na posição 1,1 com o "Jogador X"
    .set(2, 2, PlayerType.X) //* Marca a Célula na posição 2,2 com o "Jogador X"
  //* Cria uma Instância do Verificador Diagonal e verifica se houve vencedor no Tabuleiro.
  const result = new DiagonalChecker().check(board)
  expect(result.finished).toBeTruthy() //* Espera-se que o Resultado Finalizado seja "VERDADEIRA"
  expect(result.xWins).toBeTruthy() //* Espera-se que a Vitória do "Jogador X" seja "VERDADEIRA"
  expect(result.oWins).toBeFalsy() //* Espera-se que a Vitória do "Jogador o" seja "FALSA"
})

test('Deve finalizar a Jogada com a Vitória do "Jogador O."', () => {
  const board = Board.empty() 
    .set(0, 2, PlayerType.O) 
    .set(1, 1, PlayerType.O) 
    .set(2, 0, PlayerType.O) 
  const result = new DiagonalChecker().check(board)
  expect(result.finished).toBeTruthy() 
  expect(result.xWins).toBeFalsy() 
  expect(result.oWins).toBeTruthy() 
})

test('Deve continuar em Progresso.', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.X)
    .set(1, 1, PlayerType.X)
    .set(2, 2, PlayerType.O)
  const result = new DiagonalChecker().check(board)
  expect(result.inProgress).toBeTruthy()
  expect(result.xWins).toBeFalsy()
  expect(result.oWins).toBeFalsy()
})
