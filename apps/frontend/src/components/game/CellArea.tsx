import { IconCircle, IconX } from '@tabler/icons-react'
import { PlayerType } from 'core'
import Card from '../shared/Card'

export interface CellAreaProps {
  type?: PlayerType | null
  selected?: boolean
}

export default function CellArea(props: CellAreaProps) {
  return (
    <Card                                 //* Componente Card
      color={                             //* Interface de Cor do Componente Card
        !props.selected                   //* Se NÃO estiver selecionado,
          ? 'dark'                        //* Então, use a cor Dark 
          : props.type === PlayerType.X   //* Senão, verifique Se o Tipo é estritamente igual ao Tipo do "Jogador X"
          ? 'primary'                     //* Então, use a cor Primária 
          : 'secondary'                   //* Senão, use a cor Secundária
        }
    >
      <div className={`flex justify-center items-center w-14 h-14`}>
        {props.type === PlayerType.X && (
          <IconX
            size={70}
            stroke={6}
            className={
              props.selected
                ? 'text-dark-500'
                : 'text-primary-500'
            }
          />
        )}
        {props.type === PlayerType.O && (
          <IconCircle
            size={70}
            stroke={6}
            className={
              props.selected
                ? 'text-dark-500'
                : 'text-secondary-500'
            }
          />
        )}
      </div>
    </Card>
  )
}