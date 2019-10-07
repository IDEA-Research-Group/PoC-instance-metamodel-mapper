<?php
/*
 * Le paso el model y el campo a comprobar
 * El model es por ejemplo una instancia de proceso
 * comprueba que se haya matcheado el campo requerido, y devuelve el nombre de su columna
 * */
if (! function_exists('match_field')) {
    function match_field($model, $field ) {
        $res = null;
        if(array_key_exists( $field, $model->matching)
            && is_array($model->matching[$field])
            && array_key_exists('column_name', $model->matching[$field])){
            $field_name = strtolower($model->matching[$field]['column_name']);
            return $model->{$field_name};
        }
        return $res;
    }
}

/*
 * Le paso el model y el campo a comprobar
 * El model es por ejemplo una instancia de proceso
 * comprueba que se haya matcheado el campo requerido, y devuelve el nombre de su columna
 * */
if (! function_exists('matched_field_name')) {
    function matched_field_name($model, $field ) {
        $res = null;
        if(array_key_exists( $field, $model->matching)
            && is_array( $model->matching[$field])
            && array_key_exists('column_name', $model->matching[$field])){
            $field_name = strtolower($model->matching[$field]['column_name']);
            return $field_name;
        }
        return $res;
    }
}

/*
 * Se le pasa el request y genera una key hasheada
 * para la cache
 * */
if (! function_exists('generate_request_cache_key')) {
    function generate_request_cache_key($prepend = null) {
        $url = request()->url();
        $queryParams = request()->query();
        ksort($queryParams);
        $queryString = http_build_query($queryParams);
        $fullUrl = "{$url}?{$queryString}";
        $rememberKey = sha1($fullUrl);
        $res = empty($prepend) ? $rememberKey : $prepend.$rememberKey;
        return $res;
    }
}