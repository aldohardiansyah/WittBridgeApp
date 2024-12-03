import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({
  orientation = 'horizontal', // 'horizontal' or 'vertical'
  thickness = 1, // Thickness of the divider
  length = '100%', // Length of the divider (width for horizontal, height for vertical)
  color = '#E5E7EB', // Divider color (default gray)
  type = 'solid', // Line style: 'solid', 'dashed', or 'dotted'
  style, // Additional custom styles
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <View
      style={[
        styles.divider,
        {
          borderColor: color,
          borderStyle: type,
          ...(isHorizontal
            ? {borderBottomWidth: thickness, width: length}
            : {borderRightWidth: thickness, height: length}),
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    display:'relative',
    alignSelf: 'center', // Ensures centering in both orientations
    marginHorizontal: 10,
  },
});

export default Divider;
