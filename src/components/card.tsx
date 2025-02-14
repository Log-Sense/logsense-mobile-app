import { title } from '@/styles/texts'
import { Bell } from 'lucide-react-native'
import { Text, TextProps, View } from 'react-native'

type CardProps = {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  return (
    <View className='text-black border border-zinc-300 rounded-lg flex justify-between'>
      <View className='flex flex-row gap-2 p-3 items-center '>
        {children}
        {/* <Bell size={24} color='#112323' />
        <Text
          style={title.regular}
          className='text-sm text-black leading-[1.4]'
        >
          Notify
        </Text> */}
      </View>
    </View>
  )
}

function Title({ children }: TextProps) {
  return (
    <Text style={title.regular} className='text-sm text-black leading-[1.4]'>
      {children}
    </Text>
  )
}

type IconProps = {
  icon: React.ElementType
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color='#000' />
}

Card.Title = Title
Card.Icon = Icon

export { Card }
