/* eslint-disable no-undef */
// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var displayYearElement = document.querySelector("#displayYear");
  if (displayYearElement) {
    displayYearElement.innerHTML = currentYear;
  }
}
getYear();

// nice select
$(document).ready(function () {
  $("select").niceSelect;
});

// date picker
$(function () {
  var dateInput = $("#inputDate");
  if (dateInput.length) {
    dateInput
      .datepicker({
        autoclose: true,
        todayHighlight: true,
      })
      .datepicker("update", new Date());
  }
});

// owl carousel slider js
$(document).ready(function () {
  var teamCarousel = $(".team_carousel");
  if (teamCarousel.length) {
    teamCarousel.owlCarousel({
      loop: true,
      margin: 15,
      dots: true,
      autoplay: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }
});
