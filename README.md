# API ACEVE (Associação Cultural e Educacional Violeta Eliz)

Este repositório tem por objetivo a implementação de um Back-End para lidar com os envios de formulários da página ACEVE, facilitando o contato com a ONG e a candidatura em projetos voluntários.   

## Sobre o Projeto

<<<<<<< HEAD
A ONG ACEVE visa apoiar as mulheres em situação de vulnerabilidade, fortalecendo os laços familiares. Para obter mais informações acerca da ONG acesse o [README do Front-End do projeto](https://github.com/Grupo-Simios/Aceve-website-development/blob/main/README.md).

## Arquitetura do Projeto

Esse projeto combina as arquiteturas MVC e Layered Architeture para que o código seja organizado de forma modular, escalável e de fácil manutenção.

## Organização Geral e Detalhamento

Todo o código está estruturado em diretórios com responsabilidades específicas, conforme descrito abaixo:

- `config`: contém as configurações dos e-mails.
- `controllers`: recebe requisições HTTP e retorna respostas, aplicam validações ao corpo da requisição.
- `lib`: funções auxiliares.
- `middlewares`: validam as requisições HTTP e lidam com erros.
- `routes`: define as rotas e associa a cada controller.
- `services`: utiliza os serviços do Resend.
=======
A ONG ACEVE visa apoiar as mulheres em situação de vulnerabilidade, fortalecendo os laços familiares. Para obter mais informações acerca da ONG acesse o [README do Front-End do projeto](https://github.com/Grupo-Simios/Aceve-website-development/blob/main/README.md).                              
>>>>>>> 3b21a8a98982a6be3badd22a308642b1f254fc17

## Tecnologias Utilizadas
- Node.js v20
- Express.js
- TypeScript
- Resend

## Links Importantes

- [Front-End do projeto](https://github.com/Grupo-Simios/Aceve-website-development/)


## Configuração do Ambiente

1. Clone o repositório:
    ```bash
    git clone https://github.com/Grupo-Simios/Aceve-api-development.git
    ```
2. Instale as dependências:
    ```bash
    yarn install
    ```
3. Configure as variáveis de ambiente:
    - `PORT`: Porta do servidor (default: 5173).
    - `RESEND_API_KEY`: Chave da API do [Resend](https://resend.com/).
    - `EMAIL_TO`: E-mail para receber os formulários.
4. Execute o projeto:
    ```bash
    yarn start
    ```

## Estrutura dos Dados
A API integra com dois formulário com distinção de campos entre si.

### Formulário de Contato
- `name`: Nome do usuário (string, obrigatório).
- `email`: E-mail do usuário (string, obrigatório).
- `message`: Mensagem do usuário para a ONG (string, obrigatório).

### Formulário de Voluntariado
- `name`: Nome do usuário (string, obrigatório).
- `email`: E-mail do usuário (string, obrigatório).
- `dateOfBirth`: Data de nascimento do usuário (string, obrigatório).
- `phone`: Telefone do usuário (number, obrigatório).
- `availability`: Disponibilidade do usuário (string, obrigatório). 
- `interestArea`: Área de interesse do usuário (string, obrigatório).
- `message`: Mensagem do usuário para a ONG (string, obrigatório).

## Rotas da API

### POST `/api/fale-conosco`

Rota para receber os dados do formulário de contato e direcionar para o envio automático do E-mail para a ONG.

- **Request (body)**:

```json
{
    "name": "John Doe",
    "email": "H7HtO@example.com",
    "message": "Mensagem de exemplo"
} 
```

- **Response**: 
   - Status code: `200`
   - Status code: `500`
 
```json
{
    "message": "E-mail enviado com sucesso!"
} 

//OR

{
    "message": "Erro ao enviar o e-mail."
}
```
### POST `/api/seja-voluntario`

Rota para receber os dados do formulário de candidato a voluntariado e direcionar para o envio automático do E-mail para a ONG.

- **Request (body)**:

```json
{
    "name": "John Doe",
    "dateOfBirth": "1990-01-01",
    "phone": 123456789,
    "availability": "Manha",
    "interestArea": "Artes",
    "email": "H7HtO@example.com",
    "message": "Mensagem de exemplo"
} 
```

- **Response**: 
   - Status code: `200`
   - Status code: `500`
 
```json
{
    "message": "E-mail enviado com sucesso!"
} 

//OR

{
    "message": "Erro ao enviar o e-mail."
}
```

## Validação e Segurança das Rotas

- Todos os campos são validados via middleware com o `express-validator`. Dessa forma é garantido que a API não seja acessada com dados inválidos e que os dados tenham seus respectivos tipos definidos.
- O campo de `email` dos formulários de contato e voluntariado é validado com o `isEmail` do `express-validator`. Dessa forma é garantido que o campo seja um e-mail válido.

## Segurança da API

- É utilizada a lib `helmet` para configurar headers HTTP e melhorar a segurança da aplicação.
- É utilizada também a lib `express-rate-limit` para limitar o acesso de uma mesma IP a essa API, evitando ataques de DoS.

## Licença

Este projeto é de código fechado e não está disponível para contribuições fora do Grupo Simios.