import { Text, View } from "react-native"
import { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from "./styles"

interface TodoitemProps {
  description: string
}

export function TodoItem({ description }: TodoitemProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <BouncyCheckbox 
        fillColor="#45A8DE"
        onPress={(isChecked) => setIsSelected(isChecked)}
      />
      <Text 
        style={isSelected 
          ? styles.isSelectedTodoDescription 
          : styles.todoDescription
        }
      >
        {description}
      </Text>
      <Icon 
        name="trash-can-outline" 
        size={20} 
        color="#6F6F6F" 
        style={{ padding: 4, marginLeft: 16 }}
      />
    </View>
  )
}