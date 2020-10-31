// let tabelaSolicitacoes = document.querySelector('#modais');

// tabelaSolicitacoes.addEventListener('click', (evento) => {
//     let elementoClicado = evento.target;

//     console.log("tam tab " + tabelaSolicitacoes.length);
//     console.log("teste cancelar: " + elementoClicado.dataset.ref);

//     if (elementoClicado.dataset.type == 'cancelar') {
//         let solicitacaoId = elementoClicado.dataset.ref;
//         console.log("if cancelar" + elementoClicado.dataset.ref);

//         fetch(`http://localhost:3000/solicitacoes-cliente/${solicitacaoId}`, { method: 'DELETE' })
//             .then(resposta => {

//                 let tr = elementoClicado.closest(`#cancelar_${solicitacaoId}`);
//                 tr.remove();
//             })
//             .catch(erro => console.log(erro));
//     }
// })

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