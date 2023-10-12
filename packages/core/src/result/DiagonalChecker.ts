import Board from "../game/Board";
import CellsChecker from "./CellsChecker";
import GameResult from "./GameResult";
import ResultChecker from "./ResultChecker";

export default class DiagonalChecker implements ResultChecker{
  check(board: Board): GameResult {
    const d1: [number, number][] = [[0, 0], [1, 1], [2, 2]]
    const d2: [number, number][] = [[0, 2], [1, 1], [2, 0]]
    const resultD1 = new CellsChecker(d1).check(board)
    const resultD2 = new CellsChecker(d2).check(board)
    return resultD1.finished ? resultD1 : resultD2
  }
}