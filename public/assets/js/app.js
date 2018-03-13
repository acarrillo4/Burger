// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-button").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("devour");
      var newDevourState = {
        devoured: newDevour
      };
    //   Send the PUT request.
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").submit(function(event) {
      var newBurgerValue = $("#newBurger").val().trim()
      var newBurger = {
        burger_name: newBurgerValue,
        devoured: false
      }
      console.log(newBurger);
      if (newBurgerValue.length > 0) {
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function(data) {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
      }
    });
  });