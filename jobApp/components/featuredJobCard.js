import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FeaturedJobCard = ({ jobTitle, company, location }) => {
    return (
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.card}>
                <Text style={styles.title}>{jobTitle}</Text>
                <Text style={styles.company}>{company}</Text>
                <Text style={styles.location}>{location}</Text>
            </View> 
            <View style={styles.card}>
                <Text style={styles.title}>{jobTitle}</Text>
                <Text style={styles.company}>{company}</Text>
                <Text style={styles.location}>{location}</Text>
            </View> 
            <View style={styles.card}>
                <Text style={styles.title}>{jobTitle}</Text>
                <Text style={styles.company}>{company}</Text>
                <Text style={styles.location}>{location}</Text>
            </View> 
        </ScrollView>
    );
};

const styles = StyleSheet.create({    
    scrollViewContent: {
        alignItems: 'center',  // Horizontally center the content
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        minWidth: 200,  // Set a minimum width for the card
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 16,
        color: '#555',
    },
    location: {
        fontSize: 14,
        color: '#888',
    },
});

export default FeaturedJobCard;
