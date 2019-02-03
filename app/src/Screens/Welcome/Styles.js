import styled from 'styled-components';
import {
  ViewGlobal, ButtonGlobal, TextInputGlobal, TextErrorMessage,
} from '../StylesGlobal';

const Container = styled(ViewGlobal)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  height: 30%;
  margin-bottom: 40px;
`;

const Input = styled(TextInputGlobal)`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
`;

const ErrorMessage = styled(TextErrorMessage)`
  text-align: center;
  margin-bottom: 15px;
  margin-horizontal: 20px;
`;

const Button = styled(ButtonGlobal)`
  padding: 20px;
  align-self: stretch;
  margin: 15px;
  margin-horizontal: 20px;
`;

const SignUpContainer = styled.View`
  padding: 10px;
  margin-top: 20px;
`;

const SignUpInfo = styled.Text`
  color: #A6A8A9;
  font-size: 15px
  text-align: center;
`;

const SignUpLink = styled.TouchableHighlight``;

const SignUpLinkText = styled.Text`
  color: #0d92ca;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  SignUpLink,
  SignUpLinkText,
  SignUpInfo,
  SignUpContainer,
};
