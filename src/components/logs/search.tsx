import { SearchIcon } from 'lucide-react-native'
import { TextInput, View } from 'react-native'
import { MinimalistInput } from '../input'
import { title } from '@/styles/texts'

export function Search() {
  return (
    <View className='flex flex-row items-center border border-zinc-300 rounded-lg px-2 gap-2'>
      <SearchIcon color='#3f3f46' />
      <TextInput style={title.semiBold} className='bg-transparent flex-1 placeholder:text-sm placeholder:text-zinc-700' placeholder='Buscar' />
    </View>
  )
}
