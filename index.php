
<!DOCTYPE html>
<html class="element"><head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Mapa Modelo</title>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="ICON"  type="iMAGEN/PNG" href="http://icons.iconarchive.com/icons/alienvalley/osx-dock-replacement/256/maps-icon.png">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="js/main.js" type="text/javascript"></script>
  <link rel="stylesheet" type="text/css" href="css/index2.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  <script type="text/javascript" src="https://cdn.rawgit.com/asvd/dragscroll/master/dragscroll.js"></script>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <script type="text/javascript">
    $("[href=https://www.freewebhostingarea.com]").hide();
  </script>

<style type="text/css">
  
table{
  width: 1400px;
  height:1400px;
  border-spacing: 0px;
}
td{
  
  
}
tr{
  
}
.no-js #loader { display: none;  }
.js #loader { display: block; position: absolute; left: 100px; top: 0; }
.se-pre-con {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url(src/loading-beer_2.gif)  no-repeat #fff;
  background-size:300px 300px;
  background-position: center; 
}
</style>
  

</head>
<body style="" >
  <nav  class=" des navbar navbar-expand-lg  navbar-dark bg-light sticky-top py-1" style="position:fixed;top:0px;left:0px;width: 100%">
     <a class="navbar-brand" href="#" onclick="showAdminBtns()"><img src="src/modelo-abi.png" ></a>
    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style="background-color: rgba(0,0,0,.6); border-color: black;">
    <span  class="navbar-toggler-icon"></span>
  </button>
 
   <div class="collapse navbar-collapse" id="navbarTogglerDemo01" >
   <div class="row">
    <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 " style="width: 100%;margin:0px 0px;display: inherit;">   

      <input class="form-control " id="input-buscar" onkeydown="KeyUpBuscar(id)"  type="search" placeholder="Buscar"  aria-label="Search"  ><button id="btnSearch" class="btn btn-primary"  >Buscar</button>

    
    </div>
     <div class="col-xl-3 col-lg-2 col-md-6 col-sm-5 col-4"   >
      <div style="display: inline" >
      <img id="scream" width="5" height="5" src="src/pin.png" alt="The Scream" style="display: none;" >
        <button id="btn-cap-cerrar" class="btn btn-sm btn-outline-danger"  style="display: none" >Cerrar</button>
        <button id="btn-cap" class="btn btn-sm btn-outline-danger" data-toggle="collapse" data-target="#collapse-cap" aria-expanded="false" aria-controls="collapse-cap" >Filtro</button>
        <div class="collapse" id="collapse-cap" >
          <div class="card card-body" >  
            <div style="padding-left:10%">
              <img id="menos" src="src/menos.png" >
              <span ><label id="lb-cap" > 0 </label></span>
              <img id="mas" src="src/mas.png" >
            </div>
            <hr>
            <div class="row" >
              <div class="col-3 px-2" >
                 <img src="src/switch1.svg" onclick="buscarRecurso(this)" class="chbx-VDI" style="width: 40px;margin-bottom: 3px;transform: rotate(180deg);margin-top: -8px">
              </div>
              <div class="col" style="text-align: left" >
                <p class="lb-rec">VDI</p>
              </div>
  
            </div>
            <div class="row" >
              <div class="col-3 px-2" style="padding-top: 3px;width:20px">
                <img src="src/switch1.svg" onclick="buscarRecurso(this)" class="chbx-interfon" style="width: 40px;margin-bottom: 3px;transform: rotate(180deg);margin-top: -8px" >
              </div>
              <div class="col" style="text-align: left" >
                <p  class="lb-rec">Interfon</p>
              </div>
            </div>
            <div class="row" >
              <div class="col-3 px-2" style="padding-top: 3px;width:20px">
                 <img src="src/switch1.svg" onclick="buscarRecurso(this)" class="chbx-pantalla" style="width: 40px;margin-bottom: 3px;transform: rotate(180deg);margin-top: -8px">
              </div>
              <div class="col" style="text-align: left" ><p class="lb-rec">Pantalla</p></div>
              
            </div>
            <div class="row" >
              <div class="col-3 px-2" style="padding-top: 3px;width:20px">
                <img src="src/switch1.svg" onclick="buscarRecurso(this)" class="chbx-proyector" style="width: 40px;margin-bottom: 3px;transform: rotate(180deg);margin-top: -8px">
              </div>
              <div class="col" style="text-align: left" ><p class="lb-rec">Proyector</p></div>
              
            </div>
            <div class="row" >
              <div class="col-3 px-2" style="padding-top: 3px;width:20px">
                <img src="src/switch1.svg" onclick="buscarRecurso(this)" class="chbx-tp" style="width: 40px;margin-bottom: 3px;transform: rotate(180deg);margin-top: -8px">
              </div>
              <div class="col" style="text-align: left" >
                <p class="lb-rec">
              TP</p></div>
              
            </div>



           

          </div>
              

          
        </div>
      </div >

     

     
    
     
     
  </div >
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-7 col-8" id="menu-derecho" >
    <div id="btn-derecho">
     



   <button class="btn btn-sm btn-outline-dark" id="btnLogIn" data-toggle="modal" data-target="#myModal" type="button" name="button" onclick="closeNav()" >Log in</button>
   <!-- Button trigger modal -->


 
 </div>
</div>
</div>
</div>



  </nav>




  

 <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Accesso Mapa</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        <center><img src="src/modelo-abi.png" style="width: 80%"></center>
        <!-- Modal body -->
        <div class="modal-body">
          <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="logInBnt" data-dismiss="modal">Log in</button>
        </div>
        
      </div>
    </div>
  </div>
  <div style="position: absolute;top:60px;left:0px;z-index:1000">
    <div class="alert alert-danger" id="alertDanger" style="display: none;" >
    <strong> ALERTA Falta de dato!</strong> Porfavor verifica y llena<a href="#" class="alert-link"> todos tus datos</a>.
  </div>
  <div class="alert alert-danger" id="Danger-area" style="display: none;" >
    <strong>ALERTA! </strong>fueron borrados exitosamente<a href="#" class="alert-link"> todos los datos sobre el area seleccionada </a>.
  </div>
    <div class="alert alert-success" id="alertSuccess" style="display: none;" >
    <strong>SE GUARDARON !</strong> exitosamente <a href="#" class="alert-link"> todos tus datos</a>.
  </div>
  <div class="alert alert-success" id="Success-area" style="display: none;" >
    <strong>SE GUARDO !</strong> exitosamente <a href="#" class="alert-link"> el area seleccionada</a>.
  </div>
    <div class="alert alert-primary" id="no-registro" style="display: none;" >
    <strong>No hay registro</strong> <p style="display: inline-block;">para la busqueda:</p ><b><p id="no-reg-sala"  style="display: inline-block;"></p></b>.
  </div>
  </div>
  

  
  

   <div class="conteiner" id="div-lugar">
   <img src="src/iconos/cerrar.png" id="menuBtnCerrar"  onclick="slideOptClose()" style="width: 55px;height:55px;position: fixed;bottom: 0px;left:0px;margin:15px;z-index: 491;display: none">

   <img src="src/iconos/arriba.png" id="menuBtn" onclick="slideOpt()"  style="width: 55px;height:55px;position: fixed;bottom: 0px;left:0px;margin:15px;z-index: 491">
   <input class="form-control " id="input-buscar2" type="search" onkeyup="KeyUpBuscar(id)" placeholder="Search" value aria-label="Search" style="width: auto;border-radius: 150px;background-color: white;position: fixed;bottom: 0px;left:60px;margin:20px;z-index: 492;color:black;border:1px solid black" >
    <ul id="ulDiv2" style="  list-style-type: none;padding-left: 22px;width: auto;height: auto;position: fixed;bottom: 65px;left:0px;z-index: 490">
      
        <li>
      <button class="btn btn-light" id="zoomIn" style="border-radius: 150px;width: 40px;height:40px;margin: 5px 0px;padding-left: 2px; padding-top: 2px;border:1px solid black">
        <img src="src/anadir.png" style="width: 20px">
      </button>
    </li>
    <li><button class="btn btn-light" id="zoomOut"  style="border-radius: 150px;width: 40px;height:40px;margin: 5px 0px;padding-left:2px;padding-top: 1px;display: inline-block;border:1px solid black" >
         <img src="src/minus.png" style="width: 20px">
        </button>
    </li>
  </ul>

   <ul id="ulDiv" style="  list-style-type: none;padding-left: 22px;display: none;width: auto;height: auto;position: fixed;bottom: 65px;left:0px;z-index: 490">
  
    <li style="margin:10px 0px">
          <img src="src/iconos/capas.png" id="btnFiltros" onclick="ShowFiltros()" style="width: 40px;height:40px;margin: 5px 0px" 
         >
               <div id="divFiltros" style="border-radius: 150px;width: auto;height:50px;margin: 5px 3px -20px 6px;padding-left: 2px; ;display:inline-block;display: none; overflow: overlay;border:1px solid black;background-color: white">
         <img src="src/iconos/s_1_1.png" class="iconosFacilities" id="electricIcon" onclick="layout(this)">
         <img src="src/iconos/s_2_1.png" class="iconosFacilities" id="restroomIcon" onclick="layout(this)">
         <img src="src/iconos/s_3_1.png" style="height: 40px;width:10px;display: inline-block;" 
         id="lactanciaIcon" onclick="layout(this)">
         <img src="src/iconos/s_4_1.png" class="iconosFacilities" id="bancoIcon"  onclick="layout(this)">
         <img src="src/iconos/s_5_1.png" class="iconosFacilities" id="doctorIcon" onclick="layout(this)">
         <img src="src/iconos/s_6_1.png" class="iconosFacilities" id="ATMIcon" onclick="layout(this)">  
      </div>
    </li>
    <li>
      <button class="btn"  id="btnfacilities"  >
        <img src="src/filter.png"  id="imgfacilities" style="width: 20px;-webkit-filter: invert(100%);filter: invert(100%);" 
        onclick="ShowFacilities()">
      </button>
      <div id="divFacilities" >
         <img src="src/iconos/vdi_off.png" 
          style="width: 40px;margin:4px 3px;"
          class="chbx-VDI2"
          onclick="buscarRecurso(this)">
         <img src="src/iconos/telefono_off.png" 
          style="width: 40px;margin:4px 3px;"
          class="chbx-interfon2"
          onclick="buscarRecurso(this)"
          >
         <img src="src/iconos/pantalla_off.png" 
         style="width: 40px;margin:4px 3px;"
         class="chbx-pantalla2"
         onclick="buscarRecurso(this)">
         <img src="src/iconos/proyector_off.png" 
         style="width: 40px;margin:4px 3px;"
         class="chbx-proyector2"
         onclick="buscarRecurso(this)">
         <img src="src/iconos/teleconferencia_off.png" 
         style="width: 40px;margin:4px 3px;"
         class="chbx-tp2"
         onclick="buscarRecurso(this)">
      </div>

    </li>
    
  </ul>

        
    <div class="row conteiner" style="margin-left: 0px;">
       <div class="btn-group btn-group-sm    " id="showslide" style="position: absolute;right: 10px;z-index: 1234;width: auto;padding-top: 18px;top:50px;display: none">
        <button type="button" id="slideNav"  onclick="ShowslideNav()" class="btn btn-dark" style="border-radius: 140px"><i class="fa fa-arrow-left"></i></button>
         
          
        </div>
        
       
      <div class="col-12 conteiner dragscroll " id="mainMapa" style="overflow: scroll;">
       
        

         <div class="classZoomMap" style="left:0px;top:0px;width: 2000px;height: 2000px;" >
          <div id="" style="position:absolute;z-index:600" >

<!--<button class="btn btn-secondary" id="btn-limpiar" type="button">
Limpiar Mapa
</button>

<div id="range-zoom" >
  <button  class="btn btn-dark  px-2" id="zoomIn" ><img src="src/anadir.png" style="width: 20px;-webkit-filter: invert(100%);filter: invert(100%);"></button><button class="btn btn-light  px-2" id="zoomOut" ><img src="src/minus.png" style="width: 20px;"></button>
</div>-->

</div>

     <table class="classZoomMap" id="selectPixeles" style="position: absolute;left: 0px;top: 0px;z-index: 300;width: 2000px;height: 2000px;display: none" >
    
    </table>
    
    
    <canvas id="myCanvas" style="margin-top: 5px;margin-left: 5px;position: absolute;left: 0px;top: 0px;z-index: 299" width="2000" height="2000" ondblclick="closeNav()"  >

</canvas>

  <div class="bg1" on>
    <img class="recorrido" src="">
  </div>
  <div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 110;width: 2000px;height: 2000px;" >
  <img src="src/s_6.png"  id="ATM" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;display: none">
</div>
  <div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 109;width: 2000px;height: 2000px;" >
  <img src="src/s_5.png"  id="doctor" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;display: none">
</div>
  <div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 108;width: 2000px;height: 2000px;" >
  <img src="src/s_4.png"  id="banco" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;display: none">
</div>
  <div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 107;width: 2000px;height: 2000px;" >
  <img src="src/s_3.png"  id="lactancia" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;display: none">
</div>
  <div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 106;width: 2000px;height: 2000px;" >
  <img src="src/s_2.png"  id="restroom" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;display: none">
</div>
<div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 106;width: 2000px;height: 2000px;" >
  <img src="src/s_1.png"  id="electric_room" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%;display: none">
</div>
<div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 105;width: 2000px;height: 2000px;" >
  <img src=""  id="selected" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%">
</div>
<div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 103;width: 2000px;height: 2000px" >
  <img src="src/flags.png" id="flags" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%">
</div>


<div class="classZoomMap" id="salasBusqueda" style="position: absolute;left: 10px;top: 35px;z-index: 106;width: 2000px;height: 2000px; "></div>
<div class="classZoomMap" style="position: absolute;left: 10px;top: 35px;z-index: 104;width: 2000px;height: 2000px;" >
  <img src="src/mapasalas.png" id="salas" width="1024" height="768" usemap="#mapasalas" alt="" style="width:100%">
</div>


</div>


        
      </div>
            <div class=" col-xl-4 col-lg-5 col-md-6  sidenav" id="infonav"   >
               <div class="card" id="card-proceso" style="position: absolute; top:40%;right: 0px;width: 80%;margin: 10%;z-index: 20;display: none" >
  <div class="card-header">
    Quote 
    <button type="button" class="close" aria-label="Close">
  <span onclick="closeUbic()"  aria-hidden="true">&times;</span>
</button>
  </div>
     <div class="card-body"  >
                        <label style="margin-top:4%;" ><b>¿Donde estas?:</b></label>
                  <select id="punto2"   class="form-control" name="punto2"  >
                    <option  selected="" id="default"  value="0">Selecciona un departamento</option>
                    <option value="57_69">PBS</option>
                    <option value="57_21">LOGÍSTICA 1 </option>
                    <option value="">LOGÍSTICA 2</option>
                    <option value="66_87">BT</option>
                    <option value="30_87">LEG</option>
                    <option value="71_119">PYM</option>
                    <option value="mcm">MCM</option>
                    <option value="48_110">ATR 1</option>
                    <option value="103_103">ATR 2</option>
                    <option value="87_144">PTP</option>
                    <option value="140_161">TAX</option>
                    <option value="103_178">CT</option>
                    <option value="159_170">TI</option>
                  </select>
                  <button class="btn btn-primary" style="margin-bottom: 15px" id="buscarRuta" onclick="TraceRoute()">Buscar ruta</button><!--getNodosRuta()-->
                  <button id="btnAddNodo" class="btn btn btn-primary mb-3"  style="display: none" >agregar nodo</button>
                  <button id="btnAddRuta" class="btn btn btn-primary" style="display: none" >agregar rutas</button>

                   




    </div>
</div>

  <div class="row" id="sideInfo" style="margin:0px 0px;width: 100%">
    <div class="col-12 des" id="sala" style="">
      
       <div class="btn-group btn-group-sm    " style="position: absolute;left: 10px;z-index: 1234;width: auto;padding-top: 18px">
        <button type="button" id="slideNav"  onclick="slideNav()" class="btn btn-outline-light" style=""><i class="fa fa-arrow-right"></i></button>
          <button type="button" id="closeNav"  onclick="closeNav()" class="btn btn-outline-light" style=""> <i class="fa fa-times"></i> Close</button>
          
        </div>
      <p id="iZona" style="color:white;text-transform: uppercase"></p>
    </div>
    <div class="col-12 px-lg-4 px-md-4 px-xs-4 px-4" id="divCarousel"  >
    <div id="myCarousel" class="carousel slide des" data-ride="carousel" style="height: 100%" >

 
  
  <!-- The slideshow -->
  <div class="carousel-inner"><CENTER style="height: 100%">
    <div class="carousel-item " style="display: block;" id="item1" >
      <img id="img2" src=""   >
    </div>
    <div class="carousel-item"  id="item2" >
      <img id="img1" src=""  >
    </div>
    </CENTER>
  </div>
  
 
  
</div>
</div>

<div class="col-12 px-lg-3 px-md-3 px-xs-4 px-4" id="infodatos" >


  <ul id="ulSala" style="  list-style-type: none;">
  
  <li>

    <p id="isala" style="display: inline-block;font-size: 1.5rem"   ></p><p id="divEditar"></p>
  </li>
  <li>
    <p id="ides"  >
      
    </p>
  </li>
</ul>
  <ul style="list-style-type: none;padding-left: 0px">
  <li>
    <img id="imgedificio"  >
    <span id="iedificio"  ></span>
  </li>
  <li>
    <img id="imgcap"  >
    <span id="icap" ></span>
  </li>
  <li>
    <img id="imgarea"  >
    <span  id="iarea" ></span>
  </li>
  
  <li>
   
  </li>
</ul>

  </div>
   <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12" id="infoRecursos" style="margin-left: "  > 
    <div class=row>
      <div style="width: 20%"><img id="imgtv" src="src/pantalla.png" style="width:30px;margin:0px" ></div>
      <div style="width: 20%"><img id="iproy" src="src/proyector.png" style="width: 30px;opacity:0.4;margin:0px"></div>
      <div style="width: 20%"><img id="iphone" src="src/telefono.png" style="width: 30px;opacity:0.4;margin:0px"></div>

      <div style="width: 20%"><img id="ivdi"  src="src/vdi.png" style="width: 30px;opacity:0.4;margin:0px" ></div>
      <div style="width: 20%"><img id="itp" src="src/telepresencia.png"  style="width: 30px;opacity:0.4;margin:0px"></div>
    </div>
    </div>
  </div>

   





    
  </div>


      <div class="col-xl-4 col-lg-5 col-md-12  px-3" id="form-lugar" style="" align="center" >
        <p id="label_edit" style="font-size: 30px;display: none"></p>
        <p id="label_new" style="font-size: 30px;display: none">NUEVA SALA</p>
        <br>
        <div class="input-group mb-3 mx-2">
          
                  <input id="nombrel" class="form-control" type="text" placeholder="nombre" name="" value=""><br>

       
        </div>
        <div class="input-group mb-3 mx-2">
          
          <select id="zona" class="form-control"   name="">
          <option  disabled="" selected="" >zona</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <input type="color" class="form-control" id="zonaColor" name="zonaColor" value="#ffffff">
        </div>
      
        
        <select id="depas"  name="" class="form-control mx-2"  >
          <option disabled="" value="0">Selecciona un departamento</option>
          <option value="PBS">PBS</option>
          <option value="Logística">LOGÍSTICA</option>
          <option value="BT">BT</option>
          <option value="LEG">LEG</option>
          <option value="P&M">PyM</option>
          <option value="MCM">MCM</option>
          <option value="ATR">ATR</option>
          <option value="PTP">PTP</option>
          <option value="TAX">TAX</option>
          <option value="CT">CT</option>
          <option value="TI">TI</option>
        </select>
        <hr>

        <div class="row">
          <div class="col-md-4 col-sm-4 col-4" align="center">
            <label><b>N/Personas:</b></label><br>
            <input id="nopersonas"  type="number" name="" value="" class="form-control"><br>
          </div>
         

          <div class="col-md-8 col-sm-8 col-8" align="center">
            <b><label>Edificio:</label></b><br>
            <select id="edificio"  style="margin-bottom:10px;" class="form-control" name="">
              <option value="Coches">Coches</option>
              <option value="Sistemales">Sistemales</option>
            </select>
          </div>
           <div class="col-md-4 col-sm-4 col-4" align="center">
             <label><b>N/Sala:</b></label><br>
            <input id="nosala"  type="number"  name="" onchange="nosala()" value="0">

          </div>
          <div class="col-md-8 col-sm-8 col-8" align="center" style="padding-top: 30px">
            <button class="btn btn-primary btn-sm " id="select-area" disabled="" >agregar area</button>
            <button class="btn btn-primary btn-sm " id="nodo-sala" disabled="" >Entrada sala</button>
            <button class="btn btn-success" id="Confirmar" >Confirmar</button>
            <button class="btn btn-danger" id="btn-area-cancel" >Cancelar</button>
          </div>
          <div class="col-md-4 col-sm-4 col-6" align="center">
            <p class="label-switch"><b>VDI:</b><br> No <img class="switchAdd" id="vdiAdd" src="src/switch2.png"> Si</p>
          </div>
          <div class="col-md-4 col-sm-4 col-6" align="center">
            <p class="label-switch"><b>Interfon:</b><br> No <img class="switchAdd" id="interfonAdd"  src="src/switch2.png" > Si</p>
          </div>
         
          <div class="col-md-4 col-sm-4 col-6" align="center">
            <p class="label-switch"><b>Pantalla:</b><br>No <img class="switchAdd" id="pantallaAdd"  src="src/switch2.png" > Si</p>
          </div>
          <div class="col-md-6 col-sm-6 col-6" align="center">
            <p class="label-switch"><b>Proyector:</b><br>No <img class="switchAdd" id="proyectorAdd"  src="src/switch2.png" > Si</p>
          </div>
          <div class="col-md-6 col-sm-6 col-12" align="center">
            <p class="label-switch"><b>TP:</b><br>No <img class="switchAdd" id="tpAdd"  src="src/switch2.png" > Si</p>
          </div>
        </div>
        <!--<textarea class="form-control" id="inputDescripcion" maxlength="140" placeholder="Descripcion en 140 caracteres" style="margin-bottom: 15px" ></textarea>-->
        
       
 <label for="imgportada" class="subir" id="infoportada">
    <i class="fas fa-cloud-upload-alt"></i> Subir imagen portada
</label>
<input class="cimagen" id="imgportada" onchange='cambiar(this.id)' type="file" style='display: none;'/>
       
 <label for="imginterior" class="subir" id="infointerior">
    <i class="fas fa-cloud-upload-alt"></i> Subir imagen interior sala
</label>
<input class="cimagen" id="imginterior" onchange='cambiar(this.id)' type="file" style='display: none;'/>

      <label for="imgmapa" class="subir" id="infomapa" 
      style="margin-bottom: 60px;">
    <i class="fas fa-cloud-upload-alt"></i> Subir imagen mapa
</label>
<input class="cimagen" id="imgmapa" onchange='cambiar(this.id)' type="file" style='display: none;'/>

        
       <div class=" col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12" id="divBtnSave">
         <button class="btn btn-primary" id="btnSave" type="button" name="button" disabled=""  >Guardar</button>
         
         <button class="btn btn-primary" id="btnEdit" type="button" name="button"  >Guardar Cambios</button>
       </div>
       
        
      </div>
    </div>
  </div>
  
  
    
  
    
 
 


  







<script src="js/main2.js" ></script>

<script type="text/javascript" src="js/index2.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
<script type="text/javascript">
//paste this code under the head tag or in a separate js file.
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    
  });
</script>

</body>
<div class="se-pre-con"></div></html>