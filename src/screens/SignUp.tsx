import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import backgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignUp() {
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
            Criar conta
          </Heading>

          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />

          <Button mt={24} title="Voltar para o login" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  )
}
