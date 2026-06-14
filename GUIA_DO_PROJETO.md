# Guia Técnico do Projeto Canteiro²

Este guia explica como o projeto está organizado e onde fazer alterações com segurança.

## Para que serve o `index.html`

O `index.html` guarda a estrutura do site. Nele ficam as seções principais:

- Cabeçalho e menu.
- Hero inicial do Canteiro².
- Como funciona.
- Calculadora de área.
- Combinação de plantios.
- Resultado do planejamento.
- Grade visual do canteiro.
- Legenda das culturas.
- Comparação de culturas.
- Dicas sustentáveis.
- Sobre o projeto.
- Avisos educativos.
- Rodapé.

Use este arquivo para alterar textos, títulos, ordem das seções e elementos visíveis da página.

## Para que serve o `style.css`

O `style.css` controla a aparência do projeto. Ele define cores, espaçamentos, botões, cards, formulários, tabela, grade visual, foco visível e layout responsivo para desktop, tablet e celular.

## Para que serve o `script.js`

O `script.js` controla o comportamento do simulador. Ele carrega as culturas, calcula área, detecta formato do canteiro, calcula plantio único ou combinado, compara culturas, gera a grade visual, cria a legenda e salva o último planejamento no navegador.

## Para que serve o `README.md`

O `README.md` apresenta o projeto para avaliação e publicação. Ele reúne objetivo, tema do Agrinho 2026, funcionalidades, tecnologias utilizadas, estrutura de arquivos, acessibilidade, sustentabilidade, conceitos de programação, autoria, créditos e observação sobre uso de IA.

## Para que serve a pasta `img/`

A pasta `img/` guarda a logo e todos os ícones SVG locais usados pelo projeto. O site não usa imagens externas, CDN ou bibliotecas de ícones.

Arquivos principais:

- `logo-canteiro2.svg`
- `icon-horta.svg`
- `icon-area.svg`
- `icon-planta.svg`
- `icon-agua.svg`
- `icon-sol.svg`
- `icon-sustentabilidade.svg`
- `icon-alface.svg`
- `icon-cenoura.svg`
- `icon-tomate.svg`
- `icon-milho.svg`
- `icon-feijao.svg`
- `icon-mandioca.svg`
- `icon-morango.svg`
- `icon-cebolinha.svg`
- `icon-manjericao.svg`
- `icon-couve.svg`

## Onde mudar cores

As cores principais ficam no início do `style.css`, dentro de `:root`:

```css
--verde-principal: #2F9E44;
--verde-escuro: #1B5E20;
--amarelo-sol: #F4B400;
--fundo-claro: #F8FAF5;
--texto-escuro: #1E293B;
--branco: #FFFFFF;
```

Altere esses valores somente se a identidade visual do projeto mudar.

## Onde mudar textos

A maior parte dos textos está no `index.html`. Procure pelos títulos das seções:

- `#inicio`
- `#como-funciona`
- `#planejador`
- `#grade`
- `#comparacao`
- `#sustentabilidade`
- `#sobre`

Mensagens de cálculo, salvamento e limpeza ficam no `script.js`, principalmente dentro da função `mostrarMensagem()` e nas chamadas dessa função.

## Onde mudar autoria e informações institucionais

As informações de autoria aparecem no rodapé do `index.html` e na seção "Autoria" do `README.md`.

Dados atuais:

- Estudante: Diogo Guedes Bellon.
- Professor orientador: Henrique S. Lima.
- Escola: Colégio Estadual do Campo Antônio Paulo Lopes.

Se a autoria ou a escola mudarem, atualize os dois locais para manter o site e a documentação com as mesmas informações.

## Onde mudar culturas

As culturas ficam no início do `script.js`, no array `culturas`.

Cada cultura possui:

- `id`
- `nome`
- `espacamento`
- `sol`
- `ciclo`
- `icone`
- `cor`
- `dica`

Exemplo:

```js
{
    id: "alface",
    nome: "Alface",
    espacamento: 0.25,
    sol: "sol médio",
    ciclo: "ciclo curto",
    icone: "img/icon-alface.svg",
    cor: "#7CB342",
    dica: "Prefira solo úmido, boa ventilação e colheita no ponto certo."
}
```

## Onde mudar espaçamentos

Os espaçamentos também ficam no array `culturas`, dentro da propriedade `espacamento`. O valor é informado em metros.

Exemplos:

- `0.10` representa 10 centímetros.
- `0.25` representa 25 centímetros.
- `0.50` representa 50 centímetros.

Depois de alterar um espaçamento, teste o cálculo de plantas e a comparação de culturas.

## Onde mudar ícones

Os caminhos dos ícones ficam no array `culturas`, na propriedade `icone`, e também no `index.html` para os ícones das seções fixas.

Para trocar um ícone de cultura:

1. Substitua ou crie um arquivo SVG dentro da pasta `img/`.
2. Atualize o caminho no `script.js`.
3. Verifique se o arquivo abre corretamente no navegador.

## Onde mudar limite da grade

O limite de células visíveis fica no início do `script.js`:

```js
const LIMITE_CELULAS_GRADE = 120;
```

Esse limite evita que a grade fique pesada quando a quantidade estimada de plantas for muito grande.

## Onde mudar explicação da grade

A explicação fixa fica no `index.html`, dentro da seção `#grade`.

A explicação que muda conforme uma ou mais culturas selecionadas fica na função:

```js
atualizarExplicacaoGrade()
```

## Onde mudar dicas

Existem dois tipos de dicas:

- Dicas de manejo por cultura: ficam no array `culturas`, na propriedade `dica`.
- Dicas sustentáveis em cards: ficam no `index.html`, na seção `#sustentabilidade`.

## Onde mudar fórmulas

As principais fórmulas ficam no `script.js`.

Área total:

```js
calcularArea()
```

Formato do canteiro:

```js
definirFormatoGrade(largura, comprimento)
```

Cultura única:

```js
calcularPlantio(cultura, largura, comprimento)
```

Combinação de culturas:

```js
calcularPlantioCombinado(areaTotal, culturasSelecionadas)
```

Comparação de culturas:

```js
compararCulturas(areaTotal, culturasBase)
```

## Onde alterar funções principais

No `script.js`, as funções principais são:

- `carregarCulturas`: preenche os campos de seleção com as culturas.
- `calcularArea`: calcula largura vezes comprimento.
- `definirFormatoGrade`: identifica canteiro quadrado, horizontal ou vertical.
- `obterCulturasSelecionadas`: lê as culturas escolhidas e remove repetições.
- `calcularPlantio`: calcula cultura única com linhas e plantas por linha.
- `calcularPlantioCombinado`: divide a área entre 2 ou 3 culturas.
- `compararCulturas`: monta a tabela de comparação.
- `gerarGradeVisual`: cria as células coloridas da grade.
- `gerarLegendaCulturas`: monta a legenda abaixo da grade.
- `atualizarExplicacaoGrade`: ajusta o texto explicativo da distribuição.
- `mostrarMensagem`: mostra mensagens no painel de resultado.
- `limparPlanejamento`: limpa o simulador.
- `salvarPlanejamento`: salva dados no `localStorage`.
- `carregarPlanejamento`: carrega o último planejamento salvo.

## Onde alterar layout responsivo

Os ajustes responsivos ficam no final do `style.css`, nos blocos:

```css
@media (max-width: 980px) { ... }
@media (max-width: 720px) { ... }
@media (max-width: 420px) { ... }
```

No desktop, o site usa cabeçalho horizontal, hero em duas colunas, cards lado a lado e formulário com resultados em grid. No celular, os blocos viram uma coluna, os botões ficam largos e a grade reduz para caber melhor na tela.
