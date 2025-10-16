/**
 * Home controller
 */
return function(controller) {
    console.debug(controller);

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
