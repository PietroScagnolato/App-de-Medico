import { VStack, Text, Box, ScrollView, Divider, Image } from 'native-base'

import Logo from '../assets/Logo.png';
import { Buttons } from '../componentes/button';
import { EntradaTexto } from '../componentes/textoentrada';
import { Titulo } from '../componentes/titulo';
import { depoimentos } from "../utils/mock";

export default function Principal () {
    return(
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo} alt="Logo" mt={10} />
                
                <Titulo color="blue.500">Boas-vindas!</Titulo>

                <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
                    <EntradaTexto placeholder="Digite a especialidade" />
                    <EntradaTexto placeholder="Digite sua localização" />
                    <Buttons mt={3} mb={3}>Buscar</Buttons>
                </Box>

                <Titulo color="blue.800" alignSelf="center">Depoimentos</Titulo>

                <VStack space={3} divider={<Divider />} w="100%">
                    {
                        depoimentos.map(depoimento => (
                            <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.300" fontSize="md" textAlign="justify">
                                    {depoimento.text}
                                </Text>
                                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">
                                    {depoimento.titulo}
                                </Text>
                            </Box>
                        ))
                        }
                </VStack>
            </VStack>
        </ScrollView>
    )
}