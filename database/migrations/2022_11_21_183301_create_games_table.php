<?php

use App\Models\Game;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('cim', 100);
            $table->string('mufaj', 30);
            $table->integer('db');
            $table->timestamps();
        });
        Game::create(['cim'=>'Apex Legends','mufaj'=>'battle royal','db'=>3000]);
        Game::create(['cim'=>'Counter Strike Global Offensive','mufaj'=>'shooter','db'=>1000]);
        Game::create(['cim'=>'League of Legends','mufaj'=>'moba','db'=>5000]);
        Game::create(['cim'=>'Final Fantasy XIV Online','mufaj'=>'mmo','db'=>4000]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
};
