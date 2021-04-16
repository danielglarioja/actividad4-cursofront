
/* MODULO DEL EVENTO CLICK PARA LOS BOTONES DE MAS INFO*/
const variosbtn = document.querySelectorAll('#btnvarios');

variosbtn.forEach(function(item){
    item.addEventListener('click', function(){
        alert(' evento hecho en Js - click en boton ') 
    });
    
});
 /* MODULO DEL EVENTO ONMOUSEOVER/OUT PARA LAS
 IMAGENES DE ESTA PAGINA */
const mouseon = document.querySelectorAll('#onmouse');

mouseon.forEach(function mifuncion(item){
    item.addEventListener('mouseover', function pasarmouse(){
        item.style.opacity ='0.7';
    });
    item.addEventListener('mouseout', function sacarmouse(){
        item.style.opacity ='1';
    });

});

/* MODULO DEL EVENTO CLICK PARA LOS BOTONES DE VACANTES*/
const btnvacantes = document.querySelectorAll('#btnvacantes');

btnvacantes.forEach(function(item){
    item.addEventListener('click', function(){
        window.location.assign('./contacto.html');
        alert("Seras dirigido a la seccion de contacto, completa el formulario indicando el numero de vacante de tu interes. Gracias")        
    });    
});

/* EL SIGUIENTE CODIGO FUNCIONA PERO LO HE REEMPLAZADO
 POR UNO ANTERIOR PARA RECORRER EL ARRAY QUE DEVUELVE EL 
 "querySelectorAll" Y EVITAR REALIZAR TANTOS EventListener /*

/*let element1 = document.querySelector("#btn1-serv");
element1.addEventListener("click",()=> {
    alert("evento click en Js - Credito Personal");  
})

let element2 = document.querySelector("#btn2-serv");
element2.addEventListener("click",()=> {
    alert("evento click en Js - Credito Jubilados");  
})

let element3 = document.querySelector("#btn3-serv");
element3.addEventListener("click",()=> {
    alert("evento click en Js - Credito Estudiantes");  
})

let element4 = document.querySelector("#btn4-serv");
element4.addEventListener("click",()=> {
    alert("evento click en Js - Credito Prendario");  
})

let element5 = document.querySelector("#btn5-serv");
element5.addEventListener("click",()=> {
    alert("evento click en Js - Credito Hipotecario");  
})

let element6 = document.querySelector("#btn6-serv");
element6.addEventListener("click",()=> {
    alert("evento click en Js - Credito Haberes");  
})
*/
