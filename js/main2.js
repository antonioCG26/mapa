

var slim = 'vendor/slim/slim/index.php/';
var rootURLAddLugar = slim + 'postlugar';//ya
var rootURLAddPixel = slim + 'postPixel';//ya
var rootURLGPixeles = slim + 'getPixeles';//ya
var rootURLDelPixel = slim + 'delPixeles';//ya
var rootURLgetSala = slim + 'buscarsala';//ya
var rootURLUpdateLugar = slim + 'uplugar';//ya
var rootURLAddNodo = slim + "AddNodo";
var rootURLgetNodos = slim + "getNodos";
var rootURLAddArista = slim + "addArista";
var rootURLgetAristas = slim + "getAristas";
var rootURLgetAristasAdy = slim + "getAristasAdy";
var rootURLgetNodoSala = slim + "getNodoSala";

var pixel = 0;
var cvdi = 0;
var cinterfon = 0;
var cpantalla = 0;
var cproyector = 0;
var ctp = 0;
var puntos, id , mapeado, punto2, punto1,idrecurso, confirmacion,  portada, interior, imapa;
var mapa = {};
var tipoMapa=0;
var zoomMap=1;
var switchRutas= 0;



//MUESTRA EL DIV PARA ADMIN
function showAdmin(){
  $("#label_new").show();
  $("#label_edit").hide();
  $("#nosala").removeAttr("disabled");
  $("#btnAdmin").hide();
  $("#btnAdminCerrar").show();
  closeNav();
  limpiarform();
  $("#btnEdit").slideUp();
 var width = $(window).width();
     if(width<=768){
      $("#mainMapa").hide();

     }else{
       $("#mainMapa").removeClass("col-12");
       $("#mainMapa").addClass("col-xl-8 col-lg-7 col-md-6 ");

     }

  $("#form-lugar").slideDown();
  $("#btnSave").slideDown();
  $("#btnAdd").fadeIn(500);
  $("#clean").fadeIn(500);
  $("#Confirmar").hide();
  $("#btn-area-cancel").hide();
  $("#select-area").show();
  $(".selectPixel").removeAttr("onclick");
  $(".selectPixel").css("background-color","transparent");
  allPixeles2();

}

//LLAMA A LA CLASE CERRAR ADMIN
$("#btnAdminCerrar").on("click", function(){
  cerrarAdmin();
});
//CIERRA ADMIN
function cerrarAdmin(){
  $("#label_new").hide();
  $("#btnAdmin").show();
  $("#btnAdminCerrar").hide();
  $("#mainMapa").removeClass("col-xl-8 col-lg-7 col-md-6");
  $("#mainMapa").addClass("col-12");
  $("#mainMapa").show();
  $("#form-lugar").hide();
  $("#btnSave").hide();
  $("#btnAdd").fadeOut(500);
  $("#clean").fadeIn(500);
  $("#Confirmar").hide();
  $("#btn-area-cancel").hide();
  $("#select-area").show();
  if(tipoMapa==2)
  {
  $(".selectPixel").removeAttr("onclick");
  $(".selectPixel").css("background-color","transparent");
  allPixeles2();


  }else{

  }
  

}


//GUARDA EL FORMULARIO DE NUEVA SALA
$("#btnSave").on("click", function(){
  validar();
  $(".selectPixel").removeAttr("onclick");
  $(".selectPixel").css("background-color","transparent");
  allPixeles2();
  $("#infoportada").html("Subir imagen portada");
  $("#infointerior").html("Subir imagen interior sala");
  $("#infomapa").html("Subir imagen mapa");
  $("#btnAdminCerrar").hide();
  $("#btnAdmin").show();
  $("#mainMapa").removeClass("col-xl-8 col-lg-7 col-md-6");
  $("#mainMapa").addClass("col-12");
  $("#mainMapa").show();
  $("#btn-area-cancel").hide();
  $("#select-area").show();
});

$("#zona").on("change",function(){
console.log("cambio de zona");
var idzona = $("#zona").val();
console.log(idzona);
switch (idzona) {
  case "1":
    $("#zonaColor").val("#cf7aab");
    break;  
  case "2":
    $("#zonaColor").val("#db9600");
    break;
  case "3":
    $("#zonaColor").val("#ebdc06");
    break; 
  case "4":
    $("#zonaColor").val("#006f9b");
    break;
  case "5":
    $("#zonaColor").val("#a18eba");
    break;
  
  case "6":
    $("#zonaColor").val("#7f005c");
    break;  
  case "7":
    $("#zonaColor").val("#77bae8");
    break; 
  case "8":
    $("#zonaColor").val("#009045");
    break;
  case "9":
    $("#zonaColor").val("#ff0000");
  break;

  default:
  break;
    
}

});



function validar(){
  if ($("#nombrel").val() != "" && $("#zona").val() != "0" && $("#depas").val() != "0" && $("#nopersonas").val() != 0 && $("#nosala").val() != 0 && $("#nosala").val() != 0 && portada != "" && interior != "" && imapa != "") {
    addLugar();
      allPixeles2();
  }else{
    $("#alertDanger").show();
    setTimeout(function(){ 
      $("#alertDanger").slideUp(500);
    }, 1000);

    $("#merror").fadeIn(500);
    if ($("#nombrel").val() == "") {
      camposv($("#nombrel").attr("id"));
    }else {
      camposv2($("#nombrel").attr("id"));
    }

    if ($("#zona").val() == "0") {
      camposv($("#zona").attr("id"));
    }else {
      camposv2($("#zona").attr("id"));
    }

    if ($("#depas").val() == "0") {
      camposv($("#depas").attr("id"));
    }else {
      camposv2($("#depas").attr("id"));
    }

    if ($("#nopersonas").val() == 0 ) {
      camposv($("#nopersonas").attr("id"));
    }else {
      camposv2($("#nopersonas").attr("id"));
    }

    if ($("#nosala").val() == 0 ) {
      camposv($("#nosala").attr("id"));
    }else {
      camposv2($("#nosala").attr("id"));
    }

    if ($("#imgportada").val() == "" ) {
      camposv($("#imgportada").attr("id"));
    }else {
      camposv2($("#imgportada").attr("id"));
    }

    if ($("#imginterior").val() == "" ) {
      camposv($("#imginterior").attr("id"));
    }else {
      camposv2($("#imginterior").attr("id"));
    }

    if ($("#imgmapa").val() == "" ) {
      camposv($("#imgmapa").attr("id"));
    }else {
      camposv2($("#imgmapa").attr("id"));
    }
  }
    allPixeles2();

}

function camposv(element){
  $("#"+element).css("border", "solid 1px rgba(157, 0, 0, 0.6)");
  $("#"+element).css("box-shadow", "2px 2px rgba(157, 0, 0, 0.6)");
}

function camposv2(element){
  $("#"+element).css("border", "solid 1px rgba(78, 157, 0, 0.6)");
  $("#"+element).css("box-shadow", "2px 2px rgba(78, 157, 0, 0.6)");
}

$(".switchAdd").on("click", function(){
  if ($(this).attr("src") == "src/switch1.png") {
    $(this).attr("src", "src/switch2.png");
    recursos($(this).attr("id"),0);
  }else {
    $(this).attr("src", "src/switch1.png");
    recursos($(this).attr("id"),1);
  }
});

function recursos(idrecurso,confirmacion){
  if (idrecurso == 'vdiAdd') {
    cvdi = confirmacion;
  }
  if (idrecurso == 'interfonAdd') {
    cinterfon = confirmacion;
  }
  if (idrecurso == 'pantallaAdd') {
    cpantalla = confirmacion;
  }
  if (idrecurso == 'proyectorAdd') {
    cproyector = confirmacion;
  }
  if (idrecurso == 'tpAdd') {
    ctp = confirmacion;
  }
}

function addLugar(){
 //console.log("Agrega Lugar");
  $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: rootURLAddLugar ,
      dataType: "json",
      data: formJsonLugar(),
      success: function(data, textStatus, jqXHR) {
        
        $("#form-lugar").slideToggle();
        $("#btnSave").slideToggle();
        $("#alertSuccess").show();

      setTimeout(function(){ 
      $("#alertSuccess").slideUp(500);
    }, 1000);
      limpiarform();
      },
      error: function(jqXHR, textStatus, errorThrown){
       alert('Account  error: ' + textStatus);
      }
    });
}

function formJsonLugar(){
  return JSON.stringify({
    "no_sala": $("#nosala").val(),
    "nombre": $("#nombrel").val(),
    "descripcion": $("#inputDescripcion").val(),
    "capacidad": $("#nopersonas").val(),
    "pantalla": cpantalla,
    "proyector": cproyector,
    "interfon": cinterfon,
    "VDI": cvdi,
    "videoconferencia": ctp,
    "zona": $("#zona").val(),
    "color": $("#zonaColor").val(),
    "area": $("#depas").val(),
    "edificio": $("#edificio").val(),
    "imgsala": portada.toString(),
    "imgportada": interior.toString(),
    "imgmapa": imapa.toString()
  });
}


//CAMBIAR IMAGENES DE LA SALA
$("#imgportada").on("change", function(){
  var files = document.getElementById('imgportada').files;
  if (files.length > 0 && files[0].size < 1000000) {
  getBase64(files[0],1);
}else {
  $("#imgportada").val("");
  alert("La imagen es muy pesada, el tamaño maximo debe de ser menor a 1MB");
}
});

$("#imginterior").on("change", function(){
  var files = document.getElementById('imginterior').files;
  if (files.length > 0 && files[0].size < 1000000) {
  getBase64(files[0],2);
  }else {
    $("#imginterior").val("");
    alert("La imagen es muy pesada, el tamaño maximo debe de ser menor a 1MB");
  }
});

$("#imgmapa").on("change", function(){
  var files = document.getElementById('imgmapa').files;
  if (files.length > 0 && files[0].size < 1000000) {
  getBase64(files[0],3);
  }else {
    $("#imgmapa").val("");
    alert("La imagen es muy pesada, el tamaño maximo debe de ser menor a 1MB");
  }
});

function getBase64(file,numimg) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     if (numimg == 1) {
       portada = reader.result;
     }
     if (numimg == 2) {
       interior = reader.result;
     }
     if (numimg == 3) {
       imapa = reader.result;
     }
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

//DESABILITA EL BOTON SI NO HAY UN NUMERO DE SALA VALIDO
function nosala(){

  if($("#nosala").val()!=0){
  $("#select-area").attr("disabled",false);
}else
{
    $("#select-area").attr("disabled",true);

}
}

$("#select-area").on("click",function(){
  tipoMapa=2;
  $(".selectPixel").removeAttr("onclick");
  $("#select-area").hide();
  $("#btn-area-cancel").show();
  $("#addRuta").show();
  $("#saveRuta").hide();
  $("#cerrar-Ruta").hide();
  $("#nodo-sala").hide();
  $("#Confirmar").show();
  $("#selectPixeles").removeClass("hide");
  $("#salas").attr("src","src/mapasalas.png");
  $("#flags").attr("src","src/flags.png");
  allPixeles();
  $("#nosala").attr("disabled",true);
   limpiarCanvas();

});

//PIXELES UTILIZADOS PARA SELECCIONA UNA AREA PARA LAS SALAS

function allPixeles(){
  //console.log("traer pixeles");
  $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: rootURLGPixeles ,
    dataType: "json",
    success: renderAllPixeles
  });
};

function renderAllPixeles(data){
  console.log(data);
  $(".selectPixel").removeAttr("ondblclick");
  $(".selectPixel").attr("onclick","addPixel(this.id)");
  $(".selectPixel").css("border","1px solid rgba(22,22,22,.2)");
  var i =1;
  $.each(data, function(index, registro) {
    var nosala = $("#nosala").val();
          if(registro.id_sala== nosala){
             $("#"+registro.id_pixel+"").css("background-color","black");
             i++;
          }else{
            $("#"+registro.id_pixel+"").css("background-color",registro.color);
             i++;
          }     
       });
}

function addPixel(id_pixel){
  var color = $("#zonaColor").val();
  $("#"+id_pixel+"").css("background-color","#343a40");
  pixSelect = id_pixel;
  $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: rootURLAddPixel ,
      dataType: "json",
      data: formJsonPixel(),
      success: function(data, textStatus, jqXHR){
        
      },
      error: function(jqXHR, textStatus, errorThrown){
       alert('add pixel sala  error: ' + textStatus);
      }
    });
}
var pixSelect;
function formJsonPixel(){
  return JSON.stringify({
    "id_sala": $("#nosala").val(),
    "color":$("#zonaColor").val(),
    "id_pixel": pixSelect
  });
}

//TRAE TODOS LOS PIXELES UTILIZADOS PARA SER NODOS
  function allPixelesNodos(){
    $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: rootURLGPixeles ,
    dataType: "json",
    success: renderAllPixelesNodos
  });
};
//AGREGA FUNCION ON CLICK PARA AGREGAR NUEVOS NODO CERCANO A LA SALA
function renderAllPixelesNodos(data){
console.log(data);
 $(".selectPixel").attr("ondblclick","addNodo2(this.id)");
 $(".selectPixel").css("border","1px solid rgba(22,22,22,.2)");
 var i =1;
 $.each(data, function(index, registro) {
    var nosala = $("#nosala").val();
          if(registro.id_sala== nosala){
             $("#"+registro.id_pixel+"").css("background-color","black");
             i++;
          }else{
            $("#"+registro.id_pixel+"").css("background-color",registro.color);
             i++;
          } 
       });
}


//funciones para visualizar nodos
function getNodos(){
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetNodos ,
    dataType: "json",
    success: renderNodos
  });
}

function renderNodos(data){
  console.log(data);
  var i=1;
  $(".selectPixel").css("border","none");
 $.each(data, function(index, registro) {
           $("#"+registro.id_nodo+"").css("cursor","pointer");
           $("#"+registro.id_nodo+"").html("");
           $("#"+registro.id_nodo+"").append('<img id="scream"  src="src/pin.png" alt="The Scream" style="height:20px;width:18px;position:absolute;margin-top: -20px;margin-left: -5px;" >');

             i++;
       });

}
//funciones para visualizar nodos y dar clic para generar rutas nuevas
function getNodosAristas(){
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetNodos ,
    dataType: "json",
    success: renderNodosAristas
  });
}

function renderNodosAristas(data){
  console.log(data);
  var i=1;
  $(".selectPixel").css("border","none");
 $.each(data, function(index, registro) {
           $("#"+registro.id_nodo+"").css("cursor","pointer");
           $("#"+registro.id_nodo+"").html("");
           $("#"+registro.id_nodo+"").append('<img id="scream" class="'+registro.id_nodo+'"  src="src/pin.svg" alt="The Scream" style="height:20px;width:18px;position:absolute;margin-top: -20px;margin-left: -5px;"  onclick="selectNodo(this)" >');//selectNodo(this)

             i++;
       });
}
//TRAE TODOS LOS PIXELES EN LOS QUE SE PUEDE DAR CLIC PARA SELECCIONAR UNA SALA
function allPixeles2(){
  //console.log("traer pixeles");
  $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: rootURLGPixeles,
    dataType: "json",
    success: pixelNormal
  });
};

function pixelNormal(data){
  $(".se-pre-con").fadeOut("slow");
 //console.log("si trajo pixeles");
  console.log(data);
  var i=1;
  $(".selectPixel").css("border","none");
 $.each(data, function(index, registro) {
           $("#"+registro.id_pixel+"").attr("onclick","getSala("+registro.id_sala+")");
           $("#"+registro.id_pixel+"").css("cursor","pointer");
           $("#"+registro.id_pixel+"").attr("onmouseover","hoverImgMap("+registro.id_sala+")");
           $("#"+registro.id_pixel+"").attr("data-toggle","tooltip");
           $("#"+registro.id_pixel+"").attr("title",registro.nombre);
           function tooltip(){
             $('[data-toggle="tooltip"]').tooltip();   
           }

             i++;
       });

}

var id_salaSelected=0;
function hoverImgMap(id_sala){
if(id_sala==id_salaSelected)
{
}else
{
  id_salaSelected = id_sala;
  getImgSala(id_sala);
  console.log(id_sala);


}

}

$("#Confirmar").on("click",function(){
  tipoMapa=0;
   $("#selectPixeles").addClass("hide");
  $("#salas").attr("src","src/mapasalas_bn.png");
  $("#flags").attr("src","src/mapa_flags_bn.png");
  $("#btnSave").removeAttr("disabled");
  $("#nodo-sala").removeAttr("disabled");
  $("#nodo-sala").show();
  $("#btn-area-cancel").hide();
  $("#Confirmar").hide();
  $("#select-area").show();
  var nosalaval =$("#nosala").val();
  if(nosalaval>0){

  }else{
      $("#select-area").attr("disabled",true);

  }
  $("#btnEdit").attr("disabled",false);
  $("#nosala").attr("disabled",false);
  $(".selectPixel").removeAttr("onclick");
  allPixeles2();
  $(".selectPixel").css("background-color","transparent");
  $("#Success-area").show();
    setTimeout(function(){
      $("#Success-area").slideUp(500);
    }, 2000);
})


$("#btn-area-cancel").on("click",function(){
  tipoMapa=0;
  $("#selectPixeles").addClass("hide");
  $("#salas").attr("src","src/mapasalas_bn.png");
  $("#flags").attr("src","src/mapa_flags_bn.png");
  var mensaje;
  var opcion = confirm("Borrar area");
    if (opcion == true) {
      $("#btnSave").attr("disabled",true);
      $("#btnEdit").attr("disabled",true);
  $("#btn-area-cancel").hide();
  $("#Confirmar").hide();
  $("#select-area").show();
  var nosalaval=$("#nosala").val();
  if(nosalaval>0){

  }else{
      $("#select-area").attr("disabled",true);
  }

  $("#nosala").attr("disabled",false);
  $(".selectPixel").removeAttr("onclick");
  allPixeles2();
    $(".selectPixel").css("background-color","transparent");

  var id_sala = $("#nosala").val()

  borrarArea(id_sala);
  $("#Danger-area").show();
    setTimeout(function(){
      $("#Danger-area").slideUp(500);
    }, 2000);

  } else {

  }
  
})

function borrarArea(id_sala){
  console.log(id_sala);

   $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: rootURLDelPixel+"/"+ id_sala ,
      dataType: "json",
      success: function(data, textStatus, jqXHR){

      },
      error: function(jqXHR, textStatus, errorThrown){
       alert('delet seleccion  error: ' + textStatus);
      }
    });
}



function getEditSala(isala){
  $("#form-lugar").slideDown();
  $("#btnEdit").slideDown();
  $("#btnEdit").attr("disabled",false);
  $(".sidenav").hide();
  $("#btnSave").hide();
  $("#nosala").attr("disabled","true");
  $("#select-area").text("editar area");
  $("#select-area").removeAttr("disabled");
  $("#nodo-sala").removeAttr("disabled");
  $("#label_edit").show();
  $("#label_new").hide();
 
  console.log("traer sala",isala);


   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: rootURLgetSala+"/"+isala ,
    dataType: "json",
    success: renderEditarSala
  });
};

function renderEditarSala(data){
  $.each(data, function(index, registro) {
     $("#label_edit").html('EDITAR SALA <span><button class="btn btn-danger" onclick="DelSala('+registro.no_sala+')">Borrar</button></span>');
     $("#nosala").val(registro.no_sala);
     $("#nombrel").val(registro.nombre);
     $("#nopersonas").val(registro.capacidad);
     $("#zonaColor").val(registro.color);
     $("#zona").val(registro.zona);
     $("#depas").val(registro.area);
     $("#edificio").val(registro.edificio);
     $("#inputDescripcion").val(registro.descripcion);
     portada = registro.imgsala;
     interior = registro.imgportada;
     imapa = registro.imgmapa;
     cpantalla = registro.pantalla;
     cproyector = registro.proyector;
     cinterfon = registro.interfon;
     cvdi = registro.VDI;
     ctp = registro.videoconferencia;
     if (cpantalla == 0) {
       $("#pantallaAdd").attr("src" , "src/switch2.png");
     }else {
       $("#pantallaAdd").attr("src" , "src/switch1.png");
     }
     if (cproyector == 0) {
       $("#proyectorAdd").attr("src" , "src/switch2.png");
     }else {
       $("#proyectorAdd").attr("src" , "src/switch1.png");
     }
     if (cinterfon == 0) {
       $("#interfonAdd").attr("src" , "src/switch2.png");
     }else {
       $("#interfonAdd").attr("src" , "src/switch1.png");
     }
     if (cvdi == 0) {
       $("#vdiAdd").attr("src" , "src/switch2.png");
     }else {
       $("#vdiAdd").attr("src" , "src/switch1.png");
     }
     if (ctp == 0) {
       $("#tpAdd").attr("src" , "src/switch2.png");
     }else {
       $("#tpAdd").attr("src" , "src/switch1.png");
     }
  });
  console.log(data);
}

$("#btnEdit").on("click", function(){
  validarUpdate();
  
  


});

function validarUpdate(){
  if ($("#nombrel").val() != "" && $("#zona").val() != "0" && $("#depas").val() != "0" && $("#nopersonas").val() != 0 && $("#nosala").val() != 0 && $("#edificio").val() != 0 && portada != "" && interior != "" && imapa != "") {
   console.log("correcto update");
    updateLugar($("#nosala").val());

    $("#mainMapa").removeClass("col-xl-8 col-lg-7 col-md-6");
  $("#mainMapa").addClass("col-12");
  $("#mainMapa").show();
    $("#btnEdit").hide();
  $("#form-lugar").hide();
  $("#alertSuccess").show();
  $("#selected").attr("src","");
   $("#alertSuccess").show();
    setTimeout(function(){
      $("#alertSuccess").slideUp(500);
    }, 1000);
  }else{

    $("#alertDanger").show();
    setTimeout(function(){
      $("#alertDanger").slideUp(500);
    }, 1000);

    $("#merror").fadeIn(500);
    if ($("#nombrel").val() == "") {
      camposv($("#nombrel").attr("id"));
    }else {
      camposv2($("#nombrel").attr("id"));
    }

    if ($("#zona").val() == "0") {
      camposv($("#zona").attr("id"));
    }else {
      camposv2($("#zona").attr("id"));
    }

    if ($("#depas").val() == "0") {
      camposv($("#depas").attr("id"));
    }else {
      camposv2($("#depas").attr("id"));
    }

    if ($("#nopersonas").val() == 0 ) {
      camposv($("#nopersonas").attr("id"));
    }else {
      camposv2($("#nopersonas").attr("id"));
    }

    if ($("#nosala").val() == 0 ) {
      camposv($("#nosala").attr("id"));
    }else {
      camposv2($("#nosala").attr("id"));
    }
    if ($("#edificio").val() == 0 ) {
      camposv($("#edificio").attr("id"));
    }else {
      camposv2($("#edificio").attr("id"));
    }
     if ($("#inputDescripcion").val() == 0 ) {
      camposv($("#inputDescripcion").attr("id"));
    }else {
      camposv2($("#inputDescripcion").attr("id"));
    }

    if ($("#imgportada").val() == "" ) {
      camposv($("#imgportada").attr("id"));
    }else {
      camposv2($("#imgportada").attr("id"));
    }

    if ($("#imginterior").val() == "" ) {
      camposv($("#imginterior").attr("id"));
    }else {
      camposv2($("#imginterior").attr("id"));
    }

    if ($("#imgmapa").val() == "" ) {
      camposv($("#imgmapa").attr("id"));
    }else {
      camposv2($("#imgmapa").attr("id"));
    }
  }
    allPixeles2();
}

function updateLugar(isala){
  console.log("updating",isala);


  $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: rootURLUpdateLugar + "/" + isala ,
      dataType: "json",
      data: formJsonLugar(),
      success: function(data, textStatus, jqXHR) {
        limpiarform(); 
        
      },
      error: function(jqXHR, textStatus, errorThrown){
       alert('Account  error: ' + textStatus);
      }
    });
}

function limpiarform(){
  $("#nombrel").val("");
  $("#zona").val("0");
  $("#depas").val("0");
  $("#nopersonas").val(0);
  $("#nosala").val(0);
  $("#imgportada").val("");
  $("#imginterior").val("");
  $("#imgmapa").val("");
  $("#inputDescripcion").val("");
  $("#infoportada").text("Subir imagen portada");
  $("#infointerior").text("Subir imagen interior sala");
  $("#infomapa").text("Subir imagen mapa");

  $(".switchAdd").attr("src", "src/switch2.png");
  cpantalla = 0;
  cproyector = 0;
  cinterfon = 0;
  cvdi = 0;
}

function slideNav(){
  $("#mainMapa").show();
  $("#mainMapa").removeClass("col-xl-8 col-lg-7 col-md-6");
  $("#mainMapa").addClass("col-12");
    $("#selectPixeles").removeClass("hide");
    $(".sidenav").hide();
    $("#infoRecursos").hide();
    $("#mainMapa").removeClass("col-xl-8 col-lg-7 col-md-6");
    $("#mainMapa").addClass("col-12");
    $("#mainMapa").show();
    $("#closeNav").css('display','none');
    $("#OpenNav").css('display','none');
    $("#showslide").css("display","block");
}

function ShowslideNav(){
 $(".sidenav").slideDown();
     var width = $(window).width();
     if(width<768){
      $("#mainMapa").hide();
     }else{
       $("#mainMapa").removeClass("col-12");
       $("#mainMapa").addClass("col-xl-8 col-lg-7 col-md-6 ");
     }
    $("#btnAdminCerrar").hide();
    $("#btnAdmin").show();
    $("#form-lugar").hide();
    $("#infoRecursos").slideDown();
    $("#closeNav").css('display','inline-block');
    $("#openNav").css('display','none');
    $("#showslide").css("display","none");
}


  $("#logInBnt").on("click",function(){
          $("#btnLogIn").hide();
    $("#btn-derecho").append('<button class="btn btn-sm btn-outline-dark" id="btnAdmin" onclick="showAdmin()"  type="button" name="button">Admin</button>'+
 '<button class="btn btn-sm btn-outline-dark" id="btnAdminCerrar" onclick="cerrarAdmin()"  type="button" name="button" style="display: none">Cerrar</button>');
    $("#divEditar").append("<img id='editarl' style='width:20px;margin-bottom: 15px' onclick='' src='src/editar.png'>");
    $("#btnAddNodo").show();
    $("#btnAddRuta").show()
  });

var no_sala_select=0;

$("#nodo-sala").on("click",function(){
  no_sala_select=$("#nosala").val();
    switchRutas=2;
     zoom1();
  $("#selectPixeles").removeClass("hide");
  $("#salas").attr("src","src/mapasalas.png");
  $("#flags").attr("src","src/flags.png");
  allPixelesNodos();
   getNodos();
 });

 $("#btnAddNodo").on("click",function(){
  switchRutas=2;
     zoom1();
  $("#selectPixeles").removeClass("hide");
  $("#salas").attr("src","src/mapasalas.png");
  $("#flags").attr("src","src/flags.png");
  allPixelesNodos();
   getNodos();
 });

  $("#btnAddRuta").on("click",function(){
      switchRutas=2;
     zoom1();
  $("#select-area").hide();
  $("#selectPixeles").removeClass("hide");
  $("#salas").attr("src","src/mapasalas.png");
  $("#flags").attr("src","src/flags.png");
   getAllAristas();
   getNodosAristas();


 });


//DEJA LAS VARIABLES DEFAULT
function newCamino()
{
   nodoInicio ="";
   nodoFinal="";
   nodoSelec="";
   posNF=0;
   coincideDato =0;
   camino = new Array();
   strCamino="";
   lastC1=0;
   lastC2=0;
   countCamino=0;
   saltoMenor=10000;
   pos=0;
   nVisitados=1;
   console.log(TablaNodos);
   var length = TablaNodos.length-1;
    for(var i=length;i>=0;i--)
    {
      
      TablaNodos.pop();
    }

      getNodos2();
      getNodosRuta();
}

//funcion para traer nodos con ondblclick para buscar ruta
 function getNodosRuta(){
  switchRutas=1;
  
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetNodos ,
    dataType: "json",
    success: renderNodosRuta
  });
}

function renderNodosRuta(data){
  console.log(data);
  var i=1;
  $(".selectPixel").html("");
  $(".selectPixel").css("border","none");
 $.each(data, function(index, registro) {
           $("#"+registro.id_nodo+"").css("cursor","pointer");
           $("#"+registro.id_nodo+"").html("");
             i++;
       });

}

  function allPixelesNodos(){

  $.get({
    url:"http://mapa-modelo.freevar.com/vendor/slim/slim/index.php/getPixeles",
    dataType:"json",
    success: renderAllPixelesNodos

  });
};
function renderAllPixelesNodos(data){
$(".selectPixel").removeAttr("onclick");
console.log(data);
 $(".selectPixel").attr("ondblclick","addNodo2(this.id)");
 $(".selectPixel").css("border","1px solid rgba(22,22,22,.2)");
 var i =1;




}



 var c1,c2,pixSelNod;

 function addNodo2(id){
      pixSelNod = id;
      console.log("add nodo",id);
      var pos= id.search("_");
          c1= id.slice(0,pos);
          c1= parseInt(c1);
          c1= c1*10;
          c2= id.slice(pos+1);
          c2= parseInt(c2);
          c2= c2*10;
      console.log(c1);
      console.log(c2);

      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      PinNodo();
    }

    function PinNodo(){
      
       $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: rootURLAddNodo,
      dataType: "json",
      data: formJsonNodo()
      
    });
    }


function formJsonNodo(){
  return JSON.stringify({
    "id_pixel": pixSelNod,
    "c1": c1,
    "c2": c2,
    "id_sala": no_sala_select
  });
}

var nodoPrincipal="";
var nodoAdyacente="";
var NPc1,NPc2,NAc1,NAc2="";
var Total=0;

function selectNodo(item){
  if(nodoPrincipal=="")
  {
    $("."+item.className).attr("src","src/pin2.svg");
    nodoPrincipal=item.className;
    console.log("nodoPrincipal:",nodoPrincipal);
    var pos= nodoPrincipal.search("_");
    console.log(pos)
        NPc1= nodoPrincipal.slice(0,pos);
        NPc1= parseInt(NPc1);
        NPc1= NPc1;
        NPc2= nodoPrincipal.slice(pos+1);
        NPc2= parseInt(NPc2);
        NPc2= NPc2;
        console.log("fila",NPc1);
        console.log("Columna",NPc2);

  }else if(nodoPrincipal==item.className)
  {
    console.log("loop");
    nodoPrincipal="";
    $("."+item.className).attr("src","src/pin.svg");

  }else{

    nodoAdyacente=item.className;
    console.log("nodoAdyacente:",nodoAdyacente);
    $("."+item.className).attr("src","src/pinblue.svg");
        var pos= nodoAdyacente.search("_");
        console.log(pos)
        NAc1= nodoAdyacente.slice(0,pos);
        NAc1= parseInt(NAc1);
        NAc1= NAc1;
        NAc2= nodoAdyacente.slice(pos+1);
        NAc2= parseInt(NAc2);
        NAc2= NAc2;
        console.log("fila",NAc1);
        console.log("columna",NAc2);
        var Tc1=NPc1-NAc1;
            Tc1=Math.abs(Tc1);
        var Tc2=NPc2-NAc2;
            Tc2=Math.abs(Tc2);
            Total=Tc1+Tc2;
        console.log(Total);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.moveTo((NAc2*10/zoomMap),(NAc1*10/zoomMap));
        ctx.lineTo((NPc2*10/zoomMap),(NPc1*10/zoomMap));
        ctx.stroke();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#FF0000";
        addArista();
  }
}



function addArista(){
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: rootURLAddArista,
      dataType: "json",
      data: formJsonArista()
      
    });
}
function formJsonArista(){
  return JSON.stringify({
    "nodoPrincipal": nodoPrincipal,
    "nodoAdyacente": nodoAdyacente,
    "peso": Total
  });
}

function getNodos2(){
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetNodos ,
    dataType: "json",
    success: tablaNodos
  });
}

var TablaNodos = new Array();
function tablaNodos(data){
  console.log(data);

 $.each(data, function(index, registro) {
    TablaNodos.push({
      vertice: registro.id_nodo,
      final:"",
      temporal:0,
      Visitado:"FALSE"
    });
        
       });
    console.log(TablaNodos);
}


var nodoInicio="";
var nodoFinal="";




function selectRuta(item)
{
  var canvas = document.getElementById("myCanvas");
  canvas.width=canvas.width;

  var ctx = canvas.getContext("2d");
   if(nodoInicio=="")
  {
    $("."+item.className).attr("src","src/pin2.svg");
    nodoInicio=item.className;
    console.log("nodoInicio:",nodoInicio);

    //console.log(TablaNodos.length);


  }else if(nodoInicio==item.className)
  {
    console.log("loop");
    nodoInicio="";
    $("."+item.className).attr("src","src/pin.svg");

  }else{

    nodoFinal=item.className;
    console.log("nodoFinal:",nodoFinal);
    $("."+item.className).attr("src","src/pinblue.svg");
          $("[src='src/pin.svg']").css("display","none");

    Dijkstra(nodoInicio,nodoFinal);
  }
}

var nodoSelec="";
var posNF=0;

function BuscarNodoInicio(id_sala){
  newCamino();
  console.log(id_sala);
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetNodoSala+"/"+id_sala ,
    dataType: "json",
    success: nodoSala
  });

}

function nodoSala(data){
  console.log(data);
  nodoFinal=data[0].id_nodo;
  console.log(nodoFinal);
  $("#card-proceso").show();
}


  $("#punto2").on("change",function(){
     
     nodoInicio= $(this).val();
     //console.log(nodoInicio);

  });

function TraceRoute(){
$(".se-pre-con").fadeIn("slow");
$("#card-proceso").hide();
  //console.log(nodoInicio);
  //console.log(nodoFinal);
$("#punto2").val(0);
slideNav();
 Dijkstra(nodoInicio,nodoFinal);

}

function Dijkstra(nodoInicio,nodoFinal){
  console.log("inicia Dijkstra",nodoInicio);
  //deja el nodo inical en final y temporal 0
      for(var i=0;i<TablaNodos.length;i++)
    {
      if(TablaNodos[i].vertice==nodoInicio)
      {//aqui partimos
        TablaNodos[i].final=0;
        TablaNodos[i].temporal=0;
        TablaNodos[i].Visitado="TRUE";
        console.log(TablaNodos[i]);
        nodoSelec=nodoInicio;
        pos=i;
      }

      if(TablaNodos[i].vertice==nodoFinal)
      {
        posNF=i;
      }
    }
      console.log("ciclo Dijkstra:",nodoSelec);
      getAristasAdy(nodoSelec);
    

    



}

function getAristas(){
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetAristas ,
    dataType: "json",
    success: tablaAristas
  });
}


var aristas="";
function tablaAristas(data){
  aristas=data;
  console.log(aristas);

  
}





var nextStep = new Array();
//funcion nodos adyacentes 
function getAristasAdy(nodoSelec){
  console.log(nodoSelec);
  for (var j = 0; j < aristas.length; j++) {
    if(aristas[j].nodoPrincipal==nodoSelec)
    {
     for(var i=0;i<TablaNodos.length;i++)
     {
      if(TablaNodos[i].vertice==aristas[j].nodoAdyacente)
      {
        if(TablaNodos[i].Visitado=="TRUE")
        {
            //console.log("ya fue Visitado");
        }else{
          var intPeso = parseInt(aristas[j].peso);
          //console.log(intPeso);
          var newPeso = TablaNodos[pos].final + intPeso;

          if(TablaNodos[i].temporal==0)
          {
            TablaNodos[i].temporal=newPeso;
          }else if(newPeso<=TablaNodos[i].temporal){
            TablaNodos[i].temporal=newPeso;
          }else{

          }
        }

      }
     }
   }
  }
  //console.log(TablaNodos);
  nodoMenor();
 nVisitados=1;
}


var saltoMenor=10000;
var pos=0;
var nVisitados=1;

       //console.log(TablaNodos);
       function nodoMenor(){
        saltoMenor=10000;
        pos=0;
        nVisitados=1;


         for(var i=0;i<TablaNodos.length;i++) 
     {
       if(TablaNodos[i].Visitado=="TRUE")
        {
          nVisitados++;
            //console.log("ya fue Visitado",TablaNodos[i].vertice);
        }else{
       if(TablaNodos[i].temporal=="")
       {

       }else if(TablaNodos[i].temporal<=saltoMenor)
        {
          saltoMenor=TablaNodos[i].temporal;
          //console.log(TablaNodos[i]);
          //console.log(saltoMenor);
          //console.log(nodoSelec);
          pos=i;
          nodoSelec=TablaNodos[i].vertice;
         }
       }
      }
      //etiqueta final
      TablaNodos[pos].final=saltoMenor;
      TablaNodos[pos].Visitado="TRUE";
     //console.log(TablaNodos);

      if(nVisitados<TablaNodos.length)
      {
        console.log(nVisitados);
        getAristasAdy(nodoSelec);
      }else{
       
        GetCamino(nodoFinal);
      }


}

function GetCamino(nodoFinal){
  getAristasAdy2(nodoFinal);

}

function getAristasAdy2(nodoSelec){
  console.log("adyacentes de regreso a:",nodoSelec);
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetAristasAdy+"/"+nodoSelec ,
    dataType: "json",
    success: SaltoAnterior
  });
}

var coincideDato=0;
var camino = new Array();
var strCamino="";
    var lastC1=0;
    var lastC2=0;
    var countCamino=0;
    var saltoMenor=10000;
var pos=0;
var nVisitados=1;


function SaltoAnterior(data){
//console.log(data);
//console.log(TablaNodos)
     if(countCamino<=0){
      console.log("punto inicio");
      var pos= TablaNodos[posNF].vertice.search("_");
      var c1= TablaNodos[posNF].vertice.slice(0,pos);
      var c1= parseInt(c1);
      var c1= c1*10;
      var c2= TablaNodos[posNF].vertice.slice(pos+1);
      var c2= parseInt(c2);
      var c2= c2*10;
      lastC1=c1;
      lastC2=c2;
      countCamino++;
      }


      //console.log(this.id);
      var pos= TablaNodos[posNF].vertice.search("_");
      var c1= TablaNodos[posNF].vertice.slice(0,pos);
      var c1= parseInt(c1);
      var c1= c1*10;
      var c2= TablaNodos[posNF].vertice.slice(pos+1);
      var c2= parseInt(c2);
      var c2= c2*10;
      //console.log(c1);
      //console.log(c2);
      console.log(camino);
      camino.push(c1+","+c2);
     /* var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.moveTo(lastC2,lastC1);
      ctx.lineTo(c2,c1);
      ctx.stroke();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#FF0000";
      lastC1=c1;
      lastC2=c2;*/

var naVertice=TablaNodos[posNF].vertice;
var naFinal=TablaNodos[posNF].final;



  $.each(data, function(index, registro) {
     for(var i=0;i<TablaNodos.length;i++)
    {
      if(TablaNodos[i].vertice==registro.nodoAdyacente)
      {   var intPeso = parseInt(registro.peso);
          coincideDato = naFinal-intPeso;

          if(coincideDato==TablaNodos[i].final)
          {
            
            posNF=i;
          }
      }
    }
  });
  if(TablaNodos[posNF].final==0){
      console.log(coincideDato);
      console.log(TablaNodos[posNF].vertice);
        var pos= TablaNodos[posNF].vertice.search("_");
      var c1= TablaNodos[posNF].vertice.slice(0,pos);
      var c1= parseInt(c1);
      var c1= c1*10;
      var c2= TablaNodos[posNF].vertice.slice(pos+1);
      var c2= parseInt(c2);
      var c2= c2*10;
      //console.log(c1);
      //console.log(c2);
      console.log(camino);
      camino.push(c1+","+c2);
      console.log(camino);
        var canvas = document.getElementById("myCanvas");
  canvas.width=canvas.width;

  var ctx = canvas.getContext("2d");
  var countCamino = 0;

  $.each(camino, function(index, item){
    console.log(item);
    if(countCamino<=0){
      console.log("imprimiendo primer punto")
      var pos= item.search(",");
      var c1= item.slice(0,pos);
      var c1= parseInt(c1);
      var c1= c1/zoomMap;
      var c2= item.slice(pos+1);
      var c2= parseInt(c2);
      var c2= c2/zoomMap;

      var lastC1=c1;
      var lastC2=c2;
      countCamino++;
    }


      var pos= item.search(",");
      var c1= item.slice(0,pos);
      var c1= parseInt(c1);
      var c1= c1/zoomMap;
      var c2= item.slice(pos+1);
      var c2= parseInt(c2);
      var c2= c2/zoomMap;
      ctx.moveTo(lastC2,lastC1);
      ctx.lineTo(c2,c1);
      ctx.stroke();
      ctx.lineWidth = 8/zoomMap;
      ctx.strokeStyle = "#0000ff";
      var lastC1=c1;
      var lastC2=c2;
    
  });

  $(".se-pre-con").fadeOut("slow");


  }else{
     
      getAristasAdy2(TablaNodos[posNF].vertice);

  }
}

function getAllAristas(){
  console.log("todos los aristas");
   $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url:rootURLgetAristas ,
    dataType: "json",
    success: RenderAllAristas
  });
}

function RenderAllAristas(data){
    $.each(data, function(index, registro) {
      //console.log(registro);
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var pos= registro.nodoPrincipal.search("_");
      var NP1= registro.nodoPrincipal.slice(0,pos);
      var NP1= parseInt(NP1);
      var NP1= NP1*10/zoomMap;
      var NP2= registro.nodoPrincipal.slice(pos+1);
      var NP2= parseInt(NP2);
      var NP2= NP2*10/zoomMap;
      //console.log(NP1);
      //console.log(NP2);
      //nodo adyacente
      var pos= registro.nodoAdyacente.search("_");
      var NA1= registro.nodoAdyacente.slice(0,pos);
      var NA1= parseInt(NA1);
      var NA1= NA1*10/zoomMap;
      var NA2= registro.nodoAdyacente.slice(pos+1);
      var NA2= parseInt(NA2);
      var NA2= NA2*10/zoomMap;
      //console.log(NA1);
      //console.log(NA2);
      ctx.moveTo(NP2,NP1);
      ctx.lineTo(NA2,NA1);
      ctx.stroke();
      ctx.lineWidth = 8/zoomMap;
      ctx.strokeStyle = "#0000ff";
    });
}