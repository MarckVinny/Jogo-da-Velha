import Cell from '../shared/Cell'
import { PlayerType } from '../shared/PlayerType'

export default class Board {
  private constructor(readonly state: Cell[][]) {}

  //? Cria um Tabuleiro 3x3 Vazio
  static empty(): Board {
    return new Board([
      [new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)], //* Linha 0
      [new Cell(1, 0), new Cell(1, 1), new Cell(1, 2)], //* Linha 1
      [new Cell(2, 0), new Cell(2, 1), new Cell(2, 2)], //* Linha 2
    ])
  }

  //? Pega quantidade de Linhas do Tabuleiro
  get rows(): number {
    return this.state.length
  }

  //? Pega quantidade de Colunas do Tabuleiro
  get cols(): number {
    return this.state[0].length
  }

  //? Pega todos os Itens do Array de Arrays
  //? e transforma em um único Array
  get items(): Cell[] {
    return this.state.flat()
  }

  //? Pega a posição de uma Célula
  get(row: number, col: number): Cell | null {
    return this.state[row]?.[col] ?? null
  }

  //? Verifica se a Célula está Vazia
  isEmpty(row: number, col: number): boolean {
    return this.get(row, col)?.isEmpty() ?? true
  }

  //? Inverte a verificação de Vazio (está Preenchida)
  isNotEmpty(row: number, col: number): boolean {
    return !this.isEmpty(row, col)
  }

  //? Verifica se o Tabuleiro está todo Preenchido
  isFull(): boolean {
    return this.items.every((cell) => cell.type !== null)
  }

  //? Marca a Célula com uma Jogada
  set(row: number, col: number, type: PlayerType): Board{
    const cell = this.get(row, col)
    if(!cell || cell.isNotEmpty()) return this

    const state = this.state.map((row) => [...row])
    state[row][col] = state[row][col].markWith(type)
    return new Board(state)
  }
}
