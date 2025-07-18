import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function AddSource() {
  return (
    <View style={styles.container}>
 
     <View style={styles.header}>
  <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
    <FontAwesome name="arrow-left" size={25} color="#5E5CE6" />
  </TouchableOpacity>
     </View>

      <Text style={styles.title}>Add Source</Text>
      <Text style={styles.subtitle}>
        Choose a type of source to start building your notebook
      </Text>

      {/* Source Cards Grid */}

      <View style={styles.grid}>
        {/* PDF Upload */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => router.push('/AddPDF')}>
          <FontAwesome5 name="file-pdf" size={24} color="#5E5CE6" />
          <Text style={styles.cardText}>Upload PDF</Text>
        </TouchableOpacity>

        {/* Website URL */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => router.push('/AddURL')}>
          <FontAwesome5 name="link" size={24} color="#5E5CE6" />
          <Text style={styles.cardText}>Website URL</Text>
        </TouchableOpacity>

        {/* YouTube Video */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => router.push('/AddYouTube')}>
          <FontAwesome5 name="youtube" size={24} color="#5E5CE6" />
          <Text style={styles.cardText}>YouTube Video</Text>
        </TouchableOpacity>

        {/* Copied Text */}
        <TouchableOpacity
        activeOpacity={0.8}
          style={styles.card}
          onPress={() => router.push('/AddText')}>
          <FontAwesome5 name="align-left" size={24} color="#5E5CE6" />
          <Text style={styles.cardText}>Copied Text</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const { width } = Dimensions.get('window');
const CARD_GAP = 16;
const CARD_WIDTH = (width - 48 - CARD_GAP) / 2; // 2 columns with padding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark theme
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
    fontSize: 28,
    fontWeight: '700',
    color: "#FFFFFF" , 
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 34,
    textShadowColor: 'rgba(187, 134, 252, 0.3)', // Glow effect
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#A5A5A5',
    marginBottom: 32,
    lineHeight: 24,
    textAlign: 'center',
    
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: CARD_GAP,
    paddingTop: 50,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1, // Square cards
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
  cardText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});