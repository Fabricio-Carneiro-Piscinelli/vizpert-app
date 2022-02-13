// styled
import { Content } from './initialStyled';

// icons
// import logo from '../../Assets/logo.svg';
import bgStripes from '../../Assets/bg_stripes.svg';
import ground from '../../Assets/ground.svg';

// data
// import dataBooks from '../../data/books';

// componets
// import Book from '../../components/book';
import Bookcase from '../../components/bookcase';

// layouts
// import Ground from '../../layouts/ground';

function InitialPage() {
  return (
    <Content bg_stripes={bgStripes} ground={ground}>
      {/* <Title /> */}
      <div style={{ width: 100 }}>
        <Bookcase />
      </div>
      {/* <div style={{ width: 40, display: 'flex' }}>
        <img src={logo} alt="logo" />
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
