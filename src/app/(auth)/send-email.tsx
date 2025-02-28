import { Text, View } from 'react-native'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { router } from 'expo-router'

export default function SendEmail() {
  return (
    <View className='flex flex-1 gap-6 px-6 items-center justify-center'>
      <View className='flex w-full gap-6'>
        <Text className='text-left font-semibold text-xl'>Recuperação de senha</Text>
        <Text className='text-sm font-semibold text-zinc-600'>
          Email e senha necessários para a autenticação
        </Text>
      </View>
      <View className='flex w-full items-center flex-col gap-4'>
        <Input placeholder='Informe seu email' />
        <Input placeholder='Informe sua senha' />
      </View>
      <Button>Confirmar</Button>
      <Text className='text-sm font-semibold text-zinc-600'>
        Ainda não tenho uma conta -{' '}
        <Text
          className='underline'
          onPress={() => router.navigate('/register')}
        >
          Cadrastar-se
        </Text>
      </Text>
    </View>
  )
}
