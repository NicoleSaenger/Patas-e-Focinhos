document.addEventListener('DOMContentLoaded', function() {
    /*-----------------------Seções-----------------------*/
    const loginSection = document.getElementById('login-section');
    const cadastroSection = document.getElementById('cadastro-section');
    const produtosServicosSection = document.getElementById('produtos-servicos-section');
    const agendamentoSection = document.getElementById('agendamento-section');

    /*-----------------------Botões-----------------------*/

    /*---------Header---------*/
    const botaoEntrarCadastrar = document.getElementById('EntrarCadastrar');
    const botaoLogo = document.getElementById('logo');

    /*---------Página Login---------*/
    const linkCadastro = document.getElementById('cadastre-se');
    const botaoLogar = document.getElementById('botaoLogar');

    /*---------Página Cadastro---------*/
    const botaoFinalizaCadastro = document.getElementById('botaoFinalizaCadastro');
    const voltarLogin = document.getElementById('voltarLogin');

    /*---------Página Home---------*/
    const botaoAgendarServico = document.getElementById('btn-agendamento');

    /*---------Página Agendamento---------*/
    const botaoFinalizarAgendamento = document.getElementById('btn-agendar');
    

    // Função para ocultar todas as seções
    function ocultarTodasSecoes() {
        const secoes = [loginSection, cadastroSection, produtosServicosSection, agendamentoSection];
        secoes.forEach(secao => {
            secao.classList.add('d-none');
            secao.classList.remove('d-flex');
        });
    }


    // Função para exibir uma seção específica
    function exibirSecao(secao) {
        ocultarTodasSecoes(); // Oculta todas as seções
        secao.classList.remove('d-none');
        secao.classList.add('d-flex'); //Adiciona seção desejada
    }


    // Inicia com a tela de login
    exibirSecao(loginSection);


    // Eventos dos botões para alternar as seções quando clicados
    botaoEntrarCadastrar.addEventListener('click', function() {
        exibirSecao(cadastroSection);
    });

    linkCadastro.addEventListener('click', function(e) {
        e.preventDefault();
        exibirSecao(cadastroSection);
    });

    botaoFinalizaCadastro.addEventListener('click', function(e) {
        e.preventDefault();
        exibirSecao(produtosServicosSection);
    });

    botaoLogar.addEventListener('click', function(e) {
        e.preventDefault();
        exibirSecao(produtosServicosSection);
    });

    voltarLogin.addEventListener('click', function(e) {
        e.preventDefault();
        exibirSecao(loginSection);
    });

    botaoLogo.addEventListener('click', function(e) {
        e.preventDefault();
        exibirSecao(produtosServicosSection);
    });

    botaoAgendarServico.addEventListener('click', function(e) {
        e.preventDefault();
        exibirSecao(agendamentoSection);
    });

    botaoFinalizarAgendamento.addEventListener('click', function(e) {
        e.preventDefault();
        exibirSecao(produtosServicosSection);
    });
});
