import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// Sample conversation data (list of users)
const conversations = [
  { id: '1', name: 'John Doe', lastMessage: 'See you later!', time: '10:30 AM' },
  { id: '2', name: 'Jane Smith', lastMessage: 'Got it!', time: '9:15 AM' },
  { id: '3', name: 'Michael Johnson', lastMessage: 'Thanks!', time: 'Yesterday' },
  { id: '4', name: 'Emily Williams', lastMessage: 'Let me check!', time: 'Yesterday' },
  { id: '5', name: 'Sophia Lee', lastMessage: 'I’ll call you soon!', time: '11:00 AM' },
];

const MessagesPage = () => {
  // State hooks to manage modal visibility, active chat, messages, and input text
  const [modalVisible, setModalVisible] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', type: 'received' },
    { id: '2', text: 'Hi! How are you?', type: 'sent' },
    { id: '3', text: 'I’m doing well, thanks!', type: 'received' },
    { id: '4', text: 'Great to hear!', type: 'sent' },
    { id: '5', text: 'What’s up?', type: 'sent' },
  ]);
  const [inputText, setInputText] = useState('');

  // Open the chat modal with the selected conversation
  const openChat = (chat) => {
    setCurrentChat(chat);
    setModalVisible(true);
  };

  // Close the chat modal
  const closeChat = () => {
    setModalVisible(false);
    setCurrentChat(null);
  };

  // Send a new message
  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: inputText, type: 'sent' },
      ]);
      setInputText('');
    }
  };

  // Render each conversation item
  const renderConversation = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
      }}
      onPress={() => openChat(item)}
    >
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>{item.lastMessage}</Text>
      </View>
      <Text style={{ fontSize: 12, color: 'gray' }}>{item.time}</Text>
    </TouchableOpacity>
  );

  // Render each message bubble
  const renderMessage = ({ item }) => (
    <View
      style={[
        {
          padding: 10,
          marginVertical: 5,
          borderRadius: 20,
          maxWidth: '75%',
        },
        item.type === 'sent'
          ? { backgroundColor: '#007AFF', alignSelf: 'flex-end' } // Sent messages in blue
          : { backgroundColor: '#e5e5ea', alignSelf: 'flex-start' }, // Received messages in gray
      ]}
    >
      <Text style={{ color: '#fff', fontSize: 16 }}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      {/* Chat List - Displays a list of conversations */}
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#e6e6e6', marginHorizontal: 15 }} />}
      />

      {/* Chat Modal - When a conversation is selected, open this modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeChat}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
          {/* Header - Contains Close button and Chat Name */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderBottomWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#fff',
          }}>
            <TouchableOpacity onPress={closeChat}>
              <Text style={{ fontSize: 16, color: '#007AFF' }}>Close</Text>
            </TouchableOpacity>
            <Text style={{
              flex: 1,
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
              {currentChat?.name || 'Chat'}
            </Text>
          </View>

          {/* Chat Messages Section */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
          >
            {/* Display all messages in the current chat */}
            <FlatList
              data={messages}
              renderItem={renderMessage}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ padding: 10 }}
            />

            {/* Message Input Section */}
            <View style={{
              flexDirection: 'row',
              padding: 10,
              borderTopWidth: 1,
              borderColor: '#ccc',
              backgroundColor: '#fff',
            }}>
              {/* Input Text Area */}
              <TextInput
                style={{
                  flex: 1,
                  height: 40,
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 20,
                }}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Type a message..."
              />

              {/* Send Button */}
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  backgroundColor: '#007AFF',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  height: 40,
                }}
                onPress={sendMessage}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>Send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default MessagesPage;