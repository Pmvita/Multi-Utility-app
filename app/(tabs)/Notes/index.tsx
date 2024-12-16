import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesScreen = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem('notes');
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    };

    loadNotes();
  }, []);

  const addNote = async () => {
    if (newNote.trim()) {
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      setNewNote('');

      try {
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      } catch (error) {
        console.error('Error saving notes:', error);
      }
    }
  };

  const removeNote = async (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);

    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.error('Error removing note:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8,
        }}
        value={newNote}
        onChangeText={setNewNote}
        placeholder="Enter a new note"
      />
      <Button title="Add Note" onPress={addNote} />
      
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}>
            <Text>{item}</Text>
            <Button title="Delete" onPress={() => removeNote(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default NotesScreen;