/* eslint-disable react/no-unescaped-entities */
'use client'
import { IconCircle, IconX } from "@tabler/icons-react"
import { PlayerType } from "core"
import { useContext } from "react"
import GameContext from "@/contexts/GameContext"
import Modal from "@/components/shared/Modal"
import Button from "@/components/shared/Button"

export default function Result(){

  const { result, nextRound, clear } = useContext(GameContext)

  return(
    <Modal visible={result.finished}>
      {result.tied    //* Se o resultado for Empate
      ? (     //* Então, mostre a mensagem de Empate.
        <span className="uppercase font-bold text-light-500 text-3xl">
          Terminou Empatado!!!    {/* //* Mensagem de Empate.*/}
        </span>
      ) 
      : (     //* Senão, mostre a Mensagem com o Tipo do Vencedor
        <>
          {/* //* primeira parte da Mensagem do Modal */}
          <span className="uppercase font-bold text-light-500">
            O Jogador " { result.xWins    //* Se no resultado o X vencer
              ? PlayerType.X              //* Então, renderize o Tipo do Jogador X
              : PlayerType.O              //* Senão, renderize o Tipo do Jogador O
            } " Ganhou!!!                 {/*//* Restante da Mensagem de de Vitória.*/}
          </span>
          {/* //* Segunda parte da Mensagem do Modal */}
          {/* //* Alinhe os itens em linha, centralizados e com espaço de 16px */}
          <div className={`flex items-center gap-4 pl-20 pr-20    //* O padding é para ficar centralizado no Smartphone
          ${ result.xWins             //* Se no resultado o X vencer
            ? 'text-primary-500'    //* Então, define a cor Primaria
            : 'text-secondary-500'  //* Senão, define a cor Secundaria
          }`}
          >
            { result.xWins                            //* Se no resultado o X vencer
              ? <IconX size={60} stroke={6} />        //* Então, renderize o ícone do X
              : <IconCircle size={60} stroke={6} />   //* Senão, renderize o ícone do Circulo
            }
            {/* //* Formate o texto em letras maiúsculas e tamanho da fonte 46px */}
            <span className="uppercase font-bold text-4xl">   
              Venceu a Rodada!!!
            </span>
          </div>
        </>
      )
      }
      <div>
        <Button onClick={clear}>
          <div className="uppercase font-bold text-dark-500">Zerar</div>
        </Button>
        <Button color="secondary" onClick={nextRound}>
          <div className="uppercase font-bold text-dark-500">Próxima Rodada</div>
        </Button>
      </div>
    </Modal>
  )
}