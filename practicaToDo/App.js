import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Input from './src/componentes/input';
import Boton from './src/componentes/boton';
import Item from './src/componentes/todoItem';

export default function App() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [idCounter, setIdCounter] = useState(1);

  const agregar = () => {
    if (!inputValue.trim()) return;
    const newTodo = {
      id: idCounter,
      text: inputValue
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
    setIdCounter(idCounter + 1); // Incrementar el contador de IDs
  };

  const eliminar = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>To do list</Text>
      <StatusBar style="auto" />
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Boton
        text={'Agregar tarea'}
        funcion={agregar}
      />
     <ScrollView style={styles.scrollView}>
        {todos.map(todo => (
          <Item
            key={todo.id}
            todo={todo}
            eliminar={eliminar}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
   
  },
  scrollView: {
    width: '100%',
  },
  texto:{
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  }
});
