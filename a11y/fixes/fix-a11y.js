// Accessibility Patch: Fix A11y
// Description: This is a global function that addresses sitewide accessibility.

export function fixA11y() {

  // Add Tabindex to main for max support. 

  const mainContent = document.querySelector("#content");

  if (mainContent) {
  
    // mainContent.setAttribute("tabindex", "-1"); removing for now because the search filters appear to break when present. 
    // roll an eventual fix on this that removes the 
  
  }

}
