function clickMenu() {
    var itens = document.getElementById("itens");
    itens.classList.toggle('show');
}

function verificarLargura() {
    var itens = document.getElementById("itens");
    if (window.innerWidth >= 1024) {
        itens.classList.add('show');
    } else {
        itens.classList.remove('show');
    }
}
function curriculo() {
    var urlPDF = "curriculo-port.pdf";
    window.open(urlPDF, '_blank');
}


