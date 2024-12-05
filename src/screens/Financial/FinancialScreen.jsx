import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import MainContainer from '../../components/MainContainer';

const FinancialScreen = () => {
  const [totalBill, setTotalBill] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [splitAmount, setSplitAmount] = useState(null);

  const calculateSplit = () => {
    const bill = parseFloat(totalBill);
    const people = parseInt(numPeople, 10);

    if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) {
      Alert.alert(
        'Invalid Input',
        'Please enter valid numbers for both fields.',
      );
      return;
    }

    const amount = (bill / people).toFixed(2); // Round to 2 decimal places
    setSplitAmount(amount);
  };

  const headerContent = (
    <Text style={{fontSize: 12}}>Split Bill</Text>
  );

  return (
    <MainContainer headerTitle="Financial" headerContent={headerContent}>
      <View style={styles.form}>
        <Text style={styles.label}>Total Bill</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter total bill amount"
          value={totalBill}
          onChangeText={setTotalBill}
        />

        <Text style={styles.label}>Number of People</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter number of people"
          value={numPeople}
          onChangeText={setNumPeople}
        />

        <TouchableOpacity style={styles.button} onPress={calculateSplit}>
          <Text style={styles.buttonText}>Calculate Split</Text>
        </TouchableOpacity>

        {splitAmount !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Each Person Pays:</Text>
            <Text style={styles.resultAmount}>${splitAmount}</Text>
          </View>
        )}
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#374151',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#6A11CB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#374151',
  },
  resultAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A11CB',
    marginTop: 10,
  },
});

export default FinancialScreen;
