<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function home()
    {
        // generate a array with 9 x 9 rondom numbers
        $numbers = [];
        for ($i = 0; $i < 9; $i++) {
            $numbers[$i] = [];
            for ($j = 0; $j < 9; $j++) {
                if ($i == 4 && $j == 4) {
                    $numbers[$i][$j] = 1;
                } else {
                    $numbers[$i][$j] = rand(1, 9) * rand(2, 9);
                }
            }
        }

        // generate a array with 9 x 9 0 value
        $values = [];
        for ($i = 0; $i < 9; $i++) {
            $values[$i] = [];
            for ($j = 0; $j < 9; $j++) {
                $values[$i][$j] = '-';
            }
        }
        $copyData = $values;

        return Inertia::render('Home', [
            'numbers' => $numbers,
            'copyData' => $copyData,
        ]);
    }
}
