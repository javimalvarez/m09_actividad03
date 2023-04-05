/*Función que valida si se ha escrito algún tipo de información en el elemento de formulario text
*en caso de no haber escrito información coloca el cursor en el campo y muestra una alerta al usuario
*si el usuario ha escrito algún texto muestra el texto mediante una alerta
*/
function validaText (){
    if ($("#text").val()==""){
        alert("No hay escrita ninguna información")
        $("#text").focus();
        return false;
    }
    else{
        alert("Has escrito el texto "+$("#text").val());
        return true;//Todo ok
        
    }
}

$(document).ready(
    function(){
        //Al colocar el ratón sobre setGreenColor cambia el color del texto del divTarget a verde
        $("#setGreenColor").mouseover(
            function(){
                $("#divTarget").css("color","green");
            }
        );
        
        //Al hacer click en setRedColor cambia el fondo del elemento a rojo
        $("#setRedColor").click(
            function(){
                $(this).css("background-color","red");
            }
        );
        
        //Oculta divTarget si se coloca el ratón encima de ToggleVisible
        $("#toggleVisible").mouseleave(
            function esconder(){
                $("#divTarget").toggle();
            }
        );
        
        //Al hacer clic en movContinuo desplaza el elemento
        $("#movContinuo").click(move);

        let mouseclicks=1;
        function move(){
            if (mouseclicks==1){
                $("#divTarget").animate({
                    left:"+=200px",
                },15000);
                alert("has hecho click "+mouseclicks+" vez, se mueve su posición 200px a la derecha");
                mouseclicks+=1;
                
            }
            else if (mouseclicks==2){
                $("#divTarget").stop();
                $("#divTarget").animate({
                    left:"-=100px",
                },15000);
                alert("has hecho click "+mouseclicks+" veces, se detiene y mueve su posición 100px a la izquierda");
                mouseclicks+=1;
            }
            else {
                $("#divTarget").stop(false,true)
                $("#divTarget").animate({
                    left:"+=100px",
                },15000);
                alert("has hecho click "+mouseclicks+" veces, se detiene y mueve su posición 100px a la derecha");
                mouseclicks=1;
            }
        }

        /*Crea una etiqueta div dentro de domNodes al pulsar sobre addDiv 
        *con el contenido escrito en el elemento text
        */
        function addDiv(){
            $("#domNodes").html(`<div class="addDiv">${$("#text").val()}</div>`);
        }

        $("#addDiv").click( function(){
            if (validaText()==true){
                addDiv();
            }
        });

        //Etiqueta div dentro de domNodes y clicable al pulsar sobre addSetContent

        //Variable newTag almacena info de la etiqueta div
        let newTag=$('<div class="setContent">SET CONTENT</div>')

        /*La función addDiv2 crea una etiqueta div clicable.
        *En caso de que el usuario pulse en la etiqueta creada,
        *cambia el texto de la nueva etiqueta
        *por el texto que haya escrito en el elemento text del formulario
        *se vuelve a llamar para ello a la función validaText()
        */
        function addDiv2(){
            $("#domNodes").append(newTag);
            newTag.click(function(){
                if (validaText()==true){
                    addDiv();
                }
            });
        };

        $("#addSetContent").click(function(){
            addDiv2();
        });

        let newTag2=$('<div class="delNode">DEL NODE PREV</div>')

        /*La función addDiv2 crea una etiqueta div clicable.
        *En caso de que el usuario pulse en la etiqueta creada,
        *elimina domNodes
        */
        function addDiv3(){
            $("#domNodes").append(newTag2);
            newTag2.click(function(){
                $("#domNodes").remove()
            });
        };

        $("#addDelNodePrev").click(function(){
            addDiv3();
        });

        //Slider
        $("#slider").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<button type="button" class="slick-next">Next</button>',
            nextArrow: '<button type="button" class="slick-prev">Previous</button>',
            responsive: [
                {
                    breakpoint: 800, settings: {
                        slidesToShow: 2,
                        slidesToScroll:1,
                        arrows: false,
                        autoplay: false,
                        dots: true,
                    }
                }
            ]
        });
    }
);   