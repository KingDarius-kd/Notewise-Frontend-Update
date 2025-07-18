import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function SourcesScreen() {
   //Mock sources state (empty = show empty state)
   const [sources, setSources] = useState([
         {
            id:'1', type:'PDF', name: 'AI_Report_2025.pdf',
         },
         {
            id:'2', type: 'Website', name: 'https//www.example.com/ai-news',
         },
         {
            id:'3', type: 'text', name: 'Copied text snippet',
         },
]); // This would typically be fetched from an API or local storage
   
   //If there are no sources, show this component
   const renderEmptyState = () => (
    <View style={styles.emptycontainer}>
        <Image 
        source={require('../../assets/Images/no-sources.png')} // Replace with your empty state image
        style={styles.emptyImage}
        resizeMode="contain"
        />

        <Text style={styles.emptyText}>No sources uploaded yet</Text>
        <Text style={styles.emptySubtext}>Create or upload a source to get started</Text>
    </View>
   );
   
   //How each source is rendered in thye list
   const renderSourceItem = ({ item }: {item: any}) => (
    <View style={styles.sourceCard}>
        <Text style={styles.sourceType}>{item.type}</Text>
        <Text style={styles.sourceName}>{item.name}</Text>
    </View>
   );
   

    return(
        <View style={styles.container}>
           
               <View style={styles.header}>
       <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
       <FontAwesome name="arrow-left" size={25} color="#5E5CE6" />
       </TouchableOpacity>
                </View>

           {/*Flatlist handles scrollable lists*/}
             <FlatList
               data={sources}  //The source data array
               renderItem={renderSourceItem}  //How each item is rendered
               keyExtractor={(item) => item.id}  //Unique key for each item
               ListEmptyComponent={renderEmptyState}  //Component to show when no sources
                contentContainerStyle={sources.length === 0 ? styles.emptyWrapper  : undefined} //
                />

            {/* Add Source Button */}
    <TouchableOpacity style={styles.addSourcebtn} onPress={() => router.push('/AddSource')}>
        <Text style={styles.addSourceText}>+ Add Source</Text>
    </TouchableOpacity>

        </View>
    );
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 16,
        paddingTop: 10,
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
    emptycontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    emptyImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
        opacity: 0.8,     
    },
    emptyText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 8,
        textAlign: 'center',
    },
    emptySubtext: {
        fontSize: 16,
        color: '#A5A5A5',
        textAlign: 'center',
        lineHeight: 24,
    },
    emptyWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    sourceCard: {
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 16,
        marginBottom: -30,
        borderWidth: 2,
        borderColor: '#5E5CE6',
        marginTop: 38,
    },
    sourceType: {
        fontSize: 14,
        fontWeight: '600',
        color: '#BB86FC', // Accent purple
        marginBottom: 4,
        textTransform: 'capitalize',
    },
    sourceName: {
        fontSize: 16,
        color: '#E0E0E0',
        lineHeight: 22,
    },
    addSourcebtn: {
        position: 'absolute',
        bottom: 24,
        right: 111,
        backgroundColor: '#5E5CE6', // Accent purple
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 24,
        shadowColor: '#5E5CE6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        justifyContent: 'center',
        alignContent:'center'
    },
    addSourceText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});











    