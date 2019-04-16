$(document).ready(function() {
  var newUser = {
    username: "",
    password: ""
  };

  $(document).on("click", "#sign-in", function() {
    newUser.username = $("#searchGuy").val();
    newUser.password = $("#passwordGuy").val();

    $.post("/login", newUser, function() {});
  });
});
