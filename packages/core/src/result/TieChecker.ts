import Board from '../game/Board'
import GameResult from './GameResult'
import ResultChecker from './ResultChecker'

export default class TieChecker implements ResultChecker {
  check(board: Board): GameResult {
    return board.isFull() //* Verifica se o Tabuleiro está Preenchido
    ? new GameResult([], true) //* Se estiver, retorna o Empate
    : new GameResult() //* Senão, retorna o Resultado do Jogo Vazio
  }
}
