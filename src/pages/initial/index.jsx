// styled
import { Content } from './initialStyled';

// icons
import logo from '../../Assets/logo.svg';
import bgStripes from '../../Assets/bg_stripes.svg';
import ground from '../../Assets/ground.svg';

// data
// import dataBooks from '../../data/books';

// componets
// import Book from '../../components/book';
import Bookcase from '../../components/bookcase';

// layouts
// import Ground from '../../layouts/ground';
import People from '../../layouts/people';

function InitialPage() {
  return (
    <Content bg_stripes={bgStripes} ground={ground}>
      {/* <Title /> */}
      <div>
        <Bookcase />
      </div>
      <div style={{ width: 100 }}>
        <img src={logo} alt="logo" />
      </div>

      <People />
      {/* <div style={{ width: 40, display: 'flex' }}>
        <Book ObjectBook={dataBooks.BookA} />
        <Book ObjectBook={dataBooks.BookB} />
        <Book ObjectBook={dataBooks.BookC} />
        <Book ObjectBook={dataBooks.BookD} />
        <Book ObjectBook={dataBooks.BookE} />
        <Book ObjectBook={dataBooks.BookF} />
        <Book ObjectBook={dataBooks.BookG} />
        <Book ObjectBook={dataBooks.BookH} />
        <Book ObjectBook={dataBooks.BookI} />
      </div> */}
    </Content>
  );
}

export default InitialPage;
