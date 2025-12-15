Instituto Federal da Bahia – IFBA

Curso: Análise e Desenvolvimento de Sistemas

Disciplina: Análise e Projeto de Sistemas

**Levantamento de Requisitos**

**Integrantes:**

Heitor Andrade Gama

Kaique Santos Sousa Freitas

Luiz Gustavo de Andrade Barreto

Mailton Albino Souza dos Santos

Samir Filipe dos Santos Souza

Stefany Vitória Anunciação de Almeida

Wendel Mota dos Santos

**Requisitos funcionais (RF)**

**Módulo 1: Gerenciamento de Contas e Perfil**

RF01: Cadastro de Usuário: O sistema deve permitir que novos usuários realizem seu cadastro na plataforma, fornecendo as informações necessárias: e-mail (que pode ser um já existente como Gmail, ou Apple ID),  senha e nome de usuário.

RF02: Autenticação de Usuário: O sistema deve possibilitar que um usuário cadastrado realize login (para acessar a conta com o email e senha informados no cadastro) e logout (para encerrar a sessão).

RF03: Recuperação de Senha: O sistema deve oferecer uma opção de "Esqueci minha senha", permitindo que o usuário redefina sua senha por meio de um código enviado ao e-mail cadastrado e, ao informar esse código ao aplicativo, seja redirecionado à uma aba para redefinição da senha.

RF04: Edição de Perfil: O sistema deve permitir que o usuário acesse uma área de perfil onde possa visualizar editar suas informações pessoais cadastradas.

**Módulo 1.1: Consulta de Rotas e Horários**

RF05: Listagem de Linhas: O aplicativo deve ser capaz de exibir uma lista completa de todas as linhas de ônibus disponíveis no sistema, por meio de acesso

RF06: Consulta de Horários: O aplicativo deve apresentar os horários programados de saída e chegada dos ônibus para uma linha selecionada.

RF07: Planejamento de Rota (Pesquisa de Destino): O aplicativo deve permitir que o usuário pesquise um destino por endereço e o sistema deve calcular e sugerir as rotas de transporte público disponíveis.

RF08: Detalhamento de Trajeto: Ao selecionar uma linha, o aplicativo deve exibir todas as paradas existentes ao longo do seu trajeto.

RF09: Filtro de Acessibilidade: O aplicativo deve permitir a filtragem de linhas ou veículos que possuam recursos de acessibilidade (ex: elevador para cadeirantes).

RF10: Calculadora de Tarifas: O aplicativo deve fornecer uma funcionalidade de calculadora de tarifas que exibe o valor atual da passagem e informa sobre eventuais aumentos por meio da legislação atual que decreta o valor e atualiza no banco de dados do aplicativo.

**Módulo 1.2: Mapa e Rastreamento em Tempo Real**

RF11: Rastreamento de Veículos: O aplicativo deve exibir a localização dos ônibus em tempo real no mapa, permitindo ao usuário acompanhar o deslocamento do veículo por meio de uma API que busca a localização dos veículos cadastrados na empresa fornecedora do ônibus.

 

RF12: Pontos Próximos: O aplicativo deve usar a geolocalização (GPS) do usuário para identificar e mostrar os pontos de ônibus mais próximos.

 

RF13: Atualização Dinâmica de Horários: O aplicativo deve simular e atualizar automaticamente os horários de chegada e as rotas com base em dados em tempo real, informando atrasos (o usuário deve permitir o acesso à sua localização atual).

 

RF14: Compartilhamento de Viagem: O aplicativo deve permitir que o usuário compartilhe sua localização em tempo real (durante a viagem) com outras pessoas.

**Módulo 1.3: Personalização e Histórico**

RF15: Linhas Favoritas: O aplicativo deve permitir que o usuário marque linhas e rotas como "favoritas" para acesso rápido.

 

RF16: Histórico de Rotas: O aplicativo deve registrar e exibir um histórico das rotas recentemente utilizadas ou pesquisadas pelo usuário.

**Módulo 1.4: Pagamento e Bilhetagem**

RF17: Pagamento Direto: o aplicativo deve possibilitar pagamento por meio de um pedido enviado ao provedor do pagamento (que pode ser um aplicativo de cartões) e que retorna uma condição caso o pagamento tenha sucesso ou não.

 

RF18: Cartão Virtual: O aplicativo deve permitir a criação e utilização de um cartão virtual próprio da plataforma para pagamento da passagem.

 

RF19: Gerenciamento de Cartões: O aplicativo deve fornecer uma interface para o usuário gerenciar seu cartão de transporte já cadastrado (ex: remover ou editar).

 

RF20: Recarga (PayPal): O aplicativo deve permitir a recarga dos cartões virtuais, possuindo integração com o sistema de pagamento PayPal (semelhante ao pagamento direto, fazendo um pedido com a requisição do valor).

 

RF21: Consulta de Saldo: O aplicativo deve permitir ao usuário uma interface para visualizar seu cartão cadastrado e o saldo de crédito.

 

RF22: Pontos de Venda (Mapa): O aplicativo deve exibir no mapa a localização dos pontos de venda de bilhetes e recarga físicos mais próximos ao usuário (por meio de buscas ao GPS).

**Módulo 1.5: Notificações e Alertas**

RF23: Alerta de Embarque: O aplicativo deve enviar notificações (push) ao usuário quando o seu ônibus estiver próximo (Notificação será feita assim que o onibus sair da última parada anterior à de destino) do ponto de embarque selecionado.

 

RF24: Alerta de Modificação de Trajeto: O aplicativo deve notificar o usuário caso ocorra uma modificação inesperada (desvio, interdição) no trajeto de uma linha de seu interesse e perguntar se o usuário quer continuar com o pedido ou cancelar a solicitação de embarque. Caso aceite continuar, as informações da viagem devem ser atualizadas.

 

RF25: Alerta de Lotação: O aplicativo deve notificar a lotação estimada do ônibus que está se aproximando (por meio da coloração da miniatura no mapa). Tal parâmetro é medido com base na contagem de solicitações de embarque feitas no aplicativo por todos os usuários.

 

**Módulo 1.6: Feedback e Suporte**

RF26: Envio de Comentários (Problemas): O aplicativo deve permitir que o usuário envie comentários estruturados sobre eventuais problemas ocorridos durante a viagem.

 

RF27: Envio de Sugestões: O aplicativo deve possibilitar o envio de sugestões gerais de melhoria (para o app ou para o serviço) diretamente para a central de atendimento.

 

RF28: Avaliação do Motorista: O aplicativo deve permitir que o usuário avalie a qualidade do serviço prestado pelo motorista ao final da viagem.

**Módulo 1.7: Integrações e Relatórios (Admin)**

RF29: Geração de Relatórios (Admin): O sistema (em seu módulo administrativo) deve ser capaz de gerar relatórios sobre o uso, incluindo estatísticas como linhas mais acessadas e número de reclamações.

 

RF30: Integração (Dispositivos Externos): O aplicativo deve permitir a conexão com dispositivos smartwatch e assistentes virtuais para consultas e alertas rápidos.

**Requisitos não funcionais (NF)**

RNF01: Desempenho (Tempo de Resposta): O aplicativo deve apresentar tempo de resposta inferior a 1 segundo para todas as consultas principais (mapa, rotas, horários).

 

RNF02: Disponibilidade: O sistema deve estar disponível para uso 24 horas por dia, 7 dias por semana (disponibilidade 24/7).

 

RNF03: Compatibilidade (Plataformas): O aplicativo deve ser compatível e funcional nos sistemas operacionais Android (versões X+) e iOS (versões Y+).

 

RNF04: Segurança e Privacidade: O sistema deve garantir a proteção e confidencialidade dos dados dos usuários, utilizando criptografia e aderindo à LGPD.

 

RNF05: Usabilidade (Interface): A interface do aplicativo deve ser intuitiva, simples e de fácil utilização, mesmo para usuários com pouca afinidade tecnológica.

 

RNF06: Conectividade: O aplicativo deve funcionar adequadamente em diferentes condições de rede, incluindo conexões de internet 3G, 4G, 5G e Wi-Fi.

 

RNF07: Escalabilidade (Simultaneidade): O sistema deve suportar, no mínimo, 5.000 usuários simultâneos acessando os serviços em tempo real.

 

RNF08: Manutenibilidade (Atualizações): O aplicativo deve permitir atualizações automáticas (via App Store/Play Store) sem perda de dados armazenados localmente pelo usuário.

 

RNF09: Armazenamento (Cloud): Todos os dados do sistema (usuários, rotas, logs) devem ser armazenados em infraestrutura de nuvem, com políticas de backup automático.

 

RNF10: Responsividade (Telas): O aplicativo deve se adaptar automaticamente a diferentes tamanhos de tela e resoluções (smartphones, tablets) sem quebra de layout.