# Documentação de Execução do Projeto

Este projeto é um backend Node.js para gerenciamento de receitas médicas, utilizando Express e Prisma ORM com banco de dados SQLite.

## 👥 Equipe de Desenvolvimento

- **Juan Cezar Bethonico de Carvalho** - RA: 72500134
- **Fabricio Washington Da Silva Lima** - RA: 72500712
- **Gabriel Araújo GuimarãesTrois** - RA: 72500606

## Pré-requisitos

- Node.js (versão recomendada: 18 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Banco de dados SQLite (configuração padrão, mas pode ser adaptado para outros bancos compatíveis com Prisma)

## Instalação e Execução

### 1. Instalar dependências

No diretório raiz do projeto, execute:

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e defina a variável `DATABASE_URL`:

```env
DATABASE_URL="file:./dev.db"
PORT=3000
```

Você pode alterar o caminho do banco conforme necessário.

### 3. Executar as migrações do Prisma

Para criar o banco e aplicar as migrações:

```bash
npm run migrate
```

Ou:

```bash
npx prisma migrate dev
```

### 4. Gerar o cliente Prisma

```bash
npm run generate
```

### 5. Iniciar o servidor

Para ambiente de produção:

```bash
npm start
```

Para desenvolvimento (com hot reload):

```bash
npm run dev
```

O servidor estará disponível na porta definida pela variável `PORT` (padrão: 3000).

## Endpoints Principais

A API está disponível sob o prefixo `/api`.

- `GET /api/receitas` — Lista todas as receitas
- `POST /api/receitas` — Cria uma nova receita
- `GET /api/receitas/:id` — Busca receita por ID
- `PUT /api/receitas/:id` — Atualiza receita por ID
- `DELETE /api/receitas/:id` — Remove receita por ID

O campo `medicamentos` deve ser enviado como array, será salvo como JSON string.

## Scripts disponíveis

- `npm start`: Inicia o servidor
- `npm run dev`: Inicia o servidor em modo desenvolvimento (hot reload)
- `npm run migrate`: Executa as migrações do banco
- `npm run generate`: Gera o cliente Prisma
- `npx prisma studio`: Abre o Prisma Studio para gerenciar dados via interface web

## Estrutura de Pastas

- `src/controllers`: Lógica dos controllers
- `src/repositories`: Repositórios de acesso a dados
- `src/routes`: Rotas da API
- `src/services`: Lógica de negócio
- `prisma`: Configuração e migrações do banco de dados

## Observações

- O projeto utiliza SQLite por padrão, mas pode ser adaptado para outros bancos editando o arquivo `prisma/schema.prisma` e a variável `DATABASE_URL`.
- Certifique-se de que o banco de dados está acessível e que as migrações foram aplicadas.
- Para dúvidas sobre variáveis de ambiente, consulte `.env.example` (se existir) ou peça orientação ao responsável pelo projeto.

---

Para mais detalhes, consulte os arquivos de código ou entre em contato com o desenvolvedor responsável.
