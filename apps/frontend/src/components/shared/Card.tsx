export interface CardProps {
  children?: React.ReactNode
  color?: 'primary' | 'secondary' | 'light' | 'dark'
  noBorder?: boolean
  hover?: boolean
}

export default function Card(props: CardProps) {
  return (
    <div className='flex justify-center items-center'>
      <div className={`rounded-xl bg-${props.color ?? 'light'}-600`}>
        <div className={`rounded-xl ${props.noBorder ? '' : 'mb-2'}`}>
          <div
            className={`rounded-xl bg-${props.color ?? 'light'}-500 p-2 overflow-hidden ${
              props.hover ? `hover:bg-${props.color ?? 'light'}-400` : ''
            }`}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
