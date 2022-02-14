import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// icon
import SVGBookcase from '../../Assets/bookcase.svg';

import ShelfRowContent from './shelfRowContent';

// style
import { Content } from './styleBookCase';

function Bookcase() {
  const positionsBooks = {
    rowOne: ['BookA', 'BookB', 'BookC', 'BookD', 'BookE', 'BookF', 'BookG', 'BookH', 'BookI'],
    rowTwo: ['BookG', 'BookH', 'BookI', 'BookC'],
  };

  return (
    <Content background={SVGBookcase}>
      <DndProvider backend={HTML5Backend}>
        <ShelfRowContent positionBooks={positionsBooks} />
      </DndProvider>
    </Content>
  );
}

export default Bookcase;
