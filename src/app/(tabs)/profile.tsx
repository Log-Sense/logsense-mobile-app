import { Card } from '@/components/card'
import { title } from '@/styles/texts'
import { Bell, BookOpen, LogOut, Moon, UserRoundPen } from 'lucide-react-native'
import { Text, View } from 'react-native'

export default function Profile() {
  return (
    <View className='flex flex-1 gap-12 py-12'>
      <View className='flex items-center '>
        <View className='flex bg-blue-100 size-[72px] items-center justify-center rounded-full'>
          <Text style={title.semiBold} className='text-2xl text-blue-700'>
            IH
          </Text>
        </View>
        <View className='flex items-center'>
          <Text style={title.semiBold} className='text-xl font-semibold'>
            Ismael Henrique
          </Text>
          <Text
            style={title.regular}
            className='text-xs leading-[1.4] text-zinc-600'
          >
            ismaelhenrique@gmail.com
          </Text>
        </View>
      </View>
      <View className='flex gap-3 py-3'>
        <View className='flex gap-3 px-6'>
          <Text className='text-sm text-black leading-[1.4] font-semibold'>
            App
          </Text>
          <Card>
            <Card.Icon icon={Bell} />
            <Card.Title>Documentação</Card.Title>
          </Card>
          <Card>
            <Card.Icon icon={Moon} />
            <Card.Title>Documentação</Card.Title>
          </Card>
          <Card>
            <Card.Icon icon={BookOpen} />
            <Card.Title>Documentação</Card.Title>
          </Card>
        </View>
        <View className='flex gap-3 px-6'>
          <Text className='text-sm text-black leading-[1.4] font-semibold'>
            Conta
          </Text>
          <Card>
            <Card.Icon icon={LogOut} />
            <Card.Title>Log-out</Card.Title>
          </Card>
          <Card>
            <Card.Icon icon={UserRoundPen} />
            <Card.Title>Alterar email ou senha</Card.Title>
          </Card>
        </View>
      </View>
    </View>
  )
}
