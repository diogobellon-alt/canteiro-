# Canteiro²

Projeto desenvolvido para o **Concurso Agrinho 2026**, na categoria **Programação**, Subcategoria 3: **Programação Front-End com HTML, CSS e JavaScript**.

## Tema

**Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.**

## Slogan

**Planeje melhor, plante com consciência.**

## Sobre o projeto

O **Canteiro²** é um simulador educativo criado para ajudar no planejamento de canteiros por metro quadrado.

A proposta do projeto é permitir que estudantes, famílias, escolas e pequenos produtores calculem a área de um canteiro, escolham plantas alimentícias, estimem quantas mudas cabem no espaço e visualizem uma distribuição inicial do plantio.

O projeto mostra que produzir melhor também depende de planejamento. Ao pensar no espaço disponível, no espaçamento entre as plantas, na água, no sol e na diversidade do canteiro, é possível reduzir desperdícios e cuidar melhor do meio ambiente.

## Objetivo

O objetivo do projeto é usar a programação para auxiliar no planejamento de hortas, canteiros escolares, quintais e pequenas áreas produtivas.

A ideia é mostrar que a tecnologia pode apoiar decisões simples do dia a dia, ajudando a evitar desperdício de espaço, mudas, sementes e recursos naturais.

## Funcionalidades

O site possui:

* página inicial com nome, slogan e apresentação do projeto;
* seção explicando as etapas do planejamento;
* calculadora de área com largura e comprimento;
* escolha do tipo de espaço;
* seleção da condição de sol e disponibilidade de água;
* identificação educativa do formato do canteiro;
* lista de plantas alimentícias predefinidas;
* escolha de uma, duas ou três plantas para simulação;
* cálculo de área usada por cada planta;
* estimativa de quantidade aproximada de plantas;
* resultado com área total, formato, linhas e plantas por linha;
* grade visual do canteiro com cores e ícones diferentes;
* limite de células visíveis para facilitar a visualização;
* legenda automática da grade;
* comparação entre plantas no mesmo espaço;
* dicas sustentáveis;
* avisos educativos sobre clima, solo, irrigação e espaçamento;
* salvamento do último planejamento no navegador;
* layout responsivo para celular, tablet e computador.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript

O projeto foi desenvolvido com tecnologias básicas de front-end, sem uso de frameworks, bibliotecas externas ou CDN.

O recurso `localStorage` foi utilizado para salvar o último planejamento no próprio navegador do usuário. Esse recurso é nativo do navegador e não depende de biblioteca externa.

## Estrutura de arquivos

```text
/
├── index.html
├── style.css
├── script.js
├── README.md
├── GUIA_DO_PROJETO.md
└── img/
    ├── logo-canteiro2.svg
    ├── icon-horta.svg
    ├── icon-area.svg
    ├── icon-planta.svg
    ├── icon-agua.svg
    ├── icon-sol.svg
    ├── icon-sustentabilidade.svg
    ├── icon-alface.svg
    ├── icon-cenoura.svg
    ├── icon-tomate.svg
    ├── icon-milho.svg
    ├── icon-feijao.svg
    ├── icon-mandioca.svg
    ├── icon-morango.svg
    ├── icon-cebolinha.svg
    ├── icon-manjericao.svg
    └── icon-couve.svg
```

## Como executar o projeto

Para abrir o projeto localmente:

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.

O site também pode ser publicado no GitHub Pages, pois não precisa de servidor, banco de dados ou instalação de pacotes.

## Como funciona a simulação

O usuário informa a largura e o comprimento do canteiro. A partir dessas informações, o site calcula a área total em metros quadrados e identifica, de forma educativa, se o espaço se aproxima de um formato quadrado, retangular horizontal ou retangular vertical.

Depois, o usuário escolhe uma ou mais plantas alimentícias. O sistema usa o espaçamento aproximado de cada planta para estimar quantas cabem no espaço disponível.

Quando mais de uma planta é escolhida, a área é dividida em partes aproximadas para representar uma combinação de plantios. A grade visual ajuda a entender essa distribuição de forma simples.

As informações apresentadas são estimativas educativas e podem variar conforme o solo, o clima, a irrigação, a época do ano e a orientação técnica.

## Fórmulas utilizadas

A área total é calculada assim:

```text
areaTotal = largura * comprimento
```

Para uma planta principal, o site estima linhas e plantas por linha:

```text
plantasPorLinha = Math.floor(largura / espacamento)
numeroLinhas = Math.floor(comprimento / espacamento)
quantidadePlantas = plantasPorLinha * numeroLinhas
```

Na combinação de plantas, o cálculo considera a divisão aproximada da área:

```text
areaDaPlanta = areaTotal * percentualDaPlanta
plantasPorPlanta = Math.floor(areaDaPlanta / (espacamento * espacamento))
```

Essas fórmulas servem como base educativa e não substituem orientação técnica para plantio real.

## Acessibilidade

O projeto foi desenvolvido buscando facilitar a navegação e a leitura. Para isso, foram utilizados:

* estrutura semântica em HTML;
* campos com labels;
* textos alternativos em imagens informativas;
* botões com nomes claros;
* contraste entre texto e fundo;
* foco visível nos elementos interativos;
* layout adaptado para diferentes tamanhos de tela;
* grade visual com identificação das plantas;
* navegação simples no computador e no celular.

## Sustentabilidade

O **Canteiro²** relaciona sustentabilidade com planejamento.

Ao estimar o espaço, o espaçamento e a quantidade aproximada de plantas, o projeto incentiva:

* melhor uso do solo;
* redução do desperdício de sementes e mudas;
* uso consciente da água;
* diversidade de plantas alimentícias;
* observação das condições de sol;
* cuidado com a rotação de culturas;
* proteção do solo;
* produção de alimentos com responsabilidade ambiental.

## Relação com o Agrinho 2026

O projeto se relaciona com o tema do Agrinho 2026 ao mostrar que a produção de alimentos pode ser planejada com apoio da tecnologia.

A proposta reforça que produtividade e sustentabilidade podem caminhar juntas. Um canteiro bem planejado ajuda a usar melhor o espaço, reduzir desperdícios, respeitar o desenvolvimento das plantas e tomar decisões mais conscientes.

## Conceitos de programação utilizados

Durante o desenvolvimento do projeto, foram aplicados conceitos como:

* estruturação de páginas com HTML;
* estilização com CSS externo;
* responsividade;
* manipulação do DOM;
* eventos com `addEventListener`;
* funções em JavaScript;
* arrays e objetos para representar as plantas;
* condicionais para formato do canteiro e recomendações;
* operações matemáticas com área e percentuais;
* uso de `Math.floor`;
* geração dinâmica de cards, resultados, grade e legenda;
* armazenamento local com `localStorage`;
* organização do código em arquivos separados.

## Principais interações implementadas

O site permite:

* calcular a área total do canteiro;
* identificar o formato visual do espaço;
* escolher planta principal, secundária e complementar;
* calcular estimativas para uma única planta;
* calcular combinação de plantas por divisão de área;
* comparar plantas no mesmo espaço;
* gerar uma grade visual centralizada;
* exibir aviso quando a grade é reduzida;
* criar legenda automática das plantas escolhidas;
* salvar e carregar o último planejamento;
* limpar os dados e reiniciar a simulação.

## Autoria

* Estudante: Diogo Guedes Bellon
* Professor orientador: Henrique S. Lima
* Escola: Colégio Estadual do Campo Antônio Paulo Lopes
* Município: Paranaguá - PR

## Créditos

As imagens e ícones utilizados no projeto estão na pasta `img/` e foram organizados para uso educacional no contexto do Concurso Agrinho 2026.

A identidade visual do projeto foi planejada com foco em horta, campo, sustentabilidade, alimentação e tecnologia.

Não foram utilizados ícones externos, imagens remotas, fontes externas, CDNs ou bibliotecas de terceiros.

O projeto contou com apoio de ferramentas digitais durante o planejamento, organização dos textos, criação de ideias visuais e revisão do código. As sugestões foram analisadas, adaptadas e revisadas antes de serem incluídas na versão final.

## Uso de ferramentas de apoio

Durante o desenvolvimento, foram utilizadas ferramentas de inteligência artificial como apoio para organizar ideias, revisar textos, planejar a identidade visual e auxiliar na estruturação do código.

O uso dessas ferramentas não substituiu a construção do projeto. As decisões finais, adaptações e revisões foram feitas durante o desenvolvimento, respeitando o objetivo educacional do Concurso Agrinho 2026.

## Prompts utilizados

Alguns comandos usados durante o processo de criação foram:

### Identidade visual

```text
Auxilie na criação de uma identidade visual para o projeto Canteiro², com fontes, icones e paleta de cores adequadas para o um tema educativo, agrícola e sustentável, usando cores ligadas ao campo, à horta, ao sol, à água e ao meio ambiente.
```

### Revisão dos textos

```text
Revise os textos do projeto Canteiro², mantendo linguagem simples, educativa e adequada para estudantes, sem alterar o sentido principal.
```

## Tags

* agrinho
* programação
* front-end
* html
* css
* javascript
* sustentabilidade
* horta
* canteiro
* agricultura
* planejamento
* meio ambiente
* educação
* campo
* tecnologia

## Licença

Projeto desenvolvido para fins educacionais e para participação no Concurso Agrinho 2026.

## Considerações finais

O **Canteiro²** mostra que a tecnologia pode ajudar em decisões simples e importantes no planejamento de um canteiro.

Planejar antes de plantar ajuda a cuidar melhor do espaço, das plantas, da água e do futuro sustentável que começa nas pequenas escolhas.
