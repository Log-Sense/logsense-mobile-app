import { title } from '@/styles/texts'
import { Text, TextProps, View } from 'react-native'

type CardProps = {
  children: React.ReactNode
}

export function CardRoot({ children }: CardProps) {
  return (
    <View className='text-black border border-zinc-300 rounded-lg flex flex-row justify-between p-3'>
      {children}
    </View>
  )
}

export function CardContent({ children }: CardProps) {
  return <View className='flex flex-row gap-2 items-center '>{children}</View>
}

export function CardTitle({ children }: TextProps) {
  return (
    <Text style={title.regular} className='text-sm text-black leading-[1.4]'>
      {children}
    </Text>
  )
}

type IconProps = {
  icon: React.ElementType
}

export function CardIcon({ icon: Icon }: IconProps) {
  return <Icon size={24} color='#000' />
}
