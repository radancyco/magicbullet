// Accessibility Patch: Alt Attribute (Utility)

export function fixAltAttribute() {

  // Fix: Look for images on page that do not contain an alt attribute and add one dynamically.
  // Fix: Alt text with spaces in them are not ideal and even get picked up by certain linters as an issue. 

  var allImages = document.querySelectorAll("img");

  allImages.forEach(function(img){

    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {

      img.setAttribute("alt", "");
    }

  });

  // Fix: While we are here, we may as well remove the alt attribute mistakenly placed on the source element of the image module. 

  var allSource = document.querySelectorAll("source");

  allSource.forEach(function(source){

    source.removeAttribute("alt");
 
  });

}
