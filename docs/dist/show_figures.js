$("select").change(function() {
      $('.box').hide();
      $('.' + $(':selected', this).attr('value')).show();
    });
