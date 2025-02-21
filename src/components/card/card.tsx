import { title } from '@/styles/texts'
import { ExternalPathString, Link } from 'expo-router'
import { useColorScheme } from 'nativewind'
import { Text, TextProps, View } from 'react-native'

type CardProps = {
  children: React.ReactNode
  redirectTo?: string
}

type CardRootLinkProps = Pick<CardProps, 'children'> & {
  url: ExternalPathString
}

type CardContentProps = Pick<CardProps, 'children'>

export function CardRoot({ children, redirectTo }: CardProps) {
  return (
    <View className='w-full text-black border border-zinc-300 rounded-lg flex flex-row justify-between p-3 dark:border-zinc-800'>
      {children}
    </View>
  )
}

export function CardRootLink({ children, url }: CardRootLinkProps) {
  return (
    <Link href={url}>
      <View className='w-full text-black border border-zinc-300 rounded-lg flex flex-row justify-between p-3 dark:border-zinc-800'>
        {children}
      </View>
    </Link>
  )
}

export function CardContent({ children }: CardContentProps) {
  return (
    <View className='flex flex-row gap-2 p-3 items-center '>{children}</View>
  )
}

type CardTitleProps = {
  color?: 'red'
} & TextProps

export function CardTitle({ children, color }: CardTitleProps) {
  return (
    <Text
      style={title.regular}
      className={`text-sm ${
        color === 'red' ? 'text-red-700' : 'text-black'
      } leading-[1.4] dark:${
        color === 'red' ? 'text-red-700' : 'text-zinc-200'
      }`}
    >
      {children}
    </Text>
  )
}

type IconProps = {
  icon: React.ElementType
  color?: 'red' | 'white' | 'black'
}

export function CardIcon({ icon: Icon, color }: IconProps) {
  const { colorScheme } = useColorScheme()

  const colorMap = {
    black: '#000',
    white: '#E4E4E7',
    red: '#C10007',
  }

  const iconColor = color
    ? colorMap[color]
    : colorScheme === 'dark'
    ? '#fff'
    : '#000'

  return <Icon size={24} color={iconColor} />
}
