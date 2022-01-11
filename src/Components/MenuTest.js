import React, { Component, useState, useEffect } from "react";
//import AdSense from 'react-adsense';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Linking,
  Button,
  ImageBackground,
} from "react-native";
import Separator from "./Separator";

export default function MenuTest({ route, navigation }) {
  const { restParam, foodParam, restParamId } = route.params;
  const [reData, setReData] = useState(restParam);
  const [foData, setFoData] = useState(foodParam);
  const [resId, setResId] = useState(restParamId);

  useEffect(() => {
    console.log(resId);
  }, []);

  return (
    <View style={styles.container}>
      {(() => {
        if (resId % 1 === 0) {
          return (
            <FlatList
              data={foData}
              renderItem={({ item }) => (
                <View>
                  {(() => {
                    if (item.fid == resId) {
                      return (
                        item.fmodel ? 
                        <TouchableOpacity 
                          onPress={() =>
                            
                            navigation.navigate("ArModels", {
                              title: item.fname,
                              arModel: item.fmodel,
                            })
                          }
                        >
                          <View>
                            <ImageBackground
                              source={{ uri: item.fimg }}
                              style={styles.ImageIconStyle}>
                                <View style={styles.TagTriangleStyle}/>
                                <View style={styles.TagRectangleStyle}>
                                  <Text style={styles.TagTextStyle}>Tap for 3D View</Text>
                                </View>
                            </ImageBackground>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 4}}>
                              <Text style={styles.TextStyle}> {item.fname} </Text>
                              <Text style={styles.priceTextStyle}>
                                {" "}
                                ${item.fprice}{" "}
                              </Text>
                            </View>
                          </View>
                          <Separator />
                        </TouchableOpacity>
                        :
                        <>
                        <View>
                            <ImageBackground
                              source={{ uri: item.fimg }}
                              style={styles.ImageIconStyle}
                            />
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 4}}>
                              <Text style={styles.TextStyle}> {item.fname} </Text>
                              <Text style={styles.priceTextStyle}>
                                {" "}
                                ${item.fprice}{" "}
                              </Text>
                            </View>
                          </View>
                          <Separator />
                          </>
                     );
                    }
                  })()}
                </View>
              )}
            />
          );
        } else {
          return (
            <View>
              <Text> Menu to be updated. Please stay tuned to this page. </Text>
            </View>
          );
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  SeparatorLine: {
    width: '100%',
  },
  ImageIconStyle: {
    height: 200,
    width: '100%',
    marginTop: 10,
  },
  TextStyle: {
    fontWeight: "700",
    fontSize: 24,
    color: "#000",
    marginBottom: 10,
    marginLeft: 2,
  },
  priceTextStyle:{
    fontWeight: "600",
    fontSize: 18,
    color: "green",
    marginTop: 4,
    marginRight: 4,
  },
  TagTriangleStyle:{
      top:7,
      left:5,
      position:'absolute',
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 18,
      borderTopWidth: 18,
      borderRightColor: 'transparent',
      borderTopColor: 'green',
      transform: [{rotate: '-45deg'}],                                
  },
  TagRectangleStyle:{
    top:3,
    left:13,
    position:'absolute',
    width: 100,
    padding: 0,
    paddingLeft: 0,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'green',
    height: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  TagTextStyle:{
    color: 'white', 
    fontWeight: 'normal'
  }

});
