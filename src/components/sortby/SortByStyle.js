import styled from 'styled-components';

const Content = styled.div`
  width: 400px;
  height: 200px;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: end;
  margin-top: 30vh;
`;

const ContentFilterOrganize = styled.div`
  width: 40%;
  margin-top: 10px;
  padding: 10px;
`;

const TitleButtonsFilter = styled.h1`
  font-size: 10px;
  width: 100%;
  text-align: center;
`;

const ButtonsFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  width: 90%;
  height: 5px;
  background-color: #f1f1f1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export { Content, ContentFilterOrganize, TitleButtonsFilter, ButtonsFilter, Divider };
