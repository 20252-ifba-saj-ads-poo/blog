---
icon: dumbbell
date: 2025-06-16 20:10:00.00 -3
tag:
  - java
category:
  - exercicio
star: true
order: 10
---

# Exercícios Listas

## **Biblioteca Digital**
   Crie um sistema de biblioteca digital com livros, autores e categorias. Os livros pertencem a autores, e cada livro pode ser classificado em uma ou mais categorias. Os usuários podem fazer pesquisas por autor ou categoria e visualizar os livros disponíveis.

## **Gerenciamento de Escola**
   Desenvolva um programa para gerenciar informações de uma escola. Cada escola contém várias turmas, cada turma tem vários alunos e professores. Os alunos podem pertencer a mais de uma turma. Os professores ministram aulas em uma ou mais turmas. Os dados devem ser organizados para permitir consultas sobre quais turmas um professor leciona e quais alunos estão matriculados em uma turma específica.


   ```plantuml
   @startuml
   class Aluno {
   - String nome
   - List<Turma> turmas
   }

   class Professor {
   - String nome
   - List<Turma> turmas
   }

   class Turma {
   - String nome
   - List<Professor> professores
   - List<Aluno> alunos
   }
   Turma .. Aluno
   Turma .. Professor
   @enduml

   ```

   
   @[code](../code/exercicioListas/turmas/Escola.java)

   <div style="display:none">
     
   
   ::: details 
   

   @[code](../code/exercicioListas/turmas/Turma.java)

   @[code](../code/exercicioListas/turmas/Aluno.java)

   @[code](../code/exercicioListas/turmas/Professor.java)

   ::: 
  
   </div>
  
## **Sistema de Loja de Roupas**
   Crie um sistema para gerenciar uma loja de roupas. A loja tem vários departamentos, como roupas masculinas, femininas e infantis. Cada departamento contém vários produtos (roupas) com informações como preço, tamanho e cor. Os clientes podem adicionar produtos ao carrinho de compras e finalizar suas compras. Implemente funcionalidades para calcular o total das compras e listar os produtos em um carrinho.

## **Sistema de Reservas de Hotéis**
   Desenvolva um sistema de reservas de hotéis. Cada hotel possui vários quartos, e cada quarto tem diferentes categorias, como luxo, padrão, suíte, etc. Os clientes podem fazer reservas para datas específicas e escolher um tipo de quarto. O sistema deve rastrear a disponibilidade de quartos e calcular o preço total da reserva com base na categoria do quarto e no número de noites.

## **Gestão de Projetos de Desenvolvimento de Software**
   Crie um sistema para gerenciar projetos de desenvolvimento de software. Os projetos contêm várias tarefas, cada uma com um status (em andamento, concluída, atrasada, etc.) e responsável. Os funcionários da equipe de desenvolvimento podem ser atribuídos a várias tarefas. Implemente funcionalidades para visualizar o progresso do projeto, listar as tarefas de um funcionário e atribuir tarefas a membros da equipe.

## **Sistema de Vendas Online**
   Modele um sistema de vendas online. Existem diferentes produtos à venda, cada um com informações como nome, preço e estoque disponível. Os clientes podem adicionar produtos ao carrinho de compras e efetuar compras. O sistema deve rastrear o estoque de produtos, calcular o total da compra e permitir a geração de faturas para os clientes.

## **Gestão de uma Clínica Médica**
   Desenvolva um sistema para gerenciar uma clínica médica. A clínica tem vários médicos, cada um com informações pessoais e especialidades médicas. Os pacientes podem marcar consultas com médicos para datas específicas. Os médicos mantêm um registro de consultas passadas e futuras com os pacientes. Implemente funcionalidades para visualizar as consultas de um paciente, a disponibilidade de um médico e os detalhes de uma consulta agendada.

## **Gestão de Eventos e Convidados**
   Crie um sistema para gerenciar eventos, como casamentos, conferências ou festas. Cada evento tem uma lista de convidados, e cada convidado possui informações pessoais, como nome, endereço e número de telefone. Os eventos podem ser agendados para datas específicas e podem incluir diferentes atividades. Implemente funcionalidades para adicionar convidados a eventos, verificar a disponibilidade de datas e listar os convidados de um evento.

## **Sistema de Mídia Social Simplificado**
   Modele um sistema simplificado de mídia social. Os usuários podem criar perfis, publicar mensagens e adicionar amigos. Cada mensagem pode conter texto e imagens. Os usuários podem comentar nas mensagens de seus amigos. Implemente funcionalidades para listar as mensagens de um usuário, exibir os comentários em uma mensagem e mostrar os amigos de um usuário.

## **Gestão de Estoque de uma Mercearia**
   Desenvolva um sistema para gerenciar o estoque de uma mercearia. A mercearia possui diferentes produtos, como alimentos, bebidas e produtos de higiene. Cada produto tem informações como nome, preço, quantidade disponível em estoque e data de validade. Os clientes podem adicionar produtos ao carrinho de compras e efetuar compras. O sistema deve atualizar o estoque de produtos após cada compra.

## **Biblioteca de Música Digital**
   Crie um sistema para gerenciar uma biblioteca de música digital. Os usuários podem criar listas de reprodução, cada uma contendo várias músicas. Cada música tem informações, como título, artista e duração. Os usuários podem adicionar e remover músicas de suas listas de reprodução e reproduzir as músicas em suas listas. Implemente funcionalidades para listar as músicas em uma lista de reprodução, calcular a duração total da lista de reprodução e reproduzir músicas.

## **Sistema de Locadora de Veículos**
   Modele um sistema para uma locadora de veículos. A locadora possui diferentes tipos de veículos (carros, motos, vans), cada um com informações como modelo, placa, ano e status (disponível, alugado, manutenção). Os clientes podem alugar veículos para períodos específicos. O sistema deve permitir consultar veículos disponíveis, registrar novas locações e calcular o valor total do aluguel.

## **Gestão de Restaurante e Pedidos**
   Desenvolva um sistema para gerenciar um restaurante. O restaurante possui um cardápio com pratos e bebidas, cada item com preço e descrição. Os clientes podem fazer pedidos, que podem conter vários itens do cardápio. Implemente funcionalidades para registrar pedidos, calcular o valor total e listar os itens de cada pedido.

## **Sistema de Biblioteca Escolar**
   Crie um sistema para gerenciar uma biblioteca escolar. A biblioteca possui livros, revistas e jornais, cada um com título, autor e código de identificação. Os alunos podem emprestar e devolver itens. O sistema deve controlar o histórico de empréstimos de cada aluno e a disponibilidade dos itens.

## **Gestão de Academia de Ginástica**
   Modele um sistema para uma academia. A academia possui alunos, professores e diferentes modalidades de aulas (musculação, pilates, yoga). Cada aluno pode se inscrever em várias modalidades e cada professor pode ministrar várias aulas. Implemente funcionalidades para listar alunos por modalidade e professores responsáveis por cada aula.

## **Sistema de Cinema e Ingressos**
   Desenvolva um sistema para um cinema. O cinema exibe vários filmes, cada um com sessões em horários diferentes. Os clientes podem comprar ingressos para sessões específicas. O sistema deve controlar a quantidade de ingressos disponíveis por sessão e permitir consultar sessões por filme.

## **Gestão de Condomínio Residencial**
   Crie um sistema para gerenciar um condomínio. O condomínio possui apartamentos, moradores e funcionários. Cada apartamento pode ter vários moradores. Os funcionários podem ser porteiros, zeladores ou seguranças. Implemente funcionalidades para listar moradores por apartamento e funcionários por função.

## **Sistema de Controle de Transportes Urbanos**
   Modele um sistema para controlar linhas de ônibus de uma cidade. Cada linha possui vários ônibus, motoristas e itinerários. Os motoristas podem dirigir diferentes ônibus em diferentes linhas. Implemente funcionalidades para consultar ônibus por linha, motoristas por linha e itinerários de cada linha.

## **Gestão de Feira de Ciências Escolar**
   Desenvolva um sistema para organizar uma feira de ciências. A feira possui projetos, alunos participantes e professores orientadores. Cada projeto pode ter vários alunos e um ou mais professores. Implemente funcionalidades para listar projetos por aluno, professores por projeto e alunos por projeto.

## **Sistema de Reserva de Salas em Universidade**
   Crie um sistema para reservar salas em uma universidade. Existem diferentes salas (auditórios, laboratórios, salas de aula), cada uma com capacidade e recursos disponíveis. Professores e alunos podem reservar salas para eventos ou aulas. O sistema deve controlar a disponibilidade das salas e listar reservas por sala e por usuário.

## **Gestão de Clube de Leitura**
   Modele um sistema para um clube de leitura. O clube possui membros, encontros e livros discutidos. Cada encontro tem uma data, um livro e uma lista de membros presentes. Implemente funcionalidades para registrar encontros, listar membros presentes em cada encontro e livros discutidos pelo clube.

## **Sistema de Controle de Inventário de Equipamentos**
   Desenvolva um sistema para controlar o inventário de equipamentos de uma empresa. Cada equipamento tem informações como nome, número de série, localização e status (em uso, disponível, manutenção). Funcionários podem solicitar equipamentos. O sistema deve registrar solicitações, controlar a disponibilidade e listar equipamentos por localização.

## **Sistema de gestão financeira pessoal (fluxo de caixa simplificado)**
   Desenvolva um sistema para gerenciar finanças pessoais. O sistema deve permitir o registro de despesas fixas mensais (como aluguel, prestadoras de serviços, etc.), gastos eventuais (como compras de supermercado, lazer, etc.) e receitas (como salário, investimentos, etc.). O usuário deve poder consultar o saldo atual, e prever o saldo futuro com base nas receitas e despesas registradas. O sistema deve permitir a categorização das despesas e receitas, possibilitando relatórios mensais e anuais.

   