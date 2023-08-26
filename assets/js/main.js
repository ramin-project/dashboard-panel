var $sidebar = $(".sidebar");
var $mainContainer = $(".main-container");
var $firstWidth = $sidebar.width();



//start sidebar
$(document).ready(function() {

    //#toggle-desktop
    $("#toggle-desktop").click(function (){
        if($sidebar.hasClass("sidebar-minimize")) {
            $sidebar.removeClass("sidebar-minimize");
            $sidebar.css("flex", "0  0 " + $firstWidth + "px");
        } else {
            $sidebar.addClass("sidebar-minimize");
            $sidebar.css("flex", "0  0 5.3rem");
        }
    });

    //if hover on sidebar size = maxsize
    $sidebar.hover(function (){
        if($sidebar.hasClass("sidebar-minimize")) {
            $(this).css("flex", "0  0 " + $firstWidth + "px");
        }
    }, function (){
        if($sidebar.hasClass("sidebar-minimize")) {
            $(this).css("flex", "0  0 5.3rem");
        }
    });

    //#toggle-mobile
    $("#toggle-mobile").click(function (){

        var $right = $sidebar.css('right');
        if(parseInt($right) < 0) {
            turnOnSidebarInmobileView();
        } else {
            turnOffSidebarInmobileView();
        }

    });

    //if click on main container
    $(".main-container").click(function (){
        var $right = $sidebar.css('right');
        if (parseInt($right) == 0) {
            turnOffSidebarInmobileView();
        }
    });


    // //if click on back button in mobile
    // this.bind('keydown', function(event) {
    //     var $right = $sidebar.css('right');
    //     if (parseInt($right) == 0 && event.keyCode == 27) {
    //         event.preventDefault();
    //         turnOffSidebarInmobileView();
    //     }
    // });


    //sidebar sub nav
    var $sidebarNavItemActive=$('section.sidebar-nav-item ul li.sidebar-nav-item-active').parent('ul');
    $sidebarNavItemActive.slideDown();
    $sidebarNavItemActive.parent('section').children('.sidebar-nav-item-main-link').children('.sidebar-nav-item-arrow').css({ WebkitTransform: 'rotate(-90deg)'});
    $sidebarNavItemActive.parent('section').children('.sidebar-nav-item-main-link').children('.sidebar-nav-item-arrow').attr('data-subNavStatus',1);
    $(".sidebar-nav-item").click(function (){
        var subNavStatus=$(this).children('.sidebar-nav-item-main-link').children('span.sidebar-nav-item-arrow').attr('data-subNavStatus');
        $(".sidebar-nav-item").children('.sidebar-nav-item-sub-menu').slideUp();
        $(".sidebar-nav-item").children('.sidebar-nav-item-main-link').children('span.sidebar-nav-item-arrow').css({ WebkitTransform: 'rotate(0deg)'});
        $(".sidebar-nav-item").children('.sidebar-nav-item-main-link').children('span.sidebar-nav-item-arrow').attr('data-subNavStatus',0);


       if(subNavStatus==0){
           $(this).children('.sidebar-nav-item-sub-menu').slideDown();
           $(this).children('.sidebar-nav-item-main-link').children('span.sidebar-nav-item-arrow').css({ WebkitTransform: 'rotate(-90deg)'});
           $(this).children('.sidebar-nav-item-main-link').children('span.sidebar-nav-item-arrow').attr('data-subNavStatus',1);
       }else {
           $(this).children('.sidebar-nav-item-sub-menu').slideUp();
           $(this).children('.sidebar-nav-item-main-link').children('span.sidebar-nav-item-arrow').css({ WebkitTransform: 'rotate(0deg)'});
           $(this).children('.sidebar-nav-item-main-link').children('span.sidebar-nav-item-arrow').attr('data-subNavStatus',0);
       }
    });


});

function turnOffSidebarInmobileView() {
    var $width = $sidebar.width();
    $sidebar.css("right", "-" + $width + "px");
    $mainContainer.css("filter", "brightness(1)");
    $mainContainer.children().css("pointer-events", "auto");
}

function turnOnSidebarInmobileView() {
    $sidebar.css("right", "0");
    $mainContainer.css("filter", "brightness(0.75)");
    $mainContainer.children().css("pointer-events", "none");
}

//end sidebar



//start header
$(document).ready(function(){

    $(".header-profile-dropdown").click(function (){
        $(".header-profile-dropdown-menu").slideToggle();
    });


    $(".header-notification-dropdown-toggle").click(function (){
        $(".header-notification-dropdown-menu").slideToggle();
    });

    $(".header-dark-mode-dropdown-toggle").click(function (){
        $(".header-dark-mode-dropdown-menu").slideToggle();
    });

    //header-dark-mode-dropdown-menu
    var $theme = localStorage.getItem("theme");
    $(".header-dark-mode-dropdown-menu .dropdown-item").click(function (){
        $(".header-dark-mode-dropdown-menu .dropdown-item").removeClass("active");
        $(this).addClass("active");
        localStorage.setItem("theme", $(this).attr("data-dark-status"));
        var $theme = localStorage.getItem("theme");
        setTheme($theme);
    });

    var $time = new Date();
    setTimeout(function() {
        setInterval(function(){ setTheme(localStorage.getItem("theme")); console.log(1);}, 3600000);
    }, (60 - $time.getMinutes()) * 60000);
});


function setTheme($theme) {
    var $hour = (new Date()).getHours();
    var $themeClass = $theme;
    if($theme == "auto" && ($hour < 8 || $hour>=18)) {
        $themeClass = "dark";
    } else if($theme == "auto" && ($hour >= 8 && $hour<18)){
        $themeClass = "light";
    }
    var $themeIcon = $themeClass == "dark" ? "moon" : "sun";
    $("html").attr("data-bs-theme",$themeClass);
    $(".header-dark-mode-dropdown-toggle").html('<i class="fa fa-'+ $themeIcon +'"></i>');
}
//end header

//start main-body
$(document).ready(function(){

    $(".main-body-dropdown-toggle").click(function (){
        $(this).parent('section').children('.main-body-dropdown-menu').slideToggle();
    });

});
//end main-body


//start owlcarousel
$(document).ready(function(){
    $("#slideshow").owlCarousel({
        rtl:true,
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1
    });

    $(".lazyload").owlCarousel({
        rtl:true,
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        autoplay:false,
        autoHeight: false,
        items: 5,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            480 : {
                items: 2,
            },
            // breakpoint from 768 up
            768 : {
                items: 5,
            }
        }
    });


    $(".brands").owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 5,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            480 : {
                items: 2,
            },
            // breakpoint from 768 up
            768 : {
                items: 5,
            }
        }
    });

});

//end owlcarousel

