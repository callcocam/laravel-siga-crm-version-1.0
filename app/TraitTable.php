<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App;


use App\Suports\Table\Actions;
use App\Suports\Table\Columns\Facades\ACTION;
use App\Suports\Table\Columns\Facades\DATE;
use App\Suports\Table\Columns\Facades\STATUS;
use App\Suports\Table\Columns\Facades\TEXT;
use App\Suports\Table\Header;
use App\Suports\Table\Render;
use App\Suports\Table\Row;
use Illuminate\Support\Facades\Gate;

trait TraitTable
{
    use TraitElement, TraitModel;
    protected $tableInit = false;
    protected $rows;
    protected $renderer;
    protected $endpoint="";
    protected $alias="id";
    protected $prependHeaders = [];
    protected $headers = [];

    protected $appendHeaders = [];
    protected $data = [];
    protected $defaultOptions = [];
    protected $headersObjects = [];

    abstract public function init();


    abstract public function initFilter($query);

    public function actions()
    {

        /*$this->getHeader('redirect')->getCell()->addDecorator('callable', [
            'closure' => function ($context, $record) {
                return $this->addIndex();
            },
        ]);*/

        $this->getHeader('action')->getCell()->addDecorator('callable', [
            'closure' => function ($context, $record) {
                $actions = [];
                if (Gate::allows(sprintf('admin.%s.edit', $this->endpoint))) {
                    $actions['edit'] = $this->addEdit($record);
                }

                if (Gate::allows(sprintf('admin.%s.destroy', $this->endpoint))) {
                    $actions['destroy'] = $this->addDestroy($record);
                }

                if (Gate::allows(sprintf('admin.%s.show', $this->endpoint))) {
                    $actions['show'] = $this->addShow($record);
                }
                return $actions;
            },
        ]);
    }

    public function timestamps()
    {

        $this->getHeader('created_at')->getCell()->addDecorator('callable', [
            'closure' => function ($context, $record) {
                if($context)
                    return date_carbom_format($context)->toLongDateString();

                return '---';
            },
        ]);

        $this->getHeader('updated_at')->getCell()->addDecorator('callable', [
            'closure' => function ($context, $record) {
                if($context)
                    return date_carbom_format($context)->toLongDateString();

                return '---';
            },
        ]);
    }

    protected function setEndpoint(){

        if(empty($this->endpoint)){
            $this->endpoint = $this->getTable();
        }

        if(\Route::has(sprintf('admin.%s.create', $this->endpoint))){
            $this->defaultOptions['endpoint'] = [
                'api' => route(sprintf('admin.%s.create', $this->endpoint), request()->query()),
                'query'=>request()->query(),
                'name'=>sprintf("admin.%s.create",$this->endpoint),
                'object' => [
                    'name' => sprintf('admin.%s.create', $this->endpoint),
                    'query' => request()->query(),
                ]
            ];
        }


    }
    public function render($template="table",$type="json")
    {

        $this->appendHeaders = [
            DATE::make('redirect')->hiddenList()->hiddenDetail()->cellRendererFramework('CellRenderLink')->render(),
            DATE::make('created_at')->icone('icon-calendar')->hiddenList()->render(),
            DATE::make('updated_at')->icone('icon-calendar')->hiddenList()->render(),
            STATUS::make('status')->icone('icon-check-square')->cellRendererFramework('CellRenderStatus')->sortable()->render(),
            ACTION::make('action',['label'=>"#"])->cellRendererFramework('CellRenderActions')->width()->hiddenShow()->render()
        ];

        if (!$this->tableInit) :

            $this->initialize();

        endif;

        switch ($type):

            case 'json':
                return $this->getRender()->json();
                break;
            default:
                return $this->getRender()->html($template);
                break;
        endswitch;

    }

    private function getRender()
    {

        if (!$this->renderer) {

            $this->renderer = new Render($this);
        }
        return $this->renderer;
    }

    /**
     * Inicializa a table
     */
    private function initialize()
    {

        $this->tables = $this;

        $this->defaultOptions['redirect'] = $this->addIndex();

        $this->setOptions($this->defaultOptions);

        if (!$this->getParams()) :

            throw new \LogicException('Param Adapter is required');

        endif;

        $this->params->init();

        if (!$this->getSources()) :

            throw new \LogicException('Source data is required');

        endif;

        $this->tableInit = true;

        if($this->headers):

            $this->headers = array_merge($this->prependHeaders, $this->headers, $this->appendHeaders);

            $this->setHeaders($this->headers);

        endif;

        if(!$this->actions):

            $this->actions = new Actions();

            if($this->getOption('showStatus')){
                $this->actions->setActionsFilter(['label' => $this->getParams()->status, 'value' =>  $this->getParams()->status])
                    ->setActionsOptions($this->getOption('showStatus'))
                    ->setCellRendererFramework("InputRendererSelect")
                    ->setLabel("Status")
                    //->setClass('md:w-1/6 sm:w-1/2')
                    ->setName('status')
                    ->setActionsRender();
            }

            if($this->getOption('showItems')){
                $this->actions->setActionsFilter(['label' =>  $this->getParams()->perPage, 'value' => $this->getParams()->perPage])
                    ->setActionsOptions($this->getOption('showItems'))
                    ->setCellRendererFramework("InputRendererSelect")
                    //->setClass('md:w-1/6 sm:w-1/2')
                    ->setLabel("Por Pagina")
                    ->setName('perPage')
                    ->setActionsRender();
            }


            if($this->getOption('showSearch')){

                $this->actions->setActionsFilterText(request()->get('search'))
                    ->setCellRendererFramework("InputRendererText")
                    ->setLabel("Search")
                    ->setName('search')
                    ->setActionsRender();
            }


            if($this->getOption('showDate')){

                $this->actions->setActionsFilterText(['start'=>request()->get('start'), "end"=>request()->get('end')])
                    ->setCellRendererFramework("InputRendererDateRangeFlatpicker")
                    ->setLabel("Date")
                    ->setName('range')
                    //->setClass('md:w-1/6 sm:w-1/2')
                    ->setActionsRender();
            }


        endif;


        $this->init();

        $this->timestamps();

        $this->actions();

        $this->initFilter($this->getSources());
    }
    /**
     * @return Row
     */
    public function getRow()
    {

        if (!$this->rows) :

            $this->rows = new Row($this);
        endif;

        return $this->rows;
    }

    /**
     * @return mixed
     */
    public function getHeaders()
    {
        return $this->headers;
    }
    /**
     * @return mixed
     */
    public function getHeadersArray()
    {
        $headers = [];

        if ($this->headers) {

            foreach ($this->headers as $header) {

                $headers[$header['key']] = $header;
            }
        }

        return $headers;
    }
    /**
     * @return mixed
     */
    public function getHeader($name)
    {

        if (!$this->headersObjects) {

            throw new \LogicException(sprintf('Table hasn\'t got defined headers [%s]', $name));
        }

        if (!isset($this->headersObjects[$name])) {

            throw new \RuntimeException(sprintf('Header name [ %s ] doesnt exist', $name));
        }

        return $this->headersObjects[$name];
    }


    /**
     * @param mixed $headers
     * @return TraitTable
     */
    public function setHeaders($headers)
    {

        if ($headers) :

            foreach ($headers as $header) :

                $this->headersObjects[$header['key']] = new Header($this, $header['key'], $header);

            endforeach;

        endif;
        return $this;
    }
    /**
     * @return mixed
     */
    public function getParams()
    {
        return $this->params;
    }


}
