
### Módulo 1: Pagamento e Bilhetagem


#### Descrição

Este módulo é responsável por todas as transações financeiras dentro do aplicativo, desde a recarga de créditos até o pagamento da passagem. A equipe deverá implementar um sistema de pagamento seguro e versátil, incluindo a gestão de cartões de transporte e a integração com gateways de pagamento externos.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

- **RF17: Pagamento Direto:** Implementar uma funcionalidade de pagamento que se comunique com um provedor de pagamento (ex: um aplicativo de cartão de crédito) para autorizar uma transação e retornar uma confirmação de sucesso ou falha. (Citação: "o aplicativo deve possibilitar pagamento por meio de um pedido enviado ao provedor do pagamento... e que retorna uma condição caso o pagamento tenha sucesso ou não.")
- **RF18: Cartão Virtual:** Desenvolver um sistema de cartão de transporte virtual próprio da plataforma, que pode ser usado para o pagamento da passagem. (Citação: "O aplicativo deve permitir a criação e utilização de um cartão virtual próprio da plataforma para pagamento da passagem.")
- **RF19: Gerenciamento de Cartões:** Criar uma interface onde o usuário possa gerenciar seus cartões de transporte cadastrados, permitindo ações como adicionar, remover ou editar um cartão. (Citação: "O aplicativo deve fornecer uma interface para o usuário gerenciar seu cartão de transporte já cadastrado (ex: remover ou editar).")
- **RF20: Recarga (PayPal):** Integrar o sistema de recarga do cartão virtual com a plataforma de pagamento PayPal. A funcionalidade deve enviar uma requisição com o valor desejado e processar a transação. (Citação: "O aplicativo deve permitir a recarga dos cartões virtuais, possuindo integração com o sistema de pagamento PayPal...")
- **RF21: Consulta de Saldo:** Fornecer uma interface clara para o usuário visualizar o saldo de créditos disponível em seu cartão de transporte cadastrado. (Citação: "O aplicativo deve permitir ao usuário uma interface para visualizar seu cartão cadastrado e o saldo de crédito.")
- **RF22: Pontos de Venda (Mapa):** Utilizando o GPS do usuário, o aplicativo deve exibir em um mapa a localização dos pontos de venda físicos mais próximos onde é possível comprar bilhetes ou realizar recargas. (Citação: "O aplicativo deve exibir no mapa a localização dos pontos de venda de bilhetes e recarga físicos mais próximos ao usuário...")

#### Requisitos Não Funcionais a Considerar

- **Segurança e Privacidade (RNF04):** Todas as transações financeiras e dados de cartão devem ser processados de forma segura, utilizando criptografia e em conformidade com as normas do setor de pagamentos. Aderência estrita à LGPD.
- **Disponibilidade (RNF02):** O sistema de pagamento e consulta de saldo deve estar sempre disponível (24/7).
- **Usabilidade (RNF05):** O processo de pagamento, recarga e consulta de saldo deve ser simples, rápido e transparente para o usuário.
- **Conectividade (RNF06):** As transações devem ser tratadas de forma a prevenir falhas em caso de instabilidade na conexão de internet.
