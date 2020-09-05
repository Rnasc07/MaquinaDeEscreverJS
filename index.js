const elementText = document.querySelector('h1');
const charsText = elementText.innerHTML.split(''); //Para pegar cada letra 

//Iniciar sem nada escrito dentro
elementText.innerHTML = '';

for(let i = 0; i < charsText.length; i++){
    setTimeout(function(){
        elementText.innerHTML += charsText[i]; 
    }, 60 * i);
}
