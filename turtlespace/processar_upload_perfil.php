<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_FILES['perfil']) && $_FILES['perfil']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['perfil'];
        
        $mime = getimagesize($file['tmp_name']);
        if ($mime === false) {
            echo 'O arquivo enviado não é uma imagem válida.';
            exit;
        }
        
        $allowedTypes = ['image/jpeg', 'image/png'];
        if (!in_array($mime['mime'], $allowedTypes)) {
            echo 'Apenas imagens JPEG e PNG são permitidas.';
            exit;
        }
        
        $uploadDir = 'C:\Users\lihel\Desktop\Trabalho TIAW\pbr-si-2023-1-p1-proj-web-g2-grupo-2\turtlespace\uploads perfil e capa';
        
        $fileName = uniqid('perfil_') . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
        if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
            echo 'Upload da foto de perfil concluído com sucesso.';
        } else {
            echo 'Erro ao fazer upload da foto de perfil.';
        }
    } else {
        echo 'Ocorreu um erro durante o envio da foto de perfil.';
    }
} else {
    echo 'Acesso inválido ao arquivo de processamento da foto de perfil.';
}
?>
