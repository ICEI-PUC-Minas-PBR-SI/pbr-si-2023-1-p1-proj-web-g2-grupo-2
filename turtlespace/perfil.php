<?php

$dsn = 'mysql:host=localhost;dbname=seu_banco_de_dados';
$username = 'seu_usuario';
$password = 'sua_senha';

try {
  $db = new PDO($dsn, $username, $password);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  $query = "SELECT * FROM perfil";
  $stmt = $db->query($query);
  $perfil = $stmt->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    
  echo 'Erro de conexão: ' . $e->getMessage();
}
?>

<div class="perfil">
  <h3><?php echo $perfil['usuario']; ?></h3>
  <div
