import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const RadioButton = ({
  label, // Text label for the radio button
  selected = false, // Whether the radio button is selected
  onPress, // Callback function when pressed
  size = 24, // Size of the radio button
  color = '#6A11CB', // Color of the selected circle
  labelStyle, // Custom styles for the label
  style, // Custom styles for the radio button container
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Outer Circle */}
      <View
        style={[
          styles.outerCircle,
          { width: size, height: size, borderColor: color },
        ]}
      >
        {/* Inner Circle */}
        {selected && (
          <View
            style={[
              styles.innerCircle,
              { width: size * 0.6, height: size * 0.6, backgroundColor: color },
            ]}
          />
        )}
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

export default RadioButton;
