function validarCnpj(cnpj)
{
    $.ajax({

        'url':'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type': 'GET', 
        'dataType': 'jsonp',
        'sucess': function(dado)
        {
            if(dado.nome == undefined)
            {
                alert(dado.status + '' + dado.message);
            }
            else {
                document.getElementById('razaoSocial').value = dado.nome;
                document.getElementById('nomeFantasia').value = dado.fantasia;
                document.getElementById('abertura').value = dado.abertura;
                document.getElementById('situacao').value = dado.situacao;
                document.getElementById('endereco').value = `${dado.logradouro}-${dado.numero}`;
                document.getElementById('municipio').value = dado.municipio;
                document.getElementById('uf').value = dado.uf;
                document.getElementById('contato').value = dado.telefone;
            }
        }

    })
}