const LIMITE_CELULAS_GRADE = 120;

const culturas = [
    {
        id: "alface",
        nome: "Alface",
        espacamento: 0.25,
        sol: "sol médio",
        ciclo: "ciclo curto",
        icone: "img/icon-alface.svg",
        cor: "#7CB342",
        dica: "Prefira solo úmido, boa ventilação e colheita no ponto certo."
    },
    {
        id: "cebolinha",
        nome: "Cebolinha",
        espacamento: 0.15,
        sol: "sol médio",
        ciclo: "ciclo curto",
        icone: "img/icon-cebolinha.svg",
        cor: "#43A047",
        dica: "Pode ser colhida aos poucos, preservando a base da planta."
    },
    {
        id: "cenoura",
        nome: "Cenoura",
        espacamento: 0.10,
        sol: "sol médio",
        ciclo: "ciclo médio",
        icone: "img/icon-cenoura.svg",
        cor: "#F28C28",
        dica: "Use solo fofo e sem pedras para favorecer raízes bem formadas."
    },
    {
        id: "couve",
        nome: "Couve",
        espacamento: 0.50,
        sol: "sol pleno",
        ciclo: "ciclo médio",
        icone: "img/icon-couve.svg",
        cor: "#2E7D32",
        dica: "Deixe espaço para as folhas crescerem e faça colheitas graduais."
    },
    {
        id: "tomate",
        nome: "Tomate",
        espacamento: 0.50,
        sol: "sol pleno",
        ciclo: "ciclo médio",
        icone: "img/icon-tomate.svg",
        cor: "#E53935",
        dica: "Use tutoramento e evite molhar demais as folhas."
    },
    {
        id: "milho",
        nome: "Milho",
        espacamento: 0.40,
        sol: "sol pleno",
        ciclo: "ciclo médio",
        icone: "img/icon-milho.svg",
        cor: "#F4B400",
        dica: "Plante em grupo para favorecer a polinização pelo vento."
    },
    {
        id: "feijao",
        nome: "Feijão",
        espacamento: 0.30,
        sol: "sol pleno",
        ciclo: "ciclo médio",
        icone: "img/icon-feijao.svg",
        cor: "#8D6E63",
        dica: "Ajuda na diversificação e pode melhorar a dinâmica do solo."
    },
    {
        id: "mandioca",
        nome: "Mandioca",
        espacamento: 0.90,
        sol: "sol pleno",
        ciclo: "ciclo longo",
        icone: "img/icon-mandioca.svg",
        cor: "#A1887F",
        dica: "Precisa de mais tempo e espaço; planeje sem apertar o canteiro."
    },
    {
        id: "morango",
        nome: "Morango",
        espacamento: 0.30,
        sol: "sol médio",
        ciclo: "ciclo médio",
        icone: "img/icon-morango.svg",
        cor: "#D81B60",
        dica: "Proteja os frutos do contato direto com o solo."
    },
    {
        id: "manjericao",
        nome: "Manjericão",
        espacamento: 0.25,
        sol: "sol médio",
        ciclo: "ciclo curto",
        icone: "img/icon-manjericao.svg",
        cor: "#00A676",
        dica: "Podas leves estimulam novas folhas e mantêm a planta vigorosa."
    }
];

let ultimoPlanejamento = null;

function formatarNumero(valor) {
    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function buscarCultura(id) {
    return culturas.find((cultura) => cultura.id === id);
}

function carregarCulturas() {
    const selects = [
        document.getElementById("cultura-principal"),
        document.getElementById("cultura-secundaria"),
        document.getElementById("cultura-complementar")
    ];

    selects.forEach((select, index) => {
        select.innerHTML = "";

        if (index > 0) {
            const opcaoVazia = document.createElement("option");
            opcaoVazia.value = "";
            opcaoVazia.textContent = "Nenhuma";
            select.appendChild(opcaoVazia);
        }

        culturas.forEach((cultura) => {
            const option = document.createElement("option");
            option.value = cultura.id;
            option.textContent = cultura.nome;
            select.appendChild(option);
        });
    });

    document.getElementById("cultura-principal").value = "alface";
    document.getElementById("cultura-secundaria").value = "cenoura";
    document.getElementById("cultura-complementar").value = "";
}

function calcularArea() {
    const largura = Number.parseFloat(document.getElementById("largura").value);
    const comprimento = Number.parseFloat(document.getElementById("comprimento").value);

    if (!Number.isFinite(largura) || !Number.isFinite(comprimento) || largura <= 0 || comprimento <= 0) {
        return null;
    }

    return {
        largura,
        comprimento,
        areaTotal: largura * comprimento
    };
}

function definirFormatoGrade(largura, comprimento) {
    const diferenca = Math.abs(largura - comprimento);
    const maiorMedida = Math.max(largura, comprimento);

    if (diferenca / maiorMedida <= 0.12) {
        return "quadrado";
    }

    if (largura > comprimento) {
        return "horizontal";
    }

    return "vertical";
}

function obterCulturasSelecionadas() {
    const ids = [
        document.getElementById("cultura-principal").value,
        document.getElementById("cultura-secundaria").value,
        document.getElementById("cultura-complementar").value
    ].filter(Boolean);

    const idsUnicos = [...new Set(ids)];
    return idsUnicos.map(buscarCultura).filter(Boolean);
}

function recomendacaoInicial(areaTotal, tipoEspaco, condicaoSol, disponibilidadeAgua) {
    if (areaTotal < 1) {
        return `Use poucas culturas de ciclo curto no espaço de ${tipoEspaco}, com atenção extra à irrigação.`;
    }

    if (disponibilidadeAgua === "baixa") {
        return "Priorize cobertura do solo, regas planejadas e culturas menos exigentes em água.";
    }

    if (condicaoSol === "pouca luz") {
        return "Escolha culturas que tolerem sol médio e observe o crescimento antes de ampliar o plantio.";
    }

    if (areaTotal >= 8) {
        return "Divida o espaço em setores para diversificar culturas e facilitar manejo, rotação e irrigação.";
    }

    return "Organize o canteiro em linhas simples, respeitando espaçamento e acesso para manutenção.";
}

function calcularPlantio(cultura, largura, comprimento) {
    const plantasPorLinha = Math.floor(largura / cultura.espacamento);
    const numeroLinhas = Math.floor(comprimento / cultura.espacamento);
    const quantidadePlantas = plantasPorLinha * numeroLinhas;

    return {
        cultura,
        percentual: 1,
        areaUsada: largura * comprimento,
        plantasPorLinha,
        numeroLinhas,
        quantidadePlantas
    };
}

function calcularPlantioCombinado(areaTotal, culturasSelecionadas) {
    const percentual = 1 / culturasSelecionadas.length;

    return culturasSelecionadas.map((cultura) => {
        const areaDaCultura = areaTotal * percentual;
        const quantidadePlantas = Math.floor(areaDaCultura / (cultura.espacamento * cultura.espacamento));
        const ladoEstimado = Math.sqrt(areaDaCultura);

        return {
            cultura,
            percentual,
            areaUsada: areaDaCultura,
            plantasPorLinha: Math.max(1, Math.floor(ladoEstimado / cultura.espacamento)),
            numeroLinhas: Math.max(1, Math.ceil(quantidadePlantas / Math.max(1, Math.floor(ladoEstimado / cultura.espacamento)))),
            quantidadePlantas
        };
    });
}

function calcularPlantioCompleto() {
    const medidas = calcularArea();

    if (!medidas) {
        mostrarMensagem("Informe largura e comprimento maiores que zero.");
        return null;
    }

    const culturasSelecionadas = obterCulturasSelecionadas();

    if (culturasSelecionadas.length === 0) {
        mostrarMensagem("Escolha pelo menos uma cultura para planejar o canteiro.");
        return null;
    }

    const formato = definirFormatoGrade(medidas.largura, medidas.comprimento);
    const tipoEspaco = document.getElementById("tipo-espaco").value;
    const condicaoSol = document.getElementById("condicao-sol").value;
    const disponibilidadeAgua = document.getElementById("disponibilidade-agua").value;
    const recomendacao = recomendacaoInicial(medidas.areaTotal, tipoEspaco, condicaoSol, disponibilidadeAgua);
    const resultados = culturasSelecionadas.length === 1
        ? [calcularPlantio(culturasSelecionadas[0], medidas.largura, medidas.comprimento)]
        : calcularPlantioCombinado(medidas.areaTotal, culturasSelecionadas);

    ultimoPlanejamento = {
        ...medidas,
        formato,
        tipoEspaco,
        condicaoSol,
        disponibilidadeAgua,
        recomendacao,
        resultados
    };

    renderizarResultados(ultimoPlanejamento);
    compararCulturas(ultimoPlanejamento.areaTotal, culturasSelecionadas);
    gerarGradeVisual(ultimoPlanejamento);
    gerarLegendaCulturas(ultimoPlanejamento.resultados);
    atualizarExplicacaoGrade(ultimoPlanejamento);
    mostrarMensagem("Planejamento calculado com estimativas educativas.");

    return ultimoPlanejamento;
}

function calcularPlantioFormulario(event) {
    event.preventDefault();
    calcularPlantioCompleto();
}

function renderizarResultados(planejamento) {
    document.getElementById("resultado-area").textContent = `${formatarNumero(planejamento.areaTotal)} m²`;
    document.getElementById("resultado-formato").textContent = planejamento.formato;
    document.getElementById("resultado-recomendacao").textContent = planejamento.recomendacao;

    const container = document.getElementById("resultado-culturas");
    container.innerHTML = "";

    planejamento.resultados.forEach((item) => {
        const card = document.createElement("article");
        card.className = "resultado-card";

        const avisoPequeno = planejamento.areaTotal < 1.5
            ? "<p><strong>Aviso:</strong> espaço pequeno; priorize poucas culturas e manejo cuidadoso.</p>"
            : "";

        card.innerHTML = `
            <h4>${item.cultura.nome} - ${Math.round(item.percentual * 100)}% do espaço</h4>
            <p><strong>Área usada:</strong> ${formatarNumero(item.areaUsada)} m²</p>
            <p><strong>Espaçamento:</strong> ${formatarNumero(item.cultura.espacamento)} m</p>
            <p><strong>Quantidade aproximada:</strong> ${item.quantidadePlantas} plantas</p>
            <p><strong>Linhas:</strong> ${item.numeroLinhas} | <strong>Plantas por linha:</strong> ${item.plantasPorLinha}</p>
            <p><strong>Dica:</strong> ${item.cultura.dica}</p>
            ${avisoPequeno}
        `;

        container.appendChild(card);
    });
}

function compararCulturas(areaTotal = 6, culturasBase = []) {
    const corpo = document.getElementById("comparacao-corpo");
    const selecionadas = culturasBase.length >= 3 ? culturasBase : [...culturasBase, ...culturas].filter((cultura, indice, lista) => {
        return lista.findIndex((item) => item.id === cultura.id) === indice;
    }).slice(0, 3);

    corpo.innerHTML = "";

    selecionadas.forEach((cultura) => {
        const quantidade = Math.floor(areaTotal / (cultura.espacamento * cultura.espacamento));
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td><img src="${cultura.icone}" alt="">${cultura.nome}</td>
            <td>${formatarNumero(cultura.espacamento)} m</td>
            <td>${quantidade} plantas</td>
            <td>${cultura.ciclo}</td>
            <td>${cultura.sol}</td>
            <td>${cultura.dica}</td>
        `;
        corpo.appendChild(linha);
    });
}

function calcularDimensoesGrade(formato, totalCelulas) {
    if (formato === "horizontal") {
        const colunas = Math.min(16, Math.ceil(Math.sqrt(totalCelulas * 1.8)));
        return { colunas, linhas: Math.ceil(totalCelulas / colunas) };
    }

    if (formato === "vertical") {
        const colunas = Math.max(4, Math.floor(Math.sqrt(totalCelulas * 0.65)));
        return { colunas, linhas: Math.ceil(totalCelulas / colunas) };
    }

    const colunas = Math.ceil(Math.sqrt(totalCelulas));
    return { colunas, linhas: Math.ceil(totalCelulas / colunas) };
}

function gerarGradeVisual(planejamento) {
    const grade = document.getElementById("grade-cultivo");
    const aviso = document.getElementById("aviso-grade");
    const totalEstimado = planejamento.resultados.reduce((soma, item) => soma + item.quantidadePlantas, 0);
    const totalCelulas = Math.max(1, Math.min(totalEstimado, LIMITE_CELULAS_GRADE));
    const dimensoes = calcularDimensoesGrade(planejamento.formato, totalCelulas);

    grade.className = `grade-cultivo ${planejamento.formato}`;
    grade.innerHTML = "";
    grade.style.gridTemplateColumns = `repeat(${dimensoes.colunas}, minmax(0, 1fr))`;
    aviso.hidden = totalEstimado <= LIMITE_CELULAS_GRADE;

    const celulasPorCultura = [];
    let celulasDistribuidas = 0;

    planejamento.resultados.forEach((item, index) => {
        const quantidade = index === planejamento.resultados.length - 1
            ? totalCelulas - celulasDistribuidas
            : Math.max(1, Math.round(totalCelulas * item.percentual));
        celulasDistribuidas += quantidade;
        celulasPorCultura.push({ item, quantidade });
    });

    celulasPorCultura.forEach(({ item, quantidade }) => {
        for (let i = 0; i < quantidade; i += 1) {
            const celula = document.createElement("div");
            celula.className = "celula-planta";
            celula.style.backgroundColor = item.cultura.cor;
            celula.title = item.cultura.nome;
            celula.setAttribute("aria-label", item.cultura.nome);

            const imagem = document.createElement("img");
            imagem.src = item.cultura.icone;
            imagem.alt = "";
            imagem.width = 24;
            imagem.height = 24;

            celula.appendChild(imagem);
            grade.appendChild(celula);
        }
    });
}

function gerarLegendaCulturas(resultados = []) {
    const legenda = document.getElementById("legenda-culturas");
    legenda.innerHTML = "";

    resultados.forEach((item) => {
        const elemento = document.createElement("div");
        elemento.className = "legenda-item";
        elemento.innerHTML = `
            <img src="${item.cultura.icone}" alt="">
            <div>
                <strong>${item.cultura.nome}</strong>
                <span>${item.quantidadePlantas} plantas - ${formatarNumero(item.areaUsada)} m² - ${Math.round(item.percentual * 100)}%</span>
            </div>
        `;
        legenda.appendChild(elemento);
    });
}

function atualizarExplicacaoGrade(planejamento) {
    const texto = planejamento.resultados.length > 1
        ? "A grade representa uma simulação visual do canteiro informado. Como há mais de uma cultura, o espaço foi dividido em partes aproximadas entre os plantios selecionados. Cada cor e ícone representa uma cultura diferente. A quantidade total é calculada pelo espaçamento médio de cada planta."
        : "A grade representa uma simulação visual do canteiro informado. Como há uma cultura selecionada, todo o espaço foi estimado com o espaçamento dessa planta. Cada célula indica uma posição de plantio aproximada.";

    document.getElementById("explicacao-grade").textContent = texto;
}

function mostrarMensagem(texto) {
    document.getElementById("mensagem").textContent = texto;
}

function limparPlanejamento() {
    document.getElementById("form-planejamento").reset();
    carregarCulturas();
    document.getElementById("resultado-area").textContent = "0 m²";
    document.getElementById("resultado-formato").textContent = "-";
    document.getElementById("resultado-recomendacao").textContent = "-";
    document.getElementById("resultado-culturas").innerHTML = "";
    document.getElementById("grade-cultivo").innerHTML = "";
    document.getElementById("legenda-culturas").innerHTML = "";
    document.getElementById("aviso-grade").hidden = true;
    ultimoPlanejamento = null;
    mostrarMensagem("Planejamento limpo. Informe novos dados para calcular.");
}

function salvarPlanejamento() {
    const planejamento = ultimoPlanejamento || calcularPlantioCompleto();

    if (!planejamento) {
        return;
    }

    const dadosFormulario = {
        largura: document.getElementById("largura").value,
        comprimento: document.getElementById("comprimento").value,
        tipoEspaco: document.getElementById("tipo-espaco").value,
        condicaoSol: document.getElementById("condicao-sol").value,
        disponibilidadeAgua: document.getElementById("disponibilidade-agua").value,
        culturas: [
            document.getElementById("cultura-principal").value,
            document.getElementById("cultura-secundaria").value,
            document.getElementById("cultura-complementar").value
        ]
    };

    localStorage.setItem("canteiro2-planejamento", JSON.stringify(dadosFormulario));
    mostrarMensagem("Planejamento salvo neste navegador com localStorage.");
}

function carregarPlanejamento() {
    const salvo = localStorage.getItem("canteiro2-planejamento");

    if (!salvo) {
        compararCulturas();
        calcularPlantioCompleto();
        return;
    }

    try {
        const dados = JSON.parse(salvo);
        document.getElementById("largura").value = dados.largura || 2;
        document.getElementById("comprimento").value = dados.comprimento || 3;
        document.getElementById("tipo-espaco").value = dados.tipoEspaco || "horta caseira";
        document.getElementById("condicao-sol").value = dados.condicaoSol || "sol pleno";
        document.getElementById("disponibilidade-agua").value = dados.disponibilidadeAgua || "média";
        document.getElementById("cultura-principal").value = dados.culturas?.[0] || "alface";
        document.getElementById("cultura-secundaria").value = dados.culturas?.[1] || "";
        document.getElementById("cultura-complementar").value = dados.culturas?.[2] || "";
        calcularPlantioCompleto();
        mostrarMensagem("Último planejamento carregado deste navegador.");
    } catch (erro) {
        localStorage.removeItem("canteiro2-planejamento");
        calcularPlantioCompleto();
    }
}

function conectarEventos() {
    document.getElementById("form-planejamento").addEventListener("submit", calcularPlantioFormulario);
    document.getElementById("botao-limpar").addEventListener("click", limparPlanejamento);
    document.getElementById("botao-salvar").addEventListener("click", salvarPlanejamento);

    ["largura", "comprimento", "tipo-espaco", "condicao-sol", "disponibilidade-agua", "cultura-principal", "cultura-secundaria", "cultura-complementar"].forEach((id) => {
        document.getElementById(id).addEventListener("change", calcularPlantioCompleto);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    carregarCulturas();
    conectarEventos();
    carregarPlanejamento();
});
