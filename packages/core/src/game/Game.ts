import Player from '../player/Player'
import DiagonalChecker from '../result/DiagonalChecker'
import GameResult from '../result/GameResult'
import HorizontalChecker from '../result/HorizontalChecker'
import TieChecker from '../result/TieChecker'
import VerticalChecker from '../result/VerticalChecker'
import { PlayerType } from '../shared/PlayerType'
import Board from './Board'

export default class Game {
  private constructor(
    readonly player1: Player, //* Jogador 1
    readonly player2: Player, //* Jogador 2
    readonly board: Board, //* Tabuleiro
    readonly first: Player, //* Primeiro Jogador
    readonly currentPlayer: Player, //* Jogador Atual
    readonly ties: number = 0, //* Empate
    readonly result: GameResult = new GameResult() //* Resultado Vazio
  ) {}

  //? Método Estático que cria um Jogo passando por parâmetro o Jogador 1 e o Jogador 2
  static create(player1: Player, player2: Player): Game {
    //* Cria uma Nova Instancia do Jogo recebendo por parâmetro:
    return new Game(
      player1, //* Jogador 1,
      player2, //* Jogador 2,
      Board.empty(), //* Tabuleiro Vazio,
      player1, //* Primeiro Jogador
      player1 //* Jogador Atual.
    )
  }

  //? Método que reinicia a partida
  nextRound(): Game {
    //* newFirst, verifica se o Tipo deste Primeiro Jogador
    //* é igual ao Tipo do Jogador 1
    const newFirst =
      this.first.type === this.player1.type
        ? this.player2 //* Se for igual, retorna o Jogador 2
        : this.player1 //* Senão, retorna o Jogador 1

    //* retorna um Novo Jogo recebendo os mesmos Jogadores
    return new Game(
      this.player1, //* Jogador 1 com suas pontuações
      this.player2, //* Jogador 2 com suas pontuações
      Board.empty(), //* um Tabuleiro Vazio
      newFirst, //* como Primeiro Jogador, recebe o Novo Primeiro Jogador
      newFirst, //* como Jogador Atual, recebe o Novo Primeiro Jogador
      this.ties //* e por fim mantém a quantidade de Empates
    )
  }

  //? Método que Limpa o Jogo
  clear(): Game {
    //* newFirst, verifica se o Tipo deste Primeiro Jogador
    //* é igual ao Tipo do Jogador 1
    const newFirst =
      this.first.type === this.player1.type
        ? this.player2 //* Se for igual, retorna o Jogador 2
        : this.player1 //* Senão, retorna o Jogador 1

    //* retorna uma Nova Instância do Jogo e:
    return new Game(
      this.player1.clear(), //* limpa o Jogador 1
      this.player2.clear(), //* limpa o Jogador 2
      Board.empty(), //* limpa o Tabuleiro
      newFirst, //* altera o Primeiro Jogador
      newFirst, //* altera o Jogador Atual
      0 //* zera a pontuação de Empate
    )
  }

  //? Método que adiciona um movimento, recebendo como parâmetro uma posição
  addMove(row: number, col: number): Game {
    //* Verifica Se esta posição no Tabuleiro está preenchida
    //* Se estiver, retorna a mesma Instância
    if (this.board.isNotEmpty(row, col)) return this

    //* Verifica Se o resultado NÃO está em progresso
    //* Se NÃO estiver, retorna a mesma Instância
    if (!this.result.inProgress) return this

    //* Seta o Tipo do Jogador Atual nesta posição do Tabuleiro
    const board = this.board.set(row, col, this.currentPlayer.type)

    //* Calcula o Resultado neste Tabuleiro
    const result = this.calculateResult(board)

    //*
    const [player1, player2] = this.players(this.result)

    //* retorna uma Nova Instância do Jogo
    return new Game(
      player1, //* Jogador 1
      player2, //* Jogador 2
      board, //* Tabuleiro
      this.first, //* Primeiro Jogador
      this.currentPlayer, //* Jogador Atual
      result.tied //* Se o resultado for Empatado
        ? this.ties + 1 //* acrescenta 1 ponto ao Empates
        : this.ties, //* Senão, retorna o valor atual
      result //* resultado
    ).switchPlayer() //* troca o Jogador
  }

  //? Método Privado Calculo do Resultado do Tabuleiro
  private calculateResult(board: Board): GameResult {
    const results = [
      new VerticalChecker().check(board), //* Verifica se houve Vencedor na Vertical
      new HorizontalChecker().check(board), //* Verifica se houve Vencedor na Horizontal
      new DiagonalChecker().check(board), //* Verifica se houve Vencedor na Diagonal
    ]

    return (
      results.find((result) => result.finished) ?? //* Procura se houve Vencedor nos resultados acima,
      new TieChecker().check(board)
    ) //* Senão, retorna Empate.
  }

  //? Método Privado que retorna o Jogador com a Pontuação
  private players(result: GameResult): Player[] {
    //* Se o "Jogador X" Venceu
    if (result.xWins) {
      //* Verifique o Tipo deste Jogador 1
      //* é estritamente igual ao Tipo do "Jogador X"
      return this.player1.type === PlayerType.X
        ? //* Se for, retorne um Array acrescentando 1 ponto a este Jogador 1 e sem alteração no Jogador 2
          [this.player1.addScore(1), this.player2]
        : //* Senão, retorne um Array acrescentando 1 ponto a este Jogador 2 e sem alteração no Jogador 1
          [this.player2.addScore(1), this.player1]
    }

    //* Se o "Jogador O" Venceu
    if (result.oWins) {
      return this.player1.type === PlayerType.O
        ? [this.player1.addScore(1), this.player2]
        : [this.player2.addScore(1), this.player1]
    }

    //* Se não houver Vencedor, retorne um Array com estes Jogadores sem alterações
    return [this.player1, this.player2]
  }

  //? Método Privado que Troca/Inverte o Tipo do Jogador
  private switchPlayer(): Game {
    //* Verifica se o Resultado deste Jogo NÃO está em progresso
    //* Se NÃO estiver, retorna a mesma Instância
    if (!this.result.inProgress) return this

    const newCurrentPlayer =
      //* Verifica se o Tipo deste Jogador Atual 
      //* é estritamente igual ao Tipo do Jogador 1
      this.currentPlayer.type === this.player1.type
        ? this.player2          //* Se for, retorna o Jogador 2
        : this.player1          //* Senão, retorna o Jogador 1
    
    //* Retorna uma Nova Instância do Jogo
    return new Game(
      this.player1,         //* este Jogador 1
      this.player2,         //* este Jogador 2
      this.board,           //* este Tabuleiro
      this.first,           //* este Primeiro Jogador
      newCurrentPlayer,     //* Novo Jogador Atual
      this.ties,            //* este Empate
      this.result           //* este Resultado
    )
  }
}
