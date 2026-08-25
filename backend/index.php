<?php

header("Access-Control-Allow-Origin: *");

header(
    "Access-Control-Allow-Methods: GET, POST, OPTIONS"
);

header(
    "Access-Control-Allow-Headers: Content-Type"
);

header("Content-Type: application/json");


if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}


// DATABASE

require_once
    __DIR__ .
    "/config/Database.php";


// CONTROLLERS

require_once
    __DIR__ .
    "/controllers/RoomController.php";

require_once
    __DIR__ .
    "/controllers/ReservationController.php";


// CONNECT DATABASE

$database = new Database();

$db = $database->connect();


// GET ACTION

$action = $_GET["action"] ?? "";


// AVAILABILITY

if ($action === "availability") {

    $controller =
        new RoomController($db);

    echo json_encode(
        $controller->getAvailableRooms()
    );

    exit;
}


// RESERVATION

elseif (
    $action === "reserve" &&
    $_SERVER["REQUEST_METHOD"] === "POST"
) {

    $controller =
        new ReservationController($db);

    echo json_encode(
        $controller->createReservation()
    );

    exit;
}


// DEFAULT

else {

    echo json_encode([

        "success" => true,

        "message" =>
            "LaFalaise Hotel API is working."

    ]);

}