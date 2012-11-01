TypeScript AspNetMVCBoilerplate
===============================

> EM DESENVOLVIMENTO (RASCUNHO)!

## Introdu��o

Lidar com aplica��es de p�gina simples (single page applications) � algo cada vez mais comum no nosso dia a dia. Quando acessamos nosso email no google, abrimos nosso facebook ou nosso twitter no browser entre outros aplicativos estamos sempre lidando com aplica��es de arquiteturas complexas com muita tecnologia e padr�es envolvidos. O apelo ao desenvolvimento de aplicativos segundo esta abordagem tem se tornado cada vez maior e muitas propostas de arquitetura tem surgido. O objetivo deste projeto � de apresentar uma abordagem implementada em TypeScript mais que pode ser aproveitada por qualquer outra linguagem e ambiente de desenvolvimento web.

Este material est� em constante desenvolvimento e tem sido atualizado a medida que avan�o nas minhas pesquisar pessoais sobre o tema. Fique a vontade para contribuir, seja agregando conte�do, seja corrigindo ou contestando qualquer abordagem apresentada. Toda contribui��o ser� bem recebida! :)

TODO:

## Por estou usando TypeScript?

Sou programador C# j� a muito tempo e quando saiu o TypeScript simplesmente me apaixonei pela syntax rs. Trata-se de uma linguagem bem promissora e por isso resolvi ir desvendando seus recursos e utilizando a mesma neste projeto. 

> Todo o conceito apresentado pode tamb�m ser implementado com outras linguagens ou com javaScript puro.

## Arquitetura - Vis�o geral

Uma boa arquitetura precisa prover baixo acoplamento entre os componentes da aplica��o, facilidade na hora de darmos manuten��o e corrigirmos bugs e precisa ser modular. Quebrar os componentes da aplica��o em m�dulos ajuda a garantir que cada parte da aplica��o esteja com foco concentrado em sua area de atua��o. � importante entender tamb�m que a depend�ncia entre os m�dulos da aplica��o deve ser evitada o m�ximo poss�vel permitindo assim uma escala de desenvolvimento eficiente e a cria��o de uma aplica��o bem componentizada.

Para permitir a itera��o entre os m�dulos da aplica��o, ao inv�s de uma depend�ncia direta criaremos uma camada internedi�ria para cuidar desta comunica��o. Vamos utilizar o padr�o Mediator e criar um componente que ir� reagir aos eventos emitidos pelos m�dulos para assim propag�-los.

## M�dulos encapsulados

N�o � interessante que os m�dulos fiquem expondo sua implementa��o. Os m�dulos precisam expor uma interface clara e simplificada refletindo apenas suas macro-opera��es. Para isso iremos utilizar um padr�o chamado Facade. 

## Carga din�mica de m�dulos
Seguindo a abordagem sugerida iremos propor uma carga din�mica dos m�dulos da aplica��o. Assim evitamos ter que carregar toda a aplica��o em mem�ria para executar apenas um ou alguns m�dulos e com isso deixamos a aplica��o mais leve carregando por demanda apenas os m�dulos necess�rios para cada opera��o.

## Frameworks JavaScript Utilizados

Este template ir� utilizar os seguintes componentes:

* Bootstrap
* requirejs
* Backbone
* jquery
* lodash

*Esbo�o da estrutura de arquivos sugerida*

	[app root]
	|
	+--[scripts] // pasta com os arquivos de script
	   |
	   +--[libs] // dependncias externas do projeto
	   |
	   +--[modules] // todos os m�dulos do sistema ficam dentro desta pasta e possuem a estrutura abaixo:
	   |  |
	   |  +--[<um modulo da aplica��o>] // estrutura sugerida para organiza��o dos arquivos de um m�dulo
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
	   +--app.js // inicializa o router e configura os eventos com seus respectivos m�dulos
	   |
	   +--config.js // configura��o do requirejs
	   |
	   +--main.js // inicializa a aplica��o
	   |
	   +--mediator.js // funciona como um propagador/controlador de eventos
	   |
	   +--router.js // configura��o das rotas da aplica��o

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
Nenhum estado ou dado deve ser lido do DOM. A aplica��o ir� expor o resultado de suas opera��es no DOM. j� que a visualiza��o � exposta usando HTML, no entanto � importante que nenhum dado seja lido do DOM. Entenda que armazenar dados no DOM gera um c�digo dif�cel de ser mantido. Em contra partida teremos sempre um �nico lugar para armazenar os dados da aplica��o e as views ir�o utilizar estes dados e refleti-los no DOM. Isso facilita termos diversos tipos de visualiza��es sem a necessidade de acoplar nosso c�digo com o DOM.

### Manipulando dados com Models
Ao inv�s de armazenar os dados da aplica��o no DOM ou em objetos aleat�rios iremos armazenar/manipular estes dados em objetos chamados models.

### As views devem observar as mudan�as dos models
N�o faremos uma manipula��o direta da view a n�o ser utilizando eventos. O model ir� sempre emitir eventos referente a suas opera��es e mudan�as de estado. Estes eventos ser�o assinados interceptados pelas views e refletidos no DOM.

### Minimizar a depend�ncia do DOM
Para ter um c�digo mais test�vel e desacoplado devemos remover a depend�ncia do DOM o m�ximo poss�vel. Faremos a view se comunicar com o DOM assinando seus eventos. Isso ajudar� inclusive no isolamento dos testes de compatibilidade de navegadores. Qualquer bug referente a incompatibilidade de navegadores fica independente da implementa��o do c�digo interno da aplica��o.

## Bibliografia

TODO:
			   
## Licen�a

TODO: