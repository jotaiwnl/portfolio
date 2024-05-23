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
function github() {
    var url = "https://github.com/jotaiwnl";
    window.open(url, '_blank');
}

function linkedin() {
    var url = "https://www.linkedin.com/in/joao-victor-8a976025b/";
    window.open(url, '_blank');
}
