import React, { Component, useState, useEffect} from "react";
import { Platform, StyleSheet, Text, View, ScrollView, SectionList ,FlatList, TouchableOpacity, Image, 
ActivityIndicator, Linking  } from "react-native";
import Separator from "./Separator";

export default function EventsPage({ route, navigation }) {
  const { title, eventData } = route.params;
  const [nameOfPage, setNameOfPage] = useState(title);
  const [eveData, setEveData] = useState(eventData);


  return (
      <View style={styles.container}>
      <FlatList
        data={eveData}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.nameText}>{item.billName}</Text>
                </View>
                <Text style={styles.contentText}>{item.billDesc}</Text>
                <Text style={styles.bigBlue} onPress={() => Linking.openURL(item.billUrl)}>Visit Page</Text>
               <Image source={{ uri: item.billPic }} style={styles.ImageIconStyle} />
              </View>
            </View>
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
             <View style={styles.SeparatorLine} />
          </TouchableOpacity>
        )}
       ItemSeparatorComponent={() => <Separator />}
      />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 30,
    backgroundColor: "#F5FCFF",
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flexShrink: 1
  },
  header: {
    flexDirection: 'row'
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000'
  },
  dateText: {},
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2
  },
  SeparatorLine :{
  width: 10
},
  ImageIconStyle: {
   padding: 20,
   margin: 0,
   height: 80,
   width: 80,
   resizeMode : 'stretch',
},
bigBlue: {
    color: 'blue',
    fontSize: 15,
  },
});

