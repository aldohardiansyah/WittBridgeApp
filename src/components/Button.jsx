import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors';

const Button = ({
  title,
  color = 'primary', // Default color palette ('primary', 'zinc', 'slate')
  shade = 500, // Default shade
  type = 'solid', // Button type: 'solid', 'outline', 'ghost'
  size = 'md', // Button size: 'xl', 'md', 'sm', 'xs'
  onPress,
  disabled = false,
}) => {
  const sizeStyles = getSizeStyles(size);

  // Determine button styles based on type
  const isSolid = type === 'solid';
  const isOutline = type === 'outline';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        sizeStyles.button,
        isSolid && {backgroundColor: colors[color][shade]},
        isOutline && {
          backgroundColor: 'transparent',
          borderColor: colors[color][shade],
          borderWidth: 2,
        },
        disabled && styles.disabledButton,
      ]}
      onPress={!disabled ? onPress : null}
      disabled={disabled}>
      <Text
        style={[
          styles.text,
          sizeStyles.text,
          isSolid && {color: colors.neutral.white},
          (isOutline || type === 'ghost') && {color: colors[color][shade]},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Define size-specific styles
const getSizeStyles = size => {
  switch (size) {
    case 'xl':
      return {
        button: {
          paddingVertical: 16,
          paddingHorizontal: 25,
        },
        text: {
          fontSize: 20,
        },
      };
    case 'md':
      return {
        button: {
          paddingVertical: 12,
          paddingHorizontal: 20,
        },
        text: {
          fontSize: 16,
        },
      };
    case 'sm':
      return {
        button: {
          paddingVertical: 8,
          paddingHorizontal: 15,
        },
        text: {
          fontSize: 14,
        },
      };
    case 'xs':
      return {
        button: {
          paddingVertical: 6,
          paddingHorizontal: 10,
        },
        text: {
          fontSize: 12,
        },
      };
    default:
      return {
        button: {
          paddingVertical: 12,
          paddingHorizontal: 20,
        },
        text: {
          fontSize: 16,
        },
      };
  }
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default Button;
