$(function () {
    $('.tab-navs a').on('click', function (e) {
        e.preventDefault();
        $('.tab-content > div').removeClass('active');
        var $tab = $(this);
        $('.tab-content > div' + $tab.attr('href')).addClass('active');
        $tab.parent().siblings().removeClass('active')
            .end().addClass('active');
    });

    $('.register .btn.btn-primary').on('click', function (e) {
        e.preventDefault();
        $('.overlay').show();
    });

    $('.delete-confirmation .btn.btn-cancel').on('click', function (e) {
        e.preventDefault();
        $('.overlay').hide();
    });

    $('.remove-sensor').on('click', function (e) {
        e.preventDefault();
        $('.overlay').show();
    });

    $('.select-box-with-checks select').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.select-content').toggle();
    })

    $('.select-box-with-checks').on('blur', function () {
        $(this).find('.select-content').hide();
    });
});