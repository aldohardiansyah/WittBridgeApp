import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const Input = ({
  label,
  placeholder = 'Enter text...',
  value,
  onChangeText,
  size = 'md', // 'xl', 'md', 'sm', 'xs'
  color = 'primary', // 'primary', 'zinc', 'slate'
  shade = 500,
  error = false,
  disabled = false,
  style,
  labelStyle,
  inputStyle,
}) => {
  const sizeStyles = getSizeStyles(size);

  return (
    <View style={[styles.container, style]}>
      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      {/* Text Input */}
      <TextInput
        style={[
          styles.input,
          sizeStyles.input,
          { borderColor: colors[color][shade], color: disabled ? colors.gray[400] : colors[color][shade] },
          error && { borderColor: colors.danger[500], color: colors.danger[500] },
          disabled && styles.disabledInput,
          inputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={disabled ? colors.gray[300] : colors.zinc[400]}
        value={value}
        onChangeText={!disabled ? onChangeText : undefined}
        editable={!disabled}
      />

      {/* Error Message */}
      {error && <Text style={styles.errorText}>This field is required</Text>}
    </View>
  );
};

// Define size-specific styles
const getSizeStyles = (size) => {
  switch (size) {
    case 'xl':
      return {
        input: {
          height: 50,
          fontSize: 18,
        },
      };
    case 'md':
      return {
        input: {
          height: 45,
          fontSize: 16,
        },
      };
    case 'sm':
      return {
        input: {
          height: 40,
          fontSize: 14,
        },
      };
    case 'xs':
      return {
        input: {
          height: 35,
          fontSize: 12,
        },
      };
    default:
      return {
        input: {
          height: 45,
          fontSize: 16,
        },
      };
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 1, 
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.slate[700],
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#54408C', // Primary color
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    color: '#333',
    width: '100%',
  },
  disabledInput: {
    backgroundColor: colors.gray[100],
  },
  errorText: {
    color: colors.danger[500],
    fontSize: 12,
    marginTop: 5,
  },
});

export default Input;
