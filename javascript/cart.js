var deleteCart = document.querySelector('#btn-delete');
var product = document.querySelector('.content-cart-container');

// Function plus and sub number
$('input.input-qty').each(function() {
    var $this = $(this),
        qty = $this.parent().find('.is-form'),
        min = Number($this.attr('min')),
        max = Number($this.attr('max'));
    if (min == 0) {
        var d = 0;
    } else d = min;
    $(qty).on('click', function() {
        if ($(this).hasClass('minus')) {
            if (d > min) d += -1;
        } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1;
            if (x <= max) d += 1;
        }
        $this.attr('value', d).val(d);
    });
});
$('#checkAll').click(function () {
  $('input:checkbox').not(this).prop('checked', this.checked);
});

$('#btn-delete').click(function () {
  $('.content-cart-container input:checked').each(function () {
    alert($(this).val());
  });
});