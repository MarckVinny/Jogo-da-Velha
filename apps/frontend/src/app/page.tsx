'use client'

import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Modal from '@/components/shared/Modal'

export default function Home() {
  return (
    <div className='flex justify-around itens-center text-center mt-10'>
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
      <Modal visible>
        <h1 className='text-5xl p-4'>Isto é um Modal</h1>
        <Button color='secondary' onClick={() => console.log('Clicado!')}>
          Click aqui!!!
        </Button>
      </Modal>
    </div>
  )
}
