import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import Homepage from './components/Homepage';
import JobCard from './components/JobCard';
import FeaturedJobCard from './components/featuredJobCard';
import { LoginComponent } from './components/LoginComponent';

const Stack = createStackNavigator();

export default function App() {
  const featuredJobs = [
    { id: 1, jobTitle: 'Software Engineer', company: 'Facebook', location: '$180.00                       Accra, Ghana', image: require('./assets/facebook.png'), color: '#179CDF' },
    { id: 2, jobTitle: 'Data Analyst', company: 'BlueCo', location: '$180.00                       Accra, Ghana', image: require('./assets/google.png'), color: '#121190' },
    { id: 3, jobTitle: 'UI/UX Designer', company: 'Instagram', location: '$180.00                       Accra, Ghana', image: require('./assets/instagram.png'), color: '#FF6347' },
    { id: 4, jobTitle: 'Cybersecurity Expert', company: 'Facebook', location: '$180.00                       Accra, Ghana', image: require('./assets/twitter.png'), color: '#8A2BE2' },
    { id: 5, jobTitle: 'Game developer', company: 'Unity', location: '$180.00                       Accra, Ghana', image: require('./assets/unity.png'), color: '#00FA9A' },
    { id: 6, jobTitle: 'Virtual Reality Engineer', company: 'MagicLeap', location: '$180.00                       Accra, Ghana', image: require('./assets/virtual-reality.png'), color: '#FF69B4' },
    { id: 7, jobTitle: 'Machine Learning Expert', company: 'Amazon Web Services', location: '$180.00                       Accra, Ghana', image: require('./assets/machine_learning.png'), color: '#CD5C5C' },
    { id: 8, jobTitle: 'Systems Administrator', company: 'Veritone', location: '$180.00                       Accra, Ghana', image: require('./assets/administrator.png'), color: '#4169E1' },
  ];

  const popularJobs = [
    { id: 1, jobTitle: 'Jr Executive                       $96,000/y', company: 'Burger King                     New York',  image: require('./assets/burgerKing.jpg'), color: '#87CEFA' },
    { id: 2, jobTitle: 'Product Manager             $84,000/y', company: 'Beats                                Florida',  image: require('./assets/beats.png'), color: '#FFD700' },
    { id: 3, jobTitle: 'Senior Developer             $86,000/y', company: 'Instagram                        Kansas',  image: require('./assets/instagram.png'), color: '#FF6347' },
    { id: 4, jobTitle: 'Senior Developer             $92,000/y', company: 'Unity                                Las Vegas',  image: require('./assets/unity.png'), color: '#8A2BE2' },
    { id: 5, jobTitle: 'Senior Developer             $50,000/y', company: 'Tech. Co                          South Cot', location: 'New York', image: require('./assets/virtual-reality.png'), color: '#00FA9A' },
    { id: 6, jobTitle: 'Senior Developer             $20.000/y', company: 'Tech. Co                          Leicester', location: 'New York', image: require('./assets/machine_learning.png'), color: '#FF69B4' },
    { id: 7, jobTitle: 'Senior Developer             $50,000/y', company: 'Twitter                             Los Angeles', location: 'New York', image: require('./assets/twitter.png'), color: '#CD5C5C' },
    { id: 8, jobTitle: 'Senior Developer             $90,000/y', company:'Dext Co                            Florence', location: 'New York', image: require('./assets/administrator.png'), color: '#4169E1' },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginComponent {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Homepage" options={{ headerShown: false }}>
          {(props) => (
            <SafeAreaView style={styles.safeArea}>
              <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                  <Homepage />
                  <View style={styles.cardHeader}>
                    <Text style={styles.text1}>Featured Jobs</Text>
                    <Text style={styles.text2}>See all</Text>
                  </View>
                  <FeaturedJobCard jobs={featuredJobs} />
                  <View style={styles.cardHeader}>
                    <Text style={styles.text1}>Popular Jobs</Text>
                    <Text style={styles.text2}>See all</Text>
                  </View>
                  {popularJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      jobTitle={job.jobTitle}
                      company={job.company}
                      location={job.location}
                      image={job.image}
                      color={job.color}
                    />
                  ))}
                  <StatusBar style="auto" />
                </View>
              </ScrollView>
            </SafeAreaView>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFD',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    color: '#9999A1',
  },
  scrollView: {
    flex: 1,
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});