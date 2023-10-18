import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

interface ButtonProps extends IButtonProps {
  title: string
  variant?: 'solid' | 'outline'
}

export function Button({ title, variant = 'solid', ...rest }: ButtonProps) {
  const isOutlineVariant = variant === 'outline'

  return (
    <NativeBaseButton
      {...rest}
      w="full"
      bg={isOutlineVariant ? 'transparent' : 'green.500'}
      borderWidth={isOutlineVariant ? 1 : 0}
      borderColor="green.500"
      h={14}
      rounded="sm"
      _pressed={{
        bg: isOutlineVariant ? 'gray.600' : 'green.700',
      }}
    >
      <Text
        color={isOutlineVariant ? 'green.500' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
