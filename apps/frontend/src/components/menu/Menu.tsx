'use client'

import { IconCircle, IconRefresh, IconX } from '@tabler/icons-react'
import { PlayerType } from 'core'
import { useContext } from 'react'
import Button from '../shared/Button'
import Card from '../shared/Card'
import GameContext from '@/contexts/GameContext'

export default function Menu() {

  const { currentPlayer, nextRound } = useContext(GameContext)

  return (
    <div className='flex justify-between items-center'>
      <Card noBorder color='dark'>
        <div className='flex gap-2 p-1'>
          <IconX stroke={6} className='text-primary-500' />
          <IconCircle stroke={6} className='text-secondary-500' />
        </div>
      </Card>
      <Card noBorder color='dark'>
        <div className='flex justify-center items-center uppercase font-bold text-light-500 gap-2 p-1'>
          {currentPlayer.type === PlayerType.X && <IconX stroke={6} className='text-primary-500' />}
          {currentPlayer.type === PlayerType.O && <IconCircle stroke={6} className='text-secondary-500' />}
          <span>Joga</span>
        </div>
      </Card>
      <Button onClick={nextRound}>
        <div className='text-dark-500'>
          <IconRefresh stroke={2} />
        </div>
      </Button>
    </div>
  )
}
