import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Invitations from '../screens/Invitations';
import MyTicket from '../screens/Mytickets';
import Search from '../screens/Search';
import {Image} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home';
          } else if (route.name === 'Search') {
            return <Octicons name="search" size={22} color={color} />;
          } else if (route.name === 'MyTicket') {
            iconName = focused
              ? 'ticket-confirmation'
              : 'ticket-confirmation-outline';
          } else if (route.name === 'Invitations') {
            iconName = focused
              ? 'message-processing'
              : 'message-processing-outline';
          } else if (route.name === 'Profile') {
            return (
              <Image
                source={require('../assets/iconProfile.png')}
                style={{height: 20, width: 20,borderRadius:5}}
                resizeMode="stretch"
              />
            );
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunity name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        labelStyle: {},
        style: {
          backgroundColor: 'white',

          opacity: 1,
          height: 52,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 30,

          // borderRadius: 18,
          position: 'absolute',
          borderTopWidth: 0,
          borderRadius: 18,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        },
        tabStyle: {height: 40},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="MyTicket"
        component={MyTicket}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="Invitations"
        component={Invitations}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            top: -3,
            height: 18,
            color: 'white',
            backgroundColor: '#9E69D2',
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarVisible: false}}
      />
    </Tab.Navigator>
  );
}
