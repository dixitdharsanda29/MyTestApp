import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '../Constants/routes';
import SplashScreen from '../Screens/SplashScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen
        name={routes.BOTTOM_TAB_NAVIGATION}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
