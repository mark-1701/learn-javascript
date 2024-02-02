<?php
header("Access-Control-Allow-Origin: *");
$files = $_FILES["archivo_fls"];

foreach ($files["tmp_name"] as $key => $value) {
    echo "index: $key, tmp_name: $value <br>";
    $file = $value;
    $destiny = "archivos/" . $files["name"][$key];
    move_uploaded_file($file, $destiny);
}
echo "<br>"; 
echo "Archivo subido ;)";



//codigo anterior
// $archivo = $_FILES["archivo_fls"]["tmp_name"]; 
// $destino = "archivos/".$_FILES["archivo_fls"]["name"]; 
// move_uploaded_file($archivo, $destino);
// echo "Archivo subido ;)";
// foreach ($_FILES["archivo_fls"] as $key => $value) {
//     echo "Propiedad: $key --- Valor: $value<br>";
// }
// Propiedad: name --- Valor: 412873680_916116023850075_8320897384263991936_n.jpg
// Propiedad: full_path --- Valor: 412873680_916116023850075_8320897384263991936_n.jpg
// Propiedad: type --- Valor: image/jpeg
// Propiedad: tmp_name --- Valor: /opt/lampp/temp/phpmPhzi7
// Propiedad: error --- Valor: 0
// Propiedad: size --- Valor: 318177

?>