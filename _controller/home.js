/**
 * Home controller
 */
return function(controller) {
    setTimeout(function() {
        if ('doc' in controller.targets) {
            controller.targets.doc.innerHTML = (new showdown.Converter()).makeHtml(decodeURIComponent(controller.targets.doc.dataset.md.replace(/\+/g, ' ')));
            hljs.highlightAll();
        }

        document.querySelectorAll('.content a[href^=http]').forEach(function(a) {
            a.setAttribute('target', '_blank');
        });
    }, 1000);

    controller.targets.dropdown.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function() {
            a.parentNode.style.display = 'none';
            setTimeout(function() {
                a.parentNode.style.display = '';
                a.blur();
            }, 100);
        })
    });

    controller.on('burger', function (controller) {
        controller.targets.menu.classList.toggle('is-active');
    });
}
