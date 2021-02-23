<div align='center'>
  <img src='./.github/logo.png' width='100%' height='200'>

  <h1>Objective Mobile Challenge</h1>
</div>

<h2>Instruções para usar o projeto</h2>

<h3>1° Passo: Clonar o repositório</h3>

```bash
# Comando para clonar
git clone https://github.com/vagnerwentz/objective-mobile-challenge.git

# Acessar a pasta
cd objective-mobile-challenge
```

<h3>2° Passo: Instalar as dependências</h3>
A instalação das dependências do projeto é importante para que seja instalado todas as bibliotecas usadas durante o desenvolvimento do projeto.
Para o desenvolvimento eu utilizei o

```yarn```.

```bash
# npm
npm install

# yarn
yarn
```

<h3>3° Passo: Configuração das variáveis de ambientes</h3>
Ao visto no repositório, temos um arquivo chamado `.env.example`, e devemos trocar o nome dele para `.env`, podemos usar o comando abaixo.
As variáveis de ambiente são importante para termos acesso a API da Marvel.

```bash
cp .env.example .env
```

Após isto, deve-se colocar os valores em cada campo sem aspas. Segue o exemplo abaixo

```bash
MARVEL_API = https://gateway.marvel.com
MARVEL_PUBLIC_KEY = PUBLIC_KEY
MARVEL_PRIVATE_KEY = PRIVATE_KEY
```

<h3>4° PAsso: Executar o projeto</h3>

Após tudo configurado, agora podemos iniciar a nossa aplicação.

```bash
# Android
yarn start
yarn android

# iOS
## Para o iOS provável que deverá acessar a pasta ios e rodar o comando
pod install
yarn start
yarn ios
```
