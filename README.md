Pijaminha API

Bem-vindo à **Pijaminha API**, um sistema backend desenvolvido com **Fastify** e **Prisma** para gerenciar vendas, produtos (pijamas), usuários e feedbacks. Este projeto foi criado para fornecer uma API robusta e escalável, com autenticação JWT e documentação interativa via Swagger.

## 🚀 Funcionalidades

- **Autenticação de Usuários**: Login e registro com suporte a JWT.
- **Gerenciamento de Produtos**: Cadastro, listagem e atualização de pijamas.
- **Registro de Vendas**: Controle de vendas realizadas.
- **Feedbacks**: Coleta e gerenciamento de feedbacks dos usuários.
- **Documentação Interativa**: Disponível em `/docs` via Swagger.
- **Tratamento de Erros**: Validação de dados com Zod.

## 🛠️ Tecnologias Utilizadas

- **Fastify**: Framework web rápido e eficiente.
- **Prisma**: ORM para comunicação com o banco de dados.
- **Zod**: Validação de dados.
- **Swagger**: Documentação interativa da API.
- **JWT**: Autenticação segura.
- **CORS**: Configurado para permitir conexões de diferentes origens.

## 📚 Documentação da API

Acesse a documentação interativa da API em:  
`http://localhost:3333/docs`

## ⚙️ Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/pijaminha-api.git
   cd pijaminha-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   PORT=3333
   JWT_SECRET=sua_chave_secreta
   DATABASE_URL=sua_url_do_banco_de_dados
   ```

4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 🧪 Testando a API

- Acesse o frontend em `http://localhost:5174` (se configurado).
- Teste as rotas diretamente no Swagger em `http://localhost:3333/docs`.

## 👥 Integrantes

- **Ana Luiza Cunha**
- **Gabriel Trindade**
- **Marcos Vinicius Costa**
- **Davi Tavares**
- **Arthur Mota**
- **Esther Freixo**
- **Gabriel Baeta**

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.
