const indoAliButton = document.querySelector("#indo-ali-button");
const indoAli = document.querySelector("#indo-ali");

const voltanoButton = document.querySelector("#voltano-button");
const voltano = document.querySelector("#voltano");

const audio = new Audio("audio/indo-ali.mp3");


function zoomIn() {
    indoAli.style.display = "block";
    setTimeout("indoAli.style.display = 'none';", 10000);
    audio.play();
    setTimeout("audio.pause()", 10000);
}

function zoomOut() {
    voltano.style.display = "block";
    setTimeout("voltano.style.display = 'none';", 10000);
    audio.play();
    setTimeout("audio.pause()", 10000);
}

