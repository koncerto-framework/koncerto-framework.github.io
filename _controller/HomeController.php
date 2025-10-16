<?php

class HomeController extends KoncertoLive
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
