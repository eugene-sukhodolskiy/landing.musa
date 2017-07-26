$(document).ready(function(){
    $('#home').css('height', window.innerHeight);
    $('#home .brand-logo').css('margin-top', Math.floor(window.innerHeight / 2 - 200));
    initMainNav();
    
    $('nav.mobile').click(function(){
        closeMobNav();
    });

    $('nav.mobile a').click(function(){
        closeMobNav();
    });
    
    $('.mob-nav').click(function(){

        $('nav.mobile').fadeIn(300);

        $('nav.mobile').addClass('active');

    });
    
    // about carousel init
    var imgItem = $('.about-img-item');
    for(var i=0;i<imgItem.length;i++){
        var attr = $(imgItem[i]).attr('data-src');
        $(imgItem[i]).css('background-image', 'url('+attr+')');
    }
    // end about carousel init
    
    
    //about slide-show init
    $('.slick-fade').slick({
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });
    //end
    
    $('body').liLanding({
        topMargin:50,
        show: function(a,section){

            if($(a).attr('href') != '#home'){
                $('header.header').removeClass('transparent');
                $('#home .arrow').css('opacity', 0);
            }else{
                $('header.header').addClass('transparent');
                $('#home .arrow').css('opacity', 1);
            }

            $(section).addClass('show');        
        }
    });
    
//     ISOTOPE FILTER
    
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    });
    
    $('[data-filter]').on( 'click', function() {
        $('[data-filter]').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        return false;
    });
    
//    Victor popup
    
    var VP = new VictorPopup({
        'el': $('.popup')
    });
    
    
});

var initMainNav = function(){
    var nav = $('nav.mobile ul li');
    var html = '';
    for(var i=0;i<nav.length;i++){
        html += $(nav[i]).html();
    }
    $('nav.main').html(html);
}

var closeMobNav = function(){
    $('nav.mobile').fadeOut(300);

    $('nav.mobile').removeClass('active');
}

function myMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 44.674, lng: -70.945},
        zoom: 12,
        styles: mapStyle
    });
}

var mapStyle = [
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-75"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "color": "#faf5ed"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae5a6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "weight": "1.00"
            },
            {
                "gamma": "1.8"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffb200"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#b000ff"
            },
            {
                "saturation": "23"
            },
            {
                "lightness": "-4"
            },
            {
                "gamma": "0.80"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#a0daf2"
            }
        ]
    }
];