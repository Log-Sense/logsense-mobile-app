import { Text, View } from 'react-native'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

export default function Login() {
  return (
    <View className='flex flex-1 gap-6 px-6 items-center justify-center'>
      <View className='flex w-full gap-6'>
        <Text className='text-left font-semibold text-xl'>Login</Text>
        <Text className='text-sm font-semibold text-zinc-600'>Email e senha necessários para a autenticação</Text>
      </View>
      <View className='flex w-full items-center flex-col gap-4'>
        <Input placeholder='Email' />
        <Input placeholder='Senha' />
      </View>
      <Text className='text-sm font-semibold underline text-zinc-600'>
        Esqueci a senha
      </Text>
      <Button>Confirmar</Button>
      <Text className='text-sm font-semibold text-zinc-600'>
        Ainda não tenho uma conta -{' '}
        <Text className='underline'>Cadrastar-se</Text>
      </Text>
    </View>
  )
}
