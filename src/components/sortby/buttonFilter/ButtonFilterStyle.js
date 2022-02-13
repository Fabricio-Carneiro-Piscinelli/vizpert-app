import styled from 'styled-components';

const Content = styled.button`
  width: 40px;
  height: 40px;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ContentButton = styled.div`
  width: 10px;
  &img {
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

export { Content, ContentButton };
