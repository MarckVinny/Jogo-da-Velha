'use client'
import { Board, Game, GameResult, Player, PlayerType} from "core"
import { createContext, useState } from "react"

interface GameContextProps {
  board: Board,
  result: GameResult,
  addMove: (row: number, col: number) => void
}

const GameContext = createContext<GameContextProps>({} as any)

export function GameProvider(props: any){

  const [ game, setGame ] = useState<Game>(
    Game.create(
      new Player('P1', PlayerType.X),
      new Player('P2', PlayerType.O)
    )
  )

  function addMove(row: number, col: number){
    setGame(game.addMove(row, col))
  }

  return (
    <GameContext.Provider value={{
      board: game.board,
      result: game.result,
      addMove
    }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContext