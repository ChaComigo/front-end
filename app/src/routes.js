import { createStackNavigator, createAppContainer } from "react-navigation";

/*
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Main from "./pages/main";
*/

import Main from "./Screens/main/mainScreen";

const navigation = createStackNavigator({
  Main
});

const Routes = createAppContainer(navigation);

export default Routes;
