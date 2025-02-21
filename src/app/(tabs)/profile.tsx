import { Text, View } from 'react-native'
import { Card } from '@/components/card'
import { title } from '@/styles/texts'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Bell, BookOpen, LogOut, Moon, UserRoundPen } from 'lucide-react-native'
import { useColorScheme } from 'nativewind'
import { Link } from 'expo-router'

export default function Profile() {
  const { colorScheme, setColorScheme } = useColorScheme()

  const toggleTheme = async () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light'
    setColorScheme(newTheme)
    await AsyncStorage.setItem('theme', newTheme)
  }

  return (
    <View className='flex flex-1 gap-12 py-12 bg-white dark:bg-zinc-950'>
      <View className='flex items-center '>
        <View className='flex bg-blue-100 size-[72px] items-center justify-center rounded-full'>
          <Text style={title.semiBold} className='text-2xl text-blue-700'>
            IH
          </Text>
        </View>
        <View className='flex items-center'>
          <Text
            style={title.semiBold}
            className='text-xl font-semibold dark:text-zinc-200'
          >
            Ismael Henrique
          </Text>
          <Text
            style={title.regular}
            className='text-xs leading-[1.4] text-zinc-600 dark:text-zinc-200'
          >
            ismaelhenrique@gmail.com
          </Text>
        </View>
      </View>
      <View className='flex gap-3 py-3'>
        <View className='flex gap-3 px-6'>
          <Text
            style={title.semiBold}
            className='text-sm text-black leading-[1.4] font-semibold dark:text-zinc-200'
          >
            App
          </Text>
          <Card.Root>
            <Card.Content>
              <Card.Icon icon={Bell} />
              <Card.Title>Receber notificações</Card.Title>
            </Card.Content>
            <Card.Switch size='md' />
          </Card.Root>
          <Card.Root>
            <Card.Content>
              <Card.Icon icon={Moon} />
              <Card.Title>Dark mode</Card.Title>
            </Card.Content>
            <Card.Switch
              size='md'
              value={colorScheme === 'dark'}
              onValueChange={toggleTheme}
            />
          </Card.Root>

          <Card.Link url='https://docs.expo.dev/'>
            <Card.Content>
              <Card.Icon icon={BookOpen} />
              <Card.Title>Documentação</Card.Title>
            </Card.Content>
          </Card.Link>

          <Text
            style={title.semiBold}
            className='text-sm text-black leading-[1.4] font-semibold dark:text-zinc-200'
          >
            Conta
          </Text>
          <Card.Root>
            <Card.Content>
              <Card.Icon icon={LogOut} color='red' />
              <Card.Title color='red'>Log-out</Card.Title>
            </Card.Content>
          </Card.Root>
          <Card.Root>
            <Card.Content>
              <Card.Icon icon={UserRoundPen} />
              <Card.Title>Alterar email ou senha</Card.Title>
            </Card.Content>
          </Card.Root>
        </View>
      </View>
    </View>
  )
}
