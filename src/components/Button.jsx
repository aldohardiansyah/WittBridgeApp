import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from './Icon'; // Import your custom Icon Component

const Button = ({
  onPress, // Function to handle button press
  text = '', // Button text (optional)
  iconName = '', // Name of the icon from your Icon Component
  iconPosition = 'left', // Position of the icon: 'left' or 'right'
  iconSize, // Size of the icon (dynamic based on button size)
  iconColor, // Color of the icon (dynamic based on button style)
  size = 'md', // Button size: 'xs', 'sm', 'md', 'xl'
  styleType = 'primary', // Style type: 'primary', 'secondary', 'disabled', etc.
  buttonStyle, // Additional button styles
  textStyle, // Additional text styles
  disabled = false, // Disable button interaction
}) => {
  const buttonSizes = {
    xs: { paddingVertical: 5, paddingHorizontal: 10, fontSize: 12, iconSize: 16 },
    sm: { paddingVertical: 8, paddingHorizontal: 15, fontSize: 14, iconSize: 18 },
    md: { paddingVertical: 10, paddingHorizontal: 20, fontSize: 16, iconSize: 20 },
    xl: { paddingVertical: 15, paddingHorizontal: 25, fontSize: 18, iconSize: 24 },
  };

  const buttonStyles = {
    primary: { backgroundColor: '#54408C', textColor: '#FFFFFF', iconColor: '#FFFFFF' },
    secondary: { backgroundColor: '#F3F4F6', textColor: '#54408C', iconColor: '#54408C' },
    disabled: { backgroundColor: '#D1D5DB', textColor: '#9CA3AF', iconColor: '#9CA3AF' },
  };

  const {
    paddingVertical,
    paddingHorizontal,
    fontSize,
    iconSize: defaultIconSize,
  } = buttonSizes[size] || buttonSizes['md'];

  const { backgroundColor, textColor, iconColor: defaultIconColor } =
    buttonStyles[styleType] || buttonStyles['primary'];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { paddingVertical, paddingHorizontal, backgroundColor },
        disabled && styles.disabledButton,
        buttonStyle,
      ]}
      onPress={!disabled ? onPress : null}
      activeOpacity={disabled ? 1 : 0.8}
    >
      {/* Icon on the Left */}
      {iconName && iconPosition === 'left' && (
        <Icon
          name={iconName}
          size={iconSize || defaultIconSize}
          color={iconColor || defaultIconColor}
          style={styles.icon}
        />
      )}

      {/* Text */}
      {text !== '' && (
        <Text style={[styles.text, { fontSize, color: textColor }, textStyle]}>
          {text}
        </Text>
      )}

      {/* Icon on the Right */}
      {iconName && iconPosition === 'right' && (
        <Icon
          name={iconName}
          size={iconSize || defaultIconSize}
          color={iconColor || defaultIconColor}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#54408C', // Primary color
  },
  text: {
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 5,
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default Button;
