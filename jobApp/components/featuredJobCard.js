import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FeaturedJobCard = ({ jobs }) => {
  if (!jobs || !Array.isArray(jobs)) {
    return null;
  }

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
      {jobs.map((job) => (
        <View key={job.id} style={[styles.card, { backgroundColor: job.color }]}>
         <View style={styles.cardflex}>
              <View style={styles.cardflex1}> 
                <Image source={job.image} style={styles.CardIcon} />
            </View>
            <View style={styles.cardflex2}>
                <Text style={styles.title}>{job.jobTitle}</Text>
                <Text style={styles.company}>{job.company}</Text>
            </View>
         </View>
         
          
          <Text style={styles.location}>{job.location}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
  },
  cardflex: {
    flexDirection: 'row',
    marginBottom: 70,
  },

 cardflex1: {
  marginRight: 10,
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 15,
 },

 cardflex2: {
  marginTop: 10,
 },

  card: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 200,
  },
  CardIcon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  company: {
    fontSize: 16,
    color: '#fff',
  },
  location: {
    fontSize: 14,
    color: '#fff',
  },
});

export default FeaturedJobCard;
