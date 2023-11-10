# Painel de Serviços

Este projeto foi desenvolvido usando Next.js versão 14.

## Requisitos

Certifique-se de que você tenha a versão adequada do Node.js instalada em sua máquina antes de começar.

- Node.js: ^20.9.0

## Instalação

Siga estas etapas para configurar e executar o projeto:

- Clone este repositório.
- Navegue até o diretório do projeto.
- Instale as dependências usando o seguinte comando:

```bash
npm install
````

- Rode o projeto

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento e você poderá visualizar o projeto em `http://localhost:3000`

## Testes

Por uma questão de incompatibilidade, siga os passos para rodar os testes

- Altere a linha 30 no `tsconfig.json` para

```bash
"jsx": "react"
```

- Rode o teste

```bash
npm run test
```