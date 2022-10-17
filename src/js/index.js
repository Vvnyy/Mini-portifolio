/*
    objetivo - qquando clicarmos na aba tem,os que mostrar o conteudo da aba que foi
    clicada pelo usuario e esconder o conteudo da aba anterior

    passo 1 - DAR UM JEITO DE PEGAR ELEMENTOS QUE REPRESENTAM AS ABAS NO HTML

    PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE NO ELEMENTO DA ABA

    PASSO 3 - QUANDO O USUARIO CLICAR, DESMARCAR A ABA SELECIONADA

    PASSO 4 - MARCAR A ABA CLICADA COMO SELECIONADO

    PASSO 5 - ESCONDER O CONTEUDO ANTERIOR

    PASSO 6 - MOSTRAR O CONTEUDO DA ABA SELECIONADA

*/

//PASSO 1

const abas = document.querySelectorAll(".aba");



abas.forEach(aba => {
    // PASSO 2
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecioarAba(aba)
       mostrarInformacoesDaAba(aba)
    });
});

function selecioarAba(aba){
    //PASSO 3
    const abaSelecionado = document.querySelector(".aba.selecionado");
    abaSelecionado.classList.remove("selecionado")

     //PASSO 4
     aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
     //PASSO 5
     const informacaoSelecionado = document.querySelector(".informacao.selecionado");
     informacaoSelecionado.classList.remove("selecionado");

     //PASSO 6
     const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

     const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
     informacaoASerMostrada.classList.add("selecionado")

}