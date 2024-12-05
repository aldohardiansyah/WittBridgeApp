import React, {useState} from 'react';
import {Text, View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import DashboardCard from '../../components/DashboardCard';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Image from '../../components/Image';
import Checkbox from '../../components/Checkbox';
import RadioGroup from '../../components/RadioGroupButton';
import Divider from '../../components/Divider';
import MainContainer from '../../components/MainContainer';

export default function HomeScreen() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

  return (
    <MainContainer>
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
          onPress={() => alert('Primary Button Pressed')}
          text="Save"
          iconName="save-outline"
          styleType="primary"
          size="md"
        />

        <Button
          onPress={() => alert('Secondary Button Pressed')}
          text="Cancel"
          iconName="close-outline"
          styleType="secondary"
          size="sm"
        />

        <Button
          onPress={() => alert('This should not work')}
          text="Disabled"
          iconName="ban-outline"
          styleType="disabled"
          size="md"
          disabled={true}
        />

        <Button
          onPress={() => alert('This should not work')}
          text="Disabled"
          iconName="ban-outline"
          styleType="disabled"
          size="md"
          disabled={true}
        />

        <Button
          onPress={() => alert('Icon Button Pressed')}
          iconName="add-circle-outline"
          styleType="primary"
          size="xl"
        />

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
        <Image
          source={{
            uri: 'data:image/webp;base64,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',
          }}
          style={styles.image}
        />

        {/* Image with Error Text */}
        <Image
          source={{uri: 'https://invalid-url.com'}} // Invalid URL to trigger error
          style={styles.image}
          errorText="Unable to load image"
        />

        {/* Basic Checkbox */}
        <Checkbox
          label="Default Checkbox"
          isChecked={checked}
          onPress={isChecked => setChecked(isChecked)}
          color="#54408C"
        />

        {/* Customized Checkbox */}
        <Checkbox
          label="Custom Checkbox"
          isChecked={true}
          size={30}
          color="#34D399"
          labelStyle={{fontSize: 18, color: '#000'}}
        />

        {/* Unchecked Checkbox */}
        <Checkbox
          label="Unchecked Checkbox"
          isChecked={false}
          color="#FF6B6B"
        />

        <Text style={styles.text}>
          {checked ? 'Checkbox is Checked' : 'Checkbox is Unchecked'}
        </Text>

        <View>
          <Divider color={'gray'} thickness={2} type="solid" length="100%" />

          <Text style={styles.header}>Select an Option:</Text>
          {/* Using RadioGroup */}
          <RadioGroup
            options={options}
            selectedValue={selectedOption}
            onValueChange={value => setSelectedOption(value)}
            size={24}
            color="#54408C"
          />

          <Text style={styles.text}>Selected: {selectedOption}</Text>
        </View>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
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
