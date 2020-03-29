<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Suports\Table\Columns;


use Illuminate\Support\Str;

abstract class AbstractFiled
{

    protected $table;

    protected $render = [
        'headerName'=>'ID',
        'field'=>'id',
        'index'=>'',
        'name'=>'',
        'title'=>'',
        'label'=>'',
        'visible'=>false,
        'sorter'=>false,
        'filter'=>false,
        'alias'=>'',
        'options'=>[],
        'width'=>150,
        'format'=>'text',
        'separatable'=>false,
        'classe'=>'',
        'variant'=>'',
        'icone'=>'icon-chevron-right',
        'hidden_list'=>true,
        'hidden_show'=>true,
        'hidden_detail'=>true,
        'hidden_create'=>true,
        'hidden_edit'=>true,
    ];

    public  function make($name, $opitions=null){


        $this->render['key'] =$name;
        $this->render['index'] =$name;
        $this->render['field'] =$name;
        $this->render['label']=Str::title($name);
        $this->render['headerName']=Str::title($name);

        if($opitions){

            foreach($opitions as $name => $value){
                $this->render[$name]  = $value;
            }
        }


        return $this;
    }

    /**
     * @param $cellRendererFramework
     * @return string
     */
    public function cellRendererFramework($cellRendererFramework)
    {
        $this->render['cellRendererFramework']=$cellRendererFramework;

        return  $this;
    }

    /**
     * @param bool $checkboxSelection
     * @return string
     */
    public function checkboxSelection($checkboxSelection=true)
    {
        $this->render['checkboxSelection']=$checkboxSelection;

        return  $this;
    }

    /**
     * @param bool $headerCheckboxSelectionFilteredOnly
     * @return string
     */
    public function headerCheckboxSelectionFilteredOnly($headerCheckboxSelectionFilteredOnly=true)
    {
        $this->render['headerCheckboxSelectionFilteredOnly']=$headerCheckboxSelectionFilteredOnly;

        return  $this;
    }

    /**
     * @param bool $headerCheckboxSelection
     * @return string
     */
    public function headerCheckboxSelection($headerCheckboxSelection=true)
    {
        $this->render['headerCheckboxSelection']=$headerCheckboxSelection;

        return  $this;
    }

    /**
     * @param string $width
     * @return string
     */
     public function width($width="150")
    {
        $this->render['width']=$width;

        return  $this;
    }
    /**
     * @param string $icone
     * @return string
     */
    public function icone($icone)
    {
        $this->render['icone']=$icone;

        return  $this;
    }

    /**
     * @param $options
     * @return string
     */
    public function options($options)
    {
        $this->render['options']=$options;

        return  $this;
    }

    /**
     * @param $format
     * @return string
     */
    public function format($format)
    {
        $this->render['format']=$format;

        return  $this;
    }

    /**
     * @param $label
     * @return string
     */
    public function label($label)
    {
        $this->render['label']=$label;

        return  $this;
    }

    /**
     * @param $alias
     * @return string
     */
    public function alias($alias)
    {
        $this->render['alias']=$alias;

        return  $this;
    }

    /**
     * @return string
     */
    public function sortable()
    {
        $this->render['sorter']=true;
        $this->render['sortable']=true;

        return  $this;
    }

    /**
     * @return string
     */
    public function filter()
    {
        $this->render['filter']=true;

        return  $this;
    }

    /**
     * @return string
     */
    public function hiddenList()
    {
        $this->render['hidden_list']=false;

        return  $this;
    }
    /**
     * @return string
     */
    public function hiddenDetail()
    {
        $this->render['hidden_detail']=false;

        return  $this;
    }

    /**
     * @return string
     */
    public function hiddenShow()
    {
        $this->render['hidden_show']=false;

        return  $this;
    }

    /**
     * @return string
     */
    public function hiddenEdit()
    {
        $this->render['hidden_edit']=false;

        return  $this;
    }

    /**
     * @return string
     */
    public function hiddenCreate()
    {
        $this->render['hidden_create']=false;

        return  $this;
    }

    public function getKey(){

        return $this->render['name'];
    }

    public function render(){
        $render = $this->render;
        $this->render =  [
            'headerName'=>'ID',
            'field'=>'id',
            'index'=>'',
            'name'=>'',
            'title'=>'',
            'label'=>'',
            'visible'=>false,
            'sorter'=>false,
            'filter'=>false,
            'alias'=>'',
            'options'=>[],
            'width'=>150,
            'format'=>'text',
            'separatable'=>false,
            'classe'=>'',
            'variant'=>'',
            'icone'=>'icon-chevron-right',
            'hidden_list'=>true,
            'hidden_show'=>true,
            'hidden_create'=>true,
            'hidden_detail'=>true,
            'hidden_edit'=>true,
        ];
        return $render;
    }

    public function __get($name)
    {
        return $this->{$name};
    }

    public function __set($name, $value)
    {
        $this->{$name}  = $value;

        return $this;
    }

}
