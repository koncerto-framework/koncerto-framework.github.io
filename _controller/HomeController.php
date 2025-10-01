<?php

class HomeController extends KoncertoController
{
    /**
     * @internal {"route":{"name":"/"}}
     * @return KoncertoReponse
     */
    public function index() {
        return (new KoncertoResponse())->setContent('Welcome');
    }
}
