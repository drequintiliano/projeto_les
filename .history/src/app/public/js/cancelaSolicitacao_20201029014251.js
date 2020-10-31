let tabelaSolicitacoes = document.getElementById('#cancelarSolicitacao');
tabelaSolicitacoes.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'cancelar') {
        let statusId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/solicitacoes-cliente/${statusId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#solicitacao_${statusId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});