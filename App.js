import React from 'react';
import {RouteStack} from './src/navigation/index';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RouteStack />
      </NavigationContainer>
    </>
  );
};
export default App;
