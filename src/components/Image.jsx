import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text } from 'react-native';

const CustomImage = ({
  source, // Main image source
  fallbackSource = require('../assets/images/no-data.png'), // Optional fallback image source
  style, // Custom image styles
  loadingIndicator = true, // Show loading spinner
  resizeMode = 'cover', // Resize mode
  errorText = 'Image not available', // Error message
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setShowFallback(false);
  };

  const handleError = () => {
    setIsLoading(false);
    if (fallbackSource) {
      setShowFallback(true); // Use provided fallback
    } else {
      setShowFallback(false); // Use default fallback
    }
  };

  return (
    <View style={[styles.container, style]}>
      {/* Loading Indicator */}
      {isLoading && loadingIndicator && (
        <ActivityIndicator style={styles.loading} size="small" color="#54408C" />
      )}

      {/* Main Image or Fallback */}
      {!showFallback ? (
        <Image
          source={source}
          style={[styles.image, style]}
          resizeMode={resizeMode}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <Image
          source={fallbackSource} // Use fallback or built-in default
          style={[styles.image, style]}
          resizeMode={resizeMode}
          onError={() => setShowFallback(false)} // Handle error for default fallback
        />
      )}

      {/* Error Text if All Fails */}
      {!isLoading && !source && !fallbackSource && (
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
    marginTop: 5,
  },
});

export default CustomImage;
