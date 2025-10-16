/**
 * Home controller
 */
return function(controller) {
    controller.targets.doc.innerHTML = (new showdown.Converter()).makeHtml(controller.targets.doc.innerText);

    document.querySelectorAll('.content a[href^=Koncerto]').forEach(function(a) {
        a.setAttribute('href', '#/doc?page=' + a.getAttribute('href'));
    });

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
