import { createStackNavigator, createAppContainer } from 'react-navigation';

/*
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Main from "./pages/main";
*/
import Welcome from './Screens/Welcome/Welcome';
import SignUp from './Screens/SignUp/SignUp';

const navigation = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Criar conta',
      },
    },
  },
  {
    initialRouteName: 'SignUp',
  },
);

const Routes = createAppContainer(navigation);

export default Routes;
