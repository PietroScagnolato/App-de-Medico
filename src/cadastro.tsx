import { Image, Text, Box, Checkbox, ScrollView } from 'native-base';
import { useState } from 'react';
//Img
import Logo from './assets/Logo.png';
//Components
import { Titulo } from './componentes/titulo';
import { Buttons } from './componentes/button';
import { EntradaTexto } from './componentes/textoentrada';
import { secoes } from './utils/cadastroentradatexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any);

  //Função para Avançar a tela sem ter que criar outra tela
  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
    else{
      console.log(dados)
    }
  }

  //Função para Voltar a tela sem ter que criar outra tela
  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }

  function atualizarDados(id:string, valor:string){
    setDados({...dados, [id]: valor})
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt='Logo Voll' alignSelf='center'/>
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {
        secoes[numSecao]?.entradaTexto?.map(entrada => {
          return (
          <EntradaTexto 
            label={entrada.label} 
            placeholder={entrada.placeholder} 
            key={entrada.id} 
            secureTextEntry={entrada.secureTextEntry}
            value={dados[entrada.label]}
            onChangeText={(text) => atualizarDados(entrada.label, text)}
            />
            )
        })
        }
      </Box>
      <Box>
      <Text color='blue.800' fontWeight='bold' fontSize='md' mt={2} mb={4}>Selecione o plano: </Text>
        {
        secoes[numSecao].checkbox.map(checkbox => {
          return <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
        })
        }
      </Box>
      { numSecao > 0 && <Buttons onPress={() => voltarSecao()} bgColor="gray.400">
        Voltar
      </Buttons>}
      <Buttons onPress={() => avancarSecao()} mt={4} mb={20}>
        Avançar
      </Buttons>
    </ScrollView>
  );
}
