import clipboard from '../../assets/clipboard.png'
import { TodoItem } from "../TodoItem"
import { Text, TextInput, TouchableOpacity, View, Image, FlatList } from "react-native"
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'

export function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [todoDescription, setTodoDescription] = useState<string>('')
  const [createdTodosCount, setCreatedTodosCount]= useState<number>(0)
  const [doneTodosCount, setDoneTodosCount]= useState<number>(0)

  function handleCreateTodo() {
    setTodos(prevState => [...prevState, todoDescription])
    setCreatedTodosCount(prevState => prevState + 1)
  }

  function onCheckTodo(isChecked: boolean) {
    if (isChecked) {
      setDoneTodosCount(prevState => prevState - 1)
    } else {
      setDoneTodosCount(prevState => prevState + 1)
    }
  }

  function onRemoveTodo(description: string) {
    const todosWithoutRemoved = todos.filter(todo => {
      return todo !== description
    })

    setTodos(todosWithoutRemoved)
    setCreatedTodosCount(prevState => prevState - 1)
  }

  return (
    <View>
      <View style={styles.formContainer}>
      <TextInput 
        style={styles.formInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#7F7F7F"}
        onChangeText={(e) => setTodoDescription(e)}
      />
      <TouchableOpacity 
        style={styles.formButton}
        onPress={handleCreateTodo}
      >
        <Icon name="plus" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text 
            style={styles.createdText}
          >
            Criadas
          </Text>
          <Text 
            style={styles.numberBox}
          >
            {createdTodosCount}
          </Text>
        </View>
        <View style={styles.headerText}>
          <Text 
            style={styles.doneText}
          >
            Concluídas
          </Text>
          <Text 
            style={styles.numberBox}
          >
            {doneTodosCount}
          </Text>
        </View>
      </View>
      
      <View style={styles.separator}/>

      <View style={styles.listContainer}>
        {todos.length > 0 ? (
          <FlatList 
            data={todos}
            keyExtractor={item => item}
            renderItem={item => (
              <TodoItem 
                description={item.item}
                onCheck={onCheckTodo}
                onRemove={() => onRemoveTodo(item.item)} 
              />
            )}
          />
        ) : (
          <>
            <Image source={clipboard}/>
            <Text style={styles.empyListTitle}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.empyListSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
          </>
        )}
        
      </View>
   
    </View>
  )
}