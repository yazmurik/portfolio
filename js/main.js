//Navigation bar show and hide
$(function () {
  //calling function on windows load
  showHideNav();

  $(window).scroll(function () {
    //calling function on scroll
    showHideNav();
  });

  //function for navbar on scrolling
  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("bg-dark");
      $("nav").addClass("border-nav");

      //back to top button
      $(".btn-back-top").fadeIn();
    } else {
      $("nav").removeClass("bg-dark");
      $("nav").removeClass("border-nav");

      //back to top button
      $(".btn-back-top").fadeOut();
    }
  }
});

//scroll spy
$("body").scrollspy({ target: "#main-nav" });

//smooth scrolling
$(".smooth-scroll").on("click", function (e) {
  e.preventDefault();

  let hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    800,
    function () {
      window.location.hash = hash;
    }
  );
});

//to get the current year
$("#year").text(new Date().getFullYear());
