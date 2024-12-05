import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import MainContainer from '../../components/MainContainer';
import Icon from '../../components/Icon'; // Custom Icon Component

const NoteScreen = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() === '') {
      alert('Please enter a note!');
      return;
    }
    setNotes([...notes, {id: Date.now().toString(), text: note}]);
    setNote('');
  };

  const deleteNote = id => {
    setNotes(notes.filter(item => item.id !== id));
  };

  const headerContent = (
    <Icon name="add" size={24} color="#FFFFFF" onPress={addNote} />
  );

  return (
    <MainContainer headerTitle="Note" headerContent={headerContent}>
      {/* Note Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a new note..."
          value={note}
          onChangeText={setNote}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNote}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Icon name="trash" size={20} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No notes available. Start adding some!
          </Text>
        }
      />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  noteText: {
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

export default NoteScreen;
