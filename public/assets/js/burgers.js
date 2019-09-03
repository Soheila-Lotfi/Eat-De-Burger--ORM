$(function() {
  $("#burger_form").on("submit", function(event) {
    event.preventDefault();

    newData = {
      burger_name: $("#favorite_burger")
        .val()
        .trim()
    };

    console.log(newData);
    $.post("/api/burgers", newData).then(function() {
      location.reload();
    });
  });

  $("#devoure_it").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    newData = {
      devoured: true
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newData
    }).then(function() {
      location.reload();
    });
  });
  $("#delete_it").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      location.reload();
    });
  });
});
