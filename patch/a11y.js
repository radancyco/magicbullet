// Accessibility Patch: Fix A11y
// Description: This is a global function that addresses sitewide accessibility.

// TODO: Rename this module. 

export function fixA11y() {

  // Add Tabindex to main for max support. 

  const mainContent = document.querySelector("#content");

  if (mainContent) {
  
    mainContent.setAttribute("tabindex", "-1"); 
  
  }

}
