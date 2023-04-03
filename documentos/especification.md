
# Especificações do Projeto

Com o mundo cada vez mais conectado, é comum que muitos artistas e músicos busquem formas de divulgar seus projetos e alcançar visibilidade em um meio tão competitivo. A TurtleSpace está sendo criada para ajudar esses artistas   a alcançar seu potencial e se conectar com outras pessoas do meio musical.  

A ideia é que os artistas possam criar seus perfis e compartilhar suas músicas, fotos, vídeos e informações sobre o meio musical em um único lugar. Além disso, a plataforma também oferece a fncionalidae recursos de ajudar os usuários a se destacarem e atrair a atenção do público.

Uma dessas funcionalidades, é a possibilidade de enviar solicitações de colaboração com outros artistas, produtores e músicos. Essa funcionalidade permite que os usuários se conectem com pessoas do meio musical que possam ajudá-los a expandir seus horizontes e se inserir no mercado. Com isso, é possível criar parcerias e desenvolver novos projetos em conjunto. Além de ser uma ferramenta útil para os artistas, a plataforma também pode ser uma excelente oportunidade para produtores, gravadoras e outras pessoas do meio musical descobrirem novos talentos e projetos. Com a possibilidade de colaboração e compartilhamento de conteúdo, é possível criar uma rede de contatos e se conectar com pessoas do meio musical de forma mais fácil e eficiente.

No projeto a ser trabalhado, será utilizado as tecnologias HTML, CSS e Bootstrap para desenvolver a interface do usuário, enquanto o armazenamento local será gerenciado pelo LocalStorage, e para a interação com o servidor faremos uso do CRUD server.

## Personas

 Roberto tem 23 anos e cursa administração, é um grande entusiasta da área musical. Tem o objetivo de descobrir novos artistas para que possam trocar as suas experiências e possivelmente formar uma banda.
 
 Diego possui 18 anos e está formando no ensino médio, músico amador, decidiu passar suas férias em Belo Horizonte na casa de sua avó, com o ojetivo de conhecer um pouco sobre seu hobby. 
 
 Ana tem 30 anos, apaixonada por música desde criança e sempre teve vontade de trabalhar na área de entretenimento. Ela gosta de diversos estilos musicais, mas tem uma queda especial pelo rock e pop. Ana está em busca de bandas musicais com potencial para se apresentar em eventos corporativos e festas particulares. Ela busca artistas que tenham um repertório variado, boa presença de palco e que sejam profissionais e comprometidos com a carreira.
 
 Lucas 28 anos, um jovem músico que acabou de começar uma carreira solo e está tentando estabelecer a presença na cena musical local. Ele toca guitarra e canta suas próprias músicas, e tem uma paixão pela música desde a adolescência. Lucas está em busca de reconhecimento no cenário musical com a divulgações das suas músicas e com os shows.
 
 Carlos 24 anos, é um jovem produtor musical que está sempre em busca de novas bandas para trabalhar em seus projetos. Ele tem um ouvido apurado para música e está sempre procurando por talentos emergentes para promover e ajudar a crescer.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar meus arquirvos de mídia           | Publicar-las               |
|Usuário do sistema  | Ser notificado de novos eventos           | Para que seja possível um informativo    |
|Usuário do sistema  | Criar meu perfil           | Para que outras pessoas possam me identificar mais fácil              |
|Usuário do sistema  | Postar mensagens de texto           | Para uma comunicação mais flúida               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Administrador       | Alterar permissões                 | Aparagar posts ofensivos  |

Roberto gostaria de se cadastrar e criar o seu perfil para que possa conhecer parceiros que possam o acompanhar em shows e apresentações que acontecem pela cidade, se inserindo em um novo meio social. Já Diego, tem o intuito de crirar seu perfil e personaliza-lo para que possa conhecer outros atistas do ramo. Por sua vez, Ana, busca novas oportunidades de seu profissionalizar e conhecer novas pessoas para se inserir no meio músical. Lucas, músico, procura reconhecimento de seus colegas de proffisão através de suas publicações. Carlos, deseja encontrar pessoas bem como Lucas, para que possam ser produzidos e impulsinados, montando sua rede de apoio e almentando o seu portifólio de produções e lançamentos de artistas.




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário se cadastre  | ALTA | BAIXA |
|RF-002| Emitir um relatório de atualizações semanais   | ALTA | ALTA |
|RF-003| Permitir publicações de arquivos de mídia   | ALTA | MÉDIA |
|RF-004| Permitir personalização de perfil   | ALTA |  ALTA |
|RF-005| Notificar o usuário  | ALTA | MÉDIA|
|RF-006| Publicação de posts  | ALTA | MÉDIA|
|RF-007| personalização de posts  | ALTA | MÉDIA|


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Uma quantidade máxima de tamanho de arquivo postado |  ALTA | 
|RNF-002| A aplicação deve ser segura e responsável com as informações do usuário  |  ALTA |
|RNF-003| Ter alta diponibilidade: 98% do tempo |  ALTA |
|RNF-004| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-005| Executável por qualquer aparelho |  MÉDIA |
|RNF-006| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

