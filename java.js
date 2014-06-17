function one(obj) 
{
    obj.style.backgroundColor="#32CD32";
    obj.innerHTML="Correcto";
}

function two(obj) 
{
   obj.style.backgroundColor="red";
   obj.innerHTML="Incorrecto";
}

$(document).ready(function(){
  $(".p").click(function(){
    $("#eliminado").fadeOut()
  });
});

$(document).on('ready',function (){
        $('button').on('click',function(){
          var nuevo_e = $('<div id="buy"><h2>Estoy jugando</h2><div id="botones"><button id="test" class="p" onclick="one(this)";>Im playing</button><button id="test"class="p" onclick="one(this)";>Im playing</button><button id="test"class="p" onclick="one(this)";>Im playing</button><button id="test"class="p" onclick="one(this)";>Im playing</button></div></div>')
          $('article').append(nuevo_e)  
        })

      })
