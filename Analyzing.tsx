// app/Analyzing.tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Analyzing() {
  const router = useRouter();
  const {fileName} = useLocalSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace({ pathname:'/(tabs)/chat', params: {fileName} } ); // Navigate to Chat screen after 3 seconds
    }, 3000); // Wait for 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5E5CE6" />
      <Text style={styles.text}>Analyzing your source...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E10',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#FFF',
  },
});


























