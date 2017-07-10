$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = ($("input#name").val()).toUpperCase();
    var work = parseInt($("input:radio[name=work]:checked").val());
    var frontEnd = $("input:radio[name=front-end]:checked").val();
    var loveAndroid = $("input:radio[name=love-android]:checked").val();
    var build = parseInt($("input:radio[name=build]:checked").val());
    var startDate = parseInt($("input:radio[name=start-date]:checked").val());

    if (loveAndroid === "true" && frontEnd === "false") {
      $("#java-android").fadeIn("slow").delay(9000).hide(1);
    } else if ((frontEnd === "true" && loveAndroid === "false") || (frontEnd === "true" && loveAndroid === "true")) {
      $("#css-design").fadeIn("slow").delay(9000).hide(1);
    } else {
      $("#ruby-rails").fadeIn("slow").delay(9000).hide(1);
    }

    $(".name").text(nameInput);

    event.preventDefault();
  });
});
