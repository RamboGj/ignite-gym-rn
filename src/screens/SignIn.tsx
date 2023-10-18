import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import backgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
  return (
    <ScrollView
      flex={1}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator
    >
      <VStack bg="gray.700" flex={1} px={10} pb={16}>
        <Image
          source={backgroundImg}
          alt="A woman and a man working out"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <Logo />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" mb={3} fontFamily="body" fontSize="sm">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  )
}
