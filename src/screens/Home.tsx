import { View } from "react-native"
import { Header } from "../components/Header"
import { styles } from "./styles"
import { TodoList } from "../components/TodoList"

export function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <TodoList />
      </View>
    </>
    
  )
}