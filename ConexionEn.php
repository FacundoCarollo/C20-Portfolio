<?php
$conexion = mysqli_connect('c20-portf.c0rxhojittix.us-east-2.rds.amazonaws.com','admin','','cveinte')or die(mysqli_error($mysqli));
$retornoEn = header('Location: indexEn.html');

    Insertar2($conexion,$retornoEn,$modalExitoEn);
    $modalExitoEn = '<script> AlertaExitoEn() </script>';

   

    function Insertar2($conexion, $retornoEn,$modalExitoEn){
   
        $nombre = $_POST['name'];
        $email = $_POST['email'];
        $telefono = $_POST['tel'];
        $comentario = $_POST['coment'];
        $pais = $_POST['Pais'];
        $consulta = "Insert Into clientes(nombre,email,telefono,comentario,Pais)
        VALUES ('$nombre','$email','$telefono','$comentario','$pais')";
        mysqli_query($conexion,$consulta);
        mysqli_close($conexion);
    
    }



  
    




    
   
    
   

?>