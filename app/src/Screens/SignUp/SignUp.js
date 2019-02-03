import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, Picker, TouchableOpacity, Text, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import api from '../../Services/api';
import { StackActions, NavigationActions } from 'react-navigation';

import {
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
  DataText,
} from './Styles';
import { TextInputGlobal } from '../StylesGlobal';

export default class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: 'csorlandi',
    email: 'cso.junior1996@gmail.com',
    password: '123456',
    error: '',
    language: '',
    success: '',
    isDateTimePickerVisible: false,
    dataNascimento: 'Data de nascimento',
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({
      dataNascimento: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
    });
    this._hideDateTimePicker();
  };

  handleUsernameChange = username => {
    this.setState({ username });
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleBackToLoginPress = () => {
    this.props.navigation.goBack();
  };

  handleSignUpPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
    } else {
      try {
        await api.post('/users', {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        });

        this.setState({
          success: 'Conta criada com sucesso! Redirecionando para o login',
          error: '',
        });

        setTimeout(this.goToLogin, 2500);
      } catch (_err) {
        this.setState({
          error: 'Houve um problema com o cadastro, verifique os dados preenchidos!',
        });
      }
    }
  };

  goToLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Input
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Endereço de e-mail"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'email-address'}
          />
          <Input
            placeholder="Senha"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <Data onPress={this._showDateTimePicker}>
            <TextInputGlobal>{this.state.dataNascimento}</TextInputGlobal>
          </Data>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={'date'}
          />
          <View>
            <PickerSexo
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
              itemStyle={{ color: 'red' }}
            >
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Masculino" value="Masculino" />
            </PickerSexo>
          </View>

          <Input
            placeholder="Estado"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'email-address'}
          />
          <Input
            placeholder="Cidade"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'email-address'}
          />
          <Input
            placeholder="CEP"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'email-address'}
          />
        </ScrollView>
      </Container>
    );
  }
}

/*



<Container>
        <Scroll>
          <StatusBar hidden />
          <Top>
            <Logo source={require('../../Imagens/icon_login.png')} resizeMode="contain" />
          </Top>
          <Bottom>
            <BottomItens>
              {this.state.success.length !== 0 && (
                <SuccessMessage>{this.state.success}</SuccessMessage>
              )}

              <Input
                placeholder="Nome de usuário"
                value={this.state.username}
                onChangeText={this.handleUsernameChange}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Endereço de e-mail"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
              />
              <Input
                placeholder="Senha"
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
              <Data onPress={this._showDateTimePicker}>
                <DataText>{this.state.dataNascimento}</DataText>
              </Data>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                mode={'date'}
              />

              <PickerSexo
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
              >
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
              </PickerSexo>
              <Input
                placeholder="Estado"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
              />
              <Input
                placeholder="Cidade"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
              />
              <Input
                placeholder="CEP"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
              />
              {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
              <Button onPress={this.handleSignUpPress}>
                <ButtonText>Criar conta</ButtonText>
              </Button>
              <SignInLink onPress={this.handleBackToLoginPress}>
                <SignInLinkText>Voltar ao login</SignInLinkText>
              </SignInLink>
            </BottomItens>
          </Bottom>
        </Scroll>


{this.state.success.length !== 0 && (
            <SuccessMessage>{this.state.success}</SuccessMessage>
          )}
          <Input
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
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
          {this.state.error.length !== 0 && (
            <ErrorMessage>{this.state.error}</ErrorMessage>
          )}
          <Button onPress={this.handleSignUpPress}>
            <ButtonText>Criar conta</ButtonText>
          </Button>
          <SignInLink onPress={this.handleBackToLoginPress}>
            <SignInLinkText>Voltar ao login</SignInLinkText>
          </SignInLink>

*/
