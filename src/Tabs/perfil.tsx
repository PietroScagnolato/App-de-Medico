import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'

import { Titulo } from '../componentes/titulo'

export default function Perfil () {
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar size="xl" source={{ uri: "https://lh3.googleusercontent.com/a/ACg8ocLksghqII6hEOLfQuXv_yOe2H-mpktlHkhmX0YYDn16C-s=s360-c-no"}} mt={5} />

                <Titulo color="blue.500">
                    Informações pessoais
                </Titulo>
                <Titulo fontSize="lg" mb={1}>
                    Pietro Scagnolato
                </Titulo>
                <Text>
                    27/01/2004
                </Text>
                <Text>
                    Americana
                </Text>
                <Divider mt={5}/>
                <Titulo color="blue.500" mb={1}>
                    Histórico médico
                </Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}