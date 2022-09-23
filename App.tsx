import { StatusBar } from 'expo-status-bar'
import { Header } from './src/components/Header'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <>
      <Home />
      <StatusBar 
        style='light'
        backgroundColor='transparent'
        translucent
      />
    </>
  )
}
