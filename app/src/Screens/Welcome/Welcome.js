import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  SignUpLink,
  SignUpLinkText,
  SignUpInfo,
  SignUpContainer,
} from './Styles';
import { ButtonTextGlobal } from '../StylesGlobal';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
    error: '',
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress() {}

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../../Imagens/icon_login.png')} resizeMode="contain" />
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <Button onPress={this.handleSignInPress}>
          <ButtonTextGlobal>Entrar</ButtonTextGlobal>
        </Button>
        <SignUpContainer>
          <SignUpInfo>Ainda não tem uma conta?</SignUpInfo>
          <SignUpLink onPress={this.handleCreateAccountPress} underlayColor="transparent">
            <SignUpLinkText>Crie uma conta</SignUpLinkText>
          </SignUpLink>
        </SignUpContainer>
      </Container>
    );
  }
}
