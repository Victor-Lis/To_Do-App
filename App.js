import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Navbar from './src/components/Navbar';
import Item from './src/components/Item';

export default function App() {

  const [tarefas, setTarefas] = useState([])

  async function novaTarefa(newTask){

    let array = []
    tarefas.map(tarefa => array.push(tarefa))
    array.push(newTask)

    array.map(item => check(item))

    setTarefas(array)
    guardarTarefas(array)

    function check(item){

      if(array[array.indexOf(item)] === undefined || array[array.indexOf(item)] === "" ){

        array.splice(array.indexOf(item), 1)

      }

    }

  }

  async function excluir(index){

    let array = []
    tarefas.map(tarefa => array.push(tarefa))

    array.splice(index, 1)

    setTarefas(array)
    guardarTarefas(array)

  }

  guardarTarefas = async (array) => {

    await AsyncStorage.setItem("tarefas", JSON.stringify(array))

  };

  receberTarefas = async () => {

    let localTasks = await AsyncStorage.getItem("tarefas")

    localTasks = JSON.parse(localTasks)

    if(localTasks == null){

      return

    }else{

      setTarefas(localTasks)

    }

  }

  useEffect(() => {receberTarefas()}, [])

  return (
    <View style={styles.container}>
      <Navbar Tasks={tarefas} novaTarefa={novaTarefa}/>
      <StatusBar hidden={true} style={{backgroundColor: "red"}}/>
      <View style={styles.listArea}>
      <FlatList
        style={{width: "80%"}}
        data={tarefas}
        renderItem={({item}) => <Item item={item} tarefas={tarefas}/> }/>
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