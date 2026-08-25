<?php

require_once __DIR__ . '/../models/Room.php';


class RoomController
{
    private $room;


    public function __construct($db)
    {
        $this->room = new Room($db);
    }


    public function getAvailableRooms()
    {
        $checkIn = $_GET['checkIn'] ?? '';

        $checkOut = $_GET['checkOut'] ?? '';

        $adults = (int)($_GET['adults'] ?? 0);

        $teenagers = (int)($_GET['teenagers'] ?? 0);

        $children = (int)($_GET['children'] ?? 0);


        if (!$checkIn || !$checkOut) {

            return [
                "error" =>
                    "Please select your dates."
            ];
        }


        $totalGuests =
            $adults +
            $teenagers +
            $children;


        if ($totalGuests <= 0) {

            return [
                "error" =>
                    "Please select at least one guest."
            ];
        }


        return $this->room->getAvailableRooms(
            $checkIn,
            $checkOut,
            $totalGuests
        );
    }
}