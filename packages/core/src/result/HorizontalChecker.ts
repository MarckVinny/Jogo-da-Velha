import Board from '../game/Board'
import CellsChecker from './CellsChecker'
import GameResult from './GameResult'
import ResultChecker from './ResultChecker'

export default class HorizontalChecker implements ResultChecker {
  check(board: Board): GameResult {
    const linha0: [number, number][] = [[0, 0], [0, 1], [0, 2]] //* posições da Linha0
    const linha1: [number, number][] = [[1, 0], [1, 1], [1, 2]] //* posições da Linha1
    const linha2: [number, number][] = [[2, 0], [2, 1], [2, 2]] //* posições da Linha2
    const finalResult = [
      //* Verifica se todas as Células da Linha estão preenchidas com o mesmo Jogador
      //* depois o board verifica se houve alguma Jogada Vencedora na Linha
      new CellsChecker(linha0).check(board),
      new CellsChecker(linha1).check(board),
      new CellsChecker(linha2).check(board)
      //* Procura nos resultados se está finalizado
    ].find((result) => result.finished)
    return finalResult ?? new GameResult()
  }
}

