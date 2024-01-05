## Turborepo inicial

Este é um Turborepo inicial oficial.

## Usando este exemplo

Execute o seguinte comando:

```sh
npx create-turbo@latest
```

## O que tem dentro?

Este Turborepo inclui os seguintes pacotes/aplicativos:

### Aplicativos e pacotes

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: uma biblioteca stub de componentes React compartilhada por aplicativos `web` e `docs`
- `eslint-config-custom`: `eslint` configurações `eslint` (inclui `eslint-config-next` e `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s usados em todo o monorepo

Cada pacote/aplicativo é 100% [TypeScript](https://www.typescriptlang.org/).

### Serviços de utilidade pública

Este Turborepo possui algumas ferramentas adicionais já configuradas para você:

- [TypeScript](https://www.typescriptlang.org/) para verificação de tipo estático
- [ESLint](https://eslint.org/) para linting de código
- [Prettier](https://prettier.io) para formatação de código

### Build

Para compilar todos os aplicativos e pacotes, execute o seguinte comando

```zsh
cd my-turborepo
pnpm build
```

### Develop

Para desenvolver todos os aplicativos e pacotes, execute o seguinte comando:

```zsh
cd my-turborepo
pnpm dev
```

### Cache Remoto

O Turborepo pode usar uma técnica conhecida como [Cache Remoto](https://turbo.build/repo/docs/core-concepts/remote-caching) para compartilhar artefatos de cache entre máquinas, permitindo que você compartilhe caches de construção com sua equipe e CI /CD pipelines.

Por padrão, o Turborepo armazenará em cache localmente. Para ativar o cache remoto, você precisará de uma conta no Vercel. Se você não possui uma conta, você pode [criar uma](https://vercel.com/signup) e inserir os seguintes comandos:

```zsh
cd my-turborepo
npx turbo login
```

Isso autenticará a CLI do Turborepo com sua [conta Vercel](https://vercel.com/docs/concepts/personal-accounts/overview).

Em seguida, você pode vincular seu Turborepo ao Cache Remoto executando o seguinte comando na raiz do seu Turborepo:

```zsh
npx turbo link
```

## Links Úteis

Saiba mais sobre o poder do Turborepo:

- [Tasks - Tarefas](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching - Cache](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching - Cache Remoto](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering - Filtragem](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options - Opções de Configuração](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage - Uso da CLI](https://turbo.build/repo/docs/reference/command-line-reference)
