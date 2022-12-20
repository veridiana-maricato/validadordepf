# VALIDADOR DE CPF
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/veridiana-maricato/validadordepf/blob/main/LICENSE) 

# Sobre o projeto

https://easycpfvalidator.netlify.app/

O validador de CPF é uma aplicação full stack web construída para facilitar o processo do usuário de verificar a validade de um número de CPF, isto é, se ele existe de fato ou não.

A aplicação utiliza uma série de operações matemáticas traduzidas para funções de programação na linguagem JavaScript.

## Layout web
![Web 1](https://github.com/veridiana-maricato/validadordepf/blob/main/img/layout%20web.png)

A aplicação é à prova de 'sequências falsas' (false sequencies), isto é, sequências de onze dígitos idênticos, que teoricamente retornam como verdadeiras (true) nas operações matemáticas realizadas dentro das funções:
![False sequencies](https://github.com/veridiana-maricato/validadordepf/blob/main/img/false%20sequency.png)

# Tecnologias utilizadas
## Back end
- JavaScript
## Front end
- HTML 
- CSS
## Implantação em produção
- Front end web: Netlify

# Como executar o projeto

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/veridiana-maricato/validadordepf

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install
