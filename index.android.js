import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Navigator
} from 'react-native';
import { Provider } from 'react-redux';
import Signup from './src/pages/Signup';
import Details from './src/pages/Details';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './src/Redux/reducer';
const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

export default class ReactNativeSignup extends Component {

render() {

    return (
      <Provider key="provider" store={store}>
        <Navigator
          initialRoute={{ id: 'Signup', name: 'Signup' }}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
        />
      </Provider>
    );
  }
  renderScene = (route, navigator) => {
    if (route.id === 'Signup') {
      return (
        <Signup navigator={navigator}/>
      );
    }
    else if (route.id === 'Details') {
      return (
        <Details navigator={navigator}/>
      );
    }
  }
}

AppRegistry.registerComponent('ReactNativeSignup', () => ReactNativeSignup);
