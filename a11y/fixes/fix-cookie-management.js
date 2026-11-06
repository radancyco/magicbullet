// Accessibility Patch: Cookie Management

export function fixCookieManagement() {

  // Fix: Remove aria-describedby="cookieDescriptionIdAttr" from each input element.
  // Note: To fix, have product add @ to input aria-describedby. See https://app.screencast.com/9dzk8ozq864Pc (Thanks Paul!)

  var cookieDescriptionIdAttr = document.querySelectorAll("input[aria-describedby='cookieDescriptionIdAttr']");

  cookieDescriptionIdAttr.forEach(function(input) {

    input.removeAttribute("aria-describedby"); 

  });

}
