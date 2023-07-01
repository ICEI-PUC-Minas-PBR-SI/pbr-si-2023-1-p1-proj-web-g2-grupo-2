<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (isset($_FILES['capa']) && $_FILES['capa']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['capa'];
        
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
        
        $fileName = uniqid('capa_') . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
        
        if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
            echo 'Upload da capa concluído com sucesso.';
        } else {
            echo 'Erro ao fazer upload da capa.';
        }
    } else {
        echo 'Ocorreu um erro durante o envio da capa.';
    }
} else {
    echo 'Acesso inválido ao arquivo de processamento da capa.';
}
?>
