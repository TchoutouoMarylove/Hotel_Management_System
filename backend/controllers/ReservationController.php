<?php

require_once __DIR__ . "/../config/database.php";
require_once __DIR__ . "/../models/Reservation.php";


class ReservationController
{

    public function createReservation()
    {

        $data = json_decode(
            file_get_contents("php://input"),
            true
        );


        $roomId = $data["roomId"] ?? null;

        $checkIn = $data["checkIn"] ?? null;

        $checkOut = $data["checkOut"] ?? null;

        $adults = (int)($data["adults"] ?? 0);

        $teenagers = (int)($data["teenagers"] ?? 0);

        $children = (int)($data["children"] ?? 0);


        if (
            !$roomId ||
            !$checkIn ||
            !$checkOut
        ) {

            return [
                "success" => false,
                "message" => "Missing reservation information."
            ];
        }


        $database = new Database();

        $db = $database->connect();


        $reservation =
            new Reservation($db);


        $reservationId =
            $reservation->createReservation(

                $roomId,

                $checkIn,

                $checkOut,

                $adults,

                $teenagers,

                $children
            );


        return [

            "success" => true,

            "message" =>
                "Reservation created successfully.",

            "reservationId" =>
                $reservationId
        ];
    }
}