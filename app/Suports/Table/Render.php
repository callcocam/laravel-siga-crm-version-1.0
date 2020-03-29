<?php


namespace App\Suports\Table;


use App\TraitElement;

class Render
{
    use TraitElement;

    private $param = [];

    public function __construct($tables)
    {

        $this->setTables($tables);

        $this->options = $this->getTables()->getOptions();

        $this->param = $this->getTables()->getParams();

        $this->param->init();
    }

    public function html($template="table")
    {

        $data = $this->getTables()->getData();

        $rows = $this->getTables()->getRow()->renderRow($data, 'assc');

        $this->paramsWrap($data);

        $this->setVariable('headers', $this->getTables()->getHeadersArray());

        $this->setVariable('rows', $rows);

        $this->setVariable('cellRendererFramework', $this->getTables()->getCellRenderer());

        $headers = $this->getTables()->getHeadersArray();

        $variables = $this->variables;

        $params = $this->query($data);

        $options = $this->paramsWrap($data);

        $actions = $this->getTables()->getActions();

        return  compact('data','variables','actions','headers','rows','options','params');
    }


    public function json()
    {
        $data = $this->getTables()->getData();

        $rows = $this->getTables()->getRow()->renderRow($data, 'assc');

        $this->setVariable('headers', $this->getTables()->getHeadersArray());

        $this->setVariable('rows', $rows);

        $this->setVariable('options', $this->paramsWrap($data));

        $this->setVariable('actions',$this->getTables()->getActions());

        $this->setVariable('query', $this->query($data));

        $this->setVariable('cellRendererFramework', $this->getTables()->getCellRenderer());

        return $this->variables;
    }

    private function paramsWrap($data)
    {
        $option['id']           = $this->options->id;
        $option['title']        = $this->options->title;
        $option['status']       = $this->options->status;
        $option['showStatus']   = $this->options->showStatus;
        $option['showItems']    = $this->options->showItems;
        $option['order']        = $this->options->order;
        $option['endpoint']     = $this->options->endpoint;
        $option['redirect']     = $this->options->redirect;
        $option['count']        = $data->count();
        $option['total']        = $data->total();
        $option['lastItem']    = $data->lastItem();
        $option['firstItem']   = $data->firstItem();
        return $option;
    }

    private function query($data)
    {

        $query['status'] = $this->param->status;
        $query['search'] = $this->param->search;
        $query['perPage'] = $this->param->perPage;
        $query['order'] = $this->param->order;
        $query['column'] = $this->param->column;
        $query['start'] = $this->param->start;
        $query['end'] = $this->param->end;
        $query['page'] = $data->currentPage();

        $perPage = Calcular($data->currentPage(),$this->param->perPage, "*");
        if ($data->total() <= $perPage) {
            //$query['page'] = 1;
        }
        if ($data->total() <= $this->param->perPage) {
            $query['page'] = 1;
        }
       return array_merge(request()->query(),$query);
    }

}
