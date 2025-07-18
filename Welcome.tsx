import { LinearGradient } from 'expo-linear-gradient'; // Import the gradient component
import { useRouter } from 'expo-router'; // Expo Router navigation hook
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const router = useRouter();  //Used for navigation between screens

  return (


    <View style={styles.container}>

      <View style={{ width:'100%',  borderRadius:20,borderTopLeftRadius:0,borderTopRightRadius:0,marginTop:0,
         flex:0.05,backgroundColor:'#BB86FC', justifyContent:'center', visibility: 'rgba(187, 134, 252, 0.3)',  }}>
      <Image
        source={require('../assets/Images/NoteWiseLogo.png')} // Replace with your logo paths
        style={styles.image}
        resizeMode="contain"
      />
      </View>
      {/*Main content centered*/}
        <View style={styles.content}>
      <Text style={styles.title}>Welcome to NoteWise</Text>
      <Text style={styles.subtitle}>Turn your sources into engaging audio discussions and text summaries
      </Text>
        </View>
        {/*Button*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTimeout(() => {
                router.replace('/CreateNew');
              },300);
             }} 
      >
         <LinearGradient
          colors={['#5E35B1', '#7E57C2']} // NotebookLM purple gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    
    
  );
}


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark background
    paddingHorizontal: 24,
  },
  image: {
    width: '100%', // More rectangular width
    height: 80, // Fixed height
    marginTop: 0,
    marginLeft: 0,
    alignSelf: 'flex-start',
   // tintColor: '#BB86FC', // Light purple tint
  
    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60, // Pull content up
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#BB86FC', // VIBRANT PURPLE
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 34,
    textShadowColor: 'rgba(187, 134, 252, 0.3)', // Glow effect
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#A5A5A5', // Light gray with purple tint for subtitle
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: '#BB86FC',
    width: '60%',
    borderRadius: 24,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 65,
    maxWidth: 300,
    shadowColor: '#BB86FC', // Light purple shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  gradientButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#121212', // Dark text for contrast
    fontSize: 16,
    fontWeight: '600',
  },

});









