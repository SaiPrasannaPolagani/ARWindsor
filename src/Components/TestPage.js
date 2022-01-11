import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";

export default function TestPage({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the {route.params.title} page</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#F5FCFF",
  }
});
