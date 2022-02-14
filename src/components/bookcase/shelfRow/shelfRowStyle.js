import styled from 'styled-components';

const Content = styled.div`
  margin-top: 10px;
  height: 100px;
  width: 300px;
  background-color: ${(props) => props.background};
`;

const BooksChildren = styled.div`
  display: flex;
`;

export { Content, BooksChildren };
