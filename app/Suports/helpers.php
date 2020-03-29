<?php

/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

if (!function_exists('___')) {
    /**
     * Translate the given message.
     *
     * @param  string|null  $key
     * @param  array  $replace
     * @param  string|null  $locale
     * @return string|array|null
     */
    function ___($key = null, $replace = [], $locale = null)
    {
        $fileSystem = new \Illuminate\Filesystem\Filesystem();

        if (!$fileSystem->exists(resource_path(sprintf("lang/%s.json", config('app.locale'))))) {
            $fileSystem->put(resource_path(sprintf("lang/%s.json", config('app.locale'))), json_encode(["Welcome" => "Bem Vindo"]));
        }
        $source =  json_decode($fileSystem->get(resource_path(sprintf("lang/%s.json", config('app.locale')))), true);

        if (!\Illuminate\Support\Arr::exists($source, $key)) {
            $fileSystem->put(resource_path(sprintf("lang/%s.json", config('app.locale'))), json_encode(\Illuminate\Support\Arr::add($source, $key, $key)));
        }

        if (is_null($key)) {
            return $key;
        }

        return trans($key, $replace, $locale);
    }
}
if (!function_exists('attrs')) {
    function  attrs($label, $attrs = [], $type = 'text')
    {

        $defaults = array_merge([
            'type' => isset($attrs['type']) ? $attrs['type'] : $type,
            'class' => 'form-control',
            'id' => isset($attrs['id']) ? $attrs['id'] : $attrs['name'],
            'placeholder' => isset($attrs['placeholder']) ? __($attrs['placeholder']) : __($label),
        ], $attrs);

        $attr = [];

        foreach ($defaults as $key => $default) {
            $attr[] = sprintf('%s="%s"', $key, $default);
        }

        return implode(PHP_EOL, $attr);
    }
}

if (!function_exists('get_tenant_id')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function get_tenant_id($tenant = 'company_id')
    {
        $tenantId = \App\Tenant\Facades\Tenant::getTenantId($tenant);
        return $tenantId;
    }
}

if (!function_exists('get_tenant')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function get_tenant()
    {
        return \App\Company::find(get_tenant_id());
    }
}


if (!function_exists('set_form_value')) {
    /**
     * Get the configuration path.
     *
     * @param $value
     * @param null $parent
     * @return string
     */
    function set_form_value($value, $parent = null)
    {
        if ($value) {
            if (is_string($value)) {
                return $value;
            }

            if (isset($value->{$parent})) {
                return $value->{$parent};
            }
        }

        return null;
    }
}

if (!function_exists('check_status')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function check_status($status, $options = [
        'published' => "success", 'draft' => "warning", 'deleted' => "danger"
    ])
    {
        if (isset($options[$status]))
            return $options[$status];


        return "info";
    }
}


if (!function_exists('get_tag_color')) {
    /**
     * Get the configuration path.
     *
     * @param array $options
     * @return string
     */
    function get_tag_color($options = [
        '1' => "success", '2' => "warning", '3' => "danger", '4' => "primary", '5' => "info"
    ])
    {
        $status = rand(1, 5);

        if (isset($options[$status]))
            return $options[$status];


        return "info";
    }
}


if (!function_exists('check_status_text')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function check_status_text($status, $options = [
        'published' => "Publicado", "draft" => "Rascunho", 'deleted' => "Deletado"
    ])
    {
        if (isset($options[$status]))
            return $options[$status];


        return "Rascunho";
    }
}


if (!function_exists('set_header_order')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function set_header_order($params, $options, $header)
    {
        $order = "DESC";
        if ($params['order'] == "DESC") {
            $order = "ASC";
        }
        return route(sprintf("admin.%s.index", $options['endpoint']), array_merge($params, [
            'order' => $order,
            'column' => $header['key'],
        ]));
    }
}

if (!function_exists('date_carbom_format')) {

    function date_carbom_format($date, $format = "d/m/Y H:i:s")
    {

        $date = explode(" ", str_replace(["-", "/", ":"], " ", $date));

        if (!isset($date[0])) {
            $date[0] = null;
        }
        if (!isset($date[1])) {
            $date[1] = null;
        }
        if (!isset($date[2])) {
            $date[2] = null;
        }
        if (!isset($date[3])) {
            $date[3] = null;
        }
        if (!isset($date[4])) {
            $date[4] = null;
        }
        if (!isset($date[5])) {
            $date[5] = null;
        }
        list($y, $m, $d, $h, $i, $s) = $date;

        //$carbon = \Carbon\Carbon::now();
        $carbon = \Illuminate\Support\Facades\Date::now();
        $carbon->locale('pt');
        if (strlen($date[0]) == 4) {
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toDateTimeLocalString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toDayDateTimeString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toLongDateString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toFullDateString().PHP_EOL;
            //
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toShortTimeString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toMediumTimeString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toLongTimeString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toFullTimeString().PHP_EOL;
            //
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toShortDatetimeString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toMediumDatetimeString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toLongDatetimeString().PHP_EOL;
            //            echo  $carbon->create($y,$m,$d,$h,$i,$s)->toFullDatetimeString().PHP_EOL;
            return $carbon->create($y, $m, $d, $h, $i, $s);
        }
        if ($y && $m && $d) {
            return $carbon->create($d, $m, $y, $h, $i, $s);
        }
        return $carbon->create(null, null, null, null, null, null);
    }
}



if (!function_exists('get_tags')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function get_tags($values)
    {

        if ($values) {

            $tags = [];

            foreach ($values as $value) {

                $tags[] = $value->tag_name;
            }

            return trim(implode(",", $tags));
        }

        return "";
    }
}



if (!function_exists('form_w')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function form_w($post)
    {
        $source = array('.', ',');
        $replace = array('', '.');
        $valor = str_replace($source, $replace, $post); //remove os pontos e substitui a virgula pelo ponto
        return $valor; //retorna o valor formatado para gravar no banco
    }
}


if (!function_exists('form_read')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function form_read($post)
    {
        if (is_numeric($post)) :
            return @number_format($post, 2, ",", ".");
        endif;
        return $post;
    }
}

if (!function_exists('Calcular')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function Calcular($v1, $v2, $op)
    {
        if (!$v1)
            $v1 = 0;
        if (!$v2)
            $v2 = 0;
        $v1 = str_replace(".", "", $v1);
        $v1 = str_replace(",", ".", $v1);
        $v2 = str_replace(".", "", $v2);
        $v2 = str_replace(",", ".", $v2);
        switch ($op) {
            case "+":
                $r = $v1 + $v2;
                break;
            case "-":
                $r = $v1 - $v2;
                break;
            case "*":
                $r = $v1 * $v2;
                break;
            case "%":
                $bs = $v1 / 100;
                $j = $v2 * $bs;
                $r = $v1 + $j;
                break;
            case "/":
                @$r = @$v1 / $v2;
                break;
            case "tj":
                $bs = $v1 / 100;
                $j = $v2 * $bs;
                $r = $j;
                break;
            default:
                $r = $v1;
                break;
        }
        $ret = @number_format($r, 2, ",", ".");
        return $ret;
    }
}
