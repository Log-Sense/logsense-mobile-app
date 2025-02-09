import { Text, View } from 'react-native'
import { useColorScheme } from 'nativewind'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '@/components/button'
import { router } from 'expo-router'

export default function TabOneScreen() {
  const { colorScheme, setColorScheme } = useColorScheme()

  const toggleTheme = async () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light'
    console.log('Toggle ' + newTheme)
    setColorScheme(newTheme)
    await AsyncStorage.setItem('theme', newTheme)
  }

  return (
    <View className='flex items-center justify-center h-screen'>
      <Text>Teste</Text>
      <Text
        onPress={toggleTheme}
        style={{ marginTop: 20 }}
        className='text-blue-500 dark:text-red-500'
      >
        {`The color scheme is ${colorScheme}`}
      </Text>
      <Button onPress={() => router.navigate('/(auth)/login')}>Login</Button>
    </View>
  )
}
