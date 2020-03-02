  var slim = "vendor/slim/slim/index.php/";

  var rootURLVzonas = slim + "Vzonas";
  var rootURLVsala = slim + "Vsala";
  var rootURLBuscarNombre = slim + "BuscarNombre";
  var rootURLBuscar = slim + "Buscar";
  var rootURLBuscarRec = slim + "BuscarRec"

  


  

  function getZonas(){
    console.log('Consulta zona');
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLVzonas,
      dataType: "json",
      success: renderZonas
    });
  };


  function renderZonas(data){
    console.log(data);
    var i = 1;
    var $tabla = $("#myMenu");
       $.each(data, function(index, registro) {
           $tabla.append("<li>"+
            "<a href='zona.php?zona="+registro.no_zona+"' onmouseover='map(&quot;map"+registro.no_zona+"&quot;)'>Zona "+
            registro.no_zona+"</a></li>");
             i++;
       });
   }

      function getSala($id_sala){
        $("#salasBusqueda").html("");
    console.log('Consulta salas',$id_sala);
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLVsala+ "/" + $id_sala,
      dataType: "json",
      success: rendersala
    });
  };


  function rendersala(data){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("mobil");
    $("#bottomNav").show();
    $("#closeNav").css('display','inline-block');

    $("#miZona").html("");
    $("#misala").html("");
    $("#miedificio").html("");
    $("#micap").html("");
    $("#miarea").html("");
    $("#mitipo").html("");


    console.log(data);
    var i = 1;

    $.each(data, function(index, registro) {
            $("#map").attr("src",registro.imgsala);
            $("#selected").attr("src",registro.imgsala);
            $("#miZona").html("Zona "+registro.zona);
            $("#misala").html("<b>Sala "+registro.no_sala+": </b>"+registro.nombre);
            $("#miedificio").html(registro.edificio);
            $("#micap").html(registro.capacidad);
            $("#miarea").html(registro.area);
            $("#mitipo").html(registro.tipo);
            
            if(registro.pantalla==0){
              $("#mimgtv").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#mimgtv").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.proyector==0){
              $("#miproy").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#miproy").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.interphone==0){
              $("#miphone").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#miphone").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.VDI==0){
              $("#mivdi").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#mivdi").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.videoconferencia==0){
              $("#mitp").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#mitp").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }

    
          
             i++;
       });


}else
{
   $(".sidenav").css('width','400px');
    $(".main").css('padding-right','400px');
    $("#closeNav").css('display','inline-block');
    $("#openNav").css('display','none');

    $("#iZona").html("");
    $("#isala").html("");
    $("#iedificio").html("");
    $("#icap").html("");
    $("#iarea").html("");
    $("itipo").html("");

     console.log(data);
    var i = 1;
    
       $.each(data, function(index, registro) {
            $("#infonav").css("border-top","#"+registro.color+" 3px solid ");
            $("#sala").css("background-color","#"+registro.color+"");
            $("#map").attr("src",registro.imgsala);


            $("#selected").attr("src",registro.imgsala);
            $("#iZona").html("Zona "+registro.zona);
            $("#isala").html("<b>Sala "+registro.no_sala+": </b>"+registro.nombre);
            $("#iedificio").html(registro.edificio);
            $("#icap").html(registro.capacidad);
            $("#iarea").html(registro.area);
            $("#itipo").html(registro.tipo);
           
            if(registro.pantalla==0){
              $("#imgtv").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#imgtv").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.proyector==0){
              $("#iproy").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#iproy").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.interphone==0){
              $("#iphone").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#iphone").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.VDI==0){
              $("#ivdi").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#ivdi").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }
            if(registro.videoconferencia==0){
              $("#itp").attr('style',' width:30px;opacity:0.4;margin:0px 3px');
            }else{
              $("#itp").attr('style',' width:30px;opacity:1;margin:0px 3px')
            }

    
          
             i++;
       });

}


    


    
   

  }

  function BuscarNombre(nombre){
    console.log('Consulta salas',nombre);
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLBuscarNombre+ "/" + nombre,
      dataType: "json",
      success: renderBusquedaNombre
    });
  };

  function renderBusquedaNombre(data){
    console.log(data);
    var i = 1;
    var $tabla = $("#salasBusqueda");
        $tabla.html("");


       $.each(data, function(index, registro) {
        $tabla.append('<img  src="src/'+registro.no_sala+'.png"  width="1024" height="768" usemap="#mapasalas" alt="" style="position:absolute;z-index:'+registro.no_sala+';transform:rotate(90deg)">'
        );  
        if (data.length==1) {
          getSala(registro.no_sala);
          console.log("registro unico:",registro.no_sala);
        }
             i++;
       });

   }

   function Buscar(cap){

    console.log('Consulta tipo',cap);
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLBuscar+ "/" + cap,
      dataType: "json",
      success: renderBusqueda
    });
  };

  function renderBusqueda(data){
    console.log(data);
    var i = 1;
    var $tabla = $("#salasBusqueda");
        $tabla.html("");
       $.each(data, function(index, registro) {
      $tabla.append('<img src="src/'+registro.no_sala+'.png"  width="1024" height="768" usemap="#mapasalas" alt="" style="position:absolute;z-index:'+registro.no_sala+';transform:rotate(90deg)">'
        );
          
             i++;
       });
   }

    function BuscarRec(cap,VDI,interfon,pantalla,proyector,TP){

    console.log('Consulta x recurso');
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: rootURLBuscarRec+ "/" + cap+ "/" + VDI+ "/" + interfon+ "/" + pantalla+ "/" + proyector+ "/" + TP,
      dataType: "json",
      success: renderBusqueda
    });
  };