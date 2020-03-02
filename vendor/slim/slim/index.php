<?php


header("Content-type: application/json;charset=utf8"); 

require 'Slim/Slim.php';
require 'connection.php';


\Slim\Slim::registerAutoloader();


$app = new \Slim\Slim();

 $app->get('/Vzonas', 'Vzonas');
 $app->get('/Vsala/:sala','Vsala');
 $app->get('/VImgsala/:sala','VImgsala');
 $app->get('/BuscarNombre/:nombre','BuscarNombre');
 $app->get('/BuscarTodoNombre','BuscarTodoNombre');
 $app->get('/Buscar/:cap','Buscar');
 $app->get('/BuscarRec/:cap/:VDI/:interfon/:pantalla/:proyector/:TP','BuscarRec');
$app->get('/getPixeles','getPixeles');
 $app->post('/postruta', 'addruta');
 $app->get('/getruta/:punto/:destino', 'traeRutas');
$app->post('/postlugar', 'addLugar');
$app->post('/postPixel', 'addPixel');
$app->post('/delPixeles/:id_sala', 'delPixeles');
$app->get('/buscarsala/:id','getsala');
$app->post('/uplugar/:id', 'updateLugar');
$app->post("/DelSala/:id_sala",'DelSala');
$app->post('/AddNodo','AddNodo');
$app->get("/getNodos","getNodos");
$app->post("/addArista","addArista");
$app->get("/getAristas","getAristas");
$app->get("/getAristasAdy/:nodoSelect","getAristasAdy");
$app->get("/getNodoSala/:id_sala","getNodoSala");



 function Vzonas(){
    $sql = "SELECT * FROM zona ";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }

  function getPixeles(){
    $sql = "SELECT pixeles.id_pixel,pixeles.id_sala,pixeles.color,no_sala.nombre FROM pixeles inner join no_sala on pixeles.id_sala = no_sala.no_sala" ;
    try {

        $db = getConnection();
        
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }

 function Vsala($id_sala){
    $sql = "SELECT * FROM no_sala inner join pixeles on no_sala.no_sala = pixeles.id_sala  where no_sala='$id_sala' ORDER BY  pixeles.id_pixel ASC LIMIT 1";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }
  function VImgsala($id_sala){
    $sql = "SELECT no_sala.no_sala FROM no_sala inner join pixeles on no_sala.no_sala = pixeles.id_sala  where no_sala='$id_sala' ORDER BY  pixeles.id_pixel ASC LIMIT 1";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }

  function BuscarTodoNombre(){
    $sql = "SELECT no_sala.no_sala,no_sala.nombre,no_sala.imgmapa  FROM no_sala";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }

  function BuscarNombre($nombre){
    $sql = "SELECT no_sala.no_sala  FROM no_sala where nombre like'%$nombre%' ";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }
 function Buscar($cap){
    $sql = "SELECT no_sala,imgmapa FROM no_sala where capacidad='$cap' ";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }
  function BuscarRec($cap,$VDI,$interfon,$pantalla,$proyector,$TP){
    //$sql = "SELECT * FROM no_sala where capacidad='$cap' and VDI ='$VDI'and interfon = '$interfon' and pantalla = '$pantalla' and proyector ='$proyector' and videoconferencia='$TP' ";
    if($cap==0){
         if($VDI==0){
            if ($interfon==0) {
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                            $sql = "SELECT no_sala FROM no_sala where no_sala='' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla' 
                             and videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla' 
                             and proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }    
            }else{
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'  ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }
            }

        }else{
            if ($interfon==0) {
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where VDI = '$VDI'";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }

                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla' 
                             and proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }



                }
               
            }else{
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon' 
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where  interfon= '$interfon'
                             and proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where  interfon= '$interfon'
                             and proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }

                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }



                }

              

            }

              

        }


    }else{
         if($VDI==0){
            if ($interfon==0) {
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                                     and videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla' 
                             and videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }    
            }else{
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'  ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and videoconferencia='$TP' ";
                        }
                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP' ";
                        }
                    }
                }
            }

        }else{
            if ($interfon==0) {
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and VDI = '$VDI'";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }

                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla' 
                             and proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }



                }
               
            }else{
                if($pantalla==0){
                    if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon' 
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }

                }else{
                     if($proyector==0){
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }

                    }else{
                        if($TP==0){
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector'
                             and VDI = '$VDI' ";
                        }else{
                             $sql = "SELECT no_sala FROM no_sala where capacidad='$cap' 
                             and interfon= '$interfon'
                             and pantalla='$pantalla' 
                             and proyector ='$proyector' 
                             and videoconferencia='$TP'
                             and VDI = '$VDI' ";
                        }


                    }



                }

              

            }

              

        }


    }
       
  

    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

 }
  function traeRutas($punto,$destino){
  $sql = "SELECT * FROM rutas WHERE punto = '$punto' and destino = '$destino'";
   try {
       $db = getConnection();
       $stmt = $db->query($sql);
       $names = $stmt->fetchAll(PDO::FETCH_OBJ);
       $db = null;
       echo json_encode($names);
   } catch(PDOException $e) {
       echo '{"error":{"text":'. $e->getMessage() .'}}';
   }
}


function addruta(){
  $request = \Slim\Slim::getInstance()->request();
  $ruta = json_decode($request->getBody());
  $sql = "INSERT INTO rutas(punto,destino,camino) VALUES (:punto,:destino,:camino)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("punto",$ruta->punto);
        $stmt->bindParam("destino",$ruta->destino);
        $stmt->bindParam("camino",$ruta->camino);
        $stmt->execute();
        $db = null;
        echo json_encode($ruta);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}


function addLugar(){
  $request = \Slim\Slim::getInstance()->request();
  $ruta = json_decode($request->getBody());
  $sql = "INSERT INTO no_sala(no_sala, nombre, capacidad, pantalla, proyector, interfon, VDI, videoconferencia, zona, area, edificio, imgsala, imgportada, imgmapa, color) VALUES (:no_sala, :nombre, :capacidad, :pantalla, :proyector, :interfon, :VDI, :videoconferencia, :zona, :area, :edificio, :imgsala, :imgportada, :imgmapa, :color)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("no_sala",$ruta->no_sala);
        $stmt->bindParam("nombre",$ruta->nombre);
        $stmt->bindParam("capacidad",$ruta->capacidad);
        $stmt->bindParam("pantalla",$ruta->pantalla);
        $stmt->bindParam("proyector",$ruta->proyector);
        $stmt->bindParam("interfon",$ruta->interfon);
        $stmt->bindParam("VDI",$ruta->VDI);
        $stmt->bindParam("videoconferencia",$ruta->videoconferencia);
        $stmt->bindParam("zona",$ruta->zona);
        $stmt->bindParam("color",$ruta->color);
        $stmt->bindParam("area",$ruta->area);
        $stmt->bindParam("edificio",$ruta->edificio);
        $stmt->bindParam("imgsala",$ruta->imgsala);
        $stmt->bindParam("imgportada",$ruta->imgportada);
        $stmt->bindParam("imgmapa",$ruta->imgmapa);

        $stmt->execute();
        $db = null;
        echo json_encode($ruta);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}
function addPixel(){
  $request = \Slim\Slim::getInstance()->request();
  $ruta = json_decode($request->getBody());
  $sql = "INSERT INTO pixeles (id_pixel,id_sala,color) VALUES (:id_pixel,:id_sala,:color)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id_sala",$ruta->id_sala);
        $stmt->bindParam("color",$ruta->color);
        $stmt->bindParam("id_pixel",$ruta->id_pixel);
        $stmt->execute();
        $db = null;
        echo json_encode($ruta);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function delPixeles($id_sala){
  
  $sql = "DELETE from pixeles WHERE id_sala='$id_sala' ";
     try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

}

function getsala($id){
    
  $sql = "SELECT * FROM no_sala WHERE no_sala = $id ";
   try {
       $db = getConnection();
       $stmt = $db->query($sql);
       $names = $stmt->fetchAll(PDO::FETCH_OBJ);
       $db = null;
       echo json_encode($names);
   } catch(PDOException $e) {
       echo '{"error":{"text":'. $e->getMessage() .'}}';
   }
}

function updateLugar($id){
  $request = \Slim\Slim::getInstance()->request();
  $ruta = json_decode($request->getBody());
  $sql = "UPDATE no_sala SET no_sala=:no_sala, nombre=:nombre, capacidad=:capacidad, pantalla=:pantalla, proyector=:proyector, interfon=:interfon, VDI=:VDI, videoconferencia=:videoconferencia, zona=:zona, area=:area, edificio=:edificio, imgsala=:imgsala, imgportada=:imgportada, imgmapa=:imgmapa, color=:color,descripcion=:descripcion WHERE no_sala = $id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("no_sala",$ruta->no_sala);
        $stmt->bindParam("nombre",$ruta->nombre);
        $stmt->bindParam("capacidad",$ruta->capacidad);
        $stmt->bindParam("pantalla",$ruta->pantalla);
        $stmt->bindParam("proyector",$ruta->proyector);
        $stmt->bindParam("interfon",$ruta->interfon);
        $stmt->bindParam("VDI",$ruta->VDI);
        $stmt->bindParam("videoconferencia",$ruta->videoconferencia);
        $stmt->bindParam("zona",$ruta->zona);
        $stmt->bindParam("color",$ruta->color);
        $stmt->bindParam("area",$ruta->area);
        $stmt->bindParam("edificio",$ruta->edificio);
        $stmt->bindParam("imgsala",$ruta->imgsala);
        $stmt->bindParam("imgportada",$ruta->imgportada);
        $stmt->bindParam("imgmapa",$ruta->imgmapa);
        $stmt->bindParam("descripcion",$ruta->descripcion);

        $stmt->execute();
        $db = null;
        echo json_encode($ruta);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function DelSala($id_sala){
    
    $sql= "DELETE from no_sala where no_sala = $id_sala";
      try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($names);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function AddNodo(){
   $request = \Slim\Slim::getInstance()->request();
  $ruta = json_decode($request->getBody());
  $sql = "INSERT INTO nodo (id_nodo,col,row,id_sala) VALUES (:id_pixel,:c1,:c2,:id_sala)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id_pixel",$ruta->id_pixel);
        $stmt->bindParam("c1",$ruta->c1);
        $stmt->bindParam("c2",$ruta->c2);
        $stmt->bindParam("id_sala",$ruta->id_sala);
        $stmt->execute();
        $db = null;
        echo json_encode($ruta);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

}

function getNodos(){
      $sql = "SELECT * FROM nodo";
   try {
       $db = getConnection();
       $stmt = $db->query($sql);
       $names = $stmt->fetchAll(PDO::FETCH_OBJ);
       $db = null;
       echo json_encode($names);
   } catch(PDOException $e) {
       echo '{"error":{"text":'. $e->getMessage() .'}}';
   }

}



function addArista(){
   $request = \Slim\Slim::getInstance()->request();
  $ruta = json_decode($request->getBody());
  $sql = "INSERT INTO arista (nodoPrincipal,nodoAdyacente,peso) VALUES (:nodoPrincipal,:nodoAdyacente,:peso)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("nodoPrincipal",$ruta->nodoPrincipal);
        $stmt->bindParam("nodoAdyacente",$ruta->nodoAdyacente);
        $stmt->bindParam("peso",$ruta->peso);
        $stmt->execute();
        $db = null;
        echo json_encode($ruta);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

      $sql = "INSERT INTO arista (nodoPrincipal,nodoAdyacente,peso) VALUES (:nodoAdyacente,:nodoPrincipal,:peso)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("nodoPrincipal",$ruta->nodoPrincipal);
        $stmt->bindParam("nodoAdyacente",$ruta->nodoAdyacente);
        $stmt->bindParam("peso",$ruta->peso);
        $stmt->execute();
        $db = null;
        echo json_encode($ruta);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

}
function getAristas(){
      $sql = "SELECT * FROM arista";
   try {
       $db = getConnection();
       $stmt = $db->query($sql);
       $names = $stmt->fetchAll(PDO::FETCH_OBJ);
       $db = null;
       echo json_encode($names);
   } catch(PDOException $e) {
       echo '{"error":{"text":'. $e->getMessage() .'}}';
   }

}

function getAristasAdy($nodoSelect){
    $sql = "SELECT * FROM arista where nodoPrincipal='$nodoSelect'";
   try {
       $db = getConnection();
       $stmt = $db->query($sql);
       $names = $stmt->fetchAll(PDO::FETCH_OBJ);
       $db = null;
       echo json_encode($names);
   } catch(PDOException $e) {
       echo '{"error":{"text":'. $e->getMessage() .'}}';
   }


}

function getNodoSala($id_sala){
      $sql = "SELECT * FROM nodo where id_sala='$id_sala'";
   try {
       $db = getConnection();
       $stmt = $db->query($sql);
       $names = $stmt->fetchAll(PDO::FETCH_OBJ);
       $db = null;
       echo json_encode($names);
   } catch(PDOException $e) {
       echo '{"error":{"text":'. $e->getMessage() .'}}';
   }

}




$app->run();
