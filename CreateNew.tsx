import { LinearGradient } from 'expo-linear-gradient'; // Import the gradient component
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import { Tabs, Tab } from 'react-native-collapsible-tab-view';
import { FontAwesome } from '@expo/vector-icons';


export default function CreateNew() {
const router = useRouter();
const userEmail = 'kingdariusquartey';
const initial = userEmail.charAt(0).toUpperCase();

const handleAccountPress = () => {
  Alert.alert ('Google Account', `Signed in as: ${userEmail}`);
};

//Tab State + Handler
const [activeTab, setActiveTab] = useState('');
const tabs = [
  { label: 'Recent', icon: 'clock-o', key: 'Recent' },
  { label: 'Drafts', icon: 'pencil', key: 'Drafts' },
  { label: 'Favorites', icon: 'star', key: 'Favorites' },
];

const renderTabButton = (label, icon, key) => (
    <TouchableOpacity
      key={key}
      style={[styles.tabButton, activeTab === key && styles.activeTabButton]}
      onPress={() => setActiveTab(key)}
      accessibilityLabel={`Tab: ${label}`}
    >
      <FontAwesome name={icon} size={14} color={activeTab === key ? '#fff' : '#aaa'} />
      <Text style={[styles.tabText, activeTab === key && styles.activeTabText]}>{label}</Text>
    </TouchableOpacity>
  );

const renderMockCard = (title, date) => (
    <View key={title} style={styles.card}>
      <FontAwesome name="file-text-o" size={20} color="#5E35B1" />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{date}</Text>
      </View>
    </View>
  );

const renderTabContent = () => {
  switch(activeTab) {
    case 'Recent' :
      return (
           <>
            {renderMockCard('Recent Note 1', '2 hours ago')}
            {renderMockCard('Recent Note 2', 'Yesterday')}
          </>
      );
    case 'Drafts' :
      return (
             <>
            {renderMockCard('Draft 1', '3 days ago')}
            {renderMockCard('Draft 2', 'Last week')}
          </>
      );
    case 'Favorites':
        return (
             <>
            {renderMockCard('Favorite 1', 'Jan 4')}
            {renderMockCard('Favorite 2', 'Feb 14')}
          </>
        );
        default:
      return null;
  }
};

  return (

    <View style={styles.container}>

      <View style={styles.header}>
           <View/>
           <TouchableOpacity style={styles.accountIcon} onPress={handleAccountPress}>
            <Text style={styles.accountText}>{initial}</Text>
            </TouchableOpacity>
      </View>
      
      {/* Tabs Row 
      <View style={styles.tabsRow}>
          {['Recent', 'Drafts', 'Favorites'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}
            style={[styles.tabButton,activeTab===tab && styles.activeTabButton,]}>
              <Text style={[styles.tabText, activeTab===tab && styles.activeTabText,]}>{tab}</Text>
            </TouchableOpacity>
        ))}
      </View>   */}

          {/* New Tab Buttons */}
       <View style={styles.tabsRow}>
        {tabs.map(tab => renderTabButton(tab.label, tab.icon, tab.key))}
      </View>

          {/* Render mock cards */}
        <View style={{ width: '100%' }}>{renderTabContent()}</View>

      {/* Illustration or Placeholder Graphic */}
      <Image 
        source={require('../assets/Images/CreateImg.png')} 
        style={styles.image}
        resizeMode="contain"/>
     
      <Text style={styles.title}>Let’s Get Started</Text>
      <Text style={styles.subtitle}>Create your first notebook</Text>

      {/* Create Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
                      console.log('Pressed Create New');
                     router.push('/AddSource');}} // Route to next step
      >
         <LinearGradient
          colors={['#5E35B1', '#7E57C2']} // NotebookLM purple gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
         >
               <Text style={styles.buttonText}>+ Create New</Text>
         </LinearGradient>

      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
   position: 'absolute',
   top: 10,
   right: 10,
   left: 24,
   flexDirection: 'row', // Logo + account icon side-by-side
   justifyContent: 'space-between',
   alignItems: 'center',
   zIndex: 2, // Ensure header is above other content
  },
  accountIcon: {
   width: 36,
   height: 36,
   borderRadius: 18,
   backgroundColor: '#BB86FC', // VIBRANT PURPLE
   justifyContent: 'center',
   alignItems: 'center',
  },
  accountText: {
   color: '#121212',
   fontWeight: 'bold',
   fontSize: 16,
  },
  
  image: {
    width: width * 0.5,
    height: width * 0.3,
    marginBottom: 40,
    opacity: 0.9,
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
    color: '#A5A5A5', // Light gray
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
    paddingHorizontal: 40,
  },
  button: {
  backgroundColor: '#BB86FC',
  width: '60%',
  borderRadius: 24,
  marginBottom: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 0,
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
    letterSpacing: 0.5,
  },
  tabsRow: {
    position:'absolute',
    top: 60,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#2C2C2C',
  },
  activeTabButton: {
    backgroundColor: '#BB86FC',
  },
  tabText: {
    color: '#A5A5A5',
    fontSize: 14,
  },
  activeTabText: {
    color: '#121212',
    fontWeight: 'bold',
  },
  tabPlaceholder:{
     marginBottom: 10,
     color: '#ccc',
     fontSize: 14,
     textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  activeTab: {
    backgroundColor: '#5E35B1',
  },
  card: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
});