import { Text, Avatar, VStack } from 'native-base'
import { Buttons } from './button'

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

function CardConsulta({
    nome, especialidade, foto, data, foiAgendado, foiAtendido
}: CardProps) {
  return (
    <VStack w="100%" bg={foiAtendido ? 'blue.100' : 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
        <VStack flexDir="row">
            <Avatar size="lg" source={{ uri: foto }} />
            <VStack pl={4}>
                <Text fontSize="md" bold>{nome}</Text>
                <Text>{especialidade}</Text>
                <Text>{data}</Text>
            </VStack>
        </VStack>
        <Buttons mt={4}>{foiAgendado ? 'Cancelar': 'Agendar consulta'}</Buttons>
    </VStack>
  )
}

export default CardConsulta