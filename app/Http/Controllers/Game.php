<?php

namespace App\Http\Controllers;

use App\Models\Game as ModelsGame;
use Illuminate\Http\Request;

class Game extends Controller
{
    //
    public function index(){
        $games = response()->json(ModelsGame::all());
        return $games;
    }
    public function show($id){
        $game = response()->json(ModelsGame::find($id));
        return $game;
    }
    public function store(Request $request){
        $game = new ModelsGame();
        $game->cim = $request->cim;
        $game->mufaj = $request->mufaj;
        $game->db = $request->db;
        $game->save();
    }
    public function update(Request $request, $id){
        $game = ModelsGame::find($id);
        $game->cim = $request->cim;
        $game->mufaj = $request->mufaj;
        $game->db = $request->db;
        //$game->updated_at = $request->updated_at;
        $game->save();
    }
    public function destroy($id){
        ModelsGame::find($id)->delete();
    }
}
