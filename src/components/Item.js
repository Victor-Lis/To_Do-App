import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Item({item, index, excluir}) {

  const [resultIndex, setResultIndex] = useState()

  function padronizarNumeros(index){

    index++

    if(index < 10){

      setResultIndex("0"+index)

    }else{

      setResultIndex(index)

    } 

  }

  useEffect(() => padronizarNumeros(index), [item])

 return (
  <View style={styles.itemArea}> 

    <Text style={{color: "#000", fontSize: 15}}> {resultIndex} -</Text>
    <ScrollView horizontal={true} style={{marginHorizontal: "02.5%"}}> 
      <Text style={{fontSize: 15, color: "rgba(0,0,0, 0.65)"}}>{item} </Text>
    </ScrollView>
    <TouchableOpacity onPress={() => excluir(index)}> 
    
      <Text style={{color: "blue", fontSize: 15}}> Excluir </Text> 
  
    </TouchableOpacity>

  </View>
  );
}

const styles = StyleSheet.create({
  listArea: {

    justifyContent: "center",
    height: "85%",
    margin: 10,

  },
  itemArea: {

    flexDirection: "row",
    backgroundColor: "#efefefef",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,

  }
});