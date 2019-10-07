<?php
namespace App\Traits;

trait DynamicModelTrait{


    /**
     * Overrides on, to pass table property
     *
     */
    public static function on($connection = null, $table = null, $matching = null, $instanciator = null)
    {
        // First we will just create a fresh instance of this model, and then we can
        // set the connection on the model so that it is be used for the queries
        // we execute, as well as being set on each relationship we retrieve.
        $instance = new static;

        if(!is_null($connection)){
            $instance->setConnection($connection);
        }
        if(!is_null($table)){
            $instance->setTable($table);
        }
        if(!is_null($matching)){
            $instance->setMatching($matching);
        }
        if(!is_null($instanciator)){
            $instance->setInstanciator($instanciator);
        }

        return $instance->newQuery();
    }

    /**
     * Get all of the models from the database.
     *
     * @param  array|mixed  $columns
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public static function all($columns = ['*'], $connection = null, $table = null)
    {
        return (new static)->newQuery($connection, $table)->get(
            is_array($columns) ? $columns : func_get_args()
        );
    }

    /**
     * Get a new query builder for the model's table.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function newQuery($connection = null, $table = null)
    {
        if(!is_null($connection)){
            $this->setConnection($connection);
        }
        if(!is_null($table)){
            $this->setTable($table);
        }
        return $this->registerGlobalScopes($this->newQueryWithoutScopes());
    }
}
