# Especificações do Projeto

Com o mundo cada vez mais conectado, é comum que muitos artistas e músicos busquem formas de divulgar seus projetos e alcançar visibilidade em um meio tão competitivo. A TurtleSpace está sendo criada para ajudar esses artistas. Roberto é um jovem músico em busca de ingressar no meio, para isso utilizará a plataforma como meio de se conectar com outras pessoas, divulgando o seu trabalho independente para outros acessarem. Além de querer ser notificado sobre os eventos culturais da cidade de Belo Horizonte, garantido-o segurança de suas informações e responsividade, para que possa acessar a plataforma de qualquer dispositivo.


## Personas

 Roberto tem 23 anos e cursa administração, é um grande entusiasta da área musical. Tem o objetivo de descobrir novos artistas para que possam trocar as suas experiências e possivelmente formar uma banda.
 
 Diego possui 18 anos e está formando no ensino médio, músico amador, decidiu passar suas férias em Belo Horizonte na casa de sua avó, com o ojetivo de conhecer um pouco sobre seu hobby. 


> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Roberto gostaria de se cadastrar e criar o seu perfil para que outras bandas o vejam. Já Carla, tenho o intuito de convidar seus amigos para que conheçam um pouco sobre o ramo musical. Por sua vez Adriana deseja interagir com outras pessoas sobre a cena. Diego, turista, está em busca de se manter informado sobre os eventos em Belo Horizonte, já que irá passar uma semana de férias na cidade.


> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

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


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Uma quatidade máxima de tamanho de arquivo postado |  ALTA | 
|RNF-002| A aplicação deve ser segura e responsável com as informações do usuário  |  ALTA |
|RNF-003| Ter alta diponibilidade: 98% do tempo |  ALTA |
|RNF-004| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-005| Executável por qualquer aparelho |  MÉDIA |
|RNF-006| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
