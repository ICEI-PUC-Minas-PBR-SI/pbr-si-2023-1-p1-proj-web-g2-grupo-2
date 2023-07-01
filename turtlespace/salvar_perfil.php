<?php

$usuario = $_POST['usuario'];
$email = $_POST['email'];
$descricao = $_POST['descricao'];
$telefone = $_POST['telefone'];

$dsn = 'mysql:host=localhost;dbname=seu_banco_de_dados';
$username = 'seu_usuario';
$password = 'sua_senha';

try {
  $db = new PDO($dsn, $username, $password);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  $query = "INSERT INTO perfil (usuario, email, descricao, telefone) VALUES (?, ?, ?, ?)";
  $stmt = $db->prepare($query);
  $stmt->execute([$usuario, $email, $descricao, $telefone]);
  
  header('Location: perfil.php');
  exit();
} catch (PDOException $e) {
    
  echo 'Erro de conexão: ' . $e->getMessage();
}
?>
