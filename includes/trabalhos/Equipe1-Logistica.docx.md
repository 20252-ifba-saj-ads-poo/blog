**INSTITUTO FEDERAL DA BAHIA**

**![][image1]**

 

**Augusto Araújo de Jesus Santos**

**Chrystian dos Santos Carvalho**

**Cauã Vitor Nogueira**

**Danilo Cerqueira de Jesus**

**Iago de Aragão Souza**

**Jean  Lima Andrade**

**Vanilson da Rocha Conceição**

**SISTEMA DE LOGÍSTICA:** 

**Especificações e Levantamento de Requisitos**

**Santo Antônio de Jesus \- BA**

**2025**

**Augusto Araújo de Jesus Santos**

**Chrystian dos Santos Carvalho**

**Cauã Vitor Nogueira**

**Danilo Cerqueira de Jesus**

**Iago de Aragão Souza**

**Jean  Lima Andrade**

**Vanilson da Rocha Conceição**

 

 

**Sistema de Logística:** 

**Especificações e Levantamento de Requisitos**

 

 

 

Trabalho avaliativo como parte dos requisitos para o 3º semestre em Análise e Desenvolvimento de Sistemas pelo Instituto Federal Educação, Ciências e Tecnologia da Bahia de Santo Antônio de Jesus. Área de concentração: Análise e Projeto de Sistemas.   
Orientador: Prof. Caio Henrique Nascimento Valverde de Carvalho.

**Santo Antônio de Jesus \- Bahia**

**2025**

**RESUMO**

O presente trabalho tem como objetivo apresentar o levantamento e a especificação dos requisitos funcionais e não funcionais de um Sistema de Logística, voltado para o controle e gerenciamento de transportes, entregas e operações relacionadas ao fluxo de mercadorias. O sistema proposto busca automatizar e otimizar processos logísticos, proporcionando maior eficiência, segurança e rastreabilidade nas operações.

Entre as principais funcionalidades estão o cadastro e gerenciamento de veículos, motoristas, clientes, produtos e rotas, além da geração automática de trajetos, rastreamento em tempo real, controle de estoque, registro de entregas, emissão de relatórios, gestão de incidentes e monitoramento de consumo de combustível. O sistema também contempla mecanismos de autenticação de usuários, controle de permissões, notificações automáticas e backup de dados, garantindo confiabilidade e integridade das informações.

Com a implementação dessas funcionalidades, o sistema busca atender às necessidades de empresas do setor logístico, reduzindo falhas operacionais, melhorando a tomada de decisões e oferecendo uma visão integrada de todo o processo de transporte e distribuição de produtos.

**Palavras-chave:** Logística; Sistema de Informação; Transporte; Roteirização; Controle de Estoque

**1\. REQUISITOS FUNCIONAIS**

**1.1. Autenticação de login e senha**  
O Sistema deve solicitar autenticação de login e senha, antes que seja possível realizar acesso, toda e qualquer funcionalidade do sistema só será possível após a autenticação.

**1.2. Cadastro de veículos**

A placa é obrigatória e deve seguir o exemplo correto exemplo (ABC1D23)  
O modelo é obrigatório e deve conter pelo menos 2 carácteres   
Qual a capacidade máxima de kg, tem que ser maior que 0  
Data de fabricação deve ser entre 2000 a ano atual

**1.3. Cadastro de motoristas e ajudantes**

Nome é obrigatório e deve conter pelo menos 2 letras  
O CPF deve ser válido e único no sistema  
Telefone é obrigatório e deve esta no formato correto incluindo DDD  
O campo função deve indicar se é motorista ou ajudante   
Se for motorista deve conter uma carteira de habilitação básica, com número, categoria e data de vencimento posterior a data atual  
O status deve indicar se a pessoa está disponível em viagem ou afastada

**1.4. Cadastro de empresas e endereços de entrega**

O tipo de cliente pessoa física, jurídica ou estrangeiro deve ser informado  
O nome ou razão social é obrigatório  
O CPF ou CNPJ deve ser válido e único no sistema  
O endereço de entrega deve conter rua, número, cidade, estado e CEP válidos  
O telefone e o e-mail devem ser informados e estar em formato correto  
O sistema deve impedir o cadastro se alguma informação obrigatória estiver faltando

**1.5. Cadastro de produtos**

O nome do produto é obrigatório   
O peso e o volume devem ser maiores que zero  
A categoria do produto deve ser selecionada entre as opções disponíveis   
Não é permitido cadastrar produtos duplicados   
Produtos com peso e volume acima dos limites devem gerar alerta

**1.6. Cadastro de rotas de entrega.**

A origem e destino da rota devem ser informados, para o sistema ver a melhor rota  
Os pontos intermediários devem ter endereços válidos  
Não é possível cadastrar rota sem veículo ou motorista associado   
À distância total e o tempo estimado devem ser calculados automaticamente 

**1.7. Geração  automática de rotas com base na localização dos clientes e disponibilidade dos veículos**

A viagem deve incluir obrigatoriamente um cliente, um veículo disponível e pelo menos um motorista com status disponível  
A lista de produtos deve conter itens cadastrados, com soma de peso e volume compatível com a capacidade do veículo  
O trajeto deve seguir uma rota previamente cadastrada, com cálculo automático de custo baseado em distância, pedágios e combustível  
A data e horário de saída devem ser posteriores à data atual, com previsão de chegada estimada  
O sistema deve impedir o início da viagem se houver inconsistência de disponibilidade ou capacidade excedida

**1.8. Edição de rotas por um supervisor**

Permitir apenas supervisores alterar trajeto, pontos intermediários, veículo ou motorista. Exigir justificativa obrigatória para modificações

**1.9. Cálculo do tempo estimado de entrega com base na distância e no trânsito** 

O sistema deve calcular automaticamente o tempo estimado de entrega considerando a distância total da rota e as condições atuais de trânsito.  
O tempo estimado deve ser atualizado em tempo real quando houver alteração significativa no percurso ou no tráfego.  
O sistema deve permitir ajustes manuais no tempo estimado em casos excepcionais autorizados por um supervisor.

**1.10. Visualização de rotas no mapa**

O sistema deve exibir a rota planejada em um mapa interativo.  
A visualização deve incluir origem, destino e pontos intermediários como locais de apoio, postos de gasolina e pousadas.  
O usuário deve conseguir visualizar o progresso do veículo em tempo real e ter a possibilidade de aplicar zoom.  
     
**1.11. Recálculo de rotas em tempo real em caso de imprevistos**

O sistema deve recalcular automaticamente a rota em caso de bloqueios, acidentes ou alterações no trânsito.  
A possibilidade de uma nova rota deve aparecer para o usuário, caso ele aceite a alteração o sistema deve mudar o trajeto automaticamente.  
O sistema deve justificar o porque será melhor alterar a rota e o novo tempo estimado de chegada.  
	  
**1.12. Registro do status das entregas (em andamento, concluída, cancelada)**

Cada entrega deve possuir um status atualizado automaticamente conforme o progresso.  
O status pode ser alterado manualmente por usuários com permissão.  
O sistema deve registrar a data e hora de cada mudança de status.  
Entregas canceladas devem conter o motivo do cancelamento registrado.

**1.13. Confirmação de entrega via assinatura digital ou código**

O cliente deve confirmar a entrega por meio de assinatura digital ou inserção de um código de confirmação.  
A confirmação deve gerar um comprovante eletrônico armazenado no sistema.  
O sistema deve impedir a conclusão da entrega sem a confirmação do cliente.  
O comprovante deve poder ser consultado a qualquer momento pelos setores autorizados

**1.14. Geração de relatórios de entregas realizadas por período e motorista**

O sistema deve gerar relatórios de entregas com filtros por período, motorista e status.  
Os relatórios devem apresentar informações como quantidade de entregas, distâncias percorridas e tempo médio por viagem.  
Deve ser possível exportar os relatórios em formato PDF e Excel.  
Apenas usuários autorizados podem gerar e visualizar os relatórios.

**1.15. Registro de devoluções de produtos**

O sistema deve permitir o registro de devoluções com data, motivo e responsável pelo recebimento.  
As devoluções devem atualizar automaticamente o estoque e o status do pedido.  
O sistema deve permitir anexar observações e fotos de produtos devolvidos.  
Todas as devoluções devem constar nos relatórios de movimentações de entrega.  
	  
          **1.16. Registro de perdas ou baixas de produtos**

O Sistema deve permitir o registro de perda de produtos causadas por: avarias, vencimento, extravio ou erro de armazenamento.

**1.17. Importação automática de pedidos de vendas**

O Sistema deve verificar se os produtos e os clientes já existem no banco de dados, caso não haja registro, deverá exibir uma mensagem de erro, pedidos válidos serão adicionados à fila, para a programação da entrega.

**1.18. Atualização do status de pedidos conforme a entrega é realizada**

O Motorista/Entregador deve registrar no sistema, a data e horário que foi efetuada a entrega do produto.  
O sistema deve permitir a validação da entrega por assinatura digital ou pelo código de segurança enviado ao cliente.

**1.19. Emissão de notificações ao setor de vendas sobre entregas**

O setor de vendas e o cliente devem ser notificados sobre mudanças relevantes no status do pedido (semelhante ao iFood, por exemplo).

**1.20. Registro de abastecimentos e consumo de combustível**

O Motorista deve registar no sistema, os abastecimentos realizados.	  
O Sistema poderá gerar relatórios para que seja possível acompanhar o consumo mensal de cada veículo/motorista.

**1.21. Controle de Acesso por Nível de Permissão**

O sistema deve permitir criar diferentes níveis de permissão (ex.: motorista, ajudante, supervisor, gestor, administrador).  
Cada nível deve ter acesso apenas às funcionalidades autorizadas para seu perfil.  
O sistema deve bloquear automaticamente qualquer tentativa de acessar telas ou funções não permitidas.  
As permissões devem poder ser ajustadas pelo administrador sem necessidade de alterar usuários individualmente.  
Toda alteração de permissão deve ser registrada no log de auditoria.

**1.22. Emissão de relatório do estoque** 

Relatório de quantidade de produtos no estoque, o sistema pode gerar um arquivo pdf do relatório.  
deve permitir filtrar o relatório por categoria, nome do produto ou período

**1.23. Possibilidade de reprogramar a data de entrega em caso de falha**  
Caso haja algum imprevisto que resulte em uma falha na entrega do produto, o cliente receberá uma notificação com opção para programar a data de uma próxima entrega.

	**1.24. Informações de empresas parceiras**

O sistema deverá possuir uma aba onde estejam localizadas as informações das empresas parceiras, nome/razão social, cnpj, telefone de contato, localização geográfica, e mail e horário comercial

       **1.25. Registro e categorização de incidentes**

Avaria, extravio, roubo, atraso \> 2h, recusa de entrega, erro de endereço

**1.26. Bloqueio de veículo em rota/ação não autorizada**

Bloqueia imediatamente o veículo em caso de rota ou ação não autorizada, exigindo intervenção de supervisor com justificativa obrigatória.

           **1.27. Geração de senha temporária para acesso**

O sistema deve gerar uma senha de acesso ao usuário solicitante, um e-mail/sms deve ser enviado ao usuário contendo a senha de acesso

**1.28. Registro fotográfico de danos**

O sistema deve exigir que o motorista anexe uma foto do produto no local  
   	fotos devem ser veiculadas a o pedido do produto  
	as fotos devem ser validadas para garantir formato compatível

**1.29. Geração de Alertas de Desvio de Rota**  
O sistema deve emitir um alerta automático para o supervisor caso o veículo saia significativamente da rota planejada ou exceda o tempo de parada estipulado.

**1.30. Auditoria de Ações de Usuários**

O sistema deve registrar um log completo de todas as ações críticas realizadas pelos usuários (ex: exclusão de registro, alteração manual de status/rota), incluindo usuário, data, hora e descrição da ação.  
**2\. REQUISITOS NÃO FUNCIONAIS:**

2.1. O sistema deve estar disponível 99,5% do tempo (máximo 3,6 horas de indisponibilidade por mês).

2.2. tempo de resposta para consultas de rotas, status de entregas e geração de relatórios não devem exceder 2 segundos em 95% dos casos sob carga normal.

2.3. Todos os dados sensíveis (clientes, assinaturas, CNH) devem ser criptografados em trânsito (TLS 1.3) e em repouso (AES-256).

2.4. Garantir o cumprimento da LGPD.

2.5. Backups automáticos diários com retenção de 30 dias.

2.6. O aplicativo do motorista deve funcionar em Android 15+ e iOS 16+.

2.7. O sistema deve garantir a integridade, consistência e disponibilidade de dados de entrega mesmo em situações de falha de rede ou qualquer tipo de interrupção nos serviços de comunicação e armazenamento.

2.8. O sistema deve ser independente de ambiente de hospedagem, podendo ser implementado tanto em infraestruturas de nuvem, quanto em servidores locais.

2.9. Geração de logs e monitoramento da saúde do sistema.

2.10. O sistema deve suportar o atendimento simultâneo e o aumento de usuários e dispositivos sem necessidade de reestruturação frequente do código fonte.

