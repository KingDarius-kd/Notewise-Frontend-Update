import { FontAwesome } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AddPDF() {
  const router = useRouter(); // Router to navigate to Chat screen
  
  const[fileName, setFileName] = useState<string | null>(null);// State to hold the selected file name

  const handlePickPDF = async () => {
    try{
        const result = await DocumentPicker.getDocumentAsync({
            type: `*/*`, // Allow all file types
        });
        
        if (result?.assets && result.assets.length > 0) { 
            setFileName(result.assets[0].name); // Save file name to state
          } 
    } 
        catch (error) {
           Alert.alert('Error', 'Something went wrong picking the file');
                      }
    };

    // Function to go to Chat screen after file is picked
    const handleContinue = () => {
      if (!fileName) {
        Alert.alert('No File Selected', 'Please select a PDF file to continue.');
        return;
      }
      //Navigate to chat screen and pass filename as a parameter
     router.push({pathname:'/Analyzing', params: { fileName } });
};


  return (
    <View style={styles.container}>

      <View style={styles.header}>
  <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
    <FontAwesome name="arrow-left" size={25} color="#5E5CE6" />
  </TouchableOpacity>
      </View>

        <Text style={styles.title}>Add Document</Text>
        <Text style={styles.subtitle}>Select a document to analyze</Text>
     
      <TouchableOpacity style={styles.button} onPress={handlePickPDF}>
        <FontAwesome name="upload" size={20} color= "#5E5CE6" /> {/* Icon for upload*/}
        <Text style={styles.buttonText}>Select Document</Text>
      </TouchableOpacity>
      
      {fileName && (
        <Text style={styles.fileName}>Selected File: 📄 {fileName}</Text>
      )}
     
     <TouchableOpacity 
        style={[styles.continueBtn, {backgroundColor: fileName ? '#5E5CE6' : '#ccc'},
     ]}
        onPress={handleContinue}
        disabled={!fileName}> {/* Disable button if no file is selected*/}
        
        <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
    </View>
);
}


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Keeping dark bg for consistency
    paddingHorizontal: 24,
    paddingTop: 0,
    alignItems: 'center', // Centers all child elements
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
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A5A5A5',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E', // Card color from Add Source
    borderWidth: 1,
    borderColor: '#2D2D2D', // Border color from Add Source
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 24,
    width: width * 0.8,
    marginBottom: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  fileName: {
    color: '#BB86FC', // Accent purple from Add Source
    fontSize: 14,
    marginBottom: 32,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  continueBtn: {
    width: width * 0.8,
    backgroundColor: '#5E5CE6', // Purple from Add Source icons
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5E5CE6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  continueBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});












































































































