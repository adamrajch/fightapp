$(document).ready(function() {
  console.log("ready");
  $.get("/api/profile", function(data) {
    console.log("here");
    console.log(data);
  });
});
