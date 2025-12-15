
### Módulo 3: Mapa e Rastreamento em Tempo Real


#### Descrição

Este módulo é responsável pela funcionalidade mais dinâmica e interativa do aplicativo: o rastreamento de ônibus em tempo real. A equipe irá desenvolver a integração com mapas e GPS para fornecer aos usuários informações precisas sobre a localização dos veículos, horários de chegada e pontos de ônibus próximos.

#### Requisitos Funcionais

A equipe deve desenvolver as seguintes funcionalidades, com base na documentação original:

- **RF11: Rastreamento de Veículos:** Exibir a localização dos ônibus em tempo real em um mapa interativo. O sistema deve buscar a localização dos veículos através de uma API fornecida pela empresa de ônibus. (Citação: "O aplicativo deve exibir a localização dos ônibus em tempo real no mapa, permitindo ao usuário acompanhar o deslocamento do veículo por meio de uma API que busca a localização dos veículos cadastrados na empresa fornecedora do ônibus.")
- **RF12: Pontos Próximos:** Utilizar a geolocalização (GPS) do dispositivo do usuário para identificar e exibir no mapa os pontos de ônibus mais próximos a ele. (Citação: "O aplicativo deve usar a geolocalização (GPS) do usuário para identificar e mostrar os pontos de ônibus mais próximos.")
- **RF13: Atualização Dinâmica de Horários:** Com base na localização do usuário e nos dados de trânsito em tempo real, o sistema deve simular e atualizar automaticamente os horários de chegada dos ônibus, informando sobre possíveis atrasos. (Citação: "O aplicativo deve simular e atualizar automaticamente os horários de chegada e as rotas com base em dados em tempo real, informando atrasos...")
- **RF14: Compartilhamento de Viagem:** Permitir que o usuário compartilhe sua localização em tempo real com outras pessoas durante o trajeto da sua viagem. (Citação: "O aplicativo deve permitir que o usuário compartilhe sua localização em tempo real (durante a viagem) com outras pessoas.")

#### Requisitos Não Funcionais a Considerar

- **Desempenho (RNF01):** A atualização da posição dos veículos no mapa e o cálculo de horários devem ser extremamente rápidos, com tempo de resposta inferior a 1 segundo.
- **Conectividade (RNF06):** O rastreamento deve funcionar de forma estável em diferentes qualidades de conexão de rede (3G, 4G, 5G). O aplicativo deve lidar de forma inteligente com perdas momentâneas de conexão.
- **Escalabilidade (RNF07):** A arquitetura deve suportar um grande número de usuários (mínimo de 5.000) acessando o serviço de rastreamento simultaneamente.
- **Segurança e Privacidade (RNF04):** O compartilhamento de localização só pode ser iniciado pelo usuário e deve ser fácil de interromper. O acesso à localização do usuário deve ser solicitado e justificado claramente.
- **Compatibilidade (RNF03):** Garantir que a integração com os serviços de GPS e mapas funcione corretamente em Android e iOS.
