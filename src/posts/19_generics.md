---
icon: edit
date: 2025-08-14 18:30:00.00 -3
tag:
  - heranca
  - generics
category:
  - aula
order: 20
---

# Tipificação Forte com Generics

[^jai_generics_2014]

## Tipificação Forte

Java é uma linguagem de tipificação forte (ou fortemente tipada), o que significa que o tipo de uma variável é verificado em tempo de compilação e não pode ser alterado dinamicamente durante a execução do programa. Isso implica que o compilador Java verifica se as operações realizadas com uma variável são compatíveis com seu tipo declarado. 

Por exemplo, você não pode atribuir uma String a uma variável do tipo int.

@[code](./code/generics/tiposIncompativeis.java)


A tipificação forte evita erros comuns, como tentar acessar métodos ou propriedades que não existem para um determinado tipo, reduzindo bugs e facilitando a depuração.

Ao declarar explicitamente os tipos das variáveis, o código se torna mais legível e compreensível, pois fica claro quais dados estão sendo manipulados.

No entanto, a tipificação forte pode exigir mais esforço do desenvolvedor, já que é necessário garantir que os tipos estejam sempre corretos. É aqui que os generics entram em cena, oferecendo flexibilidade sem sacrificar a segurança.

## Generics

Os generics foram introduzidos no Java 5 para permitir que classes, interfaces e métodos operem com tipos parametrizados. Eles são uma forma de criar código reutilizável e seguro, evitando a necessidade de casts explícitos, e erros de tipo, em tempo de execução.

Antes dos generics, era comum usar Object para criar coleções ou classes que pudessem armazenar qualquer tipo de dado. No entanto, isso exigia casts explícitos e podia levar a erros em tempo de execução.


@[code](./code/generics/ExemploObject.java)

<codapi-snippet sandbox="java" editor="basic"></codapi-snippet>

Com generics, podemos criar coleções ou classes que trabalham com tipos específicos, eliminando a necessidade de casts e garantindo segurança de tipo em tempo de compilação.

@[code](./code/generics/ExemploGenerics.java)

<codapi-snippet sandbox="java" editor="basic"></codapi-snippet>

### Comparativo


| Aspecto                        | Uso de `Objects`                             | Uso de Generics                             |
| ------------------------------ | ------------------------------------------ | ------------------------------------------- |
| **Segurança de Tipo**          | Não há verificação em tempo de compilação. | Verificação em tempo de compilação.         |
| **Casts**                      | Necessários e propensos a erros.           | Não são necessários.                        |
| **Flexibilidade**              | Aceita qualquer tipo, mas sem segurança.   | Aceita tipos específicos com segurança.     |
| **Erros em Tempo de Execução** | Comuns (ex: `ClassCastException`).           | Raros (erros são detectados em compilação). |



### Mais exemplos

@[code](./code/generics/GenericsTest.java)


<codapi-snippet sandbox="java" editor="basic"></codapi-snippet>


#### Exemplo de classe com Generics com dois parâmetros:

@[code](./code/generics/GenericsTest2.java)

Saída

```shell
Value of the itemT: Test String.
Type of the itemT: java.lang.String
Value of the itemU: 100
Type of the itemU: java.lang.Integer
```


## Herança com Generics

A combinação de herança e generics em Java permite criar hierarquias de classes que são flexíveis e seguras em termos de tipos. 

Considere o cenário de um sistema de gerenciamento de veículos, onde devem ser criados diferentes tipos de veículos (carros, motos, caminhões). Cada veículo tem um tipo específico de motor, e queremos garantir que o tipo de motor seja consistente com o tipo de veículo.


@[code](./code/generics/Veiculo.java)

A classe `Veiculo` é uma classe que aceita um tipo `T` genérico para o motor. Ela define comportamentos comuns para todos os veículos.


@[code](./code/generics/MotorCombustao.java)

@[code](./code/generics/MotorEletrico.java)

classes de motor: `MotorCombustao` e `MotorEletrico`.


As subclasses de Veiculo que especificam o tipo de motor.

- Carro: Usa um MotorCombustao.
- Moto: Usa um MotorCombustao.
- CaminhaoEletrico: Usa um MotorEletrico.

@[code](./code/generics/Carro.java)
@[code](./code/generics/Moto.java)
@[code](./code/generics/CaminhaoEletrico.java)


Testando a Hierarquia

@[code](./code/generics/TestaVeiculos.java)

```console
Carro Sedan com Motor Combustão (2000cc) está ligado.
Moto Esportiva com Motor Combustão (600cc) está ligada.
Caminhão Elétrico Carga Pesada com Motor Elétrico (300kW) está ligado.
```

::: warning Exemplo de Erro de Tipo

Se tentarmos criar um `Carro` com um `MotorEletrico`, o compilador gerará um erro:

@[code](./code/generics/Erro.java)

Isso demonstra como os generics ajudam a evitar erros em tempo de compilação.

:::


## Restringir o tipo genérico `T`

O uso de `T extends` em generics permite restringir o tipo genérico `T` a uma classe ou interface específica, garantindo que apenas subtipos dessa classe ou interface possam ser usados. Isso é útil para impor limites aos tipos aceitos e acessar métodos ou propriedades específicas da classe ou interface.

Imagine que no exemplo anterior, alguém defina um novo veículo como o exibido abaixo:

@[code](./code/generics/Pop.java)

Faz sentido ter um veículo com um Motor `Interger`?

É possível fazer uma restrição para que todos os tipos definidos para o genérico sejam filhos de `Motor`, por exemplo.

@[code](./code/generics/extends/Motor.java)
@[code{1}](./code/generics/extends/MotorCombustao.java)
@[code{1}](./code/generics/extends/MotorEletrico.java)
@[code{1}](./code/generics/extends/Veiculo.java)

Com essa restrição, a classe `Pop` não poderia ser compilada já que `Integer` não herda de `Motor`


### Outro Exemplo


@[code](./code/generics/FormaGeometrica.java)
@[code](./code/generics/Circulo.java)
@[code](./code/generics/Retangulo.java)
@[code](./code/generics/CalculadoraArea.java)
@[code](./code/generics/TestaCalculadoraArea.java)

```console
Área do círculo: 78.53981633974483
Área do retângulo: 24.0
```

::: warning Exemplo de Erro de Tipo

Se tentarmos usar um tipo que não implementa `FormaGeometrica`, o compilador gerará um erro:

```java
// Erro de compilação: String não implementa FormaGeometrica
CalculadoraArea<String> calculadoraInvalida = new CalculadoraArea<>("Texto");
```

:::

## Referências

<!-- @include: ../../includes/bib.md -->


