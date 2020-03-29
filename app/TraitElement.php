<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App;


use App\Suports\Table\Actions;
use App\Suports\Table\Option\Options;
use App\Suports\Table\Param\Params;

trait TraitElement
{
    protected $options;

    protected $params;

    protected $tables;

    protected $cellRenderer="ShowRenderDefault";

    /**
     * @var Actions
     */
    protected $actions;

    protected $actionsData=[];

    protected $variables = [];

    protected $decorators = [];

    /**
     * @param mixed $table
     * @return TraitElement
     */
    public function setTables($table)
    {
        $this->tables = $table;
        return $this;
    }
    /**
     * @param mixed $table
     * @return TraitElement
     */
    public function setTable($table)
    {
        $this->table = $table;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getTables()
    {
        return $this->tables;
    }

    /**
     * @param mixed $options
     * @return TraitElement
     */
    public function setOptions($options)
    {
        $this->options = new Options($options);
        return $this;
    }

    /**
     * @return mixed
     */
    public function getOptions()
    {
        return $this->options;
    }

    /**
     * @param $key
     * @param null $default
     * @return mixed
     */
    public function getOption($key, $default=null)
    {
        if($this->options->{$key})
            return $this->options->{$key};
        return $default;
    }
    /**
     * @param mixed $params
     * @return TraitElement
     */
    public function setParams($params)
    {
        $this->params = new Params($params);

        $this->params->setTable($this);

        return $this;
    }

    public function getDecorators(){

        return $this->decorators;

    }


    /**
     * @param $decorators
     * @return $this
     */
    public function attachDecorators($decorators){

        $this->decorators[] = $decorators;

        return $this;
    }

    /**
     * @param array $variables
     * @return $this
     */
    public function setVariables(array $variables){

        if($variables):

            foreach ($variables as $key => $variable):

                $this->setVariable($key, $variable);

            endforeach;

        endif;

        return $this;
    }

    /**
     * @param $key
     * @param $variable
     * @return $this
     */
    public function setVariable($key, $variable){

        $this->variables[$key] = $variable;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getActions()
    {
        return $this->actions->getActionsRender();
    }

    public function addActions($repository, $name, $label){
        if($repository){

            foreach ($repository as $key => $value){

                $temp = ["label"=>$value[$label], 'value'=>$value[$name]];

                $this->actionsData[] = $temp;
            }
        }
        return $this->actionsData;
    }

    /**
     * @param $key
     * @return array
     */
    public function getActionsData($key): array
    {
        $result = ["label"=>"All", 'value'=>"all"];
        if($this->actionsData){
            foreach ($this->actionsData as $value){
               if($value['value'] == $key){
                   $result = $value;
               }
            }
        }
        return  $result;
    }

    /**
     * @param string $cellRenderer
     * @return TraitElement
     */
    public function setCellRenderer(string $cellRenderer)
    {
        $this->cellRenderer = $cellRenderer;
        return $this;
    }

    /**
     * @return string
     */
    public function getCellRenderer(): string
    {
        return $this->cellRenderer;
    }



}
