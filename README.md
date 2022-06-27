## Índice
* [General info](#general-info)
* [Tecnologias](#tecnologias)
* [Setup](#setup)
* [Documentação](#documentação)

## Informações Gerais
API em NodeJS que consiste em cadastrar produtos e administrar pedidos de um restaurante fictício(Hamburgueria) e envia-los para a cozinha

* O Usuário pode fazer um cadastro comum com: nome, email e senha
* O Usuário pode fazer login ou logout
* Verificar autenticação de rotas privadas
* Mostrar detalhes do Usuári logado
* Criar e listar categorias
* Criar Produtos e listar os mesmos de uma Categoria específica
* Abrir uma mesa(order) e poder fechar ela
* Adicionar itens a uma mesa e também poder retirar os itens
* Enviar (order) retirar de rascunho
* Listar todos os pedidos que não estão em rascunho(draft)
* Poder acessar todos os detalhes de uma mesa com os pedidos
* Concluir o pedido

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=carolineccorrea_burguer-api&metric=alert_status)](https://sonarcloud.io/dashboard?id=carolineccorrea_burguer-api)
![GitHub repo size](https://img.shields.io/github/repo-size/carolineccorrea/burguer-api)
![GitHub](https://img.shields.io/github/license/carolineccorrea/burguer-api)
![GitHub language count](https://img.shields.io/github/languages/count/carolineccorrea/burguer-api)
![GitHub top language](https://img.shields.io/github/languages/top/carolineccorrea/burguer-api)
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)


## 🚀 Technologias
Projeto foi criado com: 

* [PostgreSQL](https://www.postgresql.org)
* [Prisma](https://www.prisma.io)
* [Swagger](https://swagger.io)
* [Jest](https://jestjs.io)
---

## 📰 Documentação
Swagger Open API 🔥

```
$ npm run dev:server
$ localhost:3000/docs
```
---

## 🔧 Testes
Testes realizados com Jest 🔥

```
$ npm test
```
---

## Setup
Para rodar esse projeto, use localmente npm:

```
$ git clone https://github.com/carolineccorrea/burguer-api.git
$ cd burguer-api
$ npm install ou yarn
$ npm run dev ou yarn dev
```
---

## O servidor inciará na porta:3003 
acesse <http://localhost:3003> 




---
Desenvolvido por Caroline Correa 👽
