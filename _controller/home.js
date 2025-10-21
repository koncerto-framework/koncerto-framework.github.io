/**
 * Home controller
 */
return function(controller) {
    setTimeout(function() {
        controller.targets.doc.innerHTML = (new showdown.Converter()).makeHtml(controller.targets.doc.innerText);
    }, 1000);

    var RELOAD_DELAY = 500;

    function handleHashReload() {
        var currentHash = window.location.hash;

        setTimeout(function() {
            location.reload();
        }, RELOAD_DELAY); 
    }

    if (window.addEventListener) {
        window.addEventListener('hashchange', handleHashReload);
    } else if (window.attachEvent) {
        window.attachEvent('onhashchange', handleHashReload);
    }

    document.querySelectorAll('.content a[href^=http]').forEach(function(a) {
        a.setAttribute('target', '_blank');
    });

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
