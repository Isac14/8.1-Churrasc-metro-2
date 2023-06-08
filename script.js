// Carne: 400g por pessoa e se for +6h: 650g
// Cerveja: 1200ml por pessoa e se for +6h: 2000ml
// Regrigerante: 1000ml por pessoa e se for +6h: 1500ml

// Crianças valem por 0.5

// Pegando cada input
let inputAdultos = document.querySelector('#adultos')
let inputCriancas = document.querySelector('#criancas')
let inputDuracao = document.querySelector('#duracao')

let resultados = document.querySelector('#resultado')

function calcular(){
    console.log('calculando...')
    // Pegando os valores
    let qtdeAdultos = inputAdultos.value
    let qtdeCriancas = inputCriancas.value
    let qtdeDuracao = inputDuracao.value

    let qtdeCarne = carnePP(qtdeDuracao) * qtdeAdultos + ((carnePP(qtdeDuracao) / 2) * qtdeCriancas)
    let qtdeCerveja = cervejaPP(qtdeDuracao) * qtdeAdultos
    let qtdeRefrigerante = refrigerantePP(qtdeDuracao) * qtdeAdultos + ((refrigerantePP(qtdeDuracao) / 2) * qtdeCriancas)

    // Mostrando no site
    let resultadoCarne = document.querySelector('#carne')
    let resultadoCerveja = document.querySelector('#cerveja')
    let resultadoRefrigerante = document.querySelector('#refrigerante')

    resultadoCarne.innerHTML = qtdeCarne/1000 + ' kg de carne'
    resultadoCerveja.innerHTML = qtdeCerveja/1000 + ' L de cerveja'
    resultadoRefrigerante.innerHTML = qtdeRefrigerante/1000 + ' L de refrigerante'
}

// Funções para descobrir qual será a quantidade por pessoa (PP) de cada componente
function carnePP(duracao){
    if (duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function refrigerantePP(duracao){
    if (duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}