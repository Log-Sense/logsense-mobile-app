import { useState } from 'react'
import { View } from 'react-native'
import { Search, Select } from '@/components/logs'
import { dateOptions, statusOptions } from '@/constants/selects-data'
import { LogCard } from '@/components/logs/log-card'

export default function Logs() {
  const [selectedValue, setSelectedValue] = useState('all')
  const [selectedDate, setSelectedDate] = useState('today')

  return (
    <View className='flex flex-1 py-8 gap-8 bg-white dark:bg-zinc-900'>
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
      <View className='flex px-3 gap-3.5'>
        <LogCard logType='error' title='Erro X' date='2 dias atrás' id='123' />
        <LogCard
          logType='warning'
          title='Aviso Y'
          date='2 min atrás'
          id='124'
        />
      </View>
    </View>
  )
}
