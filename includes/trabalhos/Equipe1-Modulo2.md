
### Módulo 2: Gestão de Frota e Colaboradores (Motoristas e Ajudantes)

#### Descrição

Este módulo é focado no gerenciamento completo da frota de veículos e dos colaboradores que atuam nas entregas (motoristas e ajudantes). A equipe de desenvolvimento será responsável por criar as funcionalidades para cadastrar, controlar e monitorar todos os ativos e pessoal envolvidos no transporte.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

##### 1. Cadastro e Controle de Veículos
- **1.2. Cadastro de veículos:** Implementar a funcionalidade de cadastro de veículos, com validações estritas para os campos.
    - **Placa:** Obrigatória e no formato Mercosul (ABC1D23). (Citação: "A placa é obrigatória e deve seguir o exemplo correto exemplo (ABC1D23)")
    - **Modelo:** Obrigatório, com no mínimo 2 caracteres. (Citação: "O modelo é obrigatório e deve conter pelo menos 2 carácteres")
    - **Capacidade:** Capacidade máxima em kg, deve ser maior que 0. (Citação: "Qual a capacidade máxima de kg, tem que ser maior que 0")
    - **Data de Fabricação:** Deve ser entre o ano 2000 e o ano atual. (Citação: "Data de fabricação deve ser entre 2000 a ano atual")
- **1.20. Registro de abastecimentos e consumo de combustível:** Permitir que motoristas registrem os abastecimentos realizados e gerar relatórios de consumo mensal por veículo/motorista. (Citação: "O Motorista deve registar no sistema, os abastecimentos realizados. O Sistema poderá gerar relatórios para que seja possível acompanhar o consumo mensal de cada veículo/motorista.")
- **1.26. Bloqueio de veículo em rota/ação não autorizada:** Implementar uma funcionalidade crítica de segurança que permita o bloqueio imediato de um veículo em caso de desvio de rota ou outra ação não autorizada, exigindo a intervenção de um supervisor para desbloqueio com justificativa. (Citação: "Bloqueia imediatamente o veículo em caso de rota ou ação não autorizada, exigindo intervenção de supervisor com justificativa obrigatória.")

##### 2. Cadastro e Gestão de Colaboradores
- **1.3. Cadastro de motoristas e ajudantes:** Desenvolver a funcionalidade de cadastro de motoristas e ajudantes, com as seguintes regras:
    - **Nome:** Obrigatório, com no mínimo 2 letras. (Citação: "Nome é obrigatório e deve conter pelo menos 2 letras")
    - **CPF:** Válido e único no sistema. (Citação: "O CPF deve ser válido e único no sistema")
    - **Telefone:** Obrigatório, no formato correto com DDD. (Citação: "Telefone é obrigatório e deve esta no formato correto incluindo DDD")
    - **Função:** Deve indicar se é "motorista" ou "ajudante". (Citação: "O campo função deve indicar se é motorista ou ajudante")
    - **CNH (para motoristas):** Se a função for "motorista", o sistema deve exigir os dados da CNH (número, categoria e data de vencimento válida). (Citação: "Se for motorista deve conter uma carteira de habilitação básica, com número, categoria e data de vencimento posterior a data atual")
    - **Status:** Deve indicar se o colaborador está "disponível", "em viagem" ou "afastado". (Citação: "O status deve indicar se a pessoa está disponível em viagem ou afastada")

#### Requisitos Não Funcionais a Considerar

- **Segurança:** Dados sensíveis como CPF e CNH devem ser criptografados (2.3).
- **Integridade dos Dados:** O sistema deve garantir a consistência das informações, especialmente o status de disponibilidade dos motoristas e veículos (2.7).
- **Usabilidade:** O formulário de cadastro deve ser intuitivo e com mensagens de erro claras.
