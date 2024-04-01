// Height e Width
// Estas são as propriedades e métodos dos objetos Element e HTMLElement,
// a maioria delas são Read Only

const listaAnimais = document.querySelector('.animais');

listaAnimais.clientHeight; // retorna height + padding
listaAnimais.offsetHeight; // retorna height + padding + border
listaAnimais.scrollHeight; // retorna height total, mesmo dentro do scroll

/*
    Mesma coisa para o Width,
    clientWidth
    offsetWidth
    scrollWidth
*/


// offsetTop e offsetLeft

const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento 
// e o canto esquerdo da página
section.offsetLeft;


// getBoundingClientRect()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const sectionAnimais = document.querySelector('.animais');

const rect = sectionAnimais.getBoundingClientRect();
rect.height; // heigth do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll


// Window

window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if(window.innerWidth < 600){
    console.log('Tela menor que 600px');
}


// matchMedia()
// Utilize um media-querie como no CSS para verificar a largura do browser

// const small = window.matchMedia('(max-width: 600px)'); // Passa um Media-Query igual ao css
const small = window.matchMedia('(max-width: 600px)').matches; // matches retorna true ou false dependendo do valor passado em marchMedia

if(small){ 
    console.log('Tela menor que 600px');
}else{
    console.log('Tela maior que 600px');
}


// Exercícios

// Verifique a distância da primeira imagem em relação ao topo da página.
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(img);
console.log(imgTop);


// Retorne a soma das largutas de todas as imagens.

function somaImagens(){
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });
    console.log(soma);
}

window.onload = function(){  // onload -> Método de load
    somaImagens();
}

// Verifique se os links da pagina possuem o minimo recomendado para telas utilizandas com o dedo.
// (48xp/48px de acordo com o google).
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeigth = link.offsetHeigth;

    if(linkWidth >= 48 && linkHeigth >= 48){
        console.log(link, 'Possui acessibilidade');
    }else{
        console.log(link, 'Não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px adicione a classe menu-mobile ao menu.
const browserSmall = window.matchMedia('max-width: 720px').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}