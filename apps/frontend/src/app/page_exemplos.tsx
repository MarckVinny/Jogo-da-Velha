import CellArea from '@/components/game/CellArea'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Modal from '@/components/shared/Modal'
import { PlayerType } from 'core'

export default function Home() {
  return (
    <div>
      <div className='flex justify-around itens-center text-center mt-6'>
        <Card color='primary'>
          <h2 className='text-lg'>Isto é um Card!</h2>
          <p className='text-sm'>com Cor Primária</p>
        </Card>
        <Card color='secondary'>
          <h2 className='text-lg'>Isto é um Card!</h2>
          <p className='text-sm'>com Cor Secundária</p>
        </Card>
        <Card color='light'>
          <h2 className='text-lg'>Isto é um Card!</h2>
          <p className='text-sm'>com Cor Light</p>
        </Card>
        <Card color='dark'>
          <h2 className='text-lg'>Isto é um Card!</h2>
          <p className='text-sm'>com Cor Dark</p>
        </Card>
      </div>
      <div className='flex justify-around items-center'>
        <div>
          <span className='text-center block'>
            Célula <br />
            Vazia
          </span>
          <CellArea />
        </div>
        <div>
          <span className='text-center block'>
            Célula <br />
            Marcada
          </span>
          <CellArea type={PlayerType.X} />
        </div>
        <div>
          <span className='text-center block'>
            Célula <br />
            Marcada
          </span>
          <CellArea type={PlayerType.O} />
        </div>
        <div>
          <span className='text-center block'>
            Célula <br />
            Selecionada
          </span>
          <CellArea type={PlayerType.X} selected />
        </div>
        <div>
          <span className='text-center block'>
            Célula <br />
            Selecionada
          </span>
          <CellArea type={PlayerType.O} selected />
        </div>
      </div>
      <Modal visible={true}>
        <h1 className='text-5xl p-4'>Isto é um Modal</h1>
        <Button color='secondary'>Click aqui!!!</Button>
      </Modal>
    </div>
  )
}
