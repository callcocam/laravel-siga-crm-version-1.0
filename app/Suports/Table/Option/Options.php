<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Option;


class Options
{
    protected $id = 'id';

    protected $title = 'Basic Table';

    protected $endpoint = null;

    protected $order = 'DESC';

    protected $column = 'created_at';

    protected $perPage = '6';

    protected $status = 'status';

    protected $date = 'created_at';

    protected $redirect = [];

    protected $showDate = true;

    protected $showSearch = true;

    protected $showStatus = [
        ['label' => 'All', 'value' => 'all'],
        ['label' => 'Ativo', 'value' => 'published'],
        ['label' => 'Inativo', 'value' => 'draft']
    ];

    protected $showItems = [
        ['label' => '6', 'value' => '6'],
        ['label' => '12', 'value' => '12'],
        ['label' => '24', 'value' => '24'],
        ['label' => '48', 'value' => '48'],
        ['label' => '100', 'value' => '100']
    ];

    /**
     * AbstractOptions constructor.
     * @param $options
     */
    public function __construct($options)
    {

        if($options):

            foreach ($options as $name => $option):

                $this->{$name} =  $option;

            endforeach;

        endif;
    }

    public function __set($name, $value)
    {
        $this->{$name} = $value;
    }

    public function __get($name)
    {
        return $this->{$name};
    }
}
