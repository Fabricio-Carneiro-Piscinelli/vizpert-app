import { memo } from 'react';

import Book from '../../book';

import ShelfRow from '../shelfRow';

// data
import dataBooks from '../../../data/books';

// style
import { Content, Row } from './shelfRowContentStyle';

const ShelfRowContent = memo(function Container({ positionBooks }) {
  return (
    <Content>
      <Row>
        <ShelfRow>
          {positionBooks?.rowOne.map((item) => {
            return <Book ObjectBook={dataBooks[item]} row="one" />;
          })}
        </ShelfRow>
      </Row>

      <Row>
        <ShelfRow>
          {positionBooks?.rowTwo.map((item) => {
            return <Book ObjectBook={dataBooks[item]} row="two" />;
          })}
        </ShelfRow>
      </Row>
    </Content>
  );
});

export default ShelfRowContent;
