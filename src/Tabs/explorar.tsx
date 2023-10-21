import { VStack, Text, ScrollView, Box } from 'native-base'
import { EntradaTexto } from '../componentes/textoentrada'
import { Buttons } from '../componentes/button'
import { Titulo } from '../componentes/titulo'
import CardConsulta from '../componentes/cardconsulta'

export default function Explorar(){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
          />
          <EntradaTexto
            placeholder="Digite sua localização"
          />
          <Buttons mt={3} mb={3}>
            Buscar
          </Buttons>
        </Box>

        <Titulo color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
        {[1, 2, 3, 4].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsulta 
              especialidade="Cardiologia"
              foto="https://lh3.googleusercontent.com/a/ACg8ocLksghqII6hEOLfQuXv_yOe2H-mpktlHkhmX0YYDn16C-s=s360-c-no"
              nome="Dr. Cunha"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}