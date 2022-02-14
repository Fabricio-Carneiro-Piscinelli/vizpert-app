import { useDrop } from 'react-dnd';

// style
import { Content, BooksChildren } from './shelfRowStyle';

function ShelfRow({ children }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'BOX',
    drop: () => ({ name: 'ShelfRow' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <Content ref={drop} background={backgroundColor}>
      {/* {isActive && '+'} */}
      <BooksChildren>{children}</BooksChildren>
    </Content>
  );
}

export default ShelfRow;
