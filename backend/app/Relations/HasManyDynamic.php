<?php
namespace App\Relations;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;

class HasManyDynamic extends HasOneOrMany
{

    /**
     * Se sobreescribe el metodo para evitar que filtre por la clave primaria en la relación
     *
     * @return void
     */
    public function addConstraints()
    {
//        if (static::$constraints) {
//            $this->query->where($this->foreignKey, '=', $this->getParentKey());
//
//            $this->query->whereNotNull($this->foreignKey);
//        }
    }
    /**
     * Get the results of the relationship.
     *
     * @return mixed
     */
    public function getResults()
    {
        return $this->query->get();
    }

    /**
     * Initialize the relation on a set of models.
     *
     * @param  array   $models
     * @param  string  $relation
     * @return array
     */
    public function initRelation(array $models, $relation)
    {
        foreach ($models as $model) {
            $model->setRelation($relation, $this->related->newCollection());
        }

        return $models;
    }

    /**
     * Match the eagerly loaded results to their parents.
     *
     * @param  array   $models
     * @param  \Illuminate\Database\Eloquent\Collection  $results
     * @param  string  $relation
     * @return array
     */
    public function match(array $models, Collection $results, $relation)
    {
        return $this->matchMany($models, $results, $relation);
    }
}