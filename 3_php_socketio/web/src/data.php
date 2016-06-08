<?php

require __DIR__ . '/../vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['message']) {
        $emitter = new SocketIO\Emitter();
        $emitter->emit('message', $_POST['message']);
    }
}

?>
