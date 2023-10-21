//Seções das Telas e Inputs
const secoes = [
    //Seção Titulo tela cadastro
    {
      id: 1,
      titulo: 'Insira alguns dados básicos:',
      entradaTexto: [
        //Input 1
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        //Input 2
        {
          id: 2,
          label: 'Email',
          placeholder: 'Insira seu endereço de email'
        },
        {
            id: 3,
            label: 'Crie uma senha',
            placeholder: 'Insira sua senha'
        },
        {
        id: 4,
        label: 'Repita a senha',
        placeholder: 'Insira sua senha'
        },
      ],
      checkbox: [],
    },
    //Tela Cadastro 2
    {
      id:2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        //Input 1
        {
            id: 1,
            label: 'CEP',
            placeholder: 'Insira seu CEP',
        },
        //Input 1
        {
            id: 2,
            label: 'Endereço',
            placeholder: 'Insira seu endereço',
        },
        //Input 1
        {
            id: 3,
            label: 'Número',
            placeholder: 'Insira seu número',
        },
        //Input 1
        {
            id: 4,
            label: 'Complemento',
            placeholder: 'Insira seu complemento',
        },
        //Input 1
        {
            id: 5,
            label: 'Telefone',
            placeholder: '(00) 00000-0000',
        },
      ],
      checkbox: [],
    },
    //Tela Cadastro 3
    {
      id: 3,
      titulo: 'Para finalizar, quais são os seus planos?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        }
      ],
    }
  ]

  export { secoes }