$(document).ready(function() {
  $.get("/api/profile", function(data) {
    console.log(data);
  });
});
