TypeScript AspNetMVCBoilerplate
===============================

> EM DESENVOLVIMENTO (RASCUNHO)!

## Introdução

Lidar com aplicações de página simples (single page applications) é algo cada vez mais comum no nosso dia a dia. Quando acessamos nosso email no google, abrimos nosso facebook ou nosso twitter no browser entre outros aplicativos estamos sempre lidando com aplicações de arquiteturas complexas com muita tecnologia e padrões envolvidos. O apelo ao desenvolvimento de aplicativos segundo esta abordagem tem se tornado cada vez maior e muitas propostas de arquitetura tem surgido. O objetivo deste projeto é de apresentar uma abordagem implementada em TypeScript mais que pode ser aproveitada por qualquer outra linguagem e ambiente de desenvolvimento web.

Este material está em constante desenvolvimento e tem sido atualizado a medida que avanço nas minhas pesquisar pessoais sobre o tema. Fique a vontade para contribuir, seja agregando conteúdo, seja corrigindo ou contestando qualquer abordagem apresentada. Toda contribuição será bem recebida! :)

TODO:

## Por estou usando TypeScript?

Sou programador C# já a muito tempo e quando saiu o TypeScript simplesmente me apaixonei pela syntax rs. Trata-se de uma linguagem bem promissora e por isso resolvi ir desvendando seus recursos e utilizando a mesma neste projeto. 

> Todo o conceito apresentado pode também ser implementado com outras linguagens ou com javaScript puro.

## Arquitetura - Visão geral

Uma boa arquitetura precisa prover baixo acoplamento entre os componentes da aplicação, facilidade na hora de darmos manutenção e corrigirmos bugs e precisa ser modular. Quebrar os componentes da aplicação em módulos ajuda a garantir que cada parte da aplicação esteja com foco concentrado em sua area de atuação. É importante entender também que a dependência entre os módulos da aplicação deve ser evitada o máximo possível permitindo assim uma escala de desenvolvimento eficiente e a criação de uma aplicação bem componentizada.

Para permitir a iteração entre os módulos da aplicação, ao invés de uma dependência direta criaremos uma camada internediária para cuidar desta comunicação. Vamos utilizar o padrão Mediator e criar um componente que irá reagir aos eventos emitidos pelos módulos para assim propagá-los.

## Módulos encapsulados

Não é interessante que os módulos fiquem expondo sua implementação. Os módulos precisam expor uma interface clara e simplificada refletindo apenas suas macro-operações. Para isso iremos utilizar um padrão chamado Facade. 

## Carga dinâmica de módulos
Seguindo a abordagem sugerida iremos propor uma carga dinâmica dos módulos da aplicação. Assim evitamos ter que carregar toda a aplicação em memória para executar apenas um ou alguns módulos e com isso deixamos a aplicação mais leve carregando por demanda apenas os módulos necessários para cada operação.

## Frameworks JavaScript Utilizados

Este template irá utilizar os seguintes componentes:

* Bootstrap
* requirejs
* Backbone
* jquery
* lodash

*Esboço da estrutura de arquivos sugerida*

	[app root]
	|
	+--[scripts] // pasta com os arquivos de script
	   |
	   +--[libs] // dependncias externas do projeto
	   |
	   +--[modules] // todos os módulos do sistema ficam dentro desta pasta e possuem a estrutura abaixo:
	   |  |
	   |  +--[<um modulo da aplicação>] // estrutura sugerida para organização dos arquivos de um módulo
	   |     |
	   |     +--[models]
	   |     |  |
	   |     |  +--<model.js>
	   |     |
	   |     +--[views]
	   |     |  |
	   |     |  +--[templates]
	   |     |  |  |
	   |     |  |  +--<view-template.html>
	   |     |  |
	   |     |  +--<view.js>
	   |     |
	   |     +--facade.js
	   |
	   +--app.js // inicializa o router e configura os eventos com seus respectivos módulos
	   |
	   +--config.js // configuração do requirejs
	   |
	   +--main.js // inicializa a aplicação
	   |
	   +--mediator.js // funciona como um propagador/controlador de eventos
	   |
	   +--router.js // configuração das rotas da aplicação

TODO:

## Mediator e Facade

TODO:

## Arquitetura modular e AMD

TODO:

			   +--------------+
               |     DOM      |
               +--------------+
                  |       A
    Emmits events |       | Change
	              |       |
				  V       |       
			   +--------------+  Renders  +--------------+
               |     View     |---------->|   Template   |
               +--------------+           +--------------+
	                  |
	                  | Observers
					  |
	                  V         Queries and
			   +--------------+  writes to  +--------------+
               |    Model     |------------>|   Storage    |
               +--------------+             +--------------+

			   
### DOM somente para escrita
Nenhum estado ou dado deve ser lido do DOM. A aplicação irá expor o resultado de suas operações no DOM. já que a visualização é exposta usando HTML, no entanto é importante que nenhum dado seja lido do DOM. Entenda que armazenar dados no DOM gera um código difícel de ser mantido. Em contra partida teremos sempre um único lugar para armazenar os dados da aplicação e as views irão utilizar estes dados e refleti-los no DOM. Isso facilita termos diversos tipos de visualizações sem a necessidade de acoplar nosso código com o DOM.

### Manipulando dados com Models
Ao invés de armazenar os dados da aplicação no DOM ou em objetos aleatórios iremos armazenar/manipular estes dados em objetos chamados models.

### As views devem observar as mudanças dos models
Não faremos uma manipulação direta da view a não ser utilizando eventos. O model irá sempre emitir eventos referente a suas operações e mudanças de estado. Estes eventos serão assinados interceptados pelas views e refletidos no DOM.

### Minimizar a dependência do DOM
Para ter um código mais testável e desacoplado devemos remover a dependência do DOM o máximo possível. Faremos a view se comunicar com o DOM assinando seus eventos. Isso ajudará inclusive no isolamento dos testes de compatibilidade de navegadores. Qualquer bug referente a incompatibilidade de navegadores fica independente da implementação do código interno da aplicação.

## Bibliografia

TODO:
			   
## Licença

TODO: