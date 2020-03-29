<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AbstractController extends Controller
{

    public function index(){

        if ($this->model) {
            $this->results = $this->getModel()->setParams(request()->query())->render();
        }

        $this->results['user'] = \Auth::user();

        $this->results['tenant'] = get_tenant();

        return response()->json($this->results);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if ($this->model) {
            $this->results = $this->getForm($this->getModel());
        }

        $this->results['user'] = \Auth::user();

        $this->results['tenant'] = get_tenant();

        return response()->json($this->results);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function save($request)
    {
        $data = $request->all();

        if ($this->model) {
            $this->getModel()->saveBy($data);
        }
        $data['id'] = $this->getModel()->getResultLastId();
        $this->results = $data;
        $this->results['redirect'] = $this->getModel()->addEdit($data);

        return response()->json($this->getSaveResponse());
    }

    protected function getSaveResponse(){

        $this->results['text'] = __('Record updated successfully');

        $this->results['text'] = __('Record created successfully');

        $this->results['title'] = __('System information');

        return $this->results;

    }

    /**
     * Update the avatar for the user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function upload(Request $request)
    {
        $path = $request->file('file')->store('avatars');

        return response()->json([
            'path'=>sprintf("/storage/%s",$path),
            'url'=>url($path)
        ]);
    }

    /**
     * Update the avatar for the user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function remove_file(Request $request)
    {
        if(\Storage::exists(Str::replaceFirst("/storage","",$request->get('file')))){
            \Storage::delete($request->get('file'));
        }
        return response()->json([
            'path'=>config('image.no_image')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if ($this->model) {
            $this->results = $this->getModel()->setParams(request()->query())->openShow($id);
        }

        $this->results['user'] = \Auth::user();

        $this->results['tenant'] = get_tenant();

        return response()->json($this->results);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if ($this->model) {
            $this->results = $this->getForm($this->getModel()->findById($id));
        }

        $this->results['user'] = \Auth::user();

        $this->results['tenant'] = get_tenant();

        return response()->json($this->results);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if ($this->model) {
            $model = $this->getModel()->findById($id);
            if ($model) {

                $this->getModel()->deleteBy($model);

                $this->results['redirect'] = $this->getModel()->addIndex([
                    'object' => [
                        'query' => [
                            'times'=>date("s")
                        ]
                    ]
                ]);
                $this->results['title'] = config('table.admin.destroy.title','Title');
                $this->results['message'] = $this->getModel()->getMessage();
            }
            return  response()->json($this->results);
        }

    }

}
