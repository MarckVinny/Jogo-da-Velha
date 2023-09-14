# JOGO DA VELHA v1

___

## Sumário

- [Configuração do Projeto](#configuração-do-projeto)
- [Criando o Novo Projeto Front-end](#criando-o-novo-projeto-front-end)

___

## Configuração do Projeto

De início, iremos criar um Projeto de uma Aplicação Front-end simples mas utilizando Modelagem de Domínio para caso a aplicação precise crescer mais adiante, facilite o processo.  

Pois se não utilizarmos a Modelagem de Domínio logo no início, corre-se o risco de deixar o código totalmente acoplado dificultando o crescimento da aplicação.  

Será utilizado o [Turbo Build](https://turbo.build/), ele cria um Repositório Único e dentro ele gerencia uma série de projetos, por exemplo:  

- Uma aplicação de e-Commerce;
  - Tem o front-end da aplicação;
  - Tem o Módulo PDV;
  - Pode ter um Totem de Auto-Serviço;
  - Pode ter uma aplicação de Retaguarda (para os funcionários);

Todos esses Projetos, pode ser controlados a partir de um único repositório.  

A ideia do ***TurboRepo***, é trabalhar com o conceito de ***MonoRepo*** que seria um ***Repositório Único*** e dentro desse repositório existem todos os Projetos separados e Ele irá controlar o Build da Aplicação, as Dependências entre os Projetos, além de não existir mais a necessidade publicar um projeto no NPM para poder ser reutilizado em outros projetos, tudo pode ficar salvo em um único repositório sem a necessidade de se deixar salvo na internet.  

Agora iremos criar o Repositório Único da nossa Aplicação dentro da pasta `JOGO-DA-VELHA-v1`, através do Terminal com o comando `npx create-turbo@latest jogo-velha` que cria utilizando a última versão.  

Depois de executar o comando acima, ele pedirá a confirmação da instalação da versão, então, é só digitar "Y" e depois enter, ele irá instalar a versão do TurboRepo e depois irá perguntar ***"Which package manager do you want to use?"*** Qual gerenciador de pacotes você deseja usar? em nosso caso iremos utilizar o `> npm`.  

```zsh
// Terminal

apps
 - apps\docs
 - apps\web
packages
 - packages\eslint-config-custom
 - packages\tsconfig
 - packages\ui
```

Com isso, ele irá criar a pasta do Projeto `/jogo-velha` e dentro, irá criar toda a estrutura de pastas além de criar Dois projetos Front-end dentro da pasta `/apps`, um chamado `/docs` e outro chamado `/web`, os mesmos podem ser acessados pelo navegador em <http://localhost:3000> e <http://localhost:3001> respectivamente, mas antes *(no Terminal)*, precisamos entrar na pasta do Projeto, clicando com o botão direito do mouse na pasta `/jogo-velha` e escolhendo ***"Abrir no Terminal Integrado"*** e executar o comando `npm run dev` para poder rodar a Aplicação em Modo Desenvolvimento e poder acessar os endereços no navegador.  

Mas apesar dele ter criado os Projetos Front-end *(/docs e /web)*, não iremos utiliza-los, pois, ele criou fora da pasta `/src` que é onde iremos salvar nosso Projeto Front-end e que por sinal será simples de se fazer.  

O projeto será criado do ZERO, bastando criar dentro da pasta `/apps` que o TurboRepo procura o que tiver dentro e já disponibiliza o acesso, com a vantagem de se conseguir acessar outros Projetos e compartilhá-los.  

Por padrão ele cria uma pasta de Aplicações `/apps` e outra de Pacotes `/packages` onde ficariam as nossas Bibliotecas, no caso uma Dependência Interna do Projeto.  

Os dois Projetos Docs e Web que ele criou por padrão, dependem do Pacote/Biblioteca chamado `/ui` que são Elementos de Interface Gráfica, que se encontra dentro da pasta `/packages`.  

Esse é o projeto propriamente dito, dentro se encontram todos os arquivos referentes ao visual da Aplicação.

```zsh
// Terminal

/ui
|-- card.tsx
|-- index.tsx
|-- node_modules
|-- package.json
|-- tsconfig.json
`-- turbo
    `-- generators
        |-- config.ts
        `-- templates
            `-- component.hbs
```

Que possui um arquivo `index.tsx` como podemos ver acima e esse arquivo exporta um Componente `Card()` que é compartilhado pelo dois Projetos Front-end ***"Docs e Web"***.

```tsx
// index.tsx

...
// component exports
export { Card } from "./card";
...
```

***Componente Card:***

```tsx
// card.tsx

...
import * as React from "react";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
...
```

***Relembrando...***  
Executando no Terminal o comando `npm run dev` dentro do Projeto pasta `/jogo-velha` iremos rodar os Projetos no modo desenvolvimento e estarão acessíveis no navegador.  

Teremos os dois Projetos Front-end rodando, o ***web*** na ***porta 3000*** e o ***docs*** na ***porta 3001***, os dois compartilham o mesmo Componente que neste caso é o `Card()`, pois se consegue criar toda Biblioteca de Elementos e Componentes e reutilizar essa Biblioteca em todos os Projetos dentro do mesmo repositório, sem que seja preciso publicar na internet, colocar em um repositório privado e utilizar chaves de acesso para os pacotes privados no NPM, simplificando assim a configuração dentro do projeto.  

[^ Sumário ^](#sumário)

## Criando o Novo Projeto Front-end

Como não iremos utilizar os Projetos Front-end ***"web e docs"***, vamos excluí-los e criar nosso projeto do ZERO.  

Agora no Terminal e dentro da pasta `/apps` vamos executar o comando `npx create-next-app@latest frontend` confirmando com ***"Yes"*** para todas as perguntas.

```zsh
// Terminal

$ npx create-next-app@latest frontend

√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes
√ What import alias would you like configured? ... @/*
```

Agora vamos sair da pasta `/apps` com o comando `cd ..` e estaremos na pasta do Projeto `/jogo-velha`, agora iremos executar o comando para rodar o Projeto e acessível pelo navegador `npm run dev` que poderemos acessar pelo endereço <http://localhost:3000>, no momento irá aparecer uma página com a logo do Next representando o nosso Projeto.  
