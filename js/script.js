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

    $('.edit-sensor').on('click', function (e) {
        e.preventDefault();
        $('.sensors-container').hide();
        $('.sensor-edit').show();
    });

    $('.sensor-edit .btn-primary').on('click', function (e) {
        e.preventDefault();
        $('.sensor-edit').hide();
        $('.sensors-container').show();
    });


    $('.remove-sensor').on('click', function (e) {
        e.preventDefault();
        $('.overlay').show();
    });

    $('.select-box-with-checks .select-box').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.select-content').toggle();
    })

    $('.datepicker').datepicker($.datepicker.regional["ru"],
        {
            dateFormat: 'dd.mm.yy'
        });

    $('.timepicker').timepicki({
        show_meridian: false,
        min_hour_value: 0,
        max_hour_value: 23,
        step_size_minutes: 1,
        overflow_minutes: true,
        increase_direction: 'up',
    });

    //$('.select-box-with-checks').on('blur', function () {
    //    $(this).find('.select-content').hide();
    //});
});