import Cell from '../shared/Cell'
import { PlayerType } from '../shared/PlayerType'

export default class GameResult {
  constructor(
    readonly winningMove: Cell[] = [], //* Cria um Array de Células da Jogada Vencedora - por padrão cria um Array Vazio
    private _tied: boolean = false //* Cria uma variável privada de Empate - com o valor padrão FALSO
  ) {}

    // //? Verifica se o "Jogador X" Venceu
    // get xWins(): boolean {
    //   return this.winningMove[0]?.type === PlayerType.X
    // }

  //? Verifica se o "Jogador X" Venceu
  get xWins(): boolean {
    //* Verifica se há pelo menos uma Célula na Jogada Vencedora
    if (this.winningMove.length === 0) {
      return false
    }

    //* Obtém o Tipo do "Jogador X"
    const playerTypeX = PlayerType.X

    //* Verifica se todas as Células na Jogada Vencedora são do "Jogador X"
    return this.winningMove.every((cell) => cell.type === playerTypeX)
  }

    // //? Verifica se o "Jogador O" Venceu
    // get oWins(): boolean {
    //   return this.winningMove[0]?.type === PlayerType.O
    // }

  //? Verifica se o "Jogador O" Venceu
  get oWins(): boolean {
    //* Verifica se há pelo menos uma Célula na Jogada Vencedora
    if (this.winningMove.length === 0) {
      return false
    }

    //* Obtém o Tipo do "Jogador O"
    const playerTypeO = PlayerType.O

    //* Verifica se todas as Células na Jogada Vencedora são do "Jogador O"
    return this.winningMove.every((cell) => cell.type === playerTypeO)
  }

  //? Verifica de Houve Empate
  get tied(): boolean {
    //* Retorna Verdadeiro "true"
    //* se, xWins Não for Vencedor
    //* E oWins Não for Vencedor
    //* E _tied receber o valor Verdadeiro "true"
    return !this.xWins && !this.oWins && this._tied
  }

  //? Verifica se o Jogo está em Progresso
  get inProgress(): boolean {
    //* Retorna Verdadeiro "true"
    //* Se o tamanho da Jogada Vencedora for igual a ZERO
    //* E Não houver comunicação de Empate
    return this.winningMove.length === 0 && !this._tied
  }

  //? Verifica se o Jogo está Finalizado
  get finished(): boolean {
    //* O retorno é "true" se o Jogo estiver Finalizado
    //* e "false" se estiver em Progresso
    return !this.inProgress
  }

  hasCell(row: number, col: number): boolean {
    //* Verifica se uma Célula com as coordenadas fornecidas está presente na Sequência de Células Vencedoras
    return (
      this.winningMove.find((cell) => cell.row === row && cell.col === col) !==
      undefined
    )
  }
}
