---
icon: edit
date: 2024-12-11 19:40:00.00 -3
tag:
category:
  - aula
order: 11
---

# Estrutura Geral do Trabalho

A estrutura do trabalho é baseada na arquitetura em três camadas: **Camada de Apresentação**, **Camada de Negócio** e **Camada de Dados**. No entanto, nesta proposta, os dados não serão persistidos em um banco de dados, mas sim em estruturas de dados temporárias, como listas ou mapas, mantidas na memória durante a execução do programa.

## Camada de Apresentação (UI - JavaFX)

Responsável por toda a interação com o usuário. Esta camada deve exibir a interface gráfica, coletar dados dos formulários e apresentar os resultados ou mensagens de erro de maneira clara e amigável. É onde o JavaFX será utilizado para criar as janelas, botões, formulários e outros componentes gráficos.

### Exemplo de Funcionalidade

Um formulário para cadastrar produtos em um sistema de estoque ou uma tela que exibe o status das tarefas em um gerenciador de tarefas.

## Camada de Negócio (Business Logic)

Contém a lógica do sistema e as regras de negócio. Nesta camada, são verificadas as condições impostas pelo domínio da aplicação (por exemplo, limites de estoque, validação de dados, etc.). Essa camada também é responsável por lançar exceções específicas quando as regras de negócio são violadas.

### Exemplo de Funcionalidade

Em um sistema de gerenciamento de estoque, esta camada seria responsável por verificar se a quantidade de produtos é suficiente antes de permitir uma venda ou gerar exceções caso um valor inválido seja informado.

## Camada de Dados (Data Access)

Gerencia os dados da aplicação. Embora não haja persistência em um banco de dados, os dados serão armazenados temporariamente em estruturas de dados em memória (como `ArrayList`, `HashMap`, etc.). Esta camada simula o comportamento de uma camada de persistência, mas sem a necessidade de conexão com um banco de dados.

### Exemplo de Funcionalidade

Gerenciar a lista de produtos cadastrados, recuperar os dados de um produto ou remover um produto da lista. Todas as operações de CRUD (Create, Read, Update, Delete) serão realizadas diretamente sobre essas estruturas temporárias.

## Fluxo de Comunicação Entre as Camadas

1. O usuário interage com a **Camada de Apresentação** (JavaFX), por exemplo, preenchendo um formulário de cadastro de um produto.
2. A **Camada de Apresentação** envia os dados para a **Camada de Negócio**.
3. A **Camada de Negócio** aplica as regras e validações. 
4. Se a validação for bem-sucedida, a **Camada de Negócio** interage com a **Camada de Dados** para armazenar, recuperar ou modificar os dados.
5. Qualquer erro ou exceção gerada na **Camada de Negócio** é capturada pela **Camada de Apresentação** e exibida de maneira amigável para o usuário.

























[Equipes](./exercicios/Trabalho/equipes.md)