import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../screens/Home'
import Detail from '../screens/Search'
import BottomNavigation from '../navigation/BottomNavigation'
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
        component={BottomNavigation}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
};
export default RouteStack;