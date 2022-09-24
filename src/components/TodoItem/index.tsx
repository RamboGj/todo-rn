import { Text, View, TouchableOpacity } from "react-native"
import { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from "./styles"

interface TodoitemProps {
  description: string
  onCheck: (isChecked: boolean) => void
  onRemove: () => void
}

export function TodoItem({ description, onCheck, onRemove }: TodoitemProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  function handleCheckTodo() {
    onCheck(isSelected)
    setIsSelected(!isSelected)
  }

  function handleRemoveTodo() {
    onRemove()
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox 
        fillColor="#45A8DE"
        onPress={handleCheckTodo}
      />
      <Text 
        style={isSelected 
          ? styles.isSelectedTodoDescription 
          : styles.todoDescription
        }
      >
        {description}
      </Text>
      <TouchableOpacity
        onPress={handleRemoveTodo}
      >
        <Icon 
          name="trash-can-outline" 
          size={20} 
          color="#6F6F6F" 
          style={{ padding: 4, marginLeft: 16 }}
        />
      </TouchableOpacity>
     
    </View>
  )
}