---
icon: dumbbell
date: 2025-06-02 18:10:00.00 -3
tag:
  - java
category:
  - exercicio
  - entrega
order: 3
---

# Exercício: Data OO


1. Utilizando os conhecimentos de O.O. construa um programa que represente uma `Data` utilizando as informações abaixo. 
    
    - Toda `Data` deve representar dia, mês e ano.
    - Toda `Data` deve poder saber se ela é anterior, posterior ou igual a outra `Data`.
    - Toda `Data` deve poder incrementar (método `incrementarDia`) o dia depois de ser criada (instanciada).
    - Toda `Data` deve poder exibir suas informações no formato Texto.
    
@[code](../code/exercicioDataOO/App.java)

Saida esperada 

```console
Data 1: 1/1/2024 | Data 2: 2/1/2024
data1.anterior(data2): true
data1.posterior(data2): false
data1.igual(data2): false
Data 1 :2/1/2024| Data 2 2/1/2024
data1.anterior(data2): false
data1.posterior(data2): false
data1.igual(data2): true
Data 1 :3/1/2024| Data 2 2/1/2024
data1.anterior(data2): false
data1.posterior(data2): true
data1.igual(data2): false
```

## Link para Entrega

[Entrega](https://classroom.github.com/a/A8rFqabR)
