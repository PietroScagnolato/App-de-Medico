import { VStack, Divider, ScrollView } from 'native-base'
import CardConsulta from '../componentes/cardconsulta'
import { Titulo } from '../componentes/titulo'
import { Buttons } from '../componentes/button'

export default function Consultas () {
    return(
        <ScrollView>
        <VStack p="5">
            <Titulo color="blue.500" mb={5}>Minhas consultas</Titulo>
            <Buttons mt={5} mb={5}>Agendar nova consulta</Buttons>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Proximas consultas</Titulo>
            <CardConsulta
            nome='Dr. Pietro'
            foto="https://lh3.googleusercontent.com/a/ACg8ocLksghqII6hEOLfQuXv_yOe2H-mpktlHkhmX0YYDn16C-s=s360-c-no"
            data='20/10/2023'
            especialidade='Cardiologista'
            foiAgendado />

            <Divider mt={5}/>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta
            nome='Dr. Pietro'
            foto="https://lh3.googleusercontent.com/a/ACg8ocLksghqII6hEOLfQuXv_yOe2H-mpktlHkhmX0YYDn16C-s=s360-c-no"
            data='20/10/2023'
            especialidade='Cardiologista'
            foiAtendido />
        </VStack>
        </ScrollView>
    )
}