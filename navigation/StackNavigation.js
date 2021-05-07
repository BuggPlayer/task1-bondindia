import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Container1 from '../screens/Container1';
import Container2 from '../screens/Container2';

const Stack = createStackNavigator();

export const UserPortal = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="container1" component={Container1} />
      <Stack.Screen name="container2" component={Container2} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <UserPortal />
    </NavigationContainer>
  );
};

export default StackNavigation;
