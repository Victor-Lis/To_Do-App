import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function Item({index,tarefa}) {
 return (
   <View style={styles.container}>
        <Text style={styles.text}> {tarefa} </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {

        flexDirection: "column"

    },
    text: {
        color: "#000",
        backgroundColor: "red"
    },
  });