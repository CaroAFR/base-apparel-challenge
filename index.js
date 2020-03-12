$(".btn").click(function() {
  var text = $("#email").val(); //val() passes the input in #email.
  var check = text.includes("@");

  if (check === false) { //If the text does not contain @ it asks for a valid mail
      $("#emailHelpLine").html("<img src='images/icon-error.svg' /> Enter a valid email");
    } else { //If the text is valid, it displays a "Thank you" message.
        $("#emailHelpLine").text("Thank you!");
      }
  });
