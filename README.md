# Barbershop Booking Platform

Plataforma web para barbearia com site institucional, agendamento online, carrinho, fidelidade e backoffice administrativo.

## Visão geral

Este projeto foi construído como case de portfólio com foco em um fluxo comercial real para barbearias e estúdios de estética. A aplicação combina:

- site público com posicionamento comercial
- área de agendamento separada da home
- login de cliente com e-mail e senha
- painel admin com operação de agenda e gestão de conteúdo
- base pronta para evoluir para dashboard e deploy em produção

## Funcionalidades atuais

- home institucional com hero, galeria, serviços, clube e contato
- página exclusiva de agendamento em `/agendamento`
- agendamento por serviço, profissional, data e horário
- bloqueio automático de horários ocupados
- login e cadastro de cliente com e-mail e senha
- carrinho para serviços e produtos
- página de fidelidade com níveis, progresso e recompensas
- avaliações locais + adapter preparado para avaliações do Google
- backoffice com CRUD de:
  - serviços
  - planos do clube
  - barbeiros
  - imagens
  - datas bloqueadas
  - recompensas e níveis de fidelidade
- agenda operacional no admin com:
  - criação manual de agendamento
  - confirmação, cancelamento e remarcação
  - visão diária por barbeiro
  - alerta visual de novo agendamento
  - alerta sonoro opcional
  - atalho para confirmação rápida via WhatsApp
- página de dados do admin com base para dashboard:
  - clientes
  - pontos de fidelidade
  - receita
  - atendimentos recentes

## Stack

- Next.js 16
- React 19
- TypeScript
- Prisma
- SQLite local
- CSS Modules

## Como rodar localmente

1. Instale as dependências:

```bash
yarn install
```

2. Crie o arquivo `.env` com base no exemplo:

```bash
cp .env.example .env
```

3. Gere o banco local:

```bash
yarn db:push
```

4. Rode o projeto:

```bash
yarn dev
```

Abra:

- site público: `http://localhost:3001`
- agendamento: `http://localhost:3001/agendamento`
- carrinho: `http://localhost:3001/agendamento/carrinho`
- fidelidade: `http://localhost:3001/fidelidade`
- admin: `http://localhost:3001/admin`

## Scripts

```bash
yarn dev
yarn build
yarn start
yarn lint
yarn prisma:generate
yarn db:push
```

## Rotas principais

### Público

- `/`
- `/agendamento`
- `/agendamento/carrinho`
- `/fidelidade`

### Admin

- `/admin`
- `/admin/site`
- `/admin/catalogo`
- `/admin/agenda`
- `/admin/dados`

### API

- `/api/appointments`
- `/api/appointments/[id]`
- `/api/availability`
- `/api/customers/session`
- `/api/customers/loyalty`
- `/api/google-reviews`
- `/api/address/by-cep`
- `/api/holidays/by-cep`
- `/api/admin/site-sync`

## Variáveis de ambiente

Arquivo base: [.env.example](/Users/moysescosta/Projects/personal_projects/.env.example)

```bash
DATABASE_URL="file:./dev.db"
GOOGLE_PLACES_API_KEY=""
GOOGLE_PLACE_ID=""
```

Observações:

- hoje o projeto roda localmente com SQLite
- o adapter de avaliações do Google já está preparado, mas usa fallback local enquanto as credenciais não forem configuradas

## Estrutura

- `src/app`
  rotas App Router e endpoints da aplicação
- `src/components/home`
  home, agendamento, fidelidade, carrinho e componentes públicos
- `src/components/admin`
  componentes do backoffice
- `src/components/shared`
  config compartilhada, helpers e branding
- `src/lib`
  Prisma, regras de agenda, adapter do Google e utilitários server-side
- `prisma/schema.prisma`
  modelagem do banco

## Produção

Hoje o projeto está pronto para desenvolvimento local e demonstração funcional.

Para produção real, o caminho recomendado é:

- Vercel para o app
- Postgres gerenciado para o banco, como Supabase ou Neon

Motivo:

- o projeto usa SQLite local no ambiente atual
- SQLite não é a melhor escolha para deploy serverless público com múltiplos acessos simultâneos

## Próximos passos sugeridos

- migrar de SQLite para Postgres
- autenticação real de admin
- integração automática com API de WhatsApp
- dashboard com gráficos por período
- gestão de estoque de produtos no backoffice
- resgate real de fidelidade dentro do fluxo do cliente
