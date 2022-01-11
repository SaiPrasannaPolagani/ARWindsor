import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Separator() {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#D3D3D3',
    fontWeight: '100',
    height: 1.5,
    // flex: 1
  }
})