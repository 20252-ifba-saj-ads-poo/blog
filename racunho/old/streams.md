https://www.oracle.com/br/technical-resources/articles/java/processing-streams-java-se-8.html

# Streams no java

Streams são sequências de elementos que podem ser processadas de forma eficiente. No java, as streams são usadas para realizar operações em coleções de dados, como filtragem, mapeamento, redução e agrupamento, permitindo uma abordagem mais funcional e declarativa para a manipulação de dados.

Os Streams foram introduzidos no Java 8 e são uma parte fundamental da programação funcional no Java. Eles permitem que você trabalhe com coleções de dados de forma mais simples e legível, evitando a necessidade de loops explícitos e a manipulação manual de itens individuais.

É possível criar streams a partir de coleções, como listas, conjuntos ou matrizes e interagir com elas usando uma série de métodos de operação intermediária, transformações e operações terminal.

## Threads e Streams

Em um ambiente multithreaded, as streams podem ser usadas para processar dados de forma paralela, permitindo que várias threads trabalhem em partes diferentes da stream simultaneamente. Isso pode melhorar significativamente o desempenho em cenários de processamento intensivo de dados.

Sem a adoção do Streams, seria necessário criar um loop para cada operação que desejamos realizar (como filtrar, mapear, reduzir, etc.) alem de criar a logica para lidar com a concorrência. Com o Streams, podemos criar uma pipeline de operações que será executada de forma paralela, e a JVM irá gerenciar a concorrência automaticamente.