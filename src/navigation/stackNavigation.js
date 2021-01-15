import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../screens/Home'
import Detail from '../screens/DetailScreen'
const Stack = createStackNavigator();
const RouteStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      screenOptions={({route, navigation}) => ({
        cardOverlayEnabled: true,
    
        ...TransitionPresets.ModalPresentationIOS,
      })}
      mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={
          ({headerShown: false},
          {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal-inverted',
          })
        }
      />
    </Stack.Navigator>
  );
};
export default RouteStack;