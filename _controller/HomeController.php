<?php

class HomeController extends KoncertoController
{
    /**
     * @internal {"route":{"name":"/"}}
     * @return KoncertoReponse
     */
    public function index() {
        return $this->render('_templates/index.tbs.html', array(
            'title' => 'Welcome'
        ));
    }
}
