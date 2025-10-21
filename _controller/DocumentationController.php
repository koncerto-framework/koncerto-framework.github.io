<?php

/**
 * @internal {"route":{"name":"/doc"}}
 */
class DocumentationController extends KoncertoLive
{
    /**
     * @internal {"route":{"name":"/"}}
     * @return KoncertoReponse
     */
    public function index() {
        $page = (new KoncertoRequest())->get('page');
        if (null === $page) {
            $page = 'Introduction';
        }

        return $this->render('_templates/doc.tbs.html', array(
            'title' => 'Documentation',
            'md' => file_get_contents('/preload/' . $page . '.md')
        ));
    }
}
