//var Jquery
var $document, selector, $inputRange;
var value, value2, value3, value4;
var $valor1, $valor2, $valor3, $valor4;
var $tabla2, $tabla, $tabla3;

//var Matter.js
var Engine, engine, render, Render, Runner, Events, Body, Composite, Composites, Constraint;
var MouseConstraint, Mouse, World, Bodies, Vertices;
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
//Actualiza valor OUTPUT
function valueOutput() {
    vaciarDatos();
    angulo = parseInt($("#angulo").val());
    masa1 = parseInt($("#masa1").val());
    masa2 = parseInt($("#masa2").val());
    crearWorld();
    var a = 200, b = 200, c = 0, tTotal = 0, tX = 0, tY = 0, w1 = 0, w2 = 0, gra = 9.8, peso1 = 0, peso2 = 0;
    hacerCalculos();
    //Vertices.fromPath(1-A,2,3-B);
    //Menor o igual a 45 -> cambiar  A (x,y) aumentar Y , Mayor a 45 -> cambiar  B (x,y)
    //angulo=tan(a/b) -> arctan(angulo)= a / b -> arctan(angulo) * b = a
    ////corregir dinamismo y ver si se puede lo del peso
    if (masa1 > masa2) {
        peso1 = 0.01;
        peso2 = 0.001;
    }
    if (masa1 < masa2) {
        peso1 = 0.001;
        peso2 = 0.01;
    }
    if (masa1 == masa2) {
        peso1 = 0.001;
        peso2 = 0.001;
    }
    group = Body.nextGroup(true);
    cadena = Composites.stack(posXcadena + 90, posYcadena - 90, 8, 1, 10, 10, function (x, y, columns, rows) {
        if (columns == 0 && rows == 0) {
            return Bodies.rectangle(x, y, 50, 50, {collisionFilter: {mask: defaultCategory | greenCategory, group: group},
                render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: 'img/box.png'
                    }
                }, density: peso1});
        } else if (columns == 7 && rows == 0) {
            return Bodies.rectangle(x, y, 50, 50, {collisionFilter: {mask: defaultCategory | greenCategory, group: group},
                render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: 'img/box.png'
                    }
                }, density: peso2
            });
        } else {
            return Bodies.rectangle(x, y, 50, 20, {collisionFilter: {mask: defaultCategory | greenCategory, group: group}
                , render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: 'img/chain.png'
                    }
                }
            });
        }
    });
    //Dif espacio Y polea = 70
    polea = Bodies.circle(posXcir, posYcir - 100, 60, {collisionFilter: {
            mask: redCategory
        }, render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'img/polea.png'
            }
        }, isStatic: true, friction: 0.01});

    switch (angulo) {
        case 0:
            verticesFi = Vertices.fromPath('0 0 0 50 500 50 500 0');
            triangulo = Bodies.fromVertices(posXtria, posYtria, verticesFi, {isStatic: true, friction: 0.01});
            circle = Bodies.circle(posXcir, posYcir - 17, 20, {render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: 'img/polea.png'
                    }
                }, isStatic: true, friction: 0.01});
            cadena = Composites.stack(posXcadena + 90, posYcadena + 10, 8, 1, 10, 10, function (x, y, columns, rows) {
                if (columns == 0 && rows == 0) {
                    return Bodies.rectangle(x, y, 50, 50, {collisionFilter: {group: group},
                        render: {
                            strokeStyle: '#ffffff',
                            sprite: {
                                texture: 'img/box.png'
                            }
                        }, density: peso1});
                } else if (columns == 7 && rows == 0) {
                    return Bodies.rectangle(x, y, 50, 50, {collisionFilter: {group: group},
                        render: {
                            strokeStyle: '#ffffff',
                            sprite: {
                                texture: 'img/box.png'
                            }
                        }, density: peso2
                    });
                } else {
                    return Bodies.rectangle(x, y, 50, 20, {collisionFilter: {group: group}
                        , render: {
                            strokeStyle: '#ffffff',
                            sprite: {
                                texture: 'img/chain.png'
                            }
                        }});
                }
            });
            break;
        case 45:
            verticesFi = Vertices.fromPath('0 0 0 200 200 200');
            triangulo = Bodies.fromVertices(posXtria, posYtria, verticesFi, {isStatic: true, friction: 0.01});
            circle = Bodies.circle(posXcir, posYcir - 70, 20, {render: {
                    fillStyle: 'transparent',
                    strokeStyle: 'transparent'
                }, isStatic: true, friction: 0.01});
            circle_2 = Bodies.circle(posXcir, posYcir - (2 * 70), 20, {render: {
                    fillStyle: 'transparent',
                    strokeStyle: 'transparent'
                }, isStatic: true, friction: 0.01});
            break;
        case 90:
            verticesFi = Vertices.fromPath('0 0 0 190 190 190 190 0');
            triangulo = Bodies.fromVertices(posXtria + 20, posYtria - 10, verticesFi, {isStatic: true, friction: 0.01});
            circle = Bodies.circle(posXcir, posYcir - 70, 20, {render: {
                    fillStyle: 'transparent',
                    strokeStyle: 'transparent'
                }, isStatic: true, friction: 0.01});
            circle_2 = Bodies.circle(posXcir, posYcir - 140, 20, {render: {
                    fillStyle: 'transparent',
                    strokeStyle: 'transparent'
                }, isStatic: true, friction: 0.1});
            break;
        default:
            if (angulo > 0 && angulo < 45) {
                a = 200 - (Math.atan(radian) * b);
                verticesFi = Vertices.fromPath('0 ' + a + ' 0 200 200 200');
                if (angulo > 30) {
                    difY = (45 / (4 * angulo)) * (200 - a);
                }
                if (angulo >= 10 && angulo <= 30) {
                    difY = (45 / (2 * angulo)) * (200 - a);
                }
                if (angulo <= 9) {
                    difY = (45 / (angulo) * 0.7) * (200 - a);
                }
                triangulo = Bodies.fromVertices(posXtria, posYtria - difY, verticesFi, {isStatic: true, friction: 0.01});
                circle = Bodies.circle(posXcir, posYcir - 70, 17, {render: {
                        fillStyle: 'transparent',
                        strokeStyle: 'transparent'
                    }, isStatic: true, friction: 0.01});
                circle_2 = Bodies.circle(posXcir, posYcir - 140, 17, {render: {
                        fillStyle: 'transparent',
                        strokeStyle: 'transparent'
                    }, isStatic: true, friction: 0.01});
                break;
            } else if (angulo > 45 && angulo < 90) {
                b = (a / Math.atan(radian)) - 200;
                verticesFi = Vertices.fromPath('0 0 0 200 ' + b + ' 200');
                difX = posXtria - b;
                if (angulo >= 46 && angulo <= 60) {
                    difX = (90 / (6 * angulo)) * (200 - b);
                }
                if (angulo >= 61 && angulo <= 80) {
                    difX = (90 / (4.3 * angulo)) * (200 - b);
                }
                if (angulo >= 81) {
                    difX = (90 / (3.5 * angulo)) * (200 - b);
                }
                triangulo = Bodies.fromVertices(posXtria - difX, posYtria, verticesFi, {isStatic: true, friction: 0.01});
                circle = Bodies.circle(posXcir, posYcir - 70, 17, {render: {
                        fillStyle: 'transparent',
                        strokeStyle: 'transparent'
                    }, isStatic: true, friction: 0.01});
                circle_2 = Bodies.circle(posXcir, posYcir - 140, 17, {render: {
                        fillStyle: 'transparent',
                        strokeStyle: 'transparent'
                    }, isStatic: true, friction: 0.01});
            }
            break;
    }
    verticesFl = Vertices.fromPath('40 40 40 80 80 80 80 40 80 20 80 100 100 60');
    flechas = Bodies.fromVertices(250, 250, verticesFl, {
        collisionFilter: {mask: defaultCategory | greenCategory, group: group},
        isStatic: true, friction: 0.01});
    cadena = Composites.chain(cadena, 0.5, 0, -0.5, 0, {stiffness: 1, length: 5});
    c = ((a ** 2) + (b ** 2)) ** (1 / 2);
    $("#datos").empty();
    $("#tabla1").find("tbody").empty();
    $("#tabla2").find("tbody").empty();
    $("#tabla3").find("tbody").empty();
    // add all of the bodies to the world
    if (angulo == 0) {
        World.add(engine.world, [triangulo, cadena, circle, flechas]);
    } else {
        World.add(engine.world, [triangulo, cadena, circle, circle_2, polea, flechas]);
    }
//            // run the engine
    Engine.run(engine);
//            // run the renderer
    Render.run(render);
    $tabla = $("<tr>\n\
                    <td>" + w1.toFixed(2) + "  N</td>\n\
                    <td>" + w2.toFixed(2) + "  N</td>\n\
                    <td>" + tTotal.toFixed(2) + " N</td></tr>");
    $tabla2 = $("<tr>\n\
                    <td>" + tX.toFixed(2) + " N</td>\n\
                    <td>" + tY.toFixed(2) + " N</td></tr>");
    if (angulo < 45) {
        a = (a - 200) * -1;
    }
    $tabla3 = $("<tr>\n\
                    <td>" + a.toFixed(2) + "</td>\n\
                    <td>" + b.toFixed(2) + "</td>\n\
                    <td>" + c.toFixed(2) + "</td>\n\
                    </tr>");
    $("#tabla1").find("tbody").append($tabla);
    $("#tabla2").find("tbody").append($tabla2);
    $("#tabla3").find("tbody").append($tabla3);
    //  Events.on(engine, 'afterUpdate', function(event) {
//        var time = engine.timing.timestamp;
//
//        Composite.translate(cadena, {
//            x: Math.sin(time * 0.001) * 2,
//            y: Math.sin(time * 0.001) * 2
//        });
//        var scale = 1 + (Math.sin(time * 0.001) * 0.01);
//
//        Composite.scale(stack, scale, scale, {
//            x: 300,
//            y: 300
//        });
//    });
}
function vaciarDatos() {
    $("#angulo_num").empty();
    $("#masa1_num").empty();
    $("#masa2_num").empty();
    $("#friccion_num").empty();
    value = $("#angulo").val();
    value2 = $("#masa1").val();
    value3 = $("#masa2").val();
    value4 = $("#friccion").val();
    $valor1 = $("<h4>" + value + "</h4>");
    $valor2 = $("<h4>" + value2 + "</h4>");
    $valor3 = $("<h4>" + value3 + "</h4>");
    $valor4 = $("<h4>" + value4 + "</h4>");
    $("#angulo_num").append($valor1);
    $("#masa1_num").append($valor2);
    $("#masa2_num").append($valor3)
    $("#friccion_num").append($valor4)
    // module aliases
    $("#cosas").empty();
}
function crearWorld() {
    Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Events = Matter.Events,
            Body = Matter.Body,
            Composite = Matter.Composite,
            Composites = Matter.Composites,
            Constraint = Matter.Constraint,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Vertices = Matter.Vertices;
    // create an engine
    engine = Engine.create();
    // create a renderer
    render = Render.create({
        element: document.getElementById("cosas"),
        engine: engine,
        options: {
            width: Math.min(document.documentElement.clientWidth, 480),
            height: Math.min(document.documentElement.clientHeight, 350),
            background: 'img/wall-bg.jpg',
            showAngleIndicator: false,
            wireframes: false
        }
    });
}
function hacerCalculos() {
    radian = (angulo * Math.PI) / 180;
    seno = Math.sin(radian);
    coseno = Math.cos(radian);
    w1 = masa1 * gra;
    w2 = masa2 * gra;
    tX = w2 * Math.sin(radian);
    tY = w1;
    tTotal = ((tX ** 2) + (tY ** 2)) ** (1 / 2);
}