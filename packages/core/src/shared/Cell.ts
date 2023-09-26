import { PlayerType } from './PlayerType'

//? Classe Imutável "somente leitura - readonly"
export default class Cell {
  constructor(
    readonly row: number,
    readonly col: number,
    readonly type: PlayerType | null = null
  ) {}

  //? Marca com o Tipo do Jogador "X" ou "O"
  markWith(type: PlayerType): Cell {
    if (this.type === null) return this //* Se estiver ocupado, retorne o Jogador Atual
    return new Cell( //* Retorna uma Nova Instância da Célula
      this.row, //* na mesma linha
      this.col, //* na mesma coluna
      type //* contendo o mesmo tipo recebido por parâmetro
    )
  }

  //? Verdadeiro se a Célula estiver Vazia
  isEmpty(): boolean{
    return this.type === null
  }

  //? Verdadeiro se a Célula estiver Ocupada
  isNotEmpty(): boolean {
    return !this.isEmpty()
  }
}
