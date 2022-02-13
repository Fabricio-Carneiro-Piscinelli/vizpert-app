import styled from 'styled-components';

const Content = styled.div`
  width: 200px;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
`;

const Content2 = styled.div`
  width: 200px;
`;

export { Content, Content2 };
