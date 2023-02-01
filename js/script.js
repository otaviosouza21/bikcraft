//ativar links do menu superior
const links = document.querySelectorAll(".header-menu a");

function linkAtivo(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(linkAtivo);

//ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Mostar perguntas frequentes

const pergunta = document.querySelectorAll(".perguntas button");

function show(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");

  pergunta.setAttribute("aria-expanded", ativa);
}

function mostraPergunta(pergunta) {
  pergunta.addEventListener("click", show);
}

pergunta.forEach(mostraPergunta);

// galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");
function trocaImg(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width:480px)").matches;

  if (media) {
    
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocaImg);
}

galeria.forEach(eventosGaleria);


//animação

if(window.SimpleAnime){
new SimpleAnime();
}