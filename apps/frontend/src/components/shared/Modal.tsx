export interface ModalProps {
  visible: boolean
  children: React.ReactNode
  className?: string
}

export default function Modal(props: ModalProps) {
  return props.visible ? (
    // * Cria uma Tela de Sobreposição centralizada com preto 50%
    <div className='flex flex-col justify-center items-center absolute w-screen h-screen top-0 left-0 bg-black/50'>
      {/* Cria um Modal centralizado na vertical com largura total e 1/3 da altura com dark-500 80%, personalizando com Classes adicionais */}
      <div className={`flex flex-col justify-center items-center w-full h-1/3 bg-dark-500/80 ${props.className ?? ''}`}>
        {/* Conteúdo do Modal, contendo qualquer Elemento React */}
        {props.children}
      </div>
    </div>
  ) : null
}