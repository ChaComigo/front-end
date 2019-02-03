import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import * as images from '../../Pictures';
import Colors from '../../themes/colors';
import firebase from 'react-native-firebase';
import GenerateForm from 'react-native-form-builder';
import Loader from '../../components/LoadingComponent/LoadingComponent';

const fields = [
  {
    type: 'text',
    name: 'email',
    required: true,
    icon: 'ios-mail',
    label: 'E-mail',
  },
  {
    type: 'password',
    name: 'password',
    icon: 'ios-lock',
    required: true,
    label: 'Senha',
  },
];

type Props = {};
export default class SignInScreen extends Component<Props> {
  state = {
    email: '',
    password: '',
    errorMessage: undefined,
    modalVisible: false,
  };

  handleLogin = async () => {
    const { email, password, errorMessage } = this.state;
    const formAuth = this.formGeneratorAuth.getValues();
    if (formAuth.email != '' && formAuth.password != '') {
      try {
        this.setState({ modalVisible: true });
        const res = await firebase
          .auth()
          .signInWithEmailAndPassword(formAuth.email, formAuth.password);
        this.setState({ modalVisible: false });
        //this.props.navigation.navigate('App');
        this.props.navigation.navigate('Questions');
      } catch (error) {
        console.log(error);
        this.setState({ modalVisible: false });
        Alert.alert(
          'Erro',
          error.message,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        'Erro',
        'Email ou senha em branco. Insira os dados corretamente.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
        <View style={styles.container}>
          <View style={styles.viewLogo}>
            <Image style={styles.logo} source={images.logo} />
          </View>
          <View style={styles.loginContainer}>
            <GenerateForm
              ref={c => {
                this.formGeneratorAuth = c;
              }}
              fields={fields}
            />
            <Loader
              loader={{ loading: this.state.modalVisible, text: 'Entrando...' }}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              //MUDAR AQUI PRA FUNCAO onPress={this.handleLogin}
              onPress={this.handleLogin}
              //onPress={() => this.props.navigation.navigate('App')}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Colors.textBackground,
    marginTop: 10,
    padding: 10,
  },
  textInput: {
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#ECF0F3',
    paddingHorizontal: 19,
    marginLeft: 30,
    marginRight: 30,
  },
  viewLogo: {
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
    marginLeft: 50,
    marginRight: 50,
  },
  loginContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
  },
  logo: {
    height: 280,
    width: 280,
  },
});
