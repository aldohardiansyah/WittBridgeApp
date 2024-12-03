import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

const RadioGroup = ({ options, selectedValue, onValueChange, size, color }) => {
    return (
      <View>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            selected={selectedValue === option.value}
            onPress={() => onValueChange(option.value)}
            size={size}
            color={color}
          />
        ))}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  outerCircle: {
    borderWidth: 2,
    borderRadius: 50, // Makes it a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  innerCircle: {
    borderRadius: 50, // Makes it a perfect circle
  },
  label: {
    fontSize: 16,
    color: '#374151',
  },
});

export default RadioGroup;




  