$(function() {
    $('.txtInput').bind('blur change', function()
    {
        check(this);
    });
    
    $('#add').on('click', function()
    {
        $('.txtInput').blur();

        if (!$('.txtInput').hasClass('err'))
        {
            alert('THÊM THÀNH CÔNG');
        }
    });

    $('#reset').click(function()
    {
        var check = confirm('Bạn có muốn reset không?');

        if (check === true ) {
            window.location.reload();
        }
    });
});

function check(arg) {
    var el = $(arg);
    var value = el.val().trim();
    var id = el.attr('id');

    if (value === '')
    {
        el.addClass('err');
        $('.err_' + id).show();
        return false;
    }
    else
    {
        const tendm = /^[A-Z ]+$/;
        const mtlink = /^[\Sa-zA-Z0-9\-_]+$/gm;
        const ttht = /^[0-9]{1,3}$/;

        if (id === 'tendm' && !tendm.test(value))
        {
            el.addClass('err');
            $('.err_' + id).show();
            return false;
        }

        else if (id === 'mtlink' && !mtlink.test(value))
        {
            el.addClass('err');
            $('.err_' + id).show();
            return false;
        }

        else if (id === 'ttht' && (!ttht.test(value) || parseInt(value) > 99))
        {
            el.addClass('err');
            $('.err_' + id).show();
            $('.err_' + id).html('').html('');
            return false;
        }
    }

    $('.err_' + id).hide();
    el.removeClass('err');
    return true;
}