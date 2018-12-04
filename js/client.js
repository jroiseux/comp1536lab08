$(document).ready(function() {

  /**
  * Getting dog pictures and names from the server
  * when the "See Dogs" option is clicked.
  * Returns an HTML List
  */
  $('#navbar #seeDogs').click(function(e) {
    $('#gallery').empty();
    $.ajax({
      url: "/get-animal-lists",
      dataType: "html",
      type: "GET",
      data: { format: "see-dogs"},
      success: function(data) {
        var obj = JSON.parse(data);
        $("#gallery").append('<ul id="dogList"></ul>');
        obj.forEach(function(item, i) {
          itemHtml = "<li><div id='animal"+i+"' class='animalbox'>"
          + "<div id='image"+i+"' class='image'>"
          + "<img src='"+item.image+"' alt='dog'>"
          + "</div>"
          + "<div class='infodiv'>"
          + "<h3 id='name"+i+"'>"+item.name+"</h3>"
          + "</div>"
          + "</div></li>"
          $("#dogList").append(itemHtml);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#gallery").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }

    });
  });

  /**
  * Getting cat pictures and names from the server
  * when the "See Cats" option is clicked.
  * Returns an HTML List
  */
  $('#navbar #seeCats').click(function(e) {
    $('#gallery').empty();
    $.ajax({
      url: "/get-animal-lists",
      dataType: "html",
      type: "GET",
      data: { format: "see-cats"},
      success: function(data) {
        $("#gallery").html(data);
        console.log("SUCCESS: placed cats list inside page!");

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#gallery").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }

    });
  });

});
