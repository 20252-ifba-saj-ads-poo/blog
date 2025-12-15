
ADAPTACOMMERCE 

Discentes: 

Cleberson Santos de Assís, 

Fernando Passos Oliveira, Gabriel 

Matheus Teixeira Santos, 

Guilherme Henrique Menezes 

Cursino, Israel Santiago dos Santos, 

Paulo Victor Chagas de Jesus, 

Ronaldo Correia Couto. 

Docente: 

Caio Henrique Nascimento 

Valverde de Carvalho  

 **Documento oficial do** 

**AdaptaCommerce, Sistema de** 

**Gestão Comercial** 

**Versão 0.1**  
**![][image5]**

**![][image6]Conteúdo**   
**1 *Introdução*** 

O projeto desenvolvido tem como objetivo criar um sistema de gestão comercial que será fornecido a empresas não apenas como um sistema, mas como uma plataforma viva. Para isso, o sistema conta com diversas funcionalidades principais. 

Este documento especifica os requisitos do AdaptaCommerce, fornecendo aos projetistas e desenvolvedores as informações necessárias para o projeto e implementação, assim como para a realização dos testes e homologação do sistema. 

***1.1. Visão geral do documento*** 

Além desta seção introdutória, as seções seguintes estão organizadas como descrito abaixo. 

● **Seção 2 Descrição geral do sistema:** apresenta uma visão geral do sistema, caracterizando qual é o seu escopo e descrevendo seus usuários. 

● **Seção 3 Requisitos funcionais (casos de uso):** especifica brevemente os casos de uso do sistema. 

● **Seção 4 Requisitos não funcionais:** cita e explica os requisitos não funcionais do sistema.  
![][image7]

![][image8]

***1.2. Convenções, termos e abreviações*** 

A correta interpretação deste documento exige o conhecimento de algumas convenções e termos específicos, que são descritos a seguir. 

***1.2.1. Identificação dos requisitos*** 

Os requisitos devem ser identificados com um identificador único. A numeração inicia com o identificador \[RF001\] Validação de Chave de Desenvolvedor para Login ou \[RNF001\] Infraestrutura e prossegue sendo incrementada à medida que forem surgindo novos requisitos.   
***1.2.2. Propriedades dos requisitos*** 

Para estabelecer a prioridade dos requisitos, nas seções 3 e 4, foram adotadas as denominações “essencial”, “importante” e “desejável”. 

**Essencial** é o requisito sem o qual o sistema não entra em funcionamento. Requisitos essenciais são requisitos imprescindíveis, que têm que ser implementados impreterivelmente. 

**Importante** é o requisito sem o qual o sistema entra em funcionamento, mas de forma não satisfatória. Requisitos importantes devem ser implementados, mas, se não forem, o sistema poderá ser implantado e usado mesmo assim. 

**Desejável** é o requisito que não compromete as funcionalidades básicas do sistema, isto é, o sistema pode funcionar de forma satisfatória sem ele. Requisitos desejáveis podem ser deixados para versões posteriores do sistema, caso não haja tempo hábil para implementálos na versão que está sendo especificada.  
![][image9]

![][image10]

**2\. Descrição geral do sistema** 

AdaptaCommerce é um sistema de gestão comercial, sendo fornecido, inicialmente, de maneira a atender qualquer empresa do setor, porém com funcionalidades que transformam-no na ferramenta ideal para cada especificidade de negócio, tornando-o dinâmico às necessidades das empresas. 

**3\. Requisitos funcionais (casos de uso)** 

**3.1. \[RF001\] Validação de Chave de Desenvolvedor para Login :** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deve exigir a inserção de uma chave de desenvolvedor, 

armazenada em uma área privada do código-fonte ou arquivo de 

configuração protegido, antes de permitir o cadastro do primeiro usuário. 

**3.2. \[RF002\] Usuário Administrador Inicial:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável  
![][image11]

![][image12]O sistema deve reconhecer o primeiro usuário criado como Administrador, login mediante fornecimento de nome e senha previamente definidos pelo Desenvolvedor. 

**3.3. \[RF003\] Cadastro de Usuários:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deve permitir que o administrador cadastre novos usuários, definindo suas funções, ID e senhas de acesso. 

Validações: 

● O ID deve ser único,não podendo existir outro usuário cadastrado com o mesmo identificador 

● Todos os campos devem ser obrigatoriamente completados 

● As funções devem ser escolhida entre as já cadastradas no sistema 

● A senha deve conter,no mínimo: 

\* 8 caracteres 

\*Iniciar com letra maiuscula 

\*Conter caractere especial 


  

**3.4. \[RF004\] Login:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deve permitir a autenticação de usuários com base em ID e senha. Além disso, deve bloquear automaticamente usuários com mais de 5 tentativas de login inválidas.  
![][image13]

![][image14]**3.5. \[RF005\] Permissões de Usuários:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deve oferecer níveis de acesso diferenciados (Administrador, Vendedor, Financeiro, Estoquista) com base na sua respectiva função, registrar logs de atividades indicando ações e horários. 

Validações: 

● Alterações de permissões só devem ser realizadas pelo usuário Administrador. 

● Caso um usuário tente acessar permissões não permitidas a ele o sistema deve barrar automaticamente. 

Regras de negócio: 

● Cada função deve ter acesso apenas às funcionalidades autorizadas para o seu perfil 

1\. Administrador:acesso total às funções do sistema(cadastro de usuários,relatórios,configurações e exclusões). 

2\. Vendedor:acesso a registro de vendas consultar produtos. 

3\. Financeiro:acesso a notas fiscais e relatórios financeiros. 

4\. Estoquista:acesso a requisição de produtos,atualização de estoque e inventário de produtos 

● O sistema não deve permitir que um usuário execute funções fora das suas permissões. 

**3.6. \[RF006\] Cadastro de Fornecedores:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável O sistema deve permitir que o usuário com as devidas permissões cadastrem  
![][image15]

novos fornecedores, através do preenchimento obrigatório dos seguintes 

campos: Nome,Nome Fantasia, IE, Logradouro, Bairro, CEP, Cod IBGE,CNPJ. 

Validações: 

● CNPJ: deve conter 14 dígitos numéricos válidos; caso contrário, o sistema deve bloquear o cadastro e exibir mensagem de erro. 

● Inscrição Estadual (IE): deve aceitar apenas números e caracteres permitidos pelo padrão estadual. 

● CEP: deve ter 8 dígitos; o sistema deve validar o formato e impedir valores inválidos. 

● Código IBGE: deve conter apenas valores numéricos válidos. 

● Campos de endereço (Logradouro e Bairro): não podem estar vazios. Nenhum dos campos obrigatórios deve ser aceito em branco; o sistema deve exibir mensagens de erro claras quando isso ocorrer. 

Regras de negócio: 

● Caso o CEP informado seja válido, o sistema deve permitir integração com serviço de consulta de CEP para preenchimento automático dos dados do endereço (quando aplicável). 

**3.7. \[RF007\] Cadastro de Produto:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável Permitir o cadastro de produto com os seguintes campos: Nome, Descrição,

Código (único),Código de Barras, Categoria, Data de Fabricação, Data de 

Validade (quando aplicável), Preço de Custo, Preço de Venda, Quantidade em Estoque, Unidade de Medida, Fornecedor e Status (ativo/inativo). 

Validações: 

● Código e Código de Barras: devem ser únicos no sistema; caso já existam, o sistema deve impedir o cadastro e exibir mensagem de erro. ● Datas: 

1\. A Data de Fabricação não pode ser futura. 

2\. A Data de Validade (quando informada) deve ser maior que a data de fabricação. 

● Preço de Custo e Preço de Venda: devem ser valores numéricos positivos; preço de venda não pode ser zero. 

● Quantidade em Estoque: deve aceitar apenas números inteiros ≥ 0\. ● Unidade de Medida: deve ser selecionada entre opções pré-definidas (ex: kg, L, un). 

● Fornecedor: deve existir previamente no cadastro de fornecedores; caso contrário, o sistema deve bloquear o cadastro. 

● Status: deve aceitar somente “ativo” ou “inativo”. 

**3.8. \[RF008\] Cadastro de Clientes:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável

O sistema deve permitir que os usuários com as devidas permissões cadastrem novos clientes, sendo separado em três tipos de clientes:PF,PJ e Outros, solicitando as seguintes informações:Nome(Obrigatório), Nome Fantasia(opcional), CPF/CNPJ(Obrigatório). 

Validações: 

● Tipo de Cliente: deve ser selecionado entre PF, PJ ou Outros. 

● Nome: não pode ser deixado em branco. 

● CPF (para PF): 

1\. Deve conter 11 dígitos válidos. 

2\. O sistema deve bloquear CPF inválido ou cadastrado. 

● CNPJ (para PJ): 

1\. Deve conter 14 dígitos numéricos válidos. 

2\. O sistema deve impedir duplicidade ou formato incorreto. 

● Clientes do tipo “Outros”: 

1\. Devem informar um documento alternativo (ex: RG, Passaporte, Documento Estrangeiro), conforme regras definidas pelo 

administrador. 

2\. Esse documento deve ser obrigatório e não pode repetir um já existente no sistema. 

**3.9. \[RF009\] Registro de Venda:**

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

Registrar cada venda contendo data, hora, cliente, produtos, quantidades, preços unitários, descontos e status da venda. 

**3.10. \[RF010\] Atualização de Estoque:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deverá atualizar automaticamente após a efetuação de cada  venda e após a entrada/saída de produtos via NF-e. 

**3.11. \[RF011\] Consulta de Produto:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deve permitir que o usuários com as devidas permissões consultem produtos cadastrados através das seguintes informações: Nome, Descrição, Código (único),Código de Barras, Categoria, Data de Fabricação, Data de Validade (quando aplicável), Preço de Custo, Preço de Venda, Quantidade em Estoque, Unidade de Medida, Fornecedor e Status (ativo/inativo).

**3.12. \[RF012\] Inventário de Produtos:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O inventário de estoque é o registro completo de todos os produtos armazenados em uma empresa. Ele identifica, classifica e exibe o valor de cada item, abrangendo tanto insumos quanto mercadorias, sejam de propriedade da empresa ou de terceiros. 

**3.13. \[RF013\] Consulta de Fornecedor:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema poderá permitir que os usuários com as devidas permissões consultem os fornecedores cadastrados. Exibindo os dados cadastrados, pedidos em aberto e histórico de mercadorias recebidas. 

**3.14. \[RF014\] Requisitar produtos:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável

O sistema deve permitir que os usuários com as devidas permissões 

realizem requisições de produtos, informando as seguintes informações: Nome do Produto, Código (único), Categoria, Data da Requisição, Preço de Custo, Unidade de Medida e Fornecedor. Além disso, o sistema deve registrar automaticamente o usuário requisitante e definir o status inicial da requisição como “Pendente”. 

**3.15. \[RF015\] Consulta via CEP:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema deve permitir que os usuários com as devidas permissões realizem consultas de endereço por meio do CEP, retornando automaticamente as seguintes informações: Logradouro, Bairro, Cidade e Estado. 

Esses dados devem ser preenchidos automaticamente nos formulários de cadastro (como de fornecedor ou cliente). 

Caso o CEP informado seja inválido ou não encontrado, o sistema deve exibir uma mensagem de erro clara ao usuário. 

**3.16. \[RF016\] Cadastro de Notas Fiscais Eletrônicas: Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável

O sistema deve permitir que os usuários com as permissões devidas cadastrem e registrem notas fiscais eletrônicas (NF-e) através das seguintes informações: Número da Nota Fiscal, Chave de Acesso (44 dígitos), Data de Emissão, Fornecedor/Emitente, Produtos Vinculados (quantidade, valor unitário e total), Valor Total da Nota, Tipo de Operação (entrada ou saída), Impostos Aplicados (ICMS, IPI, PIS, COFINS, quando aplicável) e Arquivo XML da NF-e (upload opcional). 

Além disso, o sistema deve: 

● Validar a chave de acesso, garantindo que contenha 44 dígitos numéricos. 

● Permitir o vínculo automático dos produtos cadastrados no sistema à nota fiscal. 

● Registrar automaticamente a data e o usuário responsável pelo cadastro. 

**3.17. \[RF017\] Emissão de Notas Fiscais Eletrônicas:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deverá contar com a função de emissão de NF-e obedecendo o MOC (Manual de Orientação do Contribuinte), contando com os seguintes campos para preenchimento,Tipo,Xml,Empresa,Cliente,

IE,CPF/CNPJ,Pedido,Endereço,Cidade,CEP, PJ/PF, 

Simples,Produto,CST,CFOP e Demais campos Necessários. 

Validações: 

● CPF/CNPJ: deve ser válido conforme o tipo do cliente. 

● IE (Inscrição Estadual): deve ser validada quando o cliente/empresa estiver sujeito. 

● CFOP e CST: devem ser selecionados apenas entre os códigos permitidos pela legislação. 

● Regime Tributário: deve ser compatível com a empresa emitente (ex.: Simples Nacional, Lucro Presumido, etc.). 

● Endereço, Cidade e CEP: devem estar completos e válidos, podendo ser preenchidos automaticamente via consulta CEP. 

● XML (quando fornecido): deve estar no padrão oficial da NF-e e passar pela validação de estrutura. 

● Produtos vinculados: devem conter quantidade, preço, CST, CFOP e impostos aplicáveis. 

● Total da Nota: deve ser coerente com a soma dos itens \+ impostos. 

● Data da emissão: não pode ser futura. 

 Regras de negócio: 

● Gerar e armazenar o XML resultante da NF-e emitida. 

**3.18. \[RF018\] Vínculo Automático de Produtos à NF-e: Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável

Quando um usuário importar/cadastrar uma NF-e, vincular automaticamente 

os produtos do sistema aos itens da nota quando houver correspondência por código. 

**3.19. \[RF019\] Visualização de NF-e emitida:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

Ao importar/cadastrar ou emitir uma NF-e, o sistema deverá gerar um DANFE para visualização e impressão opcional. 

**3.20. \[RF020\] Registro da Forma de Pagamento:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

Registrar a(s) forma(s) de pagamento utilizadas numa venda (dinheiro, cartão, boleto, etc.) e seu status (pago/parcial/pendente). 

**3.21. \[RF021\] Cálculo de Impostos na Venda:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável Calcular automaticamente os impostos aplicáveis de uma venda (ICMS, IPI,

PIS, COFINS ou outros definidos) com base nos produtos e regras fiscais 

aplicáveis no país de origem da aplicação . 

**3.22. \[RF022\] Auditoria de Compras:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema deve manter o histórico de compras realizadas pelos Usuarios e desempenho dos fornecedores, 

**3.23. \[RF023\] Controle de Fornecedores:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema deverá permitir comparar preços e prazos, além de integrar-se diretamente com os módulos de compras e estoque para automatizar o processo de reposição de mercadorias. 

**3.24. \[RF024\] Alertas de Estoque Mínimo:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável O sistema deve emitir alertas (notificação/relatório) quando a quantidade de

um produto atingir o nível mínimo configurado. 

**3.25. \[RF025\] Alertas por Validade:** 

**Prioridade:** ☒ Essencial ☐ Importante ☐ Desejável 

O sistema deve emitir alertas para produtos cuja data de validade esteja a menos de um prazo configurável (ex.: 30 dias). 

**3.26. \[RF026\] Relatórios Gerenciais e Indicadores: Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema deve gerar relatórios e paineis interativos com indicadores de desempenho comercial, oferecendo análises de vendas por período, 

produtividade de vendedores, lucro bruto e margens de contribuição. 

**3.27. \[RF027\] Auditoria de usuários:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema deve ser capaz de salvar automaticamente a data e hora do cadastro de usuários, além do usuário ADM que realizou o cadastro.

**3.28. \[RF028\] Backup:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema deve permitir a realização de backups periódicos dos dados, garantindo a integridade das informações. 

**3.29. \[RF029\] Restauração de Dados:** 

**Prioridade:** ☐ Essencial ☒ Importante ☐ Desejável 

O sistema deve permitir a restauração desses dados em caso de falhas, perdas ou corrupção no banco, assegurando continuidade operacional. 

**3.30. \[RF030\] Assistência IA:** 

**Prioridade:** ☐ Essencial ☐ Importante ☒ Desejável 

O sistema possuiria um chatbot assistente baseado em Inteligência Artificial que teria a função de auxiliar os usuários na utilização do sistema.  Tendo o papel de garantir a qualidade, eficiência e suavidade durante o acesso.

**4\. Requisitos Não Funcionais:** 

**● \[\[RNF001\] Infraestrutura:** Um computador com conexão à internet é uma condição de ambiente necessária para o funcionamento do sistema; 

**● \[RNF002\] Desempenho:** O tempo de processamento e resposta das funcionalidades do sistema deve ser inferior a dois segundos; 

**● \[RNF003\] Segurança:** A autenticação de usuários deve ser feita via token JWT , senhas devem ter proteção hash; 

**● \[RNF004\] Usabilidade:** A interface deve ser intuitiva de modo que não seja necessário que o usuário tenha conhecimento de palavras técnicas ou passe por treinamento; 

**● \[RNF005\] Escalabilidade:** O sistema deve ser capaz de lidar com aumento na demanda ou volume de dados de até mil pessoas simultâneas; 

**● \[RNF006\] Manutenibilidade:** O código-fonte deve seguir os padrões de programação da empresa; 

● **\[RNF007\] Portabilidade:** O sistema deve ser executado de forma eficiente em dispositivos com os sistemas operacionais Windows, macOS e Linux; 

● **\[RNF008\] Conformidade:** O sistema deve cumprir as regulamentações de privacidade e proteção de dados com base no LGPD;

● **\[RNF009\] Integridade:** O sistema deve validar automaticamente todos os dados 

inseridos para evitar inconsistências; 

● **\[RNF010\] Disponibilidade:** O sistema deve permanecer em funcionamento 99,9% do tempo, exceto durante janelas de manutenção planejadas; 

**5\. Conclusão** 

No cenário atual de tecnologia para gestão (ERP/SaaS), as empresas enfrentam um dilema clássico que limita seu potencial de crescimento: A escolha entre softwares de prateleira — genéricos, baratos e rápidos de implantar, mas "engessam" a empresa, que se vê obrigada a mudar o jeito de trabalhar para caber no sistema — ou softwares sob medida — atendem perfeitamente, dado à sua customização, mas são caríssimos, demoram meses para ficarem prontos e são difíceis de manter — para a implementação de suas soluções. O sistema AdaptaCommerce, detalhado neste documento, surge com a filosofia de “Gestão para todos, feita para você”, oferecendo o melhor dos dois mundos. 

Os requisitos funcionais descritos reforçam o compromisso do sistema em entregar uma rica experiência para o usuário. Além disso, os requisitos não funcionais, como segurança, desempenho, escalabilidade e usabilidade, garantem que a solução não apenas atenda às demandas imediatas, mas também se adapte a cenários futuros, mantendo confiabilidade e conformidade com padrões técnicos. 

Ao consolidar essas funcionalidades e especificações, o AdaptaCommerce posiciona-se como uma ferramenta essencial para empresas que buscam transformar seus desafios de negócio em oportunidades de melhoria contínua. Espera-se que este documento sirva como base sólida para a implementação, validação e evolução do sistema, contribuindo para decisões mais assertivas e resultados sustentáveis no gerenciamento de recursos.

