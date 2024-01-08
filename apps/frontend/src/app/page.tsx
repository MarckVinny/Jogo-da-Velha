import BoardArea from '@/components/game/BoardArea'
import Result from '@/components/result/Result'
import Scoreboard from '@/components/game/Scoreboad'
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (
    // <div className='flex justify-center itens-center text-center mt-6'>
    <div className='flex flex-col'>
      <Result />
      <Menu />
      <BoardArea />
      <Scoreboard />
    </div>
  )
}
