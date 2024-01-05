import BoardArea from '@/components/game/BoardArea'
import Scoreboard from '@/components/game/Scoreboad'

export default function Home() {
  return (
    // <div className='flex justify-center itens-center text-center mt-6'>
    <div>
      <BoardArea />
      <Scoreboard />
    </div>
  )
}
