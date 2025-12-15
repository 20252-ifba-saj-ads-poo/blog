
### Módulo 3: Gestão de Cargas e Estoque

#### Descrição

Este módulo é central para o controle de mercadorias dentro do sistema de logística. A equipe será responsável por desenvolver as funcionalidades que permitem o cadastro de produtos (cargas), a gestão do estoque, o tratamento de devoluções e perdas, e o processo de recebimento e despacho de mercadorias.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

##### 1. Cadastro de Produtos (Cargas)
- **1.5. Cadastro de produtos:** Desenvolver a interface para cadastro de novos produtos com as seguintes regras e validações:
    - **Nome:** Campo obrigatório. (Citação: "O nome do produto é obrigatório")
    - **Peso e Volume:** Devem ser valores maiores que zero, pois são essenciais para o planejamento da carga do veículo. O sistema deve emitir um alerta se os valores excederem limites pré-definidos. (Citação: "O peso e o volume devem ser maiores que zero... Produtos com peso e volume acima dos limites devem gerar alerta")
    - **Categoria:** A categoria do produto deve ser selecionada a partir de uma lista de opções pré-cadastradas (ex: Frágil, Perigoso, Perecível). (Citação: "A categoria do produto deve ser selecionada entre as opções disponíveis")
    - **Duplicidade:** O sistema não deve permitir o cadastro de produtos duplicados. (Citação: "Não é permitido cadastrar produtos duplicados")

##### 2. Gestão de Estoque e Movimentações
- **1.15. Registro de devoluções de produtos:** Implementar a funcionalidade para registrar devoluções, incluindo data, motivo e o responsável pelo recebimento. A devolução deve atualizar o estoque e o status do pedido automaticamente. Permitir anexar observações e fotos dos produtos devolvidos. (Citação: "O sistema deve permitir o registro de devoluções com data, motivo e responsável pelo recebimento. As devoluções devem atualizar automaticamente o estoque e o status do pedido.")
- **1.16. Registro de perdas ou baixas de produtos:** Criar uma funcionalidade para registrar a baixa de produtos por motivos como avaria, vencimento, extravio ou erro de armazenamento. (Citação: "O Sistema deve permitir o registro de perda de produtos causadas por: avarias, vencimento, extravio ou erro de armazenamento.")
- **1.17. Recebimento e Programação de Entregas:** Desenvolver um mecanismo para importar ou registrar pedidos de entrega. O sistema deve validar se os clientes e produtos do pedido já existem no banco de dados. Pedidos com dados inválidos devem gerar um erro, enquanto pedidos válidos são adicionados a uma fila para programação de entrega. (Citação: "O Sistema deve verificar se os produtos e os clientes já existem no banco de dados, caso não haja registro, deverá exibir uma mensagem de erro, pedidos válidos serão adicionados à fila, para a programação da entrega.")
- **1.22. Emissão de relatório do estoque:** Criar uma funcionalidade para gerar relatórios da quantidade de produtos em estoque. O relatório deve ser exportável em PDF e permitir filtros por categoria, nome do produto ou período. (Citação: "Relatório de quantidade de produtos no estoque, o sistema pode gerar um arquivo pdf do relatório.")

#### Requisitos Não Funcionais a Considerar

- **Performance:** A consulta de produtos e a geração de relatórios de estoque devem ser rápidas (2.2).
- **Integridade dos Dados:** As atualizações de estoque (entradas, saídas, devoluções, perdas) devem ser transacionais para garantir a consistência dos dados (2.7).
- **Escalabilidade:** A estrutura do banco de dados de produtos e estoque deve ser projetada para suportar um grande volume de itens (2.10).
