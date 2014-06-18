var contador= 0;
function one(obj) 
{
    obj.style.backgroundColor="#32CD32";
    obj.innerHTML="Correcto";
      contador++;
    alert("Tu puntuación es: "+contador);
}

function two(obj) 
{
   obj.style.backgroundColor="red";
   obj.innerHTML="Incorrecto";
   contador+0;
   alert("Tu puntuación es: "+contador)
}

$(document).ready(function(){
  $(".p").click(function(){
    $("#eliminado").fadeOut()
  });
});

$(document).on('ready',function (){
        $('button').on('click',function(){
          var nuevo_e = $('<div id="buy"><h2>Estoy jugando</h2><div id="botones"><button id="test" class="p" onclick="two(this)";>Im flaying</button><button id="test"class="p" onclick="one(this)";>Im playing</button><button id="test"class="p" onclick="two(this)";>Im working</button><button id="test"class="p" onclick="two(this)";>Im makeing</button></div></div>')
          $('article').append(nuevo_e)  
        })

      })
