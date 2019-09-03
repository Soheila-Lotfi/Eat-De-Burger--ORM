$("#submit").on("click", function(event) {
  event.preventDefault();

  newData = {
    burger_name: $("#favorite_burger")
      .val()
      .trim(),
    devoured: false
  };

  $.post("/api/burgers", newData).then(function() {
    location.reload();
  });
});

// $(function() {
//   $.ajax("/", {
//     type: "GET"
//   }).then(function() {
//     console.log("hi");
//   });
// });
