import Board from '../game/Board'
import CellsChecker from './CellsChecker'
import GameResult from './GameResult'
import ResultChecker from './ResultChecker'

export default class VerticalChecker implements ResultChecker {
  check(board: Board): GameResult {
    const coluna0: [number, number][] = [[0, 0], [1, 0], [2, 0]] //* posições da Coluna0
    const coluna1: [number, number][] = [[0, 1], [1, 1], [2, 1]] //* posições da Coluna1
    const coluna2: [number, number][] = [[0, 2], [1, 2], [2, 2]] //* posições da Coluna2
    const finalResult = [
      //* Verifica se todas as Células da Coluna estão preenchidas com o mesmo Jogador
      //* depois o board verifica se houve alguma Jogada Vencedora na Coluna
      new CellsChecker(coluna0).check(board),
      new CellsChecker(coluna1).check(board),
      new CellsChecker(coluna2).check(board)
      //* Procura nos resultados se está finalizado
    ].find((result) => result.finished)
    return finalResult ?? new GameResult()
  }
}

