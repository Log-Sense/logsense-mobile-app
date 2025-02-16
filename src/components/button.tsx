import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className='bg-[#0C8CE9] items-center justify-center h-10 w-full rounded-3xl'
      activeOpacity={0.8}
      {...rest}
    >
      <Text className='text-white'>{children}</Text>
    </TouchableOpacity>
  )
}

export function ActionButton({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className='border border-zinc-300 bg-transparent rounded-lg p-2 flex items-center justify-center size-10'
      activeOpacity={0.8}
      {...rest} 
    >
      <Text className='text-white dark:text-white'>{children}</Text>
    </TouchableOpacity>
  )
}
