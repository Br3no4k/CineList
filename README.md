# CineList

Aplicativo mobile para explorar filmes, consultar informações, pesquisar títulos e organizar uma lista de favoritos. Desenvolvido como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas da Universidade FAMINAS.

## Sobre o projeto

O CineList permite que o usuário navegue por um catálogo de filmes, visualize detalhes como sinopse, gênero, ano de lançamento e avaliação, pesquise títulos e salve seus filmes favoritos.

O projeto foi desenvolvido com React Native, Expo e TypeScript, utilizando o padrão arquitetural MVVM, Context API para compartilhamento de estados e serviços para organização das operações de dados.

## Funcionalidades

- Tela de abertura (Splash Screen).
- Tela de login com validação local fictícia.
- Página inicial com filme em destaque e listas de filmes.
- Exploração do catálogo com pesquisa e filtros por gênero.
- Visualização dos detalhes de cada filme.
- Adição e remoção de filmes dos favoritos.
- Lista de favoritos com pesquisa.
- Tela de perfil.
- Seleção de foto pela galeria.
- Captura de foto pela câmera.
- Navegação por abas e pilhas de navegação aninhadas.

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- React Context API
- Expo SQLite
- AsyncStorage
- Expo Image Picker
- React Native Safe Area Context
- Ionicons, disponibilizado por `@expo/vector-icons`
- StyleSheet para estilização dos componentes
- Jest
- React Native Testing Library
- Maestro

## Arquitetura

O projeto utiliza o padrão arquitetural **MVVM (Model-View-ViewModel)** para separar as responsabilidades da aplicação.

- **Model:** define os tipos e a estrutura dos dados utilizados pelo aplicativo.
- **View:** representa as telas e os componentes visuais.
- **ViewModel:** concentra a lógica de apresentação, os estados e as operações utilizadas pelas telas.
- **Services:** disponibiliza operações de acesso e manipulação de dados.
- **Data:** contém os dados locais utilizados como catálogo de filmes.
- **Contexts:** compartilha estados e operações entre diferentes telas.

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
├── __tests__/
│   ├── unit/
│   ├── integration/
│   └── ui/
├── e2e/
│   ├── login.yaml
│   └── favorites.yaml
├── App.tsx
├── index.ts
├── package.json
├── README.md
└── src/
    ├── components/
    ├── contexts/
    ├── data/
    ├── database/
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
| `__tests__/unit/` | Testes unitários |
| `__tests__/integration/` | Testes de integração |
| `__tests__/ui/` | Testes de interface |
| `e2e/` | Testes automatizados de ponta a ponta com Maestro |
| `components/` | Componentes reutilizáveis da interface |
| `contexts/` | Compartilhamento de estado entre telas |
| `data/` | Catálogo local de filmes |
| `database/` | Configuração e inicialização do banco SQLite |
| `models/` | Tipos e modelos de dados |
| `navigation/` | Configuração das rotas e dos navegadores |
| `screens/` | Telas do aplicativo e seus estilos |
| `services/` | Acesso e manipulação dos dados |
| `theme/` | Cores e espaçamentos centralizados |
| `viewmodels/` | Estados e lógica de apresentação das telas |

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm.
- Android Studio com emulador configurado ou dispositivo Android compatível.
- Android SDK configurado para execução de builds nativos.

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

### Executar no Expo

```bash
npx expo start
```

Para limpar o cache durante a inicialização:

```bash
npx expo start --clear
```

### Executar no Android

Para iniciar o aplicativo em um emulador Android com o projeto nativo configurado:

```bash
npx expo run:android
```

Durante o desenvolvimento com build de desenvolvimento, inicie o Metro com:

```bash
npx expo start --dev-client
```

## Dados e persistência

O CineList utiliza diferentes mecanismos para armazenar e compartilhar informações.

### SQLite

O banco de dados SQLite é utilizado para armazenar os filmes favoritos.

A tabela `favorites` possui os campos:

- `id`: identificador do registro.
- `movie_id`: identificador do filme, com restrição de unicidade.

As operações de consulta, inclusão, remoção e verificação de favoritos são organizadas no serviço `favoritesService`.

### AsyncStorage

O AsyncStorage é utilizado para persistir a URI da foto de perfil do usuário, permitindo recuperar a imagem após a reabertura do aplicativo.

### Context API

Os Contexts permitem compartilhar estados e operações entre diferentes telas, evitando a necessidade de passar informações manualmente por vários níveis de componentes.

### Autenticação

O login é fictício e serve para demonstrar o fluxo de entrada na aplicação. Não há autenticação real de usuários ou integração com um backend.

## Recursos nativos e permissões

O aplicativo utiliza recursos nativos do dispositivo para permitir a escolha e captura de fotos de perfil.

### Câmera

Utilizada para capturar uma foto diretamente pelo dispositivo.

### Galeria

Utilizada para selecionar uma imagem já existente no dispositivo.

As permissões são solicitadas durante a utilização do recurso correspondente. Caso o usuário negue a permissão, o aplicativo apresenta um aviso e permite continuar utilizando as demais funcionalidades.

## Testes e validação

O projeto possui testes automatizados organizados em quatro categorias.

### Testes unitários

Localização: `__tests__/unit/`

Verificam funções e regras isoladas da aplicação, como operações dos serviços e lógica de apresentação.

### Testes de integração

Localização: `__tests__/integration/`

Verificam a interação entre diferentes partes da aplicação, incluindo serviços e operações relacionadas aos dados.

### Testes de interface

Localização: `__tests__/ui/`

Verificam o comportamento dos componentes e das telas, incluindo interações e elementos visuais.

### Testes E2E com Maestro

Localização: `e2e/`

Os testes de ponta a ponta verificam fluxos completos da aplicação em um emulador Android.

**Login (`login.yaml`):**
- Abre o aplicativo.
- Aguarda a tela de login.
- Preenche as credenciais fictícias.
- Confirma o acesso à tela inicial.

**Favoritos (`favorites.yaml`):**
- Realiza o login.
- Abre os detalhes de um filme.
- Adiciona o filme aos favoritos.
- Acessa a lista de favoritos.
- Confirma que o filme foi salvo.

### Executar os testes

Para executar os testes com Jest:

```bash
npm test
```

Para verificar os tipos do TypeScript:

```bash
npx tsc --noEmit
```

Para executar os testes E2E, é necessário ter o Maestro instalado, o emulador Android iniciado e o servidor Metro disponível.

Executar o teste de login:

```bash
maestro test e2e/login.yaml
```

Executar o teste de favoritos:

```bash
maestro test e2e/favorites.yaml
```

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