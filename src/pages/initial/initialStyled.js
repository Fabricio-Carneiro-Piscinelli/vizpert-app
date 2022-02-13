import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Content = styled.div`
  background-image: ${(props) => `url(${props.ground}), url(${props.bg_stripes})`};
  background-position: top 49vh right 0px, top -20vh left 0px;
  background-repeat: repeat-x, repeat-x;
  background-size: 60vh, 75vh;
  width: 100%;
  height: 100vh;
`;

export { Title, Content };
