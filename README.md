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

## 2. Funcionalidades do MVP

| Funcionalidade | Descrição |
|:---|:---|
| Landing Page B2B | Página institucional com hierarquia visual limpa, responsividade Mobile-First e foco na conversão de visitantes em potenciais clientes. |
| Alta Performance | Otimização de imagens e scripts, priorizando os Core Web Vitals e o tempo de carregamento. |
| Infraestrutura para Tráfego Pago | Preparação da base de código para integração com Google Tag Manager (GTM), Meta Pixel e Google Analytics 4 (GA4). |
| Formulário de Captação | Formulário dinâmico, orientado às necessidades e dores dos potenciais clientes, com envio das informações por e-mail. |

## 3. Pré-requisitos

Antes de iniciar o desenvolvimento, certifique-se de possuir as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão LTS)
- npm (gerenciador de pacotes)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recomendado)

Para verificar as instalações:

```bash
node --version
npm --version
git --version
```

## 4. Instalação e configuração

### 4.1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 4.2. Acessar o diretório do frontend

```bash
cd Site_ASCII_SQUAD_3/frontend
```

### 4.3. Instalar as dependências

```bash
npm install
```

## 5. Executando o projeto

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará um endereço local, geralmente:

```text
http://localhost:5173
```

A aplicação será atualizada automaticamente durante o desenvolvimento (Hot Module Replacement).

## 6. Scripts disponíveis

Os comandos abaixo devem ser executados dentro do diretório `frontend/`.

| Comando | Descrição |
|:---|:---|
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica o TypeScript e gera a versão de produção. |
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
4. Executar lint, testes e build.
5. Realizar commits seguindo Conventional Commits.
6. Enviar a branch para o GitHub.
7. Abrir um Pull Request direcionado à `develop`.
8. Aguardar revisão e aprovação.

Não realizar commits diretamente nas branches `main` e `develop`.

## 10. Testes e qualidade

Antes de solicitar a integração de uma alteração, execute:

```bash
npm run lint
npm run format:check
npm run test:run
npm run build
```

Todas as verificações devem ser aprovadas antes da abertura ou aprovação do Pull Request.

---

**Squad 3 — Site ASCII**

ASCII Soluções em Tecnologia | Universidade Federal de Uberlândia

