import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FeaturedJobCard = ({ jobs }) => {
  if (!jobs || !Array.isArray(jobs)) {
    return null;
  }

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
      {jobs.map((job) => (
        <View key={job.id} style={styles.card}>
          <Image source={job.image} style={styles.CardIcon} />
          <Text style={styles.title}>{job.jobTitle}</Text>
          <Text style={styles.company}>{job.company}</Text>
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
  card: {
    backgroundColor: '#87CEFA',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 200,
  },

  CardIcon: {
    width: 40,
    height:40
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
