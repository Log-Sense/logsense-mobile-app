import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Search } from '@/components/logs/search'
import { Modal, TouchableOpacity, FlatList, Pressable } from 'react-native'
import {
  ChevronDownIcon,
  CircleAlert,
  GalleryVerticalEnd,
  LucideProps,
  TriangleAlert,
  Calendar,
  ChevronRightIcon,
  X,
} from 'lucide-react-native'

export default function Logs() {
  const [selectedValue, setSelectedValue] = useState('all')
  const [selectedDate, setSelectedDate] = useState('today')

  const statusOptions = [
    {
      label: 'Todos',
      value: 'all',
      icon: GalleryVerticalEnd,
      color: '#000',
    },
    {
      label: 'Warning',
      value: 'warning',
      icon: TriangleAlert,
      color: '#000',
    },
    {
      label: 'Error',
      value: 'error',
      icon: CircleAlert,
      color: '#000',
    },
  ]

  const dateOptions = [
    {
      label: 'Hoje',
      value: 'today',
      icon: Calendar,
      color: '#000',
    },
    {
      label: 'Última semana',
      value: 'last-week',
      icon: Calendar,
      color: '#000',
    },
    {
      label: 'Último mês',
      value: 'last-month',
      icon: Calendar,
      color: '#000',
    },
  ]

  return (
    <View className='flex py-8'>
      <View className='flex justify-between px-3 gap-4 flex-wrap'>
        <View className='flex flex-row justify-between gap-6'>
          <CustomSelect
            options={statusOptions}
            value={selectedValue}
            onValueChange={(value) => setSelectedValue(value as string)}
          />
          <CustomSelect
            options={dateOptions}
            value={selectedDate}
            onValueChange={(value) => setSelectedDate(value as string)}
            placeholder='Selecione a data'
          />
        </View>
        <Search />
      </View>
    </View>
  )
}

type Option = {
  label: string
  value: string | number
  icon?: React.ComponentType<LucideProps>
  color?: string
}

type CustomSelectProps = {
  options: Option[]
  value?: string | number
  onValueChange?: (value: string | number) => void
  placeholder?: string
}

export function CustomSelect({
  options,
  value,
  onValueChange,
  placeholder = 'Selecione uma opção',
}: CustomSelectProps) {
  const [isVisible, setIsVisible] = useState(false)

  const selectedOption = options.find((opt) => opt.value === value)

  return (
    <>
      <TouchableOpacity
        className='flex-row flex-1 justify-between items-center border border-zinc-300 rounded-lg bg-transparent'
        onPress={() => setIsVisible(true)}
      >
        <View className='flex-row items-center gap-2 p-3'>
          {selectedOption?.icon && (
            <selectedOption.icon
              color={selectedOption.color || '#000'}
              size={20}
            />
          )} 
          <Text className='text-base text-gray-700 flex-1'>
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent
        animationType='slide'
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable
          className='flex-1 bg-black/50'
          onPress={() => setIsVisible(false)}
        >
          <View className='flex-1 justify-end'>
            <View className='bg-white rounded-t-3xl'>
              <View className='p-4 border-b border-gray-200'>
                <TouchableOpacity
                  onPress={() => setIsVisible(false)}
                  className='flex-row items-center justify-between'
                >
                  <Text className='text-zinc-500 text-base font-semibold'>
                    Escolha uma opção:
                  </Text>
                  <X color='#71717a' size={20} />
                </TouchableOpacity>
              </View>

              <FlatList
                data={options}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className='p-4 border-b border-gray-100 active:bg-gray-50 flex-row justify-between'
                    onPress={() => {
                      onValueChange?.(item.value)
                      setIsVisible(false)
                    }}
                  >
                    <View className='flex-row items-center gap-2'>
                      {item.icon && (
                        <item.icon color={item.color || '#000'} size={20} />
                      )}
                      <Text className='text-base text-gray-700'>
                        {item.label}
                      </Text>
                    </View>
                    <ChevronRightIcon color='#000' size={20} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
