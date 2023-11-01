import Card from './Card'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'light' | 'dark'
}

export default function Button(props: ButtonProps) {
  return (
    <button {...props} className='text-black'>
      <Card color={props.color} hover>
        {props.children}
      </Card>
    </button>
  )
}
