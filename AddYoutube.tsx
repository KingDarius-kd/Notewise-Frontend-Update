import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddYouTube() {
  const [youtubeURL, setYoutubeURL] = useState('');

  const handleContinue = () => {
    if (!youtubeURL.trim()) {
      Alert.alert('Empty YouTube Link', 'Please paste a valid YouTube URL.');
      return;
    }
    router.replace({ pathname: '/Analyzing', params: { fileName: 'YouTube Video' }});
  };

  return (
    <View style={styles.container}>

        <View style={styles.header}>
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
    <FontAwesome name="arrow-left" size={25} color="#5E5CE6" />
    </TouchableOpacity>
         </View>

      <Text style={styles.title}>Paste YouTube Link</Text>
      <Text style={styles.subtitle}>Use a YouTube video as a source</Text>

      <TextInput
        placeholder="https://youtube.com/watch?v=abc123"
        style={styles.inputBox}
        placeholderTextColor="#999"
        value={youtubeURL}
        onChangeText={setYoutubeURL}
      />

      <TouchableOpacity
        style={[styles.continueBtn, { backgroundColor: youtubeURL ? '#5E5CE6' : '#ccc',
                                      shadowColor: youtubeURL ? '#5E5CE6' : 'transparent', }]}
        onPress={handleContinue}
        disabled={!youtubeURL}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    paddingHorizontal: 24,
    paddingTop: 0,
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: '#2D2D2D',
    borderEndWidth: 1.5,
    borderEndColor: '#2D2D2D',
},
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF', // White text
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#A5A5A5', // Light gray
    marginBottom: 32,
    lineHeight: 24,
    textAlign: 'center'
  },
  inputBox: {
    backgroundColor: '#1E1E1E', // Dark card background
    borderRadius: 12,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#2D2D2D', // Subtle border
  },
  continueBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});