let main = document.getElementById('main');
let btnStack = document.getElementById('btnStack');
let btnProyectos = document.getElementById('btnProyectos');
let btnContacto = document.getElementById('btnContacto');


let stack = `<div class="stack">
<div>
    <img src="./img/htmlLogo.png" alt="Logo HTML">
    <h3>HTML</h3>
</div>
<div>
    <img src="./img/cssLogo.png" alt="Logo CSS">
    <h3>CSS</h3>
</div>
<div>
    <img src="./img/jsLogo.png" alt="Logo JavaScript">
    <h3>JavaScript</h3>
</div>
<div>
    <img src="./img/pythonLogo.png" alt="Logo Python">
    <h3>Python</h3>
</div>
</div>`;

let proyectos = `<div class="proyectos">
<div>
    <h3>Calculadora simple</h3>
    <div>
        <a href="https://alejandrogodoyoficial.github.io/simpleCalculator/"><img src="./img/proyecto1.png" alt="Calculadora simple"></a>
    </div>
</div>
<div>
    <h3>Web para una heladería</h3>
    <div>
        <a href="https://alejandrogodoyoficial.github.io/heladeriaPepe/"><img src="./img/proyecto2.png" alt="Web para una heladeria"></a>
    </div>
</div>
<div>
    <h3></h3>
    <div>
        <h3>Mas proyectos</h3>
        <a href="https://github.com/alejandrogodoyoficial"><img src="./img/githubLogo.png" alt="Mas Proyectos"></a>
    </div>
</div>
</div>`;

let contacto = `<div class="contacto">
<div>
    <p>Escríbeme:</p>
    <a href="https://www.linkedin.com/in/alejandrogodoyoficial/">LinkedIn</a><br>
    <a href="mailto:alegodoy2013@gmail.com">Email</a>
</div>
</div>`;

btnStack.addEventListener('click', function (){
    main.innerHTML = stack;
});
btnProyectos.addEventListener('click', function (){
    main.innerHTML = proyectos;
});
btnContacto.addEventListener('click', function (){
    main.innerHTML = contacto;
});


let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', function (){
    document.getElementById('responsiveMenu').style.display = 'flex';
});

closeMenu.addEventListener('click', function (){
    document.getElementById('responsiveMenu').style.display = 'none';
});

let btnStack2 = document.getElementById('btnStack2');
let btnProyectos2 = document.getElementById('btnProyectos2');
let btnContacto2 = document.getElementById('btnContacto2');

btnStack2.addEventListener('click', function (){
    main.innerHTML = stack;
    document.getElementById('responsiveMenu').style.display = 'none';
});

btnProyectos2.addEventListener('click', function (){
    main.innerHTML = proyectos;
    document.getElementById('responsiveMenu').style.display = 'none';
});

btnContacto2.addEventListener('click', function (){
    main.innerHTML = contacto;
    document.getElementById('responsiveMenu').style.display = 'none';
});