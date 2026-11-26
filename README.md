
# Site_ASCII_SQUAD_3

O projeto tem como objetivo desenvolver uma plataforma web institucional moderna, responsiva e de alta performance, transformando a presença digital da ASCII em um canal estratégico de aquisição de clientes B2B. Mais do que apresentar a empresa e seus serviços, o site busca funcionar como uma ferramenta de captação de oportunidades comerciais, proporcionando uma experiência de navegação intuitiva e direcionando os potenciais clientes às equipes Comercial e de Projetos.

### Objetivos do projeto

- **Presença digital:** construir uma vitrine institucional moderna e profissional.
- **Captação de clientes:** facilitar o contato de potenciais clientes interessados nos serviços da ASCII.
- **Performance:** otimizar o carregamento e a experiência de navegação, especialmente em dispositivos móveis.
- **Marketing e métricas:** preparar a aplicação para integração com ferramentas de rastreamento e análise de campanhas.
- **Apresentação dos serviços:** desenvolver um portfólio interativo que demonstre o valor das soluções oferecidas pela empresa.

## 1. Stack

| Camada | Tecnologia |
|:---|:---|
| Frontend | React + TypeScript + Vite (Atomic Design) |
| Backend | Node.js LTS + TypeScript + NestJS (Monolito Modular) |
| Banco | PostgreSQL 16 + Prisma (migrations versionadas) |
| Testes | Vitest (frontend) · Jest (backend) |
| Qualidade | ESLint + Prettier · Husky + lint-staged + commitlint |
| Infra / CI | Docker + Docker Compose · GitHub Actions |

> **Observação:** Backend e banco de dados representam a arquitetura planejada do projeto. Sua implementação será realizada conforme o escopo e as necessidades do desenvolvimento.

## 2. Funcionalidades do MVP

| Funcionalidade | Descrição |
|:---|:---|
| Landing Page B2B | Página institucional com hierarquia visual limpa, responsividade Mobile-First e foco na conversão de visitantes em potenciais clientes. |
| Alta Performance | Otimização de imagens e scripts, priorizando os Core Web Vitals e o tempo de carregamento. |
| Infraestrutura para Tráfego Pago | Preparação da base de código para integração com Google Tag Manager (GTM), Meta Pixel e Google Analytics 4 (GA4). |
| Formulário de Captação | Formulário dinâmico, orientado às necessidades e dores dos potenciais clientes, com envio das informações por e-mail. |

## 3. Pré-requisitos

Antes de iniciar o desenvolvimento, certifique-se de possuir:

- [Git](https://git-scm.com/)
- [Node.js LTS](https://nodejs.org/) e npm
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/) (recomendado)

O Docker Desktop deve estar instalado e em execução.

Para verificar as instalações:

```bash
git --version
node --version
npm --version
docker --version
docker compose version
```

## 4. Instalação e configuração

### 4.1. Clonar o repositório

```bash
git clone https://github.com/asciijr/Site_ASCII_SQUAD_3.git
```

### 4.2. Acessar a pasta do projeto

```bash
cd Site_ASCII_SQUAD_3
```

### 4.3. Instalar as dependências da raiz

Na raiz do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências de desenvolvimento da raiz e prepara os Git Hooks do Husky.

## 5. Executando o projeto com Docker

Certifique-se de que o Docker Desktop esteja em execução.

Na raiz do projeto, execute:

```bash
docker compose up --build
```

O Docker irá construir a imagem, instalar as dependências e iniciar o ambiente de desenvolvimento.

A aplicação estará disponível em:

```text
http://localhost:5173
```

### 5.1. Encerrar o ambiente

Para interromper a execução, pressione `Ctrl + C` no terminal.

Para remover os containers e a rede do projeto:

```bash
docker compose down
```

### 5.2. Executar comandos de desenvolvimento

Com o container em execução, os comandos devem ser executados através do Docker:

```bash
docker compose exec frontend npm run lint
docker compose exec frontend npm run format:check
docker compose exec frontend npm run test:run
docker compose exec frontend npm run typecheck
docker compose exec frontend npm run build
```

## 6. Scripts disponíveis

Os comandos abaixo são executados dentro do diretório `frontend/` ou através do container Docker.

| Comando | Descrição |
|:---|:---|
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção com Vite. |
| `npm run typecheck` | Verifica os tipos do TypeScript. |
| `npm run preview` | Visualiza localmente a versão compilada. |
| `npm run lint` | Executa a análise estática do código com ESLint. |
| `npm run format` | Formata os arquivos com Prettier. |
| `npm run format:check` | Verifica se os arquivos seguem o padrão de formatação. |
| `npm run test` | Executa os testes em modo interativo. |
| `npm run test:run` | Executa os testes uma única vez. |

## 7. Estrutura de diretórios

A organização do frontend segue o padrão Atomic Design, separando os componentes de acordo com sua complexidade e responsabilidade.

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── tests/
│   ├── types/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

### Responsabilidade dos diretórios

| Diretório | Responsabilidade |
|:---|:---|
| `assets/` | Imagens, ícones e recursos estáticos. |
| `components/atoms/` | Componentes básicos e reutilizáveis. |
| `components/molecules/` | Combinações de componentes básicos. |
| `components/organisms/` | Componentes maiores e independentes da interface. |
| `components/templates/` | Estruturas e layouts das páginas. |
| `hooks/` | Hooks personalizados do React. |
| `pages/` | Páginas da aplicação. |
| `services/` | Comunicação com serviços e APIs externas. |
| `styles/` | Estilos globais e configurações visuais. |
| `tests/` | Testes automatizados. |
| `types/` | Definições e interfaces TypeScript compartilhadas. |

## 8. Padrões de desenvolvimento

Todos os integrantes devem respeitar as seguintes diretrizes:

- Utilizar TypeScript no desenvolvimento.
- Seguir a arquitetura Atomic Design.
- Priorizar a reutilização de componentes.
- Desenvolver considerando a abordagem Mobile-First.
- Garantir acessibilidade e responsividade.
- Evitar duplicação de código.
- Utilizar ESLint para análise estática.
- Utilizar Prettier para padronização da formatação.
- Criar testes para funcionalidades e componentes relevantes.

## 9. Controle de versão

O desenvolvimento deve seguir o fluxo de branches estabelecido pelo Squad 3.

| Branch | Finalidade |
|:---|:---|
| `main` | Versão validada do projeto. |
| `develop` | Integração das funcionalidades desenvolvidas. |
| `feat/*` | Desenvolvimento de novas funcionalidades. |
| `fix/*` | Correção de problemas. |
| `docs/*` | Alterações na documentação. |
| `chore/*` | Configurações e manutenção. |

### 9.1. Padrão de commits

Utilizamos Conventional Commits.

Formato:

```text
tipo(escopo): descrição
```

Exemplos:

```bash
feat(header): adiciona menu principal
fix(form): corrige validacao dos campos
docs: atualiza documentacao do frontend
style(hero): ajusta espacamento da secao
test(form): adiciona testes de validacao
chore: atualiza dependencias
```

### 9.2. Fluxo de contribuição

1. Atualizar a branch `develop`.
2. Criar uma branch específica para a tarefa.
3. Implementar a funcionalidade.
4. Executar lint, formatação, testes, typecheck e build.
5. Realizar commits seguindo Conventional Commits.
6. Enviar a branch para o GitHub.
7. Abrir um Pull Request direcionado à `develop`.
8. Aguardar revisão e aprovação.

Não realizar commits diretamente nas branches `main` e `develop`.

## 10. Testes e qualidade

Antes de solicitar a integração de uma alteração, execute:

```bash
docker compose exec frontend npm run lint
docker compose exec frontend npm run format:check
docker compose exec frontend npm run test:run
docker compose exec frontend npm run typecheck
docker compose exec frontend npm run build
```

Todas as verificações devem ser aprovadas antes da integração do Pull Request.

---

**Squad 3 — Site ASCII**

ASCII Soluções em Tecnologia | Universidade Federal de Uberlândia
