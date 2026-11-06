// Accessibility Patch: Header (Utility) - Fixes common issues in header. 

export function fixHeader() {

  // Fix: See if nav in header is missing an accName. Note: Might be issue for a header with two navs. 

  var headerNavigation = document.querySelector("header nav");

  if(headerNavigation) {

    if (!headerNavigation.hasAttribute("aria-label")) {

      headerNavigation.setAttribute("aria-label", labelPrimaryNavigation);

    }

  }

}
