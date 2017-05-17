$(function () {
    //Inicializar Sliders :D
    $document = $(document);
    selector = '[data-rangeslider]';
    $inputRange = $(selector);
    $inputRange.rangeslider({
        polyfill: false
    });
    // Valor inicial de los sliders OJO
    valueOutput();
    //  Actualizar valor Sliders OJO
    $document.on('input', selector, function () {
        valueOutput();
//        Engine.clear(engine);
    });
//    //  Example functionality to demonstrate programmatic value changes 
//    $document.on('click', '#js-example-change-value button', function (e) {
//        var $inputRange = $('[data-rangeslider]', e.target.parentNode);
//        var value = $('input[type="number"]', e.target.parentNode)[0].value;
//        $inputRange.val(value).change();
//    });
//    //  Example functionality to demonstrate programmatic attribute changes 
//    $document.on('click', '#js-example-change-attributes button', function (e) {
//        var $inputRange = $('[data-rangeslider]', e.target.parentNode);
//        var attributes = {
//            min: $('input[name="min"]', e.target.parentNode)[0].value,
//            max: $('input[name="max"]', e.target.parentNode)[0].value,
//            step: $('input[name="step"]', e.target.parentNode)[0].value
//        };
//        $inputRange.attr(attributes).rangeslider('update', true);
//    });
//    //  Example functionality to demonstrate destroy functionality 
//    $document.on('click', '#js-example-destroy button[data-behaviour="destroy"]', function (e) {
//        $('input[type="range"]', e.target.parentNode).rangeslider('destroy');
//    }).on('click', '#js-example-destroy button[data-behaviour="initialize"]', function (e) {
//        $('input[type="range"]', e.target.parentNode).rangeslider({
//            polyfill: false
//        });
//    });
});