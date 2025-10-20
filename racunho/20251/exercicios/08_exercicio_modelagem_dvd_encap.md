---
icon: dumbbell
date: 2025-06-16 18:35:00.00 -3
tag:
  - java
category:
  - exercicio
order: 9
---

# Exercício: Modelagem DVD com encapsulamento

adaptado de [^Takenami]


1. Utilizando os conhecimentos de O.O. construa um programa utilizando as informações abaixo. As características de um Aparelho de DVD devem ser definidas de acordo com as informações a seguir. Ao ser criado o Aparelho de DVD inicialmente está desligado. Seu volume pode alterar de 1 a 5 sendo que o nível inicial é 2. É possível inserir um filme no Aparelho de DVD. O filme possui as seguintes caraterísticas: nome, categoria e duração. 

    As seguintes operações podem ser realizadas pelo Aparelho de DVD:
    - ligar e desligar;
    - aumentar e diminuir volume;
    - inserir filme;
    - remover filme;
    - play e stop.

    O programa deve obedecer as seguintes regras:
    - Só é possível fazer qualquer uma destas operações se o Aparelho de DVD estiver ligado;
    - Só é possível dar play no Aparelho de DVD se existir algum filme inserido;
    - Só é possível dar stop se o Aparelho de DVD estiver em play;
    - Ao dar play deve aparecer o nome e a duração do filme que está sendo exibido.

1. Escreva o diagrama UML da classe Aparelho de DVD e implemente o código em Java para construir 1 Aparelho de DVD e 3 filmes diferentes, utilizando o construtor e os métodos definidos e inserir um filme no Aparelho de DVD.


::: details 

  <figure>

  ```plantuml {kroki}
  @startuml
  class AparelhoDVD{
      boolean ligado
      int volume
      Filme filme
      boolean emPlay
      AparelhoDVD()
      void ligar()
      void desligar()
      void inserirFilme(Filme filme)
      Filme removerFilme()
  }
  class Filme{
    String nome;
    String categoria;
    double duracao;
    Filme(String nome, String categoria, double duracao)
  }
  AparelhoDVD --> Filme
  @enduml

  ```
  </figure>


  @[code](../code/modelagemDVD/DVD.java)

  @[code](../code/modelagemDVD/Filme.java)

  @[code](../code/modelagemDVD/Mesa.java)

:::


<!-- @include: ../../../includes/bib.md -->
