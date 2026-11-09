// Accessibility Patch: Job Location

export function fixJobLocation() {

  // Fix: Job map links should really be buttons, not links. Including role="button" and spacebar key support for now for aria-pressed.
  // BaseGST: Unfortunately, the team cannot change these to buttons in GST, so this will need to be a product request.

  const mapButton = document.querySelectorAll(".job-map-nearby a");

  mapButton.forEach(function(btn){

    btn.setAttribute("role", "button");
    btn.setAttribute("aria-pressed", "false");

    btn.addEventListener("click", function(e) {

      mapButton.forEach(function(otherBtn) {

        e.preventDefault();
        otherBtn.setAttribute("aria-pressed", otherBtn === btn ? "true" : "false");

      });

    });

    btn.addEventListener("keydown", function(e) {

      if (e.key === " " || e.key === "Spacebar") {

        e.preventDefault();
        btn.click();

      }

    });

  });

  // Fix: Google Form Related Fixes on Job Location Pages

  const mapFormInputs = document.querySelectorAll(".job-map-directions input");

  // Clean-up: Remove aria-required from various elements. This attribute is sometimes flagged in automated testing and just the boolean required attribute is now recommended.
  // Clean-up: required="required" is XHTML serialization and may throw a11y validation issues if not set to blank or true.
  // Base GST: This issue has been addressed and can eventually be removed.
 
  mapFormInputs.forEach(function(element) {
    
    element.removeAttribute("aria-required");
    element.setAttribute("required", "");
  
  }); 

  // Fix: The address label on "Get Directions" form, requires a proper autocomplete. 

  const GetDirectionsAddress = document.querySelector(".job-map-directions input[name=saddr]");

  if(GetDirectionsAddress) {

    GetDirectionsAddress.setAttribute("autocomplete", "street-address");

  }

  // TODO: The "Search Nearby" and "Get Directions" sections should be regions with accNames. Maybe?
  // TODO: Include Wegmans functionality to skip over Google Map.

}
