# Blog com Microsserviços

Este projeto é uma aplicação de blog que utiliza uma arquitetura de microsserviços para gerenciar posts e comentários. O sistema é composto por serviços independentes para posts e comentários, além de um frontend em React para interação com o usuário.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`posts/`**: Microsserviço responsável por gerenciar posts.
  - `index.js`: Ponto de entrada do serviço de posts.
  - `package.json`: Dependências e configurações do microsserviço de posts.

- **`comments/`**: Microsserviço responsável por gerenciar comentários.
  - `index.js`: Ponto de entrada do serviço de comentários.
  - `package.json`: Dependências e configurações do microsserviço de comentários.

- **`client/`**: Frontend em React para interação com o usuário.
  - `public/`: Arquivos estáticos como HTML, ícones e manifestos.
  - `src/`: Código-fonte do frontend.
    - `App.js`: Componente principal da aplicação.
    - `PostCreate.js`: Componente para criar novos posts.
    - `PostList.js`: Componente para listar posts existentes.
    - `CommentCreate.js`: Componente para adicionar comentários a posts.
    - `CommentList.js`: Componente para listar comentários de um post.
    - `index.js`: Ponto de entrada do frontend.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior)
- NPM ou Yarn

### Passos para Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/blog-microsservicos.git
   cd blog-microsservicos
   ```

2. **Instale as dependências de cada microsserviço**:
   - Para o microsserviço de posts:
     ```bash
     cd posts
     npm install
     ```
   - Para o microsserviço de comentários:
     ```bash
     cd comments
     npm install
     ```

3. **Instale as dependências do frontend**:
   ```bash
   cd client
   npm install
   ```

4. **Inicie os microsserviços**:
   - No diretório `posts/`:
     ```bash
     npm start
     ```
   - No diretório `comments/`:
     ```bash
     npm start
     ```

5. **Inicie o frontend**:
   ```bash
   cd client
   npm start
   ```

6. **Acesse a aplicação**:
   Abra o navegador e acesse `http://localhost:3000` para interagir com o blog.

## Funcionalidades

- **Criação de Posts**: Os usuários podem criar novos posts.
- **Listagem de Posts**: Todos os posts criados são exibidos em uma lista.
- **Comentários**: Os usuários podem adicionar comentários a posts específicos.
- **Listagem de Comentários**: Os comentários de cada post são exibidos abaixo do conteúdo.

## Tecnologias Utilizadas

- **Node.js**: Para os microsserviços de posts e comentários.
- **React**: Para o frontend da aplicação.
- **Express**: Para criar APIs RESTful nos microsserviços.
- **Axios**: Para comunicação entre o frontend e os microsserviços.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Nome**: [Luso Netto]
- **Email**: [lusonetto137@outlook.com]
- **GitHub**: [LusoNetto](https://github.com/lusonetto137)
