import styled from 'styled-components';
import { ButtonGlobal, ViewGlobal, TextInputGlobal } from '../StylesGlobal';

const Scroll = styled.ScrollView`
  flex: 1;
`;

const Container = styled(ViewGlobal)`
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Top = styled.View`
  height: 30%;
  align-items: center;
  justify-content: center;
  background-color: #98d2c1;
`;

const Bottom = styled.View`
  height: 70%;
  background-color: #f06543;
`;

const BottomItens = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  justify-content: center;
  background-color: #98d2c1;
`;

const Logo = styled.Image`
  margin-bottom: 40px;
  margin-top: 40px;
`;

const SuccessMessage = styled.Text`
  text-align: center;
  color: #08a092;
  font-size: 16px;
  margin-bottom: 15px;
  margin-horizontal: 20px;
`;

const Input = styled(TextInputGlobal)`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
`;

const ErrorMessage = styled.Text`
  text-align: center;
  color: #ce2029;
  font-size: 16px;
  margin-bottom: 15px;
  margin-horizontal: 20px;
`;

const Button = styled(ButtonGlobal)`
  padding: 20px;
  align-self: stretch;
  margin: 15px;
  margin-horizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const SignInLink = styled.TouchableHighlight``;

const SignInLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const PickerSexo = styled.Picker`
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
  padding-horizontal: 35px;
  padding-vertical: 5px;
`;

const Data = styled.TouchableHighlight`
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
  padding-horizontal: 15px;
  padding-vertical: 5px;
`;

export {
  Container,
  ScrollView,
  Logo,
  SuccessMessage,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
  Scroll,
  Top,
  Bottom,
  BottomItens,
  PickerSexo,
  Data,
};
