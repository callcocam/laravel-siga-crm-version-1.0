<?php

namespace App\Providers;

use App\Suports\AutoRouteServiceProvider;
use App\Suports\Form\FormServiceProvider;
use App\Suports\Intl\IntlServiceProvider;
use App\Suports\Providers\MacrosServiceProvider;
use App\Suports\Shinobi\ShinobiServiceProvider;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->register(IntlServiceProvider::class);
        $this->app->register(TranslationServiceProvider::class);
        $this->app->register(MacrosServiceProvider::class);
        $this->app->register(ShinobiServiceProvider::class);
        $this->app->register(FormServiceProvider::class);
        $this->app->register(AutoRouteServiceProvider::class);
        if ($this->app->environment() !== 'production') {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     * @throws \Doctrine\DBAL\DBALException
     */
    public function boot()
    {


    }
}
