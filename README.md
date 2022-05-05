<img src="https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png" alt="Logo of the project" align="right">

# Entrevista EvenCard &middot; ![Badge](https://img.shields.io/static/v1?label=License&message=MIT&color=8dbb05&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=npm&message=6.14.13&color=d8624c&style=flat)
![Badge](https://img.shields.io/static/v1?label=web&message=react&color=0f80c0&style=flat)
> Feito com esmero 🐱‍👤

Projeto criado em React.js utilizando o framework Next.js. O projeto tem como intuito a criação de uma lista de empresas, sendo possível ver detalhes e editar, salvando todas as informações em LocalStorage 

## Installing / Getting started

- Node.js 12.22.0 ou mais recente
- MacOS, Windows e Linux 


## Developing

### Built With

- React.js 18.1.0
- Next.js 12.1.6
- React-hook-form ^7.30.0
- Tailwindcss ^3.0.24
- PostCSS 8.4.13 
- Headless UI 1.6.1
- HeroIcons ^1.0.6


### Setting up Dev

*É necessário possuir git*

```shell
git clone https://github.com/MortonaPreguica/even.git
cd even/
npm install
npm run dev
```


## Style guide

Criado em React.js utilizando hooks do react(useEffect, useState) e melhores práticas como operador spread. 
Para a criação de novos objetos utilizei o spread para o array original e apenas adicionar o outro:
const newArray = [...oldArray, newElement]

Para excluir um item utilizei o splice para eliminar o elemento do array, o indexOf foi utilizado para achar o objeto dentro do array e excluir pelo index.

Para a modificação, como é feita em outra página, é necessário buscar a empresa dentro do localStorage, mostrá-lo em tela e atualiza-lo para a página inicial.

Tailwindcss foi usado para a criação do CSS, mais alguns frameworks feito pelos criados do TailwindCSS como o Headless UI e HeroIcons


## Licensing

MIT
