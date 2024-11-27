# API ACEVE (Associação Cultural e Educacional Violeta Eliz)

## Tecnologias Utilizadas
- Node.js: ferramenta de desenvolvimento back-end.
- Express.js: framework para desenvolvimento de APIs.
- TypeScript: linguagem de programação que adiciona tipagem estática ao JavaScript.

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