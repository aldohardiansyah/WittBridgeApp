import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import LoginScreen from '../screens/Authentication/LoginScreen';
import MainNavigation from './MainNavigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="MainApp" component={MainNavigation} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
