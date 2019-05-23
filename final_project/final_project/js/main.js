if ($(".header")) {
  $(".header, .servicePage .header, .bookBody .header").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false
  });
}

// swedish button

$("#swedishService").on("click", function() {
  $(".swedishModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".swedishModal").fadeOut("slow");
});

// deep tissue button

$("#deepService").on("click", function() {
  $(".deepTissueModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".deepTissueModal").fadeOut("slow");
});

// sports button
$("#sportService").on("click", function() {
  $(".sportsTherapyModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".sportsTherapyModal").fadeOut("slow");
});

// prenatal button
$("#prenatalService").on("click", function() {
  $(".prenatalModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".prenatalModal").fadeOut("slow");
});
// honey facial button

$("#honeyFacialService").on("click", function() {
  $(".honeyFacialModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".honeyFacialModal").fadeOut("slow");
});

//seaweed facial button
$("#seaweedFacialService").on("click", function() {
  $(".seaweedFacialModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".seaweedFacialModal").fadeOut("slow");
});

// aromatherapy button
$("#aromaService").on("click", function() {
  $(".aromaModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".aromaModal").fadeOut("slow");
});

//hot stones button
$("#hotStoneService").on("click", function() {
  $(".hotStonesModal")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

$(".close").on("click", function() {
  $(".hotStonesModal").fadeOut("slow");
});

// carousel at bottom of .servicePage

$(".center").slick({
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  variableWidth: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});

// book page error functions

$("form").on("submit", function(event) {
  event.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var dob = $("#dob").val();
  var occupation = $("#occupation").val();

  if (name.length === 0) {
    $("#name").addClass("error");
    $("#name-error-message").fadeIn(300);
  } else {
    $("#name").removeClass("error");
    $("#name-error-message").fadeOut(300);
  }

  if (email.length === 0) {
    $("#email").addClass("error");
    $("#email-error-message").fadeIn(300);
  } else {
    $("#email").removeClass("error");
    $("#email-error-message").fadeOut(300);
  }
  if (phone.length === 0) {
    $("#phone").addClass("error");
    $("#phone-error-message").fadeIn(300);
  } else {
    $("#phone").removeClass("error");
    $("#phone-error-message").fadeOut(300);
  }
  if (dob.length === 0) {
    $("#dob").addClass("error");
    $("#dob-error-message").fadeIn(300);
  } else {
    $("#dob").removeClass("error");
    $("#dob-error-message").fadeOut(300);
  }
  if (occupation.length === 0) {
    $("#occupation").addClass("error");
    $("#occupation-error-message").fadeIn(300);
  } else {
    $("#occupation").removeClass("error");
    $("#occupation-error-message").fadeOut(300);
  }
});

// hamburger menu

$(".hamburger").on("click", function() {
  $(".sidebar").toggle("slow");
});

$(".close").on("click", function() {
  $(".sidebar").fadeOut("slow");
});
