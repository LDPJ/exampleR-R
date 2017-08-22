$(function() {
  
  var times;
  $.ajax({
    beforeSend: function(xhr){
      if(xhr.overrideMimeType) {
        xhr.overrideMimeTpe("application/json");
      }
    }
  });
  
  //
  function loadTimetable() {
    $.getJSON('textdata.json')
    .done( function(data){
      times = data;
    }).fail( function() {
      $('#event').html('Aye! We could not load the timetable at the moment');
    });
  }
  
  loadTimetable();
