import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Tile } from "react-native-elements";
import { firebase } from '@firebase/app';
import "firebase/firestore"
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOWLsoEsHMG6F5U_-FRkO7cpz2ZSTit5Y",
  authDomain: "arwindsor-d70c2.firebaseapp.com",
  projectId: "arwindsor-d70c2",
  storageBucket: "arwindsor-d70c2.appspot.com",
  messagingSenderId: "680918066684",
  appId: "1:680918066684:web:9a5a415e258ae6d739be79",
  measurementId: "G-6FBR66S2LN"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export default function LandingPage({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [restList, setRestList] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [tourismList, setTourismList] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const [error, setError] = useState();


  useEffect(() => {
    db.collection('restaurantsList').get()
      .then(response => {
        const fetchedRestaurants = [];
        response.docs.forEach(document => {
          const fetchedRestaurant = {
            id: document.id,
            ...document.data()
          };
          fetchedRestaurants.push(fetchedRestaurant);
        });
        setRestList(fetchedRestaurants);
        console.log(fetchedRestaurants);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    db.collection('billboardsList').get()
      .then(response => {
        const fetchedEvents = [];
        response.docs.forEach(document => {
          const fetchedEvent = {
            id: document.id,
            ...document.data()
          };
          fetchedEvents.push(fetchedEvent);
        });
        setEventsList(fetchedEvents);
        console.log(fetchedEvents);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    db.collection('tourismList').get()
      .then(response => {
        const fetchedTourisms = [];
        response.docs.forEach(document => {
          const fetchedTourism = {
            id: document.id,
            ...document.data()
          };
          fetchedTourisms.push(fetchedTourism);
        });
        setTourismList(fetchedTourisms);
        console.log(fetchedTourisms);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    db.collection('foodItems').get()
      .then(response => {
        const fetchedfoods = [];
        response.docs.forEach(document => {
          const fetchedfood = {
            id: document.id,
            ...document.data()
          };
          fetchedfoods.push(fetchedfood);
        });
        setFoodList(fetchedfoods);
        console.log(fetchedfoods);
      })
      .catch(error => {
        setError(error);
      });
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.headingCard}>
        <Image 
          source={require('../../assets/arwindsorLogo.png')} 
          style={styles.ImageIconStyle} 
        />
      </View>
      <View style={styles.bodyCard}>
        <View style={[styles.tileCard, {marginLeft : 8}]}>
          <Tile
            imageSrc={require('../../assets/restaurant.jpg')}
            imageContainerStyle={{ borderRadius: 10 }}
            title="Restaurants"
            titleStyle={{ marginBottom: 0, fontSize: 16, color: 'black', fontWeight: '600' }}
            featured
            height={150}
            width='100%'
            captionStyle={{ color: 'black' }}
            onPress={() => navigation.navigate('Restaurant', { title: "Restaurants", restData: restList, foodData: foodList })}
          />
        </View>
        <View style={[styles.tileCard, {marginRight : 8}]}>
          <Tile
            imageSrc={require('../../assets/event.jpg')}
            imageContainerStyle={{ borderRadius: 10 }}
            title="Events"
            titleStyle={{ marginBottom: 0, fontSize: 16, color: 'black', fontWeight: '600' }}
            featured
            height={150}
            width='100%'
            captionStyle={{ color: 'black' }}
            onPress={() => navigation.navigate('Event', { title: "Events", eventData: eventsList })}
          />
        </View>
        <View style={[styles.tileCard, {marginLeft : 8}]}>
          <Tile
            imageSrc={require('../../assets/tourism.jpg')}
            imageContainerStyle={{ borderRadius: 10 }}
            title="Tourism"
            titleStyle={{ marginBottom: 0, fontSize: 16, color: 'black', fontWeight: '600' }}
            featured
            height={150}
            width='100%'
            captionStyle={{ color: 'black' }}
            onPress={() => navigation.navigate('Tourism', { clicked: "Restaurant", tourismData: tourismList })}
          />
        </View>
        <View style={[styles.tileCard, {marginRight : 8}]}>
          <Tile
            imageSrc={require('../../assets/PastelGradientPreview.jpg')}
            imageContainerStyle={{ borderRadius: 10 }}
            title="TBD"
            titleStyle={{ marginBottom: 0, fontSize: 16, color: 'black', fontWeight: '600' }}
            featured
            height={150}
            width='100%'
            captionStyle={{ color: 'black' }}
            onPress={() => {}}
            style={{marginRight: 10}}

          />
        </View>
      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#F5FCFF",
  },
  headingCard: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
  },
  bodyCard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tileCard: {
    width: 150,
    marginBottom: 20,
  },
  ImageIconStyle:{
    height: 300,
    width: '100%',
    borderRadius: 10,
  }
});