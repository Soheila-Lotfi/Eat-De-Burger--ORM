// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  $("#burger_form").on("submit", function(event) {
    event.preventDefault();

    newData = {
      burger_name: $("#favorite_burger")
        .val()
        .trim()
    };

    console.log(newData);

    // Send the POST request.
    $.post("/api/burgers", newData).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".devoure_it").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).data("id");
    console.log($(this));
    newData = {
      devoured: true
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newData
    }).then(function() {
      location.reload();
    });
  });
  $(".delete_it").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      location.reload();
    });
  });
});
