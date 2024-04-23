// Issue: Older versions of slick that do not inlcude the accessibility flag, have several issues. We will fry to fix many of them here but recommend upgrading to AccessibleSlick.

var prevButtons = document.querySelectorAll(".slick-prev:not([aria-label])");

prevButtons.forEach(function(button) {

  button.setAttribute("aria-label", "Previous");

});

var nextButtons = document.querySelectorAll(".slick-next:not([aria-label])");

nextButtons.forEach(function(button) {

  button.setAttribute("aria-label", "Next");

});