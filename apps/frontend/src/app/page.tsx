import Card from "@/components/shared/Card"

export default function Home() {
  return (
    <div className='flex justify-around text-center mt-10'>
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
  )
}
