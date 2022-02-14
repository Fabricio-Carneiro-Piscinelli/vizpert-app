import { useDrag } from 'react-dnd';

// style
import Content from './bookStyle';

function Book({ ObjectBook, row }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BOX',
    item: { ObjectBook },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`Book: ${ObjectBook.name} , Row: ${row} `);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <Content ref={drag} opacity={opacity}>
      <img src={ObjectBook.icon_svg} alt={`book ${ObjectBook.color}`} />
    </Content>
  );
}

export default Book;
