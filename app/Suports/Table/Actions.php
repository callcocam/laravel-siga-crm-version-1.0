<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table;


use App\TraitElement;

class Actions
{

    use TraitElement;
    /**
     * @var string
     */
    protected $name ="option";
    protected $label = "Option";
    //protected $class = "md:w-1/6 sm:w-1/2";
    protected $class = "ml-2";
    protected $cellRendererFramework = "CellRendererText";
    protected $ActionsFilter = ['label' => 'All', 'value' => ''];
    protected $ActionsOptions = [];
    protected $ActionsRender = [];
    protected $actionsData=[];

    /**
     * @return array
     */
    public function getActionsOptions(): array
    {
        return $this->ActionsOptions;
    }

    /**
     * @param array $ActionsOptions
     * @param null $name
     * @param null $label
     * @return Actions
     */
    public function setActionsOptions(array $ActionsOptions, $name=null, $label=null): Actions
    {
        if(!is_null($name) && !is_null($label)){
            $ActionsOptions = $this->addActions($ActionsOptions, $name, $label);
        }
        $this->ActionsOptions = $ActionsOptions;

        return $this;
    }

    /**
     * @return string
     */
    public function getActionsFilter()
    {
        return $this->ActionsFilter;
    }

    /**
     * @param $ActionsFilter
     * @return Actions
     */
    public function setActionsFilterText($ActionsFilter): Actions
    {
          $this->ActionsFilter = $ActionsFilter;

         return $this;
    }
    /**
     * @param $ActionsFilter
     * @return Actions
     */
    public function setActionsFilter($ActionsFilter): Actions
    {
        if(!is_array($ActionsFilter)){
            $ActionsFilter = $this->getActionsData($ActionsFilter);
        }
          $this->ActionsFilter = $ActionsFilter;

        return $this;
    }

    /**
     * @return Actions
     */
    public function setActionsRender(): Actions
    {
         $this->ActionsRender[]=[
            "name"=>$this->name,
            "label"=>$this->label,
            "acClass"=>$this->class,
            "actionFilter"=>$this->ActionsFilter,
            "optionFilter"=>$this->ActionsOptions,
            "cellRendererFramework"=>$this->cellRendererFramework,
        ];

        return $this;
    }


    public function addActions($repository, $name, $label){

        if($repository){
            $this->actionsData[] = ["label"=>"All", 'value'=>""];
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
        $result = ["label"=>"All", 'value'=>""];
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
     * @return array
     */
    public function getActionsRender(): array
    {
        $ActionsRender = $this->ActionsRender;
        $this->name='name';
        $this->label='Label';
        $this->class='ml-2';
        $this->ActionsFilter=["label"=>"All", 'value'=>""];
        $this->ActionsOptions=[];
        $this->cellRendererFramework='CellRendererText';

        return $ActionsRender;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Actions
     */
    public function setName(string $name): Actions
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @param string $label
     * @return Actions
     */
    public function setLabel(string $label): Actions
    {
        $this->label = $label;
        return $this;
    }

    /**
     * @return string
     */
    public function getLabel(): string
    {
        return $this->label;
    }

    /**
     * @param mixed $cellRendererFramework
     * @return Actions
     */
    public function setCellRendererFramework($cellRendererFramework): Actions
    {
        $this->cellRendererFramework = $cellRendererFramework;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCellRendererFramework()
    {
        return $this->cellRendererFramework;
    }

    /**
     * @param string $class
     * @return Actions
     */
    public function setClass(string $class): Actions
    {
        $this->class = $class;
        return $this;
    }


}
