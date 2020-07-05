$(function() {
  var $title = $("#title");
  var $text = $("#text");
  var $not = $(".not");
  var $tasklist = $(".tasklist");

  var displayNot = function () {
    if (!$tasklist.children().length) {
      $not.fadeIn("fast");
    } else {
      $not.css("display", "none")
    }
  }

  $("#taskAdd").on("click", function () {
    if (!$title.val()) {return false;}
    if (!$text.val()) {return false;}

    $tasklist.append("<li>" + $title.val() + "<br>" + $text.val() + "<button class='delete'>&#10006</button> </li>");

    $title.val("");
    $text.val("");

    displayNot();

    $(".delete").on("click", function () {
      var $parent = $(this).parent();

      setTimeout(function () {
        $parent.remove();
        displayNot();
      })
    })
  })
})
