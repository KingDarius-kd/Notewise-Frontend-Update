import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function StudioScreeen() {

  // State to track if audio is being generated
  const [isGenerating, setIsGenerating] = useState(false);
  // State to track if audio is playing
  const [isPlaying, setIsPlaying] = useState(false);
  // Simulated source name (in real app, pass this dynamically)
  const selectedSource = 'AI_Research_2025.pdf';

  // Function to simulate audio generation
  const handleGenerateAudio = () => {
    setIsGenerating(true); // Show loading indicator
    setTimeout(() => {
      setIsGenerating(false); // Stop loading
      setIsPlaying(true); // Start playing audio
    }, 3000); // 3 seconds fake processing
  };

  // Function to toggle audio playback
  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>

         <View style={styles.header}>
<TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
  <FontAwesome name="arrow-left" size={25} color="#5E5CE6" />
</TouchableOpacity>
         </View>

      {/* Screen Title */}
      <Text style={styles.title}>Audio Overview</Text>

      {/* Display current source name */}
      <Text style={styles.sourceName}>Source: {selectedSource}</Text>

      {/* Generate Audio Button */}
      {!isGenerating && !isPlaying && (
        <TouchableOpacity style={styles.generateBtn} onPress={handleGenerateAudio}>
          <FontAwesome name="microphone" size={20} color="#fff" />
          <Text style={styles.generateText}>Generate Audio</Text>
        </TouchableOpacity>
      )}

      {/* Loading indicator during generation */}
      {isGenerating && <ActivityIndicator size="large" color="#5E5CE6" style={{ marginTop: 40 }} />}

      {/* Simulated audio player */}
      {isPlaying && (
        <View style={styles.audioPlayer}>
          <Image
            source={require('../../assets/Images/audio-waves.png')} // Fake waveform image
            style={styles.waveImage}
            resizeMode="contain"
          />

          <TouchableOpacity onPress={togglePlayback} style={styles.playPauseBtn}>
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={22} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.audioLabel}>Now playing summary...</Text>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 24,
    textAlign: 'center',
    position: 'absolute',
    top: 60,
  },
  sourceName: {
    fontSize: 16,
    color: '#A5A5A5',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 100,
  },
  generateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5E5CE6',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '80%',
    shadowColor: '#5E5CE6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    position:'absolute',
    bottom: 250,
  },
  generateText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  audioPlayer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  waveImage: {
    width: '100%',
    height: 200,
    marginBottom: 24,
    
  },
  playPauseBtn: {
    backgroundColor: '#1E1E1E',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#5E5CE6',
    marginBottom: 16,
  },
  audioLabel: {
    color: '#BB86FC',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
});





