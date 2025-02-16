import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useColorScheme } from 'nativewind'

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colorScheme } = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <View className='flex-row bg-white dark:bg-zinc-900 py-4 border-t border-zinc-100 dark:border-zinc-800'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.title ?? route.name
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            className='flex-1 items-center justify-center'
          >
            {options.tabBarIcon?.({
              focused: isFocused,
              color: isFocused ? '#0066ff' : isDark ? '#a1a1aa' : '#71717a',
              size: 24,
            })}
            <Text
              className={`text-xs mt-1 font-medium ${
                isFocused
                  ? 'text-blue-600 dark:text-blue-500'
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              {label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}
