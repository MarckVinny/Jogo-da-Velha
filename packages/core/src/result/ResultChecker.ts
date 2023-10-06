import Board from "../game/Board";
import GameResult from "./GameResult";


export default interface ResultChecker {
    check(board: Board): GameResult
}