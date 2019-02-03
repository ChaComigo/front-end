import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text, View, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import Colors from '../../themes/colors';
import GenerateForm from 'react-native-form-builder';
import Loader from '../../components/LoadingComponent/LoadingComponent';

type Props = {};
// These Fields will create a login form with three fields
const fields_auth = [
  {
    type: 'group',
    name: 'auth',
    label: 'Conta',
    fields: [
      {
        type: 'email',
        name: 'email',
        required: true,
        label: 'E-mail',
        icon: 'ios-mail',
      },
      {
        type: 'password',
        name: 'password',
        icon: 'ios-lock',
        required: true,
        label: 'Senha',
        props: {
          secureTextEntry: true,
        },
      },
    ],
  },
];
const fields_profile = [
  {
    type: 'group',
    name: 'profile',
    label: 'Dados Pessoais',
    fields: [
      {
        type: 'text',
        name: 'name',
        icon: 'ios-person',
        iconOrientation: 'right',
        required: true,
        label: 'Nome',
        editable: true,
        props: {} /* If you want to add some extra props like autoCapitalize or
        autoFocus only available for textInput*/,
      },
      {
        type: 'date',
        mode: 'date',
        name: 'birthday',
        label: 'Data de Nascimento',
      },
      {
        type: 'select',
        name: 'gender',
        label: 'Sexo',
        icon: 'venus-mars',
        options: ['Feminino', 'Masculino'],
        defaultValue: [''],
      },
    ],
  },
];
const fields_adress = [
  {
    type: 'group',
    name: 'work_address',
    label: 'Endereço',
    fields: [
      {
        type: 'text',
        name: 'city',
        label: 'Cidade',
      },
      {
        type: 'select',
        name: 'country',
        label: 'Estado',
        icon: 'venus-mars',
        options: ['Feminino', 'Masculino'],
        defaultValue: [''],
      },
    ],
  },
];

export default class SignUp extends Component {
  state = { email: '', password: '', modalVisible: false };

  handleSignUp = async () => {
    try {
      const formAuth = this.formGeneratorAuth.getValues();
      const formProfile = this.formGeneratorProfile.getValues();
      const formAdress = this.formGeneratorAdress.getValues();

      if (
        formAuth.auth.email != '' &&
        formAuth.auth.password != '' &&
        formProfile.profile.name != '' &&
        formProfile.profile.date != '' &&
        formProfile.profile.gender != '' &&
        formAdress.work_address.city != '' &&
        formAdress.work_address.country != ''
      ) {
        this.setState(this.state, { modalVisible: true });
        const res = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
          );
        this.setState(this.state, { modalVisible: false });
        this.props.navigation.navigate('Questions');
      } else {
        Alert.alert(
          'Erro',
          'Algum campo em branco. Por favor preencha corretamente.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }
    } catch (error) {
      this.setState(this.state, { modalVisible: false });
      Alert.alert(
        'Erro',
        error.message,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  };

  checkFields() {
    const formAuth = this.formGeneratorAuth.getValues();
    const formProfile = this.formGeneratorProfile.getValues();
    const formAdress = this.formGeneratorAdress.getValues();

    if (
      formAuth.auth.email != '' &&
      formAuth.auth.password != '' &&
      formProfile.profile.name != '' &&
      formProfile.profile.date != '' &&
      formProfile.profile.gender != '' &&
      formAdress.work_address.city != '' &&
      formAdress.work_address.country != ''
    ) {
      this.setState({ email: formAuth.auth.email });
      this.setState({ ...this.state, password: formAuth.auth.password });
      this.handleSignUp();
    } else {
      Alert.alert(
        'Erro',
        'Algum campo em branco. Por favor preencha corretamente.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Loader
            loader={{ loading: this.state.modalVisible, text: 'Entrando...' }}
          />

          <View
            style={[
              styles.container,
              { justifyContent: 'center', alignItems: 'center' },
            ]}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
              Cadastro
            </Text>
          </View>

          <View style={styles.container}>
            <GenerateForm
              ref={c => {
                this.formGeneratorAuth = c;
              }}
              fields={fields_auth}
            />
          </View>
          <View style={styles.container}>
            <GenerateForm
              ref={c => {
                this.formGeneratorProfile = c;
              }}
              fields={fields_profile}
            />
          </View>
          <View style={styles.container}>
            <GenerateForm
              ref={c => {
                this.formGeneratorAdress = c;
              }}
              fields={fields_adress}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            //MUDAR AQUI PRA FUNCAO onPress={this.handleLogin}
            //onPress={this.handleLogin}
            //onPress={() => this.props.navigation.navigate('App')}
            onPress={() => this.handleSignUp()}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 10,
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  container: {
    backgroundColor: Colors.articleComponent,
    padding: 10,
    borderWidth: 0.2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
    elevation: 5,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
};
