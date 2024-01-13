import BoardArea from '@/components/game/BoardArea'
import Menu from '@/components/menu/Menu'
import Result from '@/components/result/Result'
import Scoreboard from '@/components/game/Scoreboad'
import Title from '@/components/shared/Title'

export default function Home() {
  return (
    // <div className='flex justify-center itens-center text-center mt-6'>
    <div className='flex flex-col'>
      <Result />
      <Title />
      <Menu />
      <BoardArea />
      <Scoreboard />
    </div>
  )
}
