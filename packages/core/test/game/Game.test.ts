import { Game, Player, PlayerType } from '../../src'

//* Teste #01
test('Deve reiniciar o Jogo mudando o próximo Jogador.', () => {
  
  //* Cria uma Instância do Jogo
  const game = Game.create(
    new Player('P1', PlayerType.O),     //* com o Jogador "P1" do "Tipo O"
    new Player('P2', PlayerType.X)      //* e com o Jogador "P2" do "Tipo X"
    )
    expect(game.currentPlayer.type).toBe(PlayerType.O)              //* Jogador Atual é do "Tipo O"
    expect(game.nextRound().currentPlayer.type).toBe(PlayerType.X)  //* O próximo Jogador Atual é do "Tipo X"
  })
  
//* Teste #02
test('Deve finalizar o Jogo com a Vitória do Jogador "P1".', () => {
  
  //* Cria uma Instância do Jogo
  const game = Game.create(
    new Player('P1', PlayerType.O),     //* com o Jogador "P1" do "Tipo O"
    new Player('P2', PlayerType.X)      //* e com o Jogador "P2" do "Tipo X"
    )
    .addMove(0, 0)      //* Jogada "P1"
    .addMove(1, 1)      //* Jogada "P2"
    .addMove(0, 1)      //* Jogada "P1"
    .addMove(1, 2)      //* Jogada "P2"
    .addMove(0, 2)      //* Jogada "P1"
    
    expect(game.result.finished).toBeTruthy()   //* Espera-se que o Jogo esteja Finalizado
    expect(game.result.oWins).toBeTruthy()      //* Espera-se a Vitória do Jogador "P1"
    expect(game.result.xWins).toBeFalsy()       //* Espera-se a Derrota do Jogador "P2"
    expect(game.player1.score).toBe(1)          //* Espera-se que Acrescente 1 Ponto ao Jogador "P1"
    expect(game.player2.score).toBe(0)          //* Espeta-se que o Jogador "P2" receba 0 Pontos
  })
  
//* Teste #03
test('Deve finalizar o Jogo com a Vitória do Jogador "P2".', () => {
  const game = Game.create(
    new Player('P1', PlayerType.O), 
    new Player('P2', PlayerType.X)
    )
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0)
    
    expect(game.result.finished).toBeTruthy()
    expect(game.result.oWins).toBeFalsy()
    expect(game.result.xWins).toBeTruthy()
    expect(game.player1.score).toBe(0)
    expect(game.player2.score).toBe(1)
  })
  
//* Teste #04
test('Deve limpar o Jogo depois de uma Vitória.', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O)
    )
    .addMove(0, 0)    //* "P1"
    .addMove(1, 1)    //* "P2"
    .addMove(0, 1)    //* "P1"
    .addMove(1, 2)    //* "P2"
    .addMove(0, 2)    //* "P1"
    .clear()          //* Limpa o Jogo
    
  expect(game.result.inProgress).toBeTruthy()
  expect(game.player1.score).toBe(0)
  expect(game.player2.score).toBe(0)
})

//* Teste #05
test('Deve ir para Próxima Rodada do Jogo depois de uma Vitória.', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O)
  )
    .addMove(0, 0)    //* "P1"
    .addMove(1, 1)    //* "P2"
    .addMove(0, 1)    //* "P1"
    .addMove(1, 2)    //* "P2"
    .addMove(0, 2)    //* "P1"
    .nextRound()      //* Próxima Rodada
    
  expect(game.result.inProgress).toBeTruthy()
  expect(game.player1.score).toBe(1)
  expect(game.player2.score).toBe(0)
  expect(game.currentPlayer.type)     //* Espera-se que o Tipo do Jogador Atual
    .toBe(game.player2.type)          //* Seja do Tipo do Jogador "P2"
})

//* Teste #06
test('Deve alternar Jogador ao Limpar o Jogo.', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O)
    )
    .clear()                          //* Limpa o Jogo
    
  expect(game.currentPlayer.type)     //* Espera-se que o Tipo do Jogador Atual
  .toBe(game.player2.type)            //* Seja do Tipo do Jogador "P2"
  
  const newGame = game.clear()        //* Cria uma Instancia Limpa do Jogo
  
  expect(newGame.currentPlayer.type)  //* Espera-se que o Tipo do Jogador Atual no Novo Jogo Limpo
  .toBe(game.player1.type)            //* Seja do Tipo do Jogador "P1"
})

//* Teste #07
test('Deve alternar Jogador ao ir para Próxima Rodada.', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O)
    )
    .nextRound()                        //* Avança para a Próxima Rodada
    
    expect(game.currentPlayer.type)     //* Espera-se que o Tipo do Jogador Atual
    .toBe(game.player2.type)            //* Seja do Tipo do Jogador "P1"
    
    const newGame = game.nextRound()    //* Cria um Novo Jogo na Próxima Rodada
    
    expect(newGame.currentPlayer.type)  //* Verifica se o Tipo do Jogador Atual na Próxima Rodada
    .toBe(game.player1.type)            //* É o mesmo Tipo do Jogador "P1"
  })
  
//* Teste #08
test('Deve ignorar Jogada repetida.', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O)
    ).addMove(0, 0)                       //* Adiciona um Movimento
  
  const newGame = game.addMove(0, 0)      //* Cria um Novo Jogo com o mesmo Movimento

  expect(game === newGame).toBeTruthy()   //* Verifica se o Movimento do Jogo é igual ao Movimento do Novo Jogo
})

//* Teste #09
test('Deve ignorar Movimento de Jogo ganho.', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O)
    )
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0)
    
  const newGame = game.addMove(2, 2)
  expect(game === newGame).toBeTruthy()
})

//* Teste #10
test('Deve gerar um Jogo Empatado.', () => {
  const game = Game.create(
    new Player('P1', PlayerType.X),
    new Player('P2', PlayerType.O)
  )
    .addMove(0, 0)
    .addMove(0, 1)
    .addMove(0, 2)
    .addMove(1, 1)
    .addMove(1, 0)
    .addMove(1, 2)
    .addMove(2, 1)
    .addMove(2, 0)
    .addMove(2, 2)
  
  expect(game.result.finished).toBeTruthy()
  expect(game.result.tied).toBeTruthy()
})