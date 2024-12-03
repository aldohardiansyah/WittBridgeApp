import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from './Icon';

const DashboardCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon
          library={'Octicons'}
          style={styles.contentIcon}
          name={'calendar'}
          size={20}
          color={'#54408C'}
        />
        <Text style={styles.contentText}>5 Schedule</Text>
      </View>
      <View style={styles.content}>
        <Icon
          library={'Octicons'}
          style={styles.contentIcon}
          name={'check-circle'}
          size={20}
          color={'#54408C'}
        />
        <Text style={styles.contentText}>5 Done</Text>
      </View>
      <View style={styles.content}>
        <Octicons
          style={styles.contentIcon}
          name={'x-circle'}
          size={20}
          color={'#54408C'}
        />
        <Text style={styles.contentText}>2 Missing</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e5e7eb',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    width: '100%',
    gap: 1,
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80',
    width: '100%',
    backgroundColor: 'white',
  },
  contentIcon: {
    marginBottom: 4,
  },
  contentText: {
    fontSize: 10,
    color: '#54408C',
  },
});

export default DashboardCard;
