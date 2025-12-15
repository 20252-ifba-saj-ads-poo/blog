
### Módulo 5: Acompanhamento e Finalização de Entregas

#### Descrição

Este módulo foca no processo final da cadeia logística: a entrega do produto ao cliente. A equipe será responsável por implementar funcionalidades que permitam o acompanhamento do status da entrega, a confirmação do recebimento, a gestão de incidentes e a comunicação com o cliente e outros setores da empresa.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

##### 1. Rastreamento e Status da Entrega
- **1.12. Registro do status das entregas:** O sistema deve permitir o acompanhamento do status de cada entrega (ex: "em andamento", "concluída", "cancelada"). O status deve ser atualizado automaticamente, mas também permitir alteração manual por usuários autorizados, registrando data e hora de cada mudança. (Citação: "Cada entrega deve possuir um status atualizado automaticamente conforme o progresso. O status pode ser alterado manualmente por usuários com permissão...")
- **1.18. Atualização do status de pedidos conforme a entrega é realizada:** O motorista deve registrar no sistema a data e o horário em que a entrega foi efetuada. (Citação: "O Motorista/Entregador deve registrar no sistema, a data e horário que foi efetuada a entrega do produto.")
- **1.19. Emissão de notificações ao setor de vendas sobre entregas:** O setor de vendas e o cliente devem ser notificados sobre mudanças importantes no status do pedido, de forma similar a aplicativos de entrega de comida. (Citação: "O setor de vendas e o cliente devem ser notificados sobre mudanças relevantes no status do pedido (semelhante ao iFood, por exemplo).")

##### 2. Confirmação e Pós-Entrega
- **1.13. Confirmação de entrega via assinatura digital ou código:** A entrega só pode ser finalizada com a confirmação do cliente, seja por assinatura digital na tela do dispositivo ou pela inserção de um código de segurança. Um comprovante eletrônico deve ser gerado e armazenado. (Citação: "O cliente deve confirmar a entrega por meio de assinatura digital ou inserção de um código de confirmação. A confirmação deve gerar um comprovante eletrônico armazenado no sistema.")
- **1.14. Geração de relatórios de entregas:** Criar um gerador de relatórios de entregas que possa ser filtrado por período, motorista e status. Os relatórios devem conter métricas como quantidade de entregas, distância percorrida e tempo médio. A exportação em PDF e Excel deve ser possível para usuários autorizados. (Citação: "O sistema deve gerar relatórios de entregas com filtros por período, motorista e status... Deve ser possível exportar os relatórios em formato PDF e Excel.")
- **1.23. Possibilidade de reprogramar a data de entrega em caso de falha:** Se uma entrega falhar, o cliente deve ser notificado e ter a opção de reagendar a entrega para uma nova data. (Citação: "Caso haja algum imprevisto que resulte em uma falha na entrega do produto, o cliente receberá uma notificação com opção para programar a data de uma próxima entrega.")

##### 3. Gestão de Incidentes
- **1.25. Registro e categorização de incidentes:** Permitir o registro de incidentes que podem ocorrer durante a entrega, como avaria, extravio, roubo, atraso significativo, recusa de entrega ou erro de endereço. (Citação: "Registro e categorização de incidentes: Avaria, extravio, roubo, atraso > 2h, recusa de entrega, erro de endereço")
- **1.28. Registro fotográfico de danos:** Em caso de avaria, o sistema deve exigir que o motorista anexe uma foto do produto danificado no local. As fotos devem ser associadas ao pedido e validadas quanto ao formato. (Citação: "O sistema deve exigir que o motorista anexe uma foto do produto no local... fotos devem ser veiculadas a o pedido do produto...")

#### Requisitos Não Funcionais a Considerar

- **Disponibilidade:** A funcionalidade de confirmação de entrega e registro de status é crítica para a operação e deve estar sempre disponível (2.1).
- **Usabilidade (App do Motorista):** A interface para o motorista deve ser extremamente simples para registrar a entrega, coletar a assinatura ou código, e registrar incidentes.
- **Responsividade (Cliente):** A interface de notificação e reagendamento para o cliente deve ser amigável e funcionar bem em dispositivos móveis.
- **Segurança:** A assinatura digital e os dados do cliente devem ser armazenados de forma segura (2.3).
