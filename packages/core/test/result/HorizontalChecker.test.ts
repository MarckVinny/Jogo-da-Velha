import { Board, PlayerType } from '../../src'
import HorizontalChecker from '../../src/result/HorizontalChecker'

test('Deve finalizar a Jogada com a Vitória do "Jogador X."', () => {
  const board = Board.empty() //* Cria um Tabuleiro Vazio
    .set(0, 0, PlayerType.X) //* Marca a Célula na posição 0,0 com o "Jogador X"
    .set(0, 1, PlayerType.X) //* Marca a Célula na posição 0,1 com o "Jogador X"
    .set(0, 2, PlayerType.X) //* Marca a Célula na posição 0,2 com o "Jogador X"
  //* Cria uma Instância do Verificador Horizontal e verifica se houve vencedor no Tabuleiro.
  const result = new HorizontalChecker().check(board)
  expect(result.finished).toBeTruthy() //* Espera-se que o Resultado Finalizado seja "VERDADEIRA"
  expect(result.xWins).toBeTruthy() //* Espera-se que a Vitória do "Jogador X" seja "VERDADEIRA"
  expect(result.oWins).toBeFalsy() //* Espera-se que a Vitória do "Jogador o" seja "FALSA"
})

test('Deve continuar em Progresso.', () => {
  const board = Board.empty()
    .set(0, 0, PlayerType.X)
    .set(0, 1, PlayerType.X)
    .set(0, 2, PlayerType.O)
  const result = new HorizontalChecker().check(board)
  expect(result.inProgress).toBeTruthy()
  expect(result.xWins).toBeFalsy()
  expect(result.oWins).toBeFalsy()
})
