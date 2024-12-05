import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import MainContainer from '../../components/MainContainer';
import Icon from '../../components/Icon';

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [scheduleText, setScheduleText] = useState('');
  const [schedules, setSchedules] = useState({});

  const addSchedule = () => {
    if (!selectedDate) {
      Alert.alert('Error', 'Please select a date.');
      return;
    }
    if (scheduleText.trim() === '') {
      Alert.alert('Error', 'Please enter a schedule.');
      return;
    }

    const newSchedules = { ...schedules };
    if (!newSchedules[selectedDate]) {
      newSchedules[selectedDate] = [];
    }
    newSchedules[selectedDate].push({
      id: Date.now().toString(),
      text: scheduleText,
    });
    setSchedules(newSchedules);
    setScheduleText('');
  };

  const deleteSchedule = (date, id) => {
    const newSchedules = { ...schedules };
    newSchedules[date] = newSchedules[date].filter((item) => item.id !== id);
    if (newSchedules[date].length === 0) delete newSchedules[date];
    setSchedules(newSchedules);
  };

  const headerContent = (
    <Icon name="calendar" size={24} color="#FFFFFF" />
  );

  return (
    <MainContainer headerTitle="Note" headerContent={headerContent}>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#6A11CB' },
          ...Object.keys(schedules).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: '#FF6B6B' };
            return acc;
          }, {}),
        }}
      />

      {/* Schedule Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a schedule..."
          value={scheduleText}
          onChangeText={setScheduleText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addSchedule}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Schedule List */}
      <FlatList
        data={schedules[selectedDate] || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteSchedule(selectedDate, item.id)}>
              <Icon name="trash" size={20} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          selectedDate ? (
            <Text style={styles.emptyText}>No schedules for {selectedDate}.</Text>
          ) : (
            <Text style={styles.emptyText}>Select a date to view schedules.</Text>
          )
        }
      />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#6A11CB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  scheduleText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
    marginRight: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#9CA3AF',
    marginTop: 20,
  },
});

export default ScheduleScreen;
