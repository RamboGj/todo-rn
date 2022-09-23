import { View } from "react-native"
import { CreateTodoForm } from "../components/Form"
import { Header } from "../components/Header"
import { styles } from "./styles"
import { TodoList } from "../components/TodoList"

export function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <CreateTodoForm />
        <TodoList />
      </View>
    </>
    
  )
}