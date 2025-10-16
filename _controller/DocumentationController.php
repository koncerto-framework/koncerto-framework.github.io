<?php

class DocumentationController extends KoncertoLive
{
    /**
     * @internal {"route":{"name":"/doc"}}
     * @return KoncertoReponse
     */
    public function index() {
        return $this->render('_templates/doc.tbs.html', array(
            'title' => 'Documentation',
            'md' => file_get_contents('/preload/Introduction.md')
        ));
    }
}
