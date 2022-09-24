import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 350,
    flexDirection: 'row',
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 8,
    marginBottom: 8,
    padding: 12
  },
  todoDescription: {
    color: '#FFF',
    marginHorizontal: 8,
    maxWidth: '60%',
    width: '100%',
    justifyContent: 'flex-start'
  },
  isSelectedTodoDescription: {
    color: '#7F7F7F',
    textDecorationLine: 'line-through',
    marginHorizontal: 8,
    maxWidth: '60%',
    width: '100%',
    justifyContent: 'flex-start'
  }
})