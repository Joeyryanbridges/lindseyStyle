jQuery(document).ready(function () {
    jQuery('.postOne').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
});

jQuery(document).ready(function () {
    jQuery('.postTwo').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
});	