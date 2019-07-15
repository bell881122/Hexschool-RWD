$(document).ready(function () {

    $('.no-href').click(function (e) {
        $(this).find('a');
        e.preventDefault();
    });

    
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    })

    $('#signin, #login').on('click', function (e) {
        e.preventDefault();
        $('.login-box, .signin-box').toggleClass('active');
    })

    $('.fa-heart').click(function (e) {
        // e.preventDefault();
        $(this).toggleClass('heart-active');
        console.log(1111111);
    });



});
