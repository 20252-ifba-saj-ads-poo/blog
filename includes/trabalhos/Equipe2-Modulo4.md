
### Módulo 4: Personalização e Histórico


#### Descrição

Este módulo visa aprimorar a experiência do usuário, permitindo que ele personalize o aplicativo de acordo com suas necessidades e acesse facilmente informações recorrentes. A equipe será responsável por implementar funcionalidades de favoritos e histórico de viagens.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

- **RF15: Linhas Favoritas:** Implementar uma funcionalidade que permita ao usuário marcar linhas de ônibus e rotas como "favoritas". Deve haver uma seção de fácil acesso no aplicativo para listar essas rotas favoritas, agilizando consultas futuras. (Citação: "O aplicativo deve permitir que o usuário marque linhas e rotas como 'favoritas' para acesso rápido.")
- **RF16: Histórico de Rotas:** O aplicativo deve registrar automaticamente e exibir um histórico das rotas que o usuário pesquisou ou utilizou recentemente. Isso permite que o usuário refaça uma busca ou consulta de forma rápida, sem precisar inserir os dados novamente. (Citação: "O aplicativo deve registrar e exibir um histórico das rotas recentemente utilizadas ou pesquisadas pelo usuário.")

#### Requisitos Não Funcionais a Considerar

- **Usabilidade (RNF05):** As ações de favoritar uma linha e acessar o histórico devem ser simples e intuitivas, integradas de forma natural à interface principal.
- **Armazenamento (RNF09):** Os dados de favoritos e histórico são específicos de cada usuário e devem ser armazenados de forma segura na nuvem, associados à conta do usuário.
- **Manutenibilidade (RNF08):** As atualizações do aplicativo não devem apagar os dados de favoritos e histórico do usuário. O sistema deve garantir que esses dados persistam entre as versões.
- **Responsividade (RNF10):** A exibição do histórico e das linhas favoritas deve se adaptar a diferentes tamanhos de tela, como smartphones e tablets.
