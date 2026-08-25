<?php

class Room
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }


    public function getAvailableRooms($checkIn, $checkOut)
    {
        $sql = "
            SELECT *
            FROM rooms r
            WHERE r.status = 'available'

            AND NOT EXISTS (

                SELECT 1
                FROM reservations res

                WHERE res.room_id = r.id

                AND res.status IN ('pending', 'confirmed')

                AND res.check_in < :checkOut

                AND res.check_out > :checkIn

            )
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            ':checkIn' => $checkIn,
            ':checkOut' => $checkOut
        ]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}