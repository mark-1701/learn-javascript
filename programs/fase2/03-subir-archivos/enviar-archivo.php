<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subir Archivos al Servidor con PHP</title>
</head>
<body>
    <form action="subir-archivo.php" name="enviar_archivo_frm" method="post" enctype="multipart/form-data">
        <input type="file" name="archivo_fls[]" id="" multiple><br>
        <input type="submit" name="subir_btn" value="Subir Archivo">
    </form>
</body>
</html>