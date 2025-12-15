
### Módulo 2: Gestão de Cadastros (Clientes e Fornecedores)


#### Descrição

Este módulo é responsável pelo cadastro e gerenciamento das entidades fundamentais do negócio: clientes e fornecedores. A equipe deverá criar interfaces de cadastro robustas, com validações de dados rigorosas e funcionalidades de consulta que facilitem a operação diária do sistema.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades:

##### Essenciais
- **[RF006] Cadastro de Fornecedores:** Permitir o cadastro de novos fornecedores com campos obrigatórios como Nome, CNPJ, Inscrição Estadual (IE) e endereço completo. O sistema deve validar o formato do CNPJ (14 dígitos), IE, CEP (8 dígitos) e outros campos. (Citação: "O sistema deve permitir que o usuário com as devidas permissões cadastrem novos fornecedores... CNPJ: deve conter 14 dígitos numéricos válidos... CEP: deve ter 8 dígitos...")
- **[RF008] Cadastro de Clientes:** Implementar o cadastro de clientes, diferenciando entre Pessoa Física (PF), Pessoa Jurídica (PJ) e "Outros". CPF/CNPJ são obrigatórios e devem ser únicos e válidos. Clientes "Outros" devem fornecer um documento alternativo. (Citação: "O sistema deve permitir que os usuários com as devidas permissões cadastrem novos clientes, sendo separado em três tipos de clientes:PF,PJ e Outros...")

##### Importantes
- **[RF013] Consulta de Fornecedor:** Permitir a consulta de fornecedores cadastrados, exibindo seus dados, pedidos em aberto e histórico de mercadorias. (Citação: "O sistema poderá permitir que os usuários com as devidas permissões consultem os fornecedores cadastrados.")
- **[RF015] Consulta via CEP:** Integrar o sistema a um serviço de consulta de CEP. Ao informar um CEP válido nos formulários de cliente ou fornecedor, os campos de endereço (Logradouro, Bairro, Cidade, Estado) devem ser preenchidos automaticamente. (Citação: "O sistema deve permitir que os usuários com as devidas permissões realizem consultas de endereço por meio do CEP, retornando automaticamente as seguintes informações...")

#### Requisitos Não Funcionais a Considerar

- **Integridade (RNF009):** Garantir a validação rigorosa de todos os dados de entrada para evitar inconsistências, como CPFs/CNPJs duplicados ou inválidos.
- **Desempenho (RNF002):** As consultas de fornecedores devem ter um tempo de resposta inferior a dois segundos.
- **Usabilidade (RNF004):** Os formulários de cadastro devem ser intuitivos, com mensagens de erro claras para o usuário.
- **Portabilidade (RNF007):** O sistema deve funcionar corretamente nos principais sistemas operacionais (Windows, macOS, Linux).
