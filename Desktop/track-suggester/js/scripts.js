$(document).ready(function() {
  $("#formOne").submit(function(event) {



    var work = $("input:radio[name=work]:checked").val();
    var frontEnd = $("input:radio[name=front-end]:checked").val();
    var loveAndroid = $("input:radio[name=love-android]:checked").val();
    var build = $("input:radio[name=build]:checked").val();

    if (work === "startup" && frontEnd === "false" && loveAndroid == "false") {
      $("#ruby-rails").show();
    } else if (work === "bigcompany" && frontEnd === "false" && loveAndroid == "false") {
      $("#c-net").show();
    } else {
      $("#css-design").show();
    }

  //  if (frontEnd === "true") {
  //    $("#css-design").show();
  //  } else if (frontEnd === "false") {
  //    $("#css-design").hide();
    //} else if (frontEnd === "true" && loveAndroid === "true") {
    //  $("#java-android").show();




    event.preventDefault();
  });
});
