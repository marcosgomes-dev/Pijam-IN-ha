# Pijam{IN}ha

E-commerce de pijamas com carrinho, favoritos, cadastro/login e checkout, dividido em um monorepo com backend (API) e frontend (SPA) separados.

Projeto desenvolvido por:

- ANA LUIZA CUNHA
- GABRIEL TRINDADE
- MARCOS VINICIUS COSTA
- DAVI TAVARES
- ARTHUR MOTA
- ESTHER FREIXO
- GABRIEL BAETA

## Estrutura do projeto

```
Pijam-IN-ha/
├── apps/
│   ├── backend/                 # API REST (Fastify + Prisma)
│   └── frontend/
│       └── front-pijaminha/     # SPA (React + Vite)
└── package.json                 # scripts de conveniência da raiz
```

## Tecnologias

**Backend:** Fastify, Prisma ORM (SQLite), Zod, JWT (`@fastify/jwt`), bcryptjs, Swagger/OpenAPI, TypeScript.
Organizado no padrão *controllers → use-cases → repositories*, com repositórios com interface (`UsersRepository`, `PajamasRepository`, etc.) implementados via Prisma, o que facilita trocar de banco ou criar implementações em memória para testes.

**Frontend:** React 19, Vite, React Router, React Hook Form + Zod (validação de formulários), Axios, CSS Modules.

## Pré-requisitos

- Node.js 18+
- npm

## Como rodar

### Opção rápida (a partir da raiz do monorepo)

```bash
npm run start
```

Isso instala as dependências, roda a migração do banco (`prisma migrate reset`) e sobe o backend e o frontend juntos (via `concurrently`).

### Rodando cada app separadamente

**Backend** (`apps/backend`):

```bash
cd apps/backend
npm install
npx prisma migrate dev      # cria/atualiza o banco SQLite local
npx prisma db seed          # opcional: popula o banco com dados de exemplo
npm run dev                 # sobe em http://localhost:3333
```

**Frontend** (`apps/frontend/front-pijaminha`):

```bash
cd apps/frontend/front-pijaminha
npm install
npm run dev                 # sobe em http://localhost:5173 (padrão do Vite)
```

A URL da API usada pelo frontend fica centralizada em `src/config/api.ts`.

### Variáveis de ambiente do backend (`apps/backend/.env`)

```
NODE_ENV=dev
PORT=3333
JWT_SECRET=<sua-chave-secreta>
DATABASE_URL="file:./dev.db"
```

> O `.env` não deve ser versionado (já está no `.gitignore`). Se você tiver clonado o repositório antes dessa correção, troque a `JWT_SECRET` e a senha do banco, pois podem ter ficado expostas no histórico do Git.

## Rotas da API

| Método | Rota                              | Auth | Descrição                          |
|--------|------------------------------------|------|-------------------------------------|
| POST   | `/auth/register`                   | -    | Cria uma conta (409 se e-mail/usuário já existir) |
| POST   | `/auth/login`                      | -    | Autentica e retorna um JWT          |
| GET    | `/pijamas`                         | -    | Lista os pijamas                    |
| GET    | `/pijamas/:pijamaId`               | -    | Detalhe de um pijama                |
| POST   | `/pijamas`                         | JWT  | Cria um pijama                      |
| PATCH  | `/pijamas/:pijamaId/stock`         | JWT  | Atualiza o estoque                  |
| DELETE | `/pijamas/:pijamaId`               | JWT  | Remove um pijama                    |
| PATCH  | `/pijamas/:pijamaId/favorite`      | -    | Alterna favorito                    |
| POST   | `/sales`                           | -    | Registra uma compra (checkout, sem login) |
| GET    | `/sales` / `/sales/:saleId`        | JWT  | Lista/detalha vendas (dados sensíveis de comprador) |
| PUT    | `/sales/:saleId`                   | JWT  | Atualiza uma venda                  |
| DELETE | `/sales/:saleId`                   | JWT  | Remove uma venda                    |
| GET    | `/users`                           | JWT  | Lista usuários                      |
| PATCH  | `/users/:userId`                   | JWT  | Atualiza um usuário                 |
| DELETE | `/users/:userId`                   | JWT  | Remove um usuário                   |
| POST   | `/feedbacks`                       | -    | Envia um feedback                   |
| GET    | `/feedbacks`                       | -    | Lista feedbacks                     |
| DELETE | `/feedbacks/:feedbackId`           | JWT  | Remove um feedback                  |

Documentação interativa (Swagger) disponível em `http://localhost:3333/docs` com o backend rodando.

## Notas / pontos de atenção conhecidos

- O checkout (`POST /sales`) continua sem exigir login, já que o modelo `Sale` hoje não vincula a venda a um usuário (`userId`) — é uma compra de convidado. Se isso mudar, vale linkar a venda ao usuário autenticado.
- Se você clonou o repositório antes do `.env` ser removido do versionamento, rotacione a `JWT_SECRET` e a senha do banco de dados.
