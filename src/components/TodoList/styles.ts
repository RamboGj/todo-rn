import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 32
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  createdText: {
    marginRight: 8,
    color: '#4EA8DE',
    fontWeight: "bold",
    fontSize: 16
  },
  doneText: {
    marginRight: 8,
    color: '#8284FA',
    fontWeight: "bold",
    fontSize: 16 
  },
  numberBox: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#333333'
  },
  separator: {
    marginTop: 24,
    width: '100%',
    padding: 1,
    backgroundColor: '#333333'
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 48 
  },
  empyListTitle: {
    marginTop: 16,
    fontWeight: 'bold',
    color: '#7F7F7F'
  },
  empyListSubtitle: {
    color: '#7F7F7F'
  },
  formContainer: {
    marginTop: -56,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  formInput: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    color: '#FFF',
    borderRadius: 6, 
    paddingLeft: 16,
    marginRight: 8
  },
  formButton: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  
    alignItems: 'center',
    justifyContent: 'center'
  }
})