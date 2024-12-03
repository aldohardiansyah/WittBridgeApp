import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text } from 'react-native';

const CustomImage = ({
  source, // Main image source
  fallbackSource, // Fallback image source
  style, // Custom image styles
  loadingIndicator = true, // Show loading spinner while loading
  resizeMode = 'cover', // Resize mode
  errorText = 'Image failed to load', // Error message
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setShowFallback(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setShowFallback(true);
  };

  return (
    <View style={[styles.container, style]}>
      {isLoading && loadingIndicator && (
        <ActivityIndicator style={styles.loading} size="small" color="#6A11CB" />
      )}

      {!showFallback ? (
        <Image
          source={source}
          style={[styles.image, style]}
          resizeMode={resizeMode}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : fallbackSource ? (
        <Image
          source={fallbackSource}
          style={[styles.image, style]}
          resizeMode={resizeMode}
        />
      ) : (
        <Text style={styles.errorText}>{errorText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  loading: {
    position: 'absolute',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CustomImage;
