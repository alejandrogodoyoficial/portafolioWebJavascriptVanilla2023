let imagenLinkedin = document.getElementById('imagenLinkedin');

imagenLinkedin.addEventListener('mouseover',function (){
    imagenLinkedin.setAttribute('src', './img/AlejandroGodoyFotoPerfil.jpg');
})
imagenLinkedin.addEventListener('mouseout',function (){
    
    imagenLinkedin.setAttribute('src', './img/logoLinkedin.png');
})
