import styled from 'styled-components';

const Content = styled.button`
  width: 40px;
  height: 40px;
  background-image: ${(props) =>
    `url(${props.active ? props.background[0] : props.background[1]})`};
  background-repeat: no-repeat;
  cursor: pointer;
  padding-top: ${(props) => props.active && `10px`};
`;

const ContentButton = styled.div`
  width: 100%;
  & > img {
    width: 15px;
    height: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export { Content, ContentButton };
