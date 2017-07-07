$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var work = parseInt($("input:radio[name=work]:checked").val());
    var frontEnd = $("input:radio[name=front-end]:checked").val();
    var loveAndroid = parseInt($("input:radio[name=love-android]:checked").val());
    var build = parseInt($("input:radio[name=build]:checked").val());
    var startDate = parseInt($("input:radio[name=start-date]:checked").val());

    if (work + loveAndroid + build + startDate === 4) {
      $("#ruby-rails").show();
    } else if (frontEnd === "false" && work + loveAndroid + build + startDate > 4) {
      $("#java-android").show();
    } else if (frontEnd !== "false" && work + loveAndroid + build + startDate > 4) {
      $("#css-design").show();
    }


    $(".name").text(nameInput);




    event.preventDefault();
  });
});
