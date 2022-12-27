$(document).ready(function(){
    var enlaces = $('.menu a')
    var titulo = $('header .nombre-frase')
    // EFECTOS MENU NAV
    enlaces.each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        })
        $(this).animate({
            'top': '0px'
        },2000 + (index * 500))
    })
    // EFECTOS TITULO
    if($(window).width() > 800){
        titulo.css({
            opacity: 0,
            marginTop: 0
        })

        titulo.animate({
            opacity: 1,
            marginTop: '-50px'
        },1500)
    }
    // NAVEGACION MENU
    // OffsetTop
    var acercadeot = $('#acerca-de').offset().top
    var menuot = $('#menu').offset().top
    var galeriaot = $('#galeria').offset().top
    var ubicacionot = $('#ubicacion').offset().top

    // Boton
    var acercade = $('#btn-acerca-de').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: acercadeot - 360
        }, 500)
    })
    var menu = $('#btn-menu').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: menuot + 400
        }, 500)
    })
    var galeria = $('#btn-galeria').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: galeriaot
        }, 500)
    })
    var ubicacion = $('#btn-ubicacion').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: ubicacionot 
        }, 500)
    })


})