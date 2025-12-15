
### Módulo 1: Gestão de Acessos e Cadastros Essenciais

#### Descrição

Este módulo é o coração do sistema de logística, responsável pelo controle de acesso, gerenciamento de usuários e pelo cadastro das entidades essenciais para o funcionamento da plataforma. A equipe de desenvolvimento deverá implementar as funcionalidades que garantem a segurança e a integridade dos dados, além de criar a base para o registro de clientes e parceiros.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

##### 1. Autenticação e Controle de Acesso
- **1.1. Autenticação de login e senha:** O sistema deve exigir que todos os usuários se autentiquem com login and senha antes de acessar qualquer funcionalidade. (Citação: "O Sistema deve solicitar autenticação de login e senha, antes que seja possível realizar acesso, toda e qualquer funcionalidade do sistema só será possível após a autenticação.")
- **1.21. Controle de Acesso por Nível de Permissão:** Implementar um sistema de permissões baseado em perfis específicos para logística (ex: Motorista, Ajudante, Supervisor de Frota, Gestor de Logística, Administrador), onde cada perfil tem acesso a funcionalidades específicas. O administrador deve poder ajustar as permissões dos perfis, e todas as alterações devem ser registradas em um log de auditoria. (Citação: "O sistema deve permitir criar diferentes níveis de permissão... Cada nível deve ter acesso apenas às funcionalidades autorizadas... As permissões devem poder ser ajustadas pelo administrador... Toda alteração de permissão deve ser registrada no log de auditoria.")
- **1.27. Geração de senha temporária para acesso:** Criar uma funcionalidade que permita ao usuário solicitar uma senha temporária, que será enviada por e-mail ou SMS. (Citação: "O sistema deve gerar uma senha de acesso ao usuário solicitante, um e-mail/sms deve ser enviado ao usuário contendo a senha de acesso.")
- **1.30. Auditoria de Ações de Usuários:** Registrar um log detalhado de todas as ações críticas realizadas pelos usuários, como exclusões ou alterações manuais de dados sensíveis. O log deve incluir usuário, data, hora e descrição da ação. (Citação: "O sistema deve registrar um log completo de todas as ações críticas realizadas pelos usuários...")

##### 2. Cadastros Essenciais
- **1.4. Cadastro de Clientes e Endereços de Entrega:** Desenvolver a funcionalidade de cadastro de clientes (pessoa física, jurídica ou estrangeiro), garantindo que informações como nome/razão social, CPF/CNPJ (único), endereço, telefone e e-mail sejam obrigatórios e validados. (Citação: "O tipo de cliente... deve ser informado... O nome ou razão social é obrigatório... O CPF ou CNPJ deve ser válido e único no sistema... O endereço de entrega deve conter rua, número, cidade, estado e CEP válidos... O telefone e o e-mail devem ser informados e estar em formato correto.")
- **1.24. Cadastro de Transportadoras Parceiras:** Criar uma seção no sistema para armazenar e exibir informações de empresas parceiras de transporte, incluindo nome/razão social, CNPJ, telefone, localização, e-mail e tipos de veículos disponíveis. (Citação: "O sistema deverá possuir uma aba onde estejam localizadas as informações das empresas parceiras...")

#### Requisitos Não Funcionais a Considerar

- **Segurança:** Todos os dados sensíveis devem ser criptografados (2.3).
- **Disponibilidade:** O sistema deve ter alta disponibilidade (2.1).
- **LGPD:** Garantir a conformidade com a Lei Geral de Proteção de Dados (2.4).
- **Logs:** Geração de logs para monitoramento da saúde do sistema (2.9).
