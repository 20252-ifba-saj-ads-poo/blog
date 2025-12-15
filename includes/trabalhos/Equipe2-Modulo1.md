
### Módulo 1: Gerenciamento de Contas e Perfil

#### Descrição

Este módulo é a porta de entrada para o aplicativo de transporte público. A equipe será responsável por implementar todo o ciclo de vida do usuário, desde o cadastro inicial até a gestão de seu perfil. O foco é criar um processo de autenticação seguro e uma experiência de usuário fluida.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

- **RF01: Cadastro de Usuário:** Permitir que novos usuários se cadastrem na plataforma fornecendo e-mail (com suporte a contas existentes como Gmail ou Apple ID), senha e nome de usuário. (Citação: "O sistema deve permitir que novos usuários realizem seu cadastro na plataforma, fornecendo as informações necessárias: e-mail (que pode ser um já existente como Gmail, ou Apple ID), senha e nome de usuário.")
- **RF02: Autenticação de Usuário:** Implementar as funcionalidades de login, para que um usuário acesse sua conta, e logout, para encerrar a sessão de forma segura. (Citação: "O sistema deve possibilitar que um usuário cadastrado realize login... e logout...")
- **RF03: Recuperação de Senha:** Oferecer uma opção de "Esqueci minha senha" que envie um código de verificação para o e-mail do usuário. Ao informar o código no aplicativo, o usuário será direcionado para uma tela de redefinição de senha. (Citação: "O sistema deve oferecer uma opção de 'Esqueci minha senha', permitindo que o usuário redefina sua senha por meio de um código enviado ao e-mail cadastrado...")
- **RF04: Edição de Perfil:** Criar uma área de perfil onde o usuário possa visualizar e editar suas informações pessoais cadastradas, como nome de usuário e e-mail. (Citação: "O sistema deve permitir que o usuário acesse uma área de perfil onde possa visualizar editar suas informações pessoais cadastradas.")

#### Requisitos Não Funcionais a Considerar

- **Segurança e Privacidade (RNF04):** Todos os dados do usuário, especialmente a senha, devem ser armazenados de forma criptografada. O processo de recuperação de senha deve ser seguro para evitar acesso não autorizado.
- **Usabilidade (RNF05):** A interface de cadastro, login e edição de perfil deve ser intuitiva e de fácil utilização.
- **Conectividade (RNF06):** As funcionalidades devem operar de forma consistente em diferentes condições de rede (3G, 4G, 5G, Wi-Fi).
- **Armazenamento (RNF09):** As informações dos usuários devem ser armazenadas em uma infraestrutura de nuvem com políticas de backup.
