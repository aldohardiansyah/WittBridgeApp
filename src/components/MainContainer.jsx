import React, {useState} from 'react';
import {StyleSheet, StatusBar, Text, View, ScrollView} from 'react-native';

export default function MainContainer({
  headerTitle = '',
  headerContent = '',
  children,
}) {
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar
        backgroundColor="#e5e7eb"
        translucent={true}
        barStyle="dark-content"
      />

      <View style={styles.container}>
        {headerTitle ? (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
            <View style={styles.headerContent}>
              {headerContent}
            </View>
          </View>
        ) : (
          ''
        )}
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#e5e7eb',
  },
  container: {
    display: 'relative',
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 80,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 700,
  },
});
