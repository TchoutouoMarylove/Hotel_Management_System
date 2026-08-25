<?php

class Reservation
{
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }


    public function createReservation(
        $roomId,
        $checkIn,
        $checkOut,
        $adults,
        $teenagers,
        $children
    ) {

        $sql = "

        INSERT INTO reservations
        (
            room_id,
            check_in,
            check_out,
            adults,
            teenagers,
            children,
            status
        )

        VALUES
        (
            :room_id,
            :check_in,
            :check_out,
            :adults,
            :teenagers,
            :children,
            'confirmed'
        )

        ";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([

            ":room_id" => $roomId,

            ":check_in" => $checkIn,

            ":check_out" => $checkOut,

            ":adults" => $adults,

            ":teenagers" => $teenagers,

            ":children" => $children
        ]);

        return $this->conn->lastInsertId();
    }
}

?>