import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Navbar from './src/components/Navbar';
import Item from './src/components/Item';

export default function App() {

  const [tarefas, setTarefas] = useState([]) 

  function novaTarefa(newTask){

    let array = []
    tarefas.map(tarefa => array.push(tarefa))
    array.push(newTask)

    array.map(item => check(item))

    setTarefas(array)

    function check(item){

      if(array[array.indexOf(item)] === undefined || array[array.indexOf(item)] === ""){

        array.splice(array.indexOf(item), 1)

      }

    }

  }

  function excluir(index){

    let array = []
    tarefas.map(tarefa => array.push(tarefa))

    array.splice(index, 1)

    setTarefas(array)

  }

  return (
    <View style={styles.container}>
      <Navbar Tasks={tarefas} novaTarefa={novaTarefa}/>
      <StatusBar hidden={true} style={{backgroundColor: "red"}}/>

      <View style={styles.listArea}>
      <FlatList

        style={{width: "80%"}}
        data={tarefas}
        renderItem={({item}) => 

            <View style={styles.itemArea}> 

              <Text style={{color: "#000", fontSize: 15}}> {tarefas.indexOf(item)+1} -</Text>
              <ScrollView horizontal={true} style={{marginHorizontal: "02.5%"}}> 
                <Text style={{fontSize: 15, color: "rgba(0,30,30, 0.8)"}}> {item} </Text>
              </ScrollView>
              <TouchableOpacity onPress={() => excluir(tarefas.indexOf(item))}> 
                
                <Text style={{color: "blue", fontSize: 15}}> Excluir </Text> 
              
              </TouchableOpacity>

            </View>

        }
      
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "column",
  },
  listArea: {

    justifyContent: "center",

  },
  itemArea: {

    flexDirection: "row",
    backgroundColor: "#efefef",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,

  }
});