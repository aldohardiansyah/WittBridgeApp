import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

export default function ProfileScreen() {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <View style={styles.widgetContainer}>
        <View style={styles.widgetGreeting}>
          <Text style={styles.widgetText}>Profile</Text>

          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e5e7eb',
  },
  widgetContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#e5e7eb',
  },
  widgetGreeting: {
    width: '100%',
  },
  widgetText: {
    fontSize: 20,
    fontWeight: 700,
  },
  widgetSubText: {
    fontSize: 15,
  },
});
