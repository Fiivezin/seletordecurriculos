// script.js
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

function formatarData(dataNascimento) {
    const data = new Date(dataNascimento);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const endereco = document.getElementById("endereco").value;
    const instagram = document.getElementById("instagram").value;
    const porqueContratar = document.getElementById("porqueContratar").value;


    const idade = calcularIdade(dataNascimento);
    const dataNascimentoFormatada = formatarData(dataNascimento);
    const numeroWhatsApp = idade >= 23 ? "15996695339" : "15992488837";

    const textoMensagem = `Nome: ${nome}
Idade: ${idade}
Data de Nascimento: ${dataNascimentoFormatada}
Endereço: ${endereco}
Instagram: ${instagram}
Por que deveríamos contratar você: ${porqueContratar}`;

    // WhatsApp URL encoding
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

    // Open the WhatsApp URL
    window.open(urlWhatsApp, "_blank");
}
