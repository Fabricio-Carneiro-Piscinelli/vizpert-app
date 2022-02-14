import styled from 'styled-components';

const Content = styled.div`
  width: 700px;
  height: 500px;
  background-image: ${(props) => `url(${props.background})`};
  background-size: 80%;
  background-repeat: no-repeat;
`;

const t = styled.div`
  color: red;
`;
export { Content, t };
