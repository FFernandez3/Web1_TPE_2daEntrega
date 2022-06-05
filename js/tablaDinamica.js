document.addEventListener("DOMContentLoaded", iniciarPAgina);
function iniciarPAgina () {
    "use strict";
    let tabla = [{ //cada objeto es un tr
        genero :"Romance", //cada uno de estos es un td
        titulo: "Aterrizaje de emergencia en tu corazon",
        año: 2019,
        capitulos: 16,
        estado: "finalizado"
    }
    ];

    document.querySelector("#btn-agregar"). addEventListener("click", agregarRecomendacion);
    document.querySelector("#btn-agregar3").addEventListener("click", agregar3);
    document.querySelector("#btn-borrar").addEventListener("click", borrarTabla);
  
    function agregarRecomendacion(){
        let genero=document.querySelector("#genero").value;
        let titulo=document.querySelector("#titulo").value;
        let año=document.querySelector("#año").value;
        let capitulos= document.querySelector("#capitulos").value;
        let estado=document.querySelector("#estado").value;
        event.preventDefault();  
        let recomendaciones =   {
                genero: genero,
                titulo: titulo,
                año: año,
                capitulos: capitulos,
                estado: estado,
            }  
        tabla.push(recomendaciones);
    mostrarTabla();
    }

    function agregar3(){
        let i =0;
        while(i<3){
            agregarRecomendacion();
            i++;
        }
        mostrarTabla();
    }

    function borrarTabla() {
        tabla=[];
        mostrarTabla();
    }

    function mostrarTabla() {
        let tablaDom=document.querySelector("#cuerpoTabla");
        tablaDom.innerHTML="";
        for (const elem of tabla) {
            tablaDom.innerHTML+= `  <tr>
                                        <td> ${elem.genero}</td>
                                        <td>${elem.titulo} </td>
                                        <td>${elem.año}</td>
                                        <td>${elem.capitulos}</td>
                                        <td>${elem.estado}</td>
                                    </tr>`                                     
        }
        removerDatosInputs();
    }
    function removerDatosInputs(){
        //console.log("se ejecuta remover");
        let genero=document.querySelector("#genero").value='';
        let titulo=document.querySelector("#titulo").value='';
        let año=document.querySelector("#año").value='';
        let capitulos= document.querySelector("#capitulos").value='';
        let estado=document.querySelector("#estado").value='';
       
    }
}
