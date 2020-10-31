let listaSolicitacoes = document.querySelectorAll('#modais');

console.log("qtde de registros: " + listaSolicitacoes.length);

for (let i = 0; i < listaSolicitacoes.length; i++) {
    listaSolicitacoes[i].addEventListener('click', (evento) => {
        let elementoClicado = evento.target;

        if (elementoClicado.dataset.type == 'cancelar') {
            let solicitacaoId = elementoClicado.dataset.ref;

            console.log("registro excluido: " + elementoClicado.dataset.ref);

            fetch(`http://localhost:3000/solicitacoes_cliente/${solicitacaoId}`, { method: 'DELETE' })
                .then(resposta => {

                    let tr = elementoClicado.closest(`#cancelar_${solicitacaoId}`);
                    tr.remove();
                    window.location.reload();
                })
                .catch(erro => console.log(erro));
        }
    });
}