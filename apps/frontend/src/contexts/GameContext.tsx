'use client'
import { Board, Game, Player, PlayerType} from "core"
import { createContext, useState } from "react"

interface GameContextProps {
  board: Board
}

const GameContext = createContext<GameContextProps>({} as any)

export function GameProvider(props: any){

  const [ game, setGame ] = useState<Game>(
    Game.create(
      new Player('P1', PlayerType.X),
      new Player('P2', PlayerType.O)
    )
  )

  return (
    <GameContext.Provider value={{
      board: game.board
    }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContext