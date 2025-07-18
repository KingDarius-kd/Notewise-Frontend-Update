import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <>
 <StatusBar
   barStyle='light-content'
   backgroundColor="#0C0C0C" // Dark background color
   translucent={false} // Not translucent for a solid color
 />
    
    
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#5E5CE6',
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#121212',
            borderTopColor: '#1E1E1E',
            borderTopWidth: 1,
        }
    }}>
        
        <Tabs.Screen
            name="sources"
            options={{
                title:'Sources',
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="file" color={color} size={size}/>
                ),
}}
          /> 

        <Tabs.Screen
            name="chat"
            options={{ 
                title: 'Chat', 
                headerShown: false,
                tabBarIcon: ({color , size}) => (
                    <FontAwesome name="comments" color={color} size={size}/>
                ),        
  }}  
        />


        <Tabs.Screen
            name="studio"
            options={{
                title: 'Studio',
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="microphone" color={color} size={size}/>
                ),
}}
        />
    </Tabs>
    </>
  );
}