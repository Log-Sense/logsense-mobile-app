import React from 'react'
import { View, Text} from 'react-native'
import { ArrowUpDown, Bell } from 'lucide-react-native'
import { ActionButton } from '@/components/button'
import { useColorScheme } from 'nativewind'
import { title as titleStyle } from '@/styles/texts'

export function CustomHeader({ title }: { title: string }) {
  const { colorScheme } = useColorScheme()
  return (
    <View className='flex-row items-center justify-between px-5 py-6 bg-white dark:bg-zinc-900 '>
      <Text style={titleStyle.semiBold} className='text-xl font-bold flex-1 dark:text-white'>{title}</Text>
      <View className='flex-row gap-4 absolute right-4'>
        <ActionButton>
          <ArrowUpDown
            size={24}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </ActionButton>
        <ActionButton>
          <Bell size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
        </ActionButton>
      </View>
    </View>
  )
}
