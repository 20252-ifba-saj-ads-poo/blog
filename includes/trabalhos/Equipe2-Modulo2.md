
### Módulo 2: Consulta de Rotas e Horários


#### Descrição

Este módulo constitui o núcleo informativo do aplicativo, permitindo aos usuários planejar suas viagens. A equipe será responsável por desenvolver as funcionalidades que exibem informações sobre linhas de ônibus, horários, trajetos e tarifas, garantindo que os dados sejam claros e acessíveis.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

- **RF05: Listagem de Linhas:** O aplicativo deve exibir uma lista completa de todas as linhas de ônibus disponíveis no sistema. (Citação: "O aplicativo deve ser capaz de exibir uma lista completa de todas as linhas de ônibus disponíveis no sistema...")
- **RF06: Consulta de Horários:** Para uma linha selecionada, o aplicativo deve apresentar os horários programados de saída e chegada dos ônibus. (Citação: "O aplicativo deve apresentar os horários programados de saída e chegada dos ônibus para uma linha selecionada.")
- **RF07: Planejamento de Rota (Pesquisa de Destino):** Permitir que o usuário pesquise um destino por endereço. O sistema, então, deve calcular e sugerir as rotas de transporte público disponíveis para chegar a esse destino. (Citação: "O aplicativo deve permitir que o usuário pesquise um destino por endereço e o sistema deve calcular e sugerir as rotas de transporte público disponíveis.")
- **RF08: Detalhamento de Trajeto:** Ao selecionar uma linha específica, o aplicativo deve exibir um mapa ou uma lista de todas as paradas existentes ao longo do seu trajeto. (Citação: "Ao selecionar uma linha, o aplicativo deve exibir todas as paradas existentes ao longo do seu trajeto.")
- **RF09: Filtro de Acessibilidade:** Implementar um filtro que permita ao usuário visualizar apenas as linhas ou veículos que oferecem recursos de acessibilidade, como elevadores para cadeirantes. (Citação: "O aplicativo deve permitir a filtragem de linhas ou veículos que possuam recursos de acessibilidade...")
- **RF10: Calculadora de Tarifas:** Fornecer uma funcionalidade que exibe o valor atual da passagem e mantém o usuário informado sobre aumentos, atualizando o valor com base em decretos da legislação vigente. (Citação: "O aplicativo deve fornecer uma funcionalidade de calculadora de tarifas que exibe o valor atual da passagem e informa sobre eventuais aumentos...")

#### Requisitos Não Funcionais a Considerar

- **Desempenho (RNF01):** As consultas de rotas e horários devem ter um tempo de resposta inferior a 1 segundo.
- **Usabilidade (RNF05):** A apresentação das informações de rotas, paradas e horários deve ser clara e fácil de entender.
- **Disponibilidade (RNF02):** O serviço de consulta deve estar disponível 24/7.
- **Manutenibilidade (RNF08):** O banco de dados de rotas, horários e tarifas deve ser facilmente atualizável pela equipe administrativa.
