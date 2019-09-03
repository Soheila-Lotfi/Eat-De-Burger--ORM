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
});

// $(function() {
//   $.ajax("/", {
//     type: "GET"
//   }).then(function() {
//     console.log("hi");
//   });
// });
