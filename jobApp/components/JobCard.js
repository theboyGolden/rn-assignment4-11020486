import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ jobTitle, company, location, featured }) => {
    return (
        <View>
            <View style={styles.card}>
                
                <Text style={styles.title}>{jobTitle}</Text>
                <Text style={styles.company}>{company}</Text>
                <Text style={styles.location}>{location}</Text>
            </View> 
        </View>
        
    );
};

const styles = StyleSheet.create({    
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
    featuredLabel: {
        backgroundColor: 'gold',
        color: 'black',
        padding: 5,
        alignSelf: 'flex-start',
        borderRadius: 8,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
});

export default JobCard;
