<?php


namespace App\Database\Schema;


class Blueprint extends \Illuminate\Database\Schema\Blueprint
{


    public function user($name='user_id'){
        $column = $this->uuid($name);
        $this->foreign('user_id')->on('users')->references('id')->onDelete('CASCADE');
        return $column;
    }

    public function company($name='company_id'){
        $column = $this->uuid($name);
        $this->foreign('company_id')->on('companies')->references('id')->onDelete('CASCADE');
        return $column;
    }


    public function status($name='company_id'){
        $column = $this->uuid($name);
        $this->foreign('company_id')->on('companies')->references('id')->onDelete('CASCADE');
        return $column;
    }
}
