$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    })

    $('#signin, #login').on('click', function (e) {
        e.preventDefault();
        $('.login-box, .signin-box').toggleClass('active');
    })

});
