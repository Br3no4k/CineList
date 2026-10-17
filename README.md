# CineList

Aplicativo mobile para explorar filmes, consultar informações, pesquisar títulos e organizar uma lista de favoritos. Desenvolvido como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas da Universidade FAMINAS.

## Sobre o projeto

O CineList permite que o usuário navegue por um catálogo de filmes, visualize detalhes como sinopse, gênero, ano de lançamento e avaliação, pesquise títulos e salve seus filmes favoritos.

O projeto foi desenvolvido com React Native, Expo e TypeScript, priorizando a organização do código, a reutilização de componentes e a separação de responsabilidades por meio da arquitetura MVVM.

## Funcionalidades

- Tela de abertura (Splash Screen).
- Tela de login com validação local fictícia.
- Página inicial com filme em destaque e listas de filmes.
- Exploração do catálogo com pesquisa e filtros por gênero.
- Visualização dos detalhes de cada filme.
- Adição e remoção de filmes dos favoritos.
- Lista de favoritos com pesquisa.
- Tela de perfil.
- Navegação por abas e pilhas de navegação aninhadas.

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Safe Area Context
- Ionicons, disponibilizado por `@expo/vector-icons`
- StyleSheet para estilização dos componentes

## Arquitetura

O projeto utiliza o padrão arquitetural **MVVM (Model-View-ViewModel)** para separar as responsabilidades da aplicação.

- **Model:** define os tipos e a estrutura dos dados utilizados pelo aplicativo.
- **View:** representa as telas e os componentes visuais.
- **ViewModel:** concentra a lógica de apresentação, os estados e as operações utilizadas pelas telas.
- **Services:** disponibiliza os dados do catálogo para os ViewModels.
- **Data:** contém os dados locais utilizados como catálogo de filmes.

Essa organização facilita a manutenção, a reutilização de código e a compreensão das responsabilidades de cada parte do aplicativo.

## Navegação

A navegação é organizada com React Navigation, utilizando navegadores Stack e Bottom Tabs.

- **Stack raiz:** controla as telas Splash, Login e entrada na área principal.
- **Stack interno:** organiza as abas principais e a tela de detalhes do filme.
- **Bottom Tabs:** disponibiliza as abas Início, Explorar, Favoritos e Perfil.

A tela de detalhes recebe o identificador do filme por meio de parâmetros tipados em TypeScript.

## Estrutura de pastas

```text
CineList/
├── App.tsx
├── index.ts
├── package.json
├── README.md
└── src/
    ├── components/
    ├── contexts/
    ├── data/
    ├── models/
    ├── navigation/
    ├── screens/
    ├── services/
    ├── theme/
    └── viewmodels/
```

### Principais diretórios

| Diretório | Responsabilidade |
|---|---|
| `components/` | Componentes reutilizáveis da interface |
| `contexts/` | Compartilhamento de estado entre telas |
| `data/` | Catálogo local de filmes |
| `models/` | Tipos e modelos de dados |
| `navigation/` | Configuração das rotas e dos navegadores |
| `screens/` | Telas do aplicativo e seus estilos |
| `services/` | Acesso aos dados do catálogo |
| `theme/` | Cores e espaçamentos centralizados |
| `viewmodels/` | Estados e lógica de apresentação das telas |

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm.
- Expo Go em um dispositivo compatível ou um emulador configurado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Br3no4k/CineList.git
```

Entre na pasta do projeto:

```bash
cd CineList
```

Instale as dependências:

```bash
npm install
```

Inicie o Expo:

```bash
npx expo start
```

Para limpar o cache durante a inicialização, utilize:

```bash
npx expo start --clear
```

## Dados e persistência

O catálogo de filmes é disponibilizado por meio de dados locais e de uma camada de serviços.

Os favoritos são compartilhados entre as telas por meio de um contexto React. Na implementação atual, esse estado é mantido em memória, portanto os favoritos não são preservados após o encerramento completo do aplicativo.

O login é fictício e serve apenas para demonstrar o fluxo de entrada na aplicação. Não há autenticação real de usuários ou integração com um backend.

## Testes e validação

Para verificar os tipos do TypeScript, execute:

```bash
npx tsc --noEmit
```

Também é importante testar manualmente a navegação, a pesquisa, os filtros, a abertura dos detalhes e o gerenciamento dos favoritos.

## Capturas de tela

Adicione nesta seção capturas de tela das principais telas do aplicativo, como:

- Splash e Login.
- Início.
- Explorar.
- Detalhes do filme.
- Favoritos.
- Perfil.

As imagens podem ser armazenadas em uma pasta `screenshots/` na raiz do projeto e referenciadas aqui após serem adicionadas ao repositório.

## Repositório

[GitHub — CineList](https://github.com/Br3no4k/CineList)

---

Projeto acadêmico desenvolvido para fins educacionais no curso de Análise e Desenvolvimento de Sistemas da Universidade FAMINAS.