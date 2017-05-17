//var Jquery
var $document, selector, $inputRange;
var value, value2, value3, value4;
var $valor1, $valor2, $valor3, $valor4;
var $tabla2, $tabla, $tabla3;

//var Matter.js
var Engine, engine, render;
var verticesFi, triangulo, circle, circle_2, polea, group, cadena, cadena, verticesFl, flechas;
var defaultCategory = 0x0001,
        redCategory = 0x0002,
        greenCategory = 0x0004,
        blueCategory = 0x0008;
var posXcir = 200, posYcir = 200, posXtria = 260, posYtria = 250, posXcadena = -80, posYcadena = 170;
var x = posXcir, y = posYcir, difX = 0, difY = 0;
//var calculos
var angulo, masa1, masa2;
var a = 200, b = 200, c = 0, tTotal = 0, tX = 0, tY = 0, w1 = 0, w2 = 0, gra = 9.8, peso1 = 0, peso2 = 0;
var seno, coseno, radian;
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