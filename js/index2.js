$(document).ready(function(){

  var tabla = $("#selectPixeles");
 
  tabla.fadeIn(500);
for (var i = 0; i < 200; i++) {
  tabla.append("<tr id='row"+i+"'>");
  for (var j = 0; j < 200; j++) {
    $("#row"+i+"").append("<><td class='selectPixel'    id='"+i+"_"+j+"' >");
 
  }
}

allPixeles2();
getAristas();
getNodos2();
zoom2();
var height = $(window).height();
  $('.conteiner').css("height",height);
});




$(window).resize(function() {
  var height = $(window).height();

      $('.conteiner').css("height",height);

  var width = $(window).width();
  if(width>=769){
    zoom2();
  }else if(width >= 579)
  {
    zoom2();
  }else{
    zoom3();    
  }


});

$("#zoomOut").on("click", function(){
 if(zoomMap==1){
    zoom2();
  }else if(zoomMap==2){
    zoom3();
  }else{
    
  }
});
$("#zoomIn").on("click", function(){
 if(zoomMap==4){
    zoom2();
  }else if(zoomMap==2){
    zoom1();
  }else{
    
  }
});

function zoomClick(){
  if(zoomMap==1){
    zoom2();
  }else if(zoomMap==2){
    zoom3();
  }else{
    if(zoomMap==4){
    zoom2();
  }else if(zoomMap==2){
    zoom1();
  }else{
    
  }
  }
}



function zoom1(){
console.log("zoom 1");
 $(".classZoomMap").css("height",2000);
    $(".classZoomMap").css("width",2000);
    $("#myCanvas").attr("width",2000);
    $("#myCanvas").attr("height",2000);
    if($("#selectPixeles").hasClass("hide")==true)
    {
     
    }else{
      $("#selectPixeles").removeClass("hide");
    }
    $("#myCanvas").css("top","0px");
    $("#addRuta").show();
    $("#selectPixeles").css("top","0px");
    $("#selectPixeles").css("left","0px");
    var canvas = document.getElementById("myCanvas");
    canvas.width=canvas.width;
    zoomMap=1;
    camino = new Array();
    if(switchRutas==1)
    { 
      Dijkstra(nodoInicio,nodoFinal);
    }else if(switchRutas==2)
    {
      getAllAristas();
    }
}

function zoom2(){
console.log("zoom 2");
 $(".classZoomMap").css("height",1000);
    $(".classZoomMap").css("width",1000);
     $(".classZoomMap").css("margin-left", "10%");
     $(".classZoomMap").css("margin-top", "5%");
     $("#myCanvas").attr("width",1000);
     $("#myCanvas").attr("height",1000);
     $("#myCanvas").css("margin-left", "10%");
     $("#myCanvas").css("margin-top", "5%");
     if($("#selectPixeles").hasClass("hide")==true)
    {
    }else{
      $("#selectPixeles").removeClass("hide");
    }
     $("#myCanvas").css("top","15px");
     $("#myCanvas").css("left","6px");
     $("#addRuta").hide();
     $("#selectPixeles").css("top","20px");
     $("#selectPixeles").css("left","5px");
     $(".selectPixel").css("width","1px");
      var canvas = document.getElementById("myCanvas");
      canvas.width=canvas.width;
      zoomMap=2;
      camino = new Array();
    if(switchRutas==1)
    {
      Dijkstra(nodoInicio,nodoFinal)
    }else if(switchRutas==2)
    {
      getAllAristas();
    }
}

function zoom3(){
  console.log("zoom 3");
 $(".classZoomMap").css("height",500);
    $(".classZoomMap").css("width",500);
    $("#myCanvas").attr("width",500);
    $("#myCanvas").attr("height",500);
    if($("#selectPixeles").hasClass("hide")==true)
    {
    }else{
    }
    $("#myCanvas").css("top","22px");
     $("#myCanvas").css("left","6px");
     $("#addRuta").hide();
     $("#selectPixeles").css("top","62px");
     $("#selectPixeles").css("left","15px");
     var canvas = document.getElementById("myCanvas");
     canvas.width=canvas.width;
     zoomMap=4;
    camino = new Array();
if(switchRutas==1)
    {  
      Dijkstra(nodoInicio,nodoFinal);
    }else if(switchRutas==2)
    {
      getAllAristas();
    }
  }




//funciones para los mapas hover
var camino = new Array();
var strCamino="";
    var lastC1=0;
    var lastC2=0;
    var countCamino=0;

function imap()
{
  $('#label').remove();

   $("#map").attr("src","");
}

function showmap(id_sala){
$("#map").attr("src","src/"+id_sala+".png");


}
//abrir y cerrar nav de informacion
  function closeNav(){
    allPixeles2();
    $("#selectPixeles").removeClass("hide");
    $("#salas").attr("src","src/mapasalas.png");
    $("#flags").attr("src","src/flags.png");
    $(".sidenav").hide();
    $("#infoRecursos").slideUp();
    $("#mainMapa").removeClass("col-xl-8 col-lg-7 col-md-6");
    $("#mainMapa").addClass("col-12");
    $("#mainMapa").show();


    $("#closeNav").css('display','none');
    $("#selected").attr("src","");
    $("#OpenNav").css('display','none');
    closeUbic();
    $("#input-buscar2").val("");
  }

 
  

//buscar por nombre onkeyup
function busquedaNombre(){
    var nombre = $("#input-buscar").val();
     $("#collapse-cap").removeClass("show");
    $("#collapse-recursos").removeClass("show");
  //$("#addRuta").show();
  //$("#saveRuta").hide();
  //$("#cerrar-Ruta").hide();
  $("#btn-area-cancel").hide();
  $("#select-area").show();
 limpiarCanvas();
      if(nombre==""){
      $("#salasBusqueda").html("");
    }else{
          BuscarNombre(nombre);

    }
  }

//cerrar boton de filtro
  $("#btn-cap-cerrar").on("click",function(){
    $("#btn-cap-cerrar").hide();
    $("#btn-cap").show();
    $("#collapse-cap").hide();
  
  var VDI = $("#chbx-VDI").val(0);
  var interfon = $("#chbx-interfon").val(0);
  var pantalla = $("#chbx-pantalla").val(0);
  var proyector = $("#chbx-proyector").val(0);
  var TP = $("#chbx-TP").val(0);

  $("#chbx-VDI").attr("checked",false);
  $("#chbx-interfon").attr("checked",false);
  $("#chbx-pantalla").attr("checked",false);
  $("#chbx-proyector").attr("checked",false);
  $("#chbx-TP").attr("checked",false);

  });

//buscar por capacidad
$("#btn-cap").on("click",function(){
 
  var VDI = $("#chbx-VDI").val(0);
  var interfon = $("#chbx-interfon").val(0);
  var pantalla = $("#chbx-pantalla").val(0);
  var proyector = $("#chbx-proyector").val(0);
  var TP = $("#chbx-TP").val(0);

  $("#chbx-VDI").attr("checked",false);
  $("#chbx-interfon").attr("checked",false);
  $("#chbx-pantalla").attr("checked",false);
  $("#chbx-proyector").attr("checked",false);
  $("#chbx-TP").attr("checked",false);

    $("#btn-cap-cerrar").show();
    $("#btn-cap").hide();
    $("#collapse-cap").show();
  var cap = $("#lb-cap").text();
  var lb_cap = $("#lb-cap").text();
  var cap = parseInt(lb_cap);
  var VDI = $("#chbx-VDI").val();
  var interfon = $("#chbx-interfon").val();
  var pantalla = $("#chbx-pantalla").val();
  var proyector = $("#chbx-proyector").val();
  var TP = $("#chbx-TP").val();
});

//buscar por recuros
  var lb_cap = 0 ;
  var cap = 0 ;
  var VDI = 0 ;
  var interfon = 0 ;
  var pantalla = 0 ;
  var proyector = 0 ;
  var TP = 0 ;

function buscarRecurso(dato){
  

  switch(dato.className){
    case "chbx-VDI":
      if(VDI==0)
      {
        $("."+dato.className+"").attr("src","src/switch2.svg");
        VDI=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/switch1.svg");
        VDI=0;

      }
      break;

    case "chbx-interfon":
      if(interfon==0)
      {
        $("."+dato.className+"").attr("src","src/switch2.svg");
        interfon=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/switch1.svg");
        interfon=0;

      }
      break;

    case "chbx-pantalla":
      if(pantalla==0)
      {
        $("."+dato.className+"").attr("src","src/switch2.svg");
        pantalla=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/switch1.svg");
        pantalla=0;

      }
      break;
   case "chbx-proyector":
      if(proyector==0)
      {
        $("."+dato.className+"").attr("src","src/switch2.svg");
        proyector=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/switch1.svg");
        proyector=0;

      }
      break;
      case "chbx-tp":
      if(TP==0)
      {
        $("."+dato.className+"").attr("src","src/switch2.svg");
        TP=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/switch1.svg");
        TP=0;

      }
      break;
      case "chbx-VDI2":
      if(VDI==0)
      {
        $("."+dato.className+"").attr("src","src/iconos/vdi.png");
        VDI=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/iconos/vdi_off.png");
        VDI=0;

      }
      break;

    case "chbx-interfon2":
      if(interfon==0)
      {
        $("."+dato.className+"").attr("src","src/iconos/telefono.png");
        interfon=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/iconos/telefono_off.png");
        interfon=0;

      }
      break;

    case "chbx-pantalla2":
      if(pantalla==0)
      {
        $("."+dato.className+"").attr("src","src/iconos/pantalla.png");
        pantalla=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/iconos/pantalla_off.png");
        pantalla=0;

      }
      break;
   case "chbx-proyector2":
      if(proyector==0)
      {
        $("."+dato.className+"").attr("src","src/iconos/proyector.png");
        proyector=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/iconos/proyector_off.png");
        proyector=0;

      }
      break;
      case "chbx-tp2":
      if(TP==0)
      {
        $("."+dato.className+"").attr("src","src/iconos/teleconferencia.png");
        TP=1;
      }else
      {
         $("."+dato.className+"").attr("src","src/iconos/teleconferencia_off.png");
        TP=0;

      }
      break;
  }

  $(".selectPixel").removeAttr("onmouseover");
  BuscarRec(cap,VDI,interfon,pantalla,proyector,TP);
}







function KeyUpBuscar(id){
  //$("#addRuta").show();
  //$("#saveRuta").hide();
  //$("#cerrar-Ruta").hide();
  $("#btn-area-cancel").hide();
  $("#select-area").show();
  $("#nosala").attr("disabled",false);
  $(".selectPixel").css("background-color","transparent");
  $("#form-lugar").hide();
  $("#collapse-cap").removeClass("show");
  $("#collapse-recursos").removeClass("show");
  var nombre = $("#"+id+"").val();
  BuscarNombre(nombre);

}




//mas o menos capacidad
   $("#menos").on("click",function(){
    console.log("menos");
    var datoCapacidad = $("#lb-cap").text();
    if(datoCapacidad>0){
      datoCapacidad = datoCapacidad -2;
    $("#lb-cap").text(datoCapacidad);
    //$("#btn-cap").text("Capacidad:"+datoCapacidad);
      Buscar(datoCapacidad);
    
  }else{

  }
    
   });

    $("#mas").on("click",function(){
    var datoCapacidad = $("#lb-cap").text();
    if(datoCapacidad<20){
    datoCapacidad++;
    datoCapacidad++;
    $("#lb-cap").text(datoCapacidad);
    Buscar(datoCapacidad);
   
  }else{
    
  }
    
   });
//click everywhere para cerrar collapse
    $("html").click(function(){
     hide_btn();
     $("#btn-cap-cerrar").hide();
     $("#btn-cap").show();
     $("#btn-llegar-cerrar").hide();
     $("#btn-llegar").show();
});

    function hide_btn(){
      $("#collapse-cap").hide();
      $("#collapse-llegar").hide();
    }


//evita la propagacion de cerran onclick
$("#collapse-recursos").click(function(e){
     e.stopPropagation();
});

$("#collapse-cap").click(function(e){
     e.stopPropagation();
});
$("#btn-cap").click(function(e){
     e.stopPropagation();
});
$("#collapse-llegar").click(function(e){
     e.stopPropagation();
});
$("#btn-llegar").click(function(e){
     e.stopPropagation();
});

$("#ubicacion").click(function(e){
     e.stopPropagation();
});
$("#buscadorpta2").click(function(e){
     e.stopPropagation();
});
$("#infonav").click(function(e){
     e.stopPropagation();
});

//funciones para toggle capas

var electric=0;
var restroom=0;
var lactancia=0;
var banco=0;
var doctor=0;
var ATM=0;

function layout(dato){
    switch(dato.id){
    case "electricIcon":
      if(electric==0)
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_1_2.png");
        $("#electric_room").css("display","block");        
        electric=1;
      }else
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_1_1.png");
        $("#electric_room").css("display","none");
        electric=0;

      }
      break;

    case "restroomIcon":
      if(restroom==0)
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_2_2.png");
        $("#restroom").css("display","block");
        restroom=1;
      }else
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_2_1.png");
        $("#restroom").css("display","none");
        restroom=0;

      }
      break;

    case "lactanciaIcon":
      if(lactancia==0)
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_3_2.png");
        $("#lactancia").css("display","block");
        lactancia=1;
      }else
      {
         $("#"+dato.id+"").attr("src","src/iconos/s_3_1.png");
         $("#lactancia").css("display","none");
        lactancia=0;

      }
      break;
   case "bancoIcon":
      if(banco==0)
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_4_2.png");
        $("#banco").css("display","block");
        banco=1;
      }else
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_4_1.png");
        $("#banco").css("display","none");
        banco=0;

      }
      break;
      case "doctorIcon":
      if(doctor==0)
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_5_2.png");
        $("#doctor").css("display","block");
        doctor=1;
      }else
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_5_1.png");
        $("#doctor").css("display","none");
        doctor=0;

      }
      break;
      case "ATMIcon":
      if(ATM==0)
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_6_2.png");
        $("#ATM").css("display","block");
        ATM=1;
      }else
      {
        $("#"+dato.id+"").attr("src","src/iconos/s_6_1.png");
        $("#ATM").css("display","none");
        ATM=0;

      }
      break;
  }

}

function closeUbic(){
  console.log("close");
  $("#card-proceso").hide();
}





