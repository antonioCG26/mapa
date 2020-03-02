  var slim = "vendor/slim/slim/index.php/";

  var rootURLVsala = slim + "Vsala";
  var rootURLVImgsala = slim + "VImgsala";
  var rootURLBuscarNombre = slim + "BuscarNombre";
  var rootURLBuscarTodoNombre = slim + "BuscarTodoNombre";
  var rootURLBuscar = slim + "Buscar";
  var rootURLBuscarRec = slim + "BuscarRec";
  var rootURLDelSala = slim + "DelSala";

  

//OBTIENE LA IMAGEN DE LA SALA SELECCIONADA
   function getImgSala($id_sala){  
    //console.log('Consulta sala no:',$id_sala);
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLVImgsala+ "/" + $id_sala,
      dataType: "json",
      success: renderImgsala
    });
  };
//RENDER DEL GET DE GETIMGSALA()
  function renderImgsala(data){
    var i = 0;
    var $tabla = $("#salasBusqueda");
        $tabla.html("");

      var datos= localStorage.getItem('salas');
      
       $.each(data, function(index, registro) {
          var reg_sala=registro.no_sala.toString();
          var arraysalas = datos.split('}');
          $.each(arraysalas, function(index, item){
            var posItem =item.search('"'+reg_sala+'"');
            if(posItem>=0)
            {
              var posIniImg = item.search("data:image/png");
              var posFinImg = item.lastIndexOf("planet");
              var varimg = item.slice(posIniImg, posFinImg);
              //console.log(varimg);
              $tabla.append('<img  src="'+varimg+'"  width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;position:absolute;z-index:'+registro.no_sala+'">');  

            }else
            {
            }
       
          });

            i++;
       });
   
  }


    function getSala($id_sala){
      slideOptClose();
      $("#selectPixeles").addClass("hide");
        $("#salasBusqueda").html("");
    //console.log('Consulta sala no:',$id_sala);
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLVsala+ "/" + $id_sala,
      dataType: "json",
      success: rendersala
    });
  };

    function rendersala(data){
    $("#showslide").css("display","none");
    $("#salas").attr("src","src/mapasalas_bn.png");
    $("#flags").attr("src","src/mapa_flags_bn.png");
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


    //$(".main").css('padding-right','400px');
    $("#closeNav").css('display','inline-block');
    $("#openNav").css('display','none');

    $("#iZona").html("");
    $("#isala").html("");
    $("#iedificio").html("");
    $("#icap").html("");
    $("#iarea").html("");

     console.log("datos primer pixel",data[0]);
            var coordenada =data[0].id_pixel; 
            console.log("coordenada",coordenada);
            var pos= coordenada.search("_");
            var c1= coordenada.slice(0,pos);
            var c1= parseInt(c1);
            var c1= c1*6/zoomMap;
            var c2= coordenada.slice(pos+1);
            var c2= parseInt(c2);
            var c2= c2*6/zoomMap;
           
      
            console.log(data[0].id_pixel);
            
            
            $("#mainMapa").scrollTop(c1);
            $("#mainMapa").scrollLeft(c2);
            $("#img1").attr("src",data[0].imgportada);
            $("#img2").attr("src",data[0].imgsala);
            $("#infonav").css("border-top",data[0].color+" 3px solid ");
            $("#sala").css("background-color",data[0].color);
            $("#map").attr("src",data[0].imgmapa);
            $("#divEditar > button").remove();


            $("#selected").attr("src",data[0].imgmapa);
            //$("#ides").html(data[0].descripcion);
            $("#iZona").html(data[0].nombre);
            $("#isala").css("color",data[0].color);
            $("#isala").html("<b>Zona "+data[0].zona+" |  </b> Sala "+data[0].no_sala);
            $("#editarl").attr("onclick","getEditSala("+data[0].no_sala+")");
            $("#iedificio").html("<b>Nave: </b>"+data[0].edificio);
            $("#icap").html("<b>Capacidad: </b>"+data[0].capacidad+" personas");
            $("#iarea").html("<b>Área: </b>"+data[0].area);
            $("#infoRecursos").css("background-color",data[0].color);
            $("#divEditar").append("<button class='btn'  style='margin-top:-10px'><img id='buscarRuta' src='src/way.png' style='width: 30px' onclick='BuscarNodoInicio("+data[0].no_sala+")'></button> ")

           
              
                $("#imgedificio").attr("src","src/iconos/i_z"+data[0].zona+".png");
                $("#imgcap").attr("src","src/iconos/i2_z"+data[0].zona+".png");
                $("#imgarea").attr("src","src/iconos/i3_z"+data[0].zona+".png");
                
            
           
            if(data[0].pantalla==0){
              $("#imgtv").attr('style',' opacity:0.4');
            }else{
              $("#imgtv").attr('style',' opacity:1');
            }
            if(data[0].proyector==0){
              $("#iproy").attr('style',' opacity:0.4');
            }else{
              $("#iproy").attr('style',' opacity:1');
            }
            if(data[0].interphone==0){
              $("#iphone").attr('style',' opacity:0.4');
            }else{
              $("#iphone").attr('style',' opacity:1');
            }
            if(data[0].VDI==0){
              $("#ivdi").attr('style',' opacity:0.4');
            }else{
              $("#ivdi").attr('style',' opacity:1');
            }
            if(data[0].videoconferencia==0){
              $("#itp").attr('style',' opacity:0.4');
            }else{
              $("#itp").attr('style',' opacity:1');
            }

  }



//BUSQUEDA POR NOMBRE
  function BuscarNombre(nombre){
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLBuscarNombre + "/" + nombre,
      dataType: "json",
      success: renderBusquedaNombre
    });
  };

  function renderBusquedaNombre(data){
    $(".selectPixel").removeAttr("onmouseover");
    var i = 0;
    var $tabla = $("#salasBusqueda");
        $tabla.html("");
    $("#salas").attr("src","src/mapasalas_bn.png");
      var datos= localStorage.getItem('salas');
       $.each(data, function(index, registro) {
            var reg_sala=registro.no_sala.toString();
            var arraysalas = datos.split('}');
            $.each(arraysalas, function(index, item){
              var posItem =item.search('"'+reg_sala+'"');
              if(posItem>=0)
              {
                var posIniImg = item.search("data:image/png");
                var posFinImg = item.lastIndexOf("planet");
                var varimg = item.slice(posIniImg, posFinImg);
                console.log(varimg);
                $tabla.append('<img  src="'+varimg+'"  width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;position:absolute;z-index:'+registro.no_sala+'">');  
              }else{
              }
       
          });

            i++;
       });

        if (data.length==0) {
          $("#no-registro").show();
          var noregsala= $("#input-buscar").val();
          $("#no-reg-sala").text(noregsala);
           setTimeout(function(){
          $("#no-registro").slideUp(500);
            }, 2000);
         
        }else if(data.length==1){
          getSala(data[0].no_sala);
          
        }else{

        }
   }
//BUSCAR POR CAPACIDAD
   function Buscar(cap){
    //console.log('Consulta tipo',cap);
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLBuscar+ "/" + cap,
      dataType: "json",
      success: renderBusqueda
    });
  };

  function renderBusqueda(data){
    $("#salas").attr("src","src/mapasalas_bn.png");
    var i = 0;
    var $tabla = $("#salasBusqueda");
        $tabla.html("");
      var datos= localStorage.getItem('salas');
       $.each(data, function(index, registro) {
            var reg_sala=registro.no_sala.toString();
          var arraysalas = datos.split('}');
          $.each(arraysalas, function(index, item){
            var posItem =item.search('"'+reg_sala+'"');
            if(posItem>=0)
            { 
              var posIniImg = item.search("data:image/png");
              var posFinImg = item.lastIndexOf("planet");
              var varimg = item.slice(posIniImg, posFinImg);
              console.log(varimg);
              $tabla.append('<img  src="'+varimg+'"  width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;position:absolute;z-index:'+registro.no_sala+'">');  
            }else{
            }
       
          });

            i++;
       });
   }
//BUSCAR POR RECURSOS
    function BuscarRec(cap,VDI,interfon,pantalla,proyector,TP){
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLBuscarRec+ "/" + cap+ "/" + VDI+ "/" + interfon+ "/" + pantalla+ "/" + proyector+ "/" + TP,
      dataType: "json",
      success: renderBusqueda
    });
  };
//CAMBIAR LAS IMAGENES AL MOMENTO DE EDITAR UNA SALA
 function cambiar(id){
  console.log(id);

  if(id=="imgmapa")
  {
    var pdrs = document.getElementById('imgmapa').files[0].name;
    document.getElementById('infomapa').innerHTML = pdrs;

  }else if(id=="imginterior")
  {
    var pdrs = document.getElementById('imginterior').files[0].name;
    document.getElementById('infointerior').innerHTML = pdrs;
  }else{
    var pdrs = document.getElementById('imgportada').files[0].name;
    document.getElementById('infoportada').innerHTML = pdrs;
  }

    
}

function showAdminBtns(){
  $("#btnAdmin").show();
    $("#addRuta").show();
    $("#editarl").show();
}
    
//BORRAR UNA SALA
function DelSala(id_sala){

    borrarArea(id_sala);//BORRAR AREA DE LA SALA
    console.log('borrar sala:',id_sala);
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: rootURLDelSala+ "/" + id_sala,
      dataType: "json",
      success: function(data, textStatus, jqXHR){
        
      },
      error: function(jqXHR, textStatus, errorThrown){
       alert('delet sala  error: ' + textStatus);
      }    
    });
  };

function slideOpt(){
  $("#ulDiv").slideDown();
  $("#menuBtn").css("display","none");
  $("#menuBtnCerrar").css("display","inline-block");
  $("#ulDiv2").animate({
      bottom: '185px'
    });
}

function slideOptClose(){
 
  $("#ulDiv").slideUp();
  $("#menuBtnCerrar").css("display","none");
  $("#menuBtn").css("display","inline-block");
  $("#ulDiv2").animate({
      bottom: '65px'
    });
  HideFacilities();
  HideFiltros();

};

function ShowFacilities(){
   $("#divFacilities").animate({
      width: 'show'
    });
  $("#divFacilities").css("display","inline-block");
  $("#imgfacilities").attr("onclick","HideFacilities()");
      BuscarRec(cap,VDI,interfon,pantalla,proyector,TP);

}
function HideFacilities(){
$("#divFacilities").animate({
      width: 'hide'
    });  
$("#imgfacilities").attr("onclick","ShowFacilities()");
$("#salas").attr("src","src/mapasalas.png");

}

function ShowFiltros(){
  $("#divFiltros").animate({
      width: 'show'
    });
  $("#divFiltros").css("display","inline-block");
  $("#btnFiltros").attr("onclick","HideFiltros()");


}
function HideFiltros(){
$("#divFiltros").animate({
      width: 'hide'
    });  
$("#btnFiltros").attr("onclick","ShowFiltros()");

}

$(document).ready(function(){
  BuscarTodoNombre();

   
});

function BuscarTodoNombre(){

//TRAER SELECT no_sala.no_sala,no_sala.nombre,no_sala.imgmapa  FROM no_sala
  console.log("buscar todo nombre");

    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLBuscarTodoNombre,
      dataType: "json",
      success: renderBusquedaTodoNombre
    });
  };

  function renderBusquedaTodoNombre(data){

    if (typeof(Storage) !== 'undefined') {  
      var dato = JSON.stringify(data);
      var dato =dato.replace("[","");
      var dato =dato.replace("]","");
      localStorage.setItem('salas', dato);
      var datos= localStorage.getItem('salas');
    } else {
    }
  
  }


