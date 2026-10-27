# Aluroni

Projeto desenvolvido durante o curso [React: lidando com arquivos estáticos](https://www.alura.com.br/curso-online-react-arquivos-estaticos) da Alura.

## Descrição

O Aluroni é uma aplicação web para exibir o cardápio de um restaurante, permitindo que o usuário:

- pesquise pratos por nome;
- filtre os itens por categoria;
- ordene os pratos por porção, quantidade de pessoas ou preço;
- visualize os pratos em uma interface moderna e responsiva.

A aplicação simula um menu digital de um restaurante com foco em experiências de navegação e organização visual.

## Tecnologias utilizadas

- React
- TypeScript
- Sass
- CSS Modules
- Normalize.css
- React Icons

## Funcionalidades

- Busca por texto no cardápio
- Filtro por categorias:
  - Massas
  - Carnes
  - Combos
  - Veganos
- Ordenação por:
  - porção
  - quantidade de pessoas
  - preço
- Layout responsivo para diferentes tamanhos de tela
- Dados de cardápio em arquivos JSON

## Estrutura do projeto

```text
aluroni/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Filter/
│   │   ├── Items/
│   │   ├── SearchEngine/
│   │   └── Sorter/
│   ├── data/
│   │   ├── filterOptions.json
│   │   ├── menuOptions.json
│   │   └── sorterOptions.json
│   ├── pages/
│   │   └── Menu/
│   ├── styles/
│   ├── index.css
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18+
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/gabriel-brasil/aluroni.git
cd aluroni
npm install
```

## Executando o projeto

```bash
npm start
```

A aplicação será iniciada em modo de desenvolvimento e pode ser acessada em:

```text
http://localhost:3000
```

## Build para produção

```bash
npm run build
```

Esse comando gera a versão otimizada da aplicação na pasta `build/` para deploy.

## Scripts disponíveis

No arquivo `package.json`, os scripts principais são:

- `npm start` — inicia o ambiente de desenvolvimento
- `npm run build` — gera a build de produção
- `npm test` — executa os testes
- `npm run eject` — expõe a configuração do projeto (não recomendado em projetos simples)

## Observações

Os dados do cardápio estão em `src/data/menuOptions.json`, e as opções de filtro/ordenação em:

- `src/data/filterOptions.json`
- `src/data/sorterOptions.json`

Esse projeto serve como exemplo prático de uso de dados estáticos em React, com organização de componentes, filtros e renderização dinâmica.

## Licença

Este projeto foi desenvolvido para fins de estudo e prática de desenvolvimento front-end.
