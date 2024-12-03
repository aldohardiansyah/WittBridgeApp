import React, {useState} from 'react';
import {Text, View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import DashboardCard from '../../components/DashboardCard';
import Button from '../../components/Button';
import Input from '../../components/Input';
import CustomImage from '../../components/Image';

export default function HomeScreen() {
  const [value, setValue] = useState('');

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor="#e5e7eb"
        translucent={true}
        barStyle="dark-content"
      />
      <View style={styles.content}>
        <View style={styles.widgetContainer}>
          <View style={styles.widgetGreeting}>
            <View style={styles.greetingContent}>
              <Text style={styles.greetingText}>Home</Text>
              <Text style={styles.greetingSubText}>Aldo Hardiansyah</Text>
            </View>
          </View>
          <DashboardCard />
        </View>
        <Button
          title="Primary Solid"
          color="primary"
          shade={500}
          type="solid"
        />
        <Button
          title="Slate Outline"
          color="slate"
          shade={400}
          type="outline"
        />
        <Button title="Zinc Ghost" color="zinc" shade={600} type="ghost" />
        <Button
          title="Disabled"
          color="primary"
          shade={300}
          type="solid"
          disabled
        />
        <Button title="Large Button" size="xl" color="primary" shade={500} />
        <Button title="Small Button" size="sm" color="zinc" shade={700} />
        <View style={styles.container}>
          {/* Default Input */}
          <Input
            label="Default Input"
            value={value}
            onChangeText={setValue}
            color="primary"
            shade={500}
          />

          {/* Error Input */}
          <Input
            label="Error Input"
            value={value}
            onChangeText={setValue}
            color="danger"
            shade={500}
            error={true}
          />

          {/* Disabled Input */}
          <Input
            label="Disabled Input"
            value={value}
            onChangeText={setValue}
            color="slate"
            shade={400}
            disabled={true}
          />

          {/* Small Input */}
          <Input
            label="Small Input"
            value={value}
            onChangeText={setValue}
            size="sm"
            color="zinc"
            shade={600}
          />
        </View>

        {/* Successful Image */}
        <CustomImage
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.image}
        />

        {/* Image with Fallback */}
        <CustomImage
          source={{uri: 'https://invalid-url.com'}} // Invalid URL to trigger error
          fallbackSource={require('../../assets/images/no-data.png')} // Local fallback image
          style={styles.image}
        />

        {/* Image with Error Text */}
        <CustomImage
          source={{uri: 'https://invalid-url.com'}} // Invalid URL to trigger error
          style={styles.image}
          errorText="Unable to load image"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e5e7eb',
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 60,
  },
  widgetContainer: {
    display: 'relative',
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    width: '100%',
  },
  widgetGreeting: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'normal',
    width: '100%',
  },
  greetingContent: {
    display: 'block',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'auto',
    order: 0,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 700,
  },
  greetingSubText: {
    fontSize: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
});
