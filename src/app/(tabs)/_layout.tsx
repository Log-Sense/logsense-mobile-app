import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome' // remover essas dependencias
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { ChartPie, TriangleAlert, UserRound } from 'lucide-react-native'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <ChartPie color={color} />,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
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
