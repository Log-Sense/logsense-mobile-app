import { useState } from 'react'
import { View } from 'react-native'
import { Search, Select } from '@/components/logs'
import { dateOptions, statusOptions } from '@/constants/selects-data'

export default function Logs() {
  const [selectedValue, setSelectedValue] = useState('all')
  const [selectedDate, setSelectedDate] = useState('today')

  return (
    <View className='flex flex-1 py-8 dark:bg-zinc-900'>
      <View className='flex justify-between px-3 gap-4 flex-wrap'>
        <View className='flex flex-row justify-between gap-6'>
          <Select
            options={statusOptions}
            value={selectedValue}
            onValueChange={(value) => setSelectedValue(value as string)}
          />
          <Select
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
