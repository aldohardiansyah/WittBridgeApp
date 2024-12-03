import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Icon = ({library, name, size = 24, color = '#000', style}) => {
  let IconLibrary;

  switch (library) {
    case 'Ionicons':
      IconLibrary = Ionicons;
      break;
    case 'FontAwesome':
      IconLibrary = FontAwesome;
      break;
    case 'MaterialIcons':
      IconLibrary = MaterialIcons;
      break;
    case 'Octicons':
      IconLibrary = Octicons;
      break;
    default:
      IconLibrary = Ionicons;
  }

  return (
    <View style={[styles.container, style]}>
      <IconLibrary name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
