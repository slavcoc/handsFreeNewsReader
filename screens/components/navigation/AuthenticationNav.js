import { createStackNavigator } from "react-navigation";
import LoginScreen from "../../LoginScreen";
import SignUpScreen from "../../SignUpScreen";

const AuthenticationNavigator = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen,
  });

export default AuthenticationNavigator;