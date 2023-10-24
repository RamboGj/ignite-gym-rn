import { Center, Text } from 'native-base'

import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Button } from '@components/Button'

export function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  return (
    <Center flex={1}>
      <Text color="white">Home</Text>

      <Button
        title="Test"
        onPress={() => {
          navigate('exercise')
        }}
      />
    </Center>
  )
}
