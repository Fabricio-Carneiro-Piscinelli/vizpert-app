import styled from 'styled-components';

const Content = styled.div`
  width: 50px;
  cursor: 'move';
  opacity: ${(props) => props.opacity};
`;

export default Content;
