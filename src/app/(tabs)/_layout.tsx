import React from 'react'
import { Tabs } from 'expo-router'
import { View } from 'react-native'
import { ChartPie, TriangleAlert, UserRound } from 'lucide-react-native'
import { CustomHeader } from '@/components/custom-header'
import { useColorScheme } from 'nativewind'
import { CustomTabBar } from '@/components/custom-tab-bar'

export default function TabLayout() {
  const { colorScheme } = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <Tabs
      screenOptions={{
        header: ({ route, options }) => (
          <CustomHeader title={options.title || route.name} />
        ),
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <ChartPie color={color} />,
        }}
      />
      <Tabs.Screen
        name='logs'
        options={{
          title: 'Logs',
          tabBarIcon: ({ color }) => <TriangleAlert color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <UserRound color={color} />,
        }}
      />
    </Tabs>
  )
}
