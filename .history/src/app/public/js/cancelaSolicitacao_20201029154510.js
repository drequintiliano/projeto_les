let tabelaSolicitacoes = document.getElementsByClassName('modalCancelar');



tabelaSolicitacoes.foreach(ouvintes);

function ouvintes() {
    tabelaSolicitacoes.addEventListener('click', (evento) => {
        let elementoClicado = evento.target;

        console.log("tam tab " + tabelaSolicitacoes.length);
        console.log("teste cancelar: " + elementoClicado.dataset.ref);

        if (elementoClicado.dataset.type == 'cancelar') {
            let solicitacaoId = elementoClicado.dataset.ref;
            console.log("if cancelar" + elementoClicado.dataset.ref);

            fetch(`http://localhost:3000/solicitacoes-cliente/${solicitacaoId}`, { method: 'DELETE' })
                .then(resposta => {

                    let tr = elementoClicado.closest(`#cancelar_${solicitacaoId}`);
                    tr.remove();
                })
                .catch(erro => console.log(erro));
        }
    })
}