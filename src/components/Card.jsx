import { useDrag } from 'react-dnd'

const ItemTypes = {
  MOUSE: 'mouse'
}

const Card = () => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.MOUSE,      
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <div ref={dragRef} style={{ opacity }}>
      Some text
    </div>
  )
}

export default Card