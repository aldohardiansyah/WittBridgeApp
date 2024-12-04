import * as React from 'react';
import {Text, View, StyleSheet, Easing} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import FinancialScreen from '../screens/Financial/FinancialScreen';
import NoteScreen from '../screens/Note/NoteScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ScheduleScreen from '../screens/Schedule/ScheduleScreen';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (route, focused, color) => {
  const iconSize = focused ? 20 : 20;
  const textColor = focused ? '#54408C' : '#9ca3af';
  let iconName;
  if (route.name === 'Home') {
    iconName = 'home';
  } else if (route.name === 'Schedule') {
    iconName = 'calendar';
  } else if (route.name === 'Note') {
    iconName = 'checklist';
  } else if (route.name === 'Profile') {
    iconName = 'person';
  } else if (route.name === 'Financial') {
    iconName = 'credit-card';
  } else if (route.name === 'Settings') {
    iconName = 'tools';
  }

  return (
    <View style={styles.tabBarContainer}>
      <Icon
        library={'Octicons'}
        name={iconName}
        size={iconSize}
        color={color}
      />
      <Text style={[styles.tabBarLabel, {color: textColor}]}>{route.name}</Text>
      {focused && <View style={styles.underline} />}
    </View>
  );
};

export default function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused, color}) =>
          renderTabBarIcon(route, focused, color),
        tabBarActiveTintColor: '#54408C',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 60,
          backgroundColor: '#F8F7FB',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          top: 15,
        },
      })}>
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Note" component={NoteScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Financial" component={FinancialScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    alignItems: 'center',
  },
  tabBarLabel: {
    marginTop: 5,
    width: 60,
    fontSize: 9,
    fontWeight: '600',
    textAlign: 'center',
  },
  underline: {
    width: 50,
    height: 3,
    backgroundColor: '#54408C',
    marginTop: 5,
    borderRadius: 2,
  },
});
