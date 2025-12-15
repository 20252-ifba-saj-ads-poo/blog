
### Módulo 4: Planejamento e Execução de Rotas

#### Descrição

Este é um dos módulos mais complexos e dinâmicos do sistema. A equipe será responsável por desenvolver toda a lógica de criação, otimização, e monitoramento de rotas de entrega. O objetivo é garantir que as entregas sejam planejadas da forma mais eficiente possível, com capacidade de adaptação em tempo real.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

##### 1. Criação e Gerenciamento de Rotas
- **1.6. Cadastro de rotas de entrega:** Permitir o cadastro de rotas com origem, destino e pontos intermediários. O sistema deve calcular automaticamente a distância total e o tempo estimado. É mandatório que uma rota tenha um veículo e um motorista associados. (Citação: "A origem e destino da rota devem ser informados... Os pontos intermediários devem ter endereços válidos. Não é possível cadastrar rota sem veículo ou motorista associado. À distância total e o tempo estimado devem ser calculados automaticamente.")
- **1.7. Geração automática de rotas:** Desenvolver um algoritmo para a geração automática de viagens, considerando:
    - **Disponibilidade:** A viagem deve ter um cliente, um veículo disponível e um motorista disponível.
    - **Capacidade:** A soma do peso e volume dos produtos deve ser compatível com a capacidade do veículo.
    - **Custo:** O custo da viagem (baseado em distância, pedágios e combustível) deve ser calculado automaticamente.
    - **Validação:** O sistema deve impedir o início de uma viagem se houver inconsistências. (Citação: "A viagem deve incluir obrigatoriamente um cliente, um veículo disponível e pelo menos um motorista com status disponível... A lista de produtos deve conter itens cadastrados, com soma de peso e volume compatível com a capacidade do veículo...")
- **1.8. Edição de rotas por um supervisor:** Permitir que apenas usuários com perfil de "supervisor" possam alterar o trajeto, veículo ou motorista de uma rota. Toda modificação exige uma justificativa obrigatória. (Citação: "Permitir apenas supervisores alterar trajeto, pontos intermediários, veículo ou motorista. Exigir justificativa obrigatória para modificações")

##### 2. Otimização e Monitoramento em Tempo Real
- **1.9. Cálculo do tempo estimado de entrega:** O sistema deve calcular o tempo de entrega com base na distância e nas condições de trânsito em tempo real. Este tempo deve ser atualizado dinamicamente. (Citação: "O sistema deve calcular automaticamente o tempo estimado de entrega considerando a distância total da rota e as condições atuais de trânsito. O tempo estimado deve ser atualizado em tempo real...")
- **1.10. Visualização de rotas no mapa:** Exibir a rota planejada em um mapa interativo, mostrando origem, destino, pontos intermediários e a posição do veículo em tempo real com função de zoom. (Citação: "O sistema deve exibir a rota planejada em um mapa interativo... incluir origem, destino e pontos intermediários... visualizar o progresso do veículo em tempo real e ter a possibilidade de aplicar zoom.")
- **1.11. Recálculo de rotas em tempo real:** Em caso de imprevistos (bloqueios, acidentes), o sistema deve recalcular a rota automaticamente e sugerir a alteração ao motorista, justificando a mudança e informando o novo tempo de chegada. (Citação: "O sistema deve recalcular automaticamente a rota em caso de bloqueios, acidentes ou alterações no trânsito. A possibilidade de uma nova rota deve aparecer para o usuário...")
- **1.29. Geração de Alertas de Desvio de Rota:** Emitir um alerta automático para o supervisor se um veículo se desviar significativamente da rota planejada ou exceder o tempo de parada permitido. (Citação: "O sistema deve emitir um alerta automático para o supervisor caso o veículo saia significativamente da rota planejada...")

#### Requisitos Não Funcionais a Considerar

- **Performance:** O cálculo e recálculo de rotas, bem como a atualização em tempo real no mapa, devem ter um tempo de resposta mínimo (2.2).
- **Integração:** Será necessária a integração com uma API de mapas e trânsito em tempo real (ex: Google Maps, Waze API).
- **Disponibilidade:** A funcionalidade de rastreamento e recálculo de rota é crítica e deve estar sempre disponível (2.1, 2.7).
- **Usabilidade (App do Motorista):** A interface no aplicativo do motorista para visualização de rota e aceitação de novos trajetos deve ser clara, simples e segura para uso durante a condução.
