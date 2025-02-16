import React from 'react'
import { View } from 'react-native'
import { LucideIcon } from 'lucide-react-native'

interface TabIconProps {
  Icon: LucideIcon
  color: string
  focused: boolean
}

export function TabIcon({ Icon, color, focused }: TabIconProps) {
  return (
    <View className={`p-2 rounded-lg ${focused ? 'bg-zinc-100 dark:bg-zinc-800' : ''}`}>
      <Icon color={color} />
    </View>
  )
} 