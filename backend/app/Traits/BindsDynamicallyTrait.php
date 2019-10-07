<?php

namespace App\Traits;

trait BindsDynamicallyTrait{

    protected $connection = null;
    protected $table = null;
    protected $matching = null;
    protected $instanciator = null;

    public function bind(string $connection, string $table, $matching, $instanciator)
    {
        $this->setConnection($connection);
        $this->setTable($table);
        $this->setMatching($matching);
        $this->setInstanciator($instanciator);

    }

    public function newInstance($attributes = [], $exists = false)
    {
        // Overridden in order to allow for late table binding.

        $model = parent::newInstance($attributes, $exists);
        $model->setConnection($this->connection);
        $model->setTable($this->table);
        $model->setMatching($this->matching);
        $model->setInstanciator($this->instanciator);

        return $model;
    }

    public function setMatching($matching){
        $this->matching = $matching;
    }

    public function setInstanciator($instanciator){
        $this->instanciator = $instanciator;
    }

}
