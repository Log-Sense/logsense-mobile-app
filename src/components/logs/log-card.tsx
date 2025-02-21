import { Link } from 'expo-router'
import { CircleAlert, ExternalLink, TriangleAlert } from 'lucide-react-native'
import { Text, View } from 'react-native'

type LogCardProps = {
  logType: 'warning' | 'error'
  title: string
  date: string
  id: string
}

export function LogCard({ title, logType, date, id }: LogCardProps) {
  return (
    <View className='flex flex-row items-center gap-3 px-4 py-2 rounded-xl border border-zinc-300'>
      {logType === 'warning' && (
        <View className='bg-yellow-100 size-10 flex justify-center items-center rounded-lg'>
          <TriangleAlert color='#a16207' />
        </View>
      )}
      {logType === 'error' && (
        <View className='bg-red-100 size-10 flex justify-center items-center rounded-lg'>
          <CircleAlert color='#b91c1c' />
        </View>
      )}
      <View className='flex'>
        <View className='flex flex-row items-center gap-1'>
          <Text className='text-sm font-interSemiBold dark:text-zinc-200'>{title}</Text>
          <Text className='text-zinc-700 text-xs font-interRegular dark:text-zinc-200'>
            ({date})
          </Text>
        </View>

       
          <View className='flex flex-row items-center gap-2 font-inter'>
            <ExternalLink color='#3f3f46' />
            <Text className='text-zinc-700 text-xs leading-[1.4] font-interRegular dark:text-zinc-200'>
              Ver detalhes
            </Text>
          </View>

      </View>
    </View>
  )
}
