
$(document).ready(function() {



  $("#datepicker").datepicker();

  $.get('http://localhost:9292/api', function(data) {
    console.log(data)
    data.forEach(function (d) {
      $('ul#lists').append('<li class="list" data_id="' + d.id + '">' + d.name + '</li>');
      d.items.forEach(function (i) {
        $('ul#lists li.list[data_id=' + i.list_id + ']').append('<ul class=items><li>' + i.description + ' ' + i.due_date + '</li></ul>')
      });
    });
  });


  // $('#add_item').submit(function(e){
  //   e.preventDefault();
  //   var description = $('#description').val()
  //   var date = $('#datepicker').val()
  //   $.post($(this).attr('action'), { description: description, due_date: date, list_id: 3 });
  // });



});
