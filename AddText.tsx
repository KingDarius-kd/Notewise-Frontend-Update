import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddText() {
    const [text, setText] = useState('');

    const handleContinue = () => {
        if (!text.trim()) {
            Alert.alert('Empty Text', 'Please enter some text to continue');
            return;
        } 
        router.replace({pathname: '/Analyzing', params: {filename: 'Copied Text'}});
    };

    return (
        <View style={styles.container}>

                <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
        <FontAwesome name="arrow-left" size={25} color="#5E5CE6" />
        </TouchableOpacity>
                 </View>

             <Text style={styles.title}>Paste or Type Text</Text>
             <Text style={styles.subtitle}>Enter a text snippet to use as a source</Text>

             <TextInput
             placeholder='Paste or type text here...'
             multiline
             numberOfLines={60}
             style={styles.inputBox}
             placeholderTextColor="#999"
             value={text}
             onChangeText={setText}
             />

             <TouchableOpacity
             style={[styles.continueBtn, {backgroundColor: text ? '#5E5CE6' : '#ccc'}]}
             onPress={handleContinue}
             disabled={!text}
             >
                <Text style={styles.continueText}>Continue</Text>
             </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
    paddingTop: 0,
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
    color: '#FFFFFF',
    marginBottom: 8,
    marginTop: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A5A5A5',
    marginBottom: 32,
    lineHeight: 24,
    textAlign: 'center', 
  },
  inputBox: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#2D2D2D',
    marginBottom: 24,
  },
  continueBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    shadowColor: '#5E5CE6',
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