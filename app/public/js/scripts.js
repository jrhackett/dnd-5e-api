(function($) {
  $("#example-form").submit(function(event) {
    event.preventDefault();
    $.get($("#example-form input").val(), function(data) {
      $("#result code").html(JSON.stringify(data, null, 2));
    });
  });
})(jQuery);