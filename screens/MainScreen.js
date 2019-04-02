import React from 'react';
import firebase from 'react-native-firebase';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

export default class MainScreen extends React.Component {
  constructor() {
    super();
    this.authSubscription = null;
    this.state = {
      loading: true,
      user: null,
    };
  }
  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null 
   * (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }
  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }
  render() {
    // The application is initialising
    // if (this.state.loading) return <LoadingIndicator />;
    // The user exists, so they're logged in
    if (this.state.user) return <HomeScreen />;
    // The user is null, so they're logged out
    return <LoginScreen />;
  }
}