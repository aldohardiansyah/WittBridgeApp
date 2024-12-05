import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Checkbox = ({
  label, // Text label next to the checkbox
  isChecked = false, // Initial checked state
  onPress, // Callback function when pressed
  size = 24, // Size of the checkbox icon
  color = '#54408C', // Color of the checkbox when checked
  labelStyle, // Custom styles for the label
  style, // Custom styles for the checkbox container
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handlePress = () => {
    setChecked(!checked);
    if (onPress) {onPress(!checked);}
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      {/* Checkbox Icon */}
      <View style={[styles.checkbox, checked && { borderColor: color }]}>
        {checked && <Ionicons name="checkmark" size={size * 0.6} color={color} />}
      </View>

      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#374151',
  },
});

export default Checkbox;
