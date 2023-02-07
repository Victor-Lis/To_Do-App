import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

export default function Navbar({Tasks, novaTarefa}) {

    let [newTask, setNewTask] = useState()

    function definirNovaTarefa(){

        novaTarefa(newTask)
        setNewTask("")

    }

 return (
   <View style={styles.navbar}> 

        <TextInput style={styles.input} value={newTask} onChangeText={setNewTask}/>
        <TouchableOpacity style={styles.button} onPress={() => definirNovaTarefa()}> 
            
            <Text style={{fontSize: 20}}> Adicionar </Text> 
        
        </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
      minHeight: "12.5%",
      paddingVertical: "5%",
      width: "100%",
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row"
    },
    input: {

        backgroundColor: "#efefef",
        paddingHorizontal: 6.5,
        width: "60%",
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        fontSize: 20

    },
    button: {

        backgroundColor: "lightgreen",
        borderRadius: 10, 
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0, 
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        flex: 0,
        flexDirection: "column",

    }
  });