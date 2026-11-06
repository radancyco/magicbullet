// Accessibility Patch: Job Map
// Wxample: https://greatclips-refresh-1.runmytests.com/jobs-map 

export function fixJobMap() {

  var jobMapInputs = document.querySelectorAll("#sel-state, #tbx-zip");
  var jobMapCityWrapper = document.querySelector("#wrapper-sel-city");

  if (jobMapInputs.length && jobMapCityWrapper) {

    // Since the select is blank on page load, it should not be shown until action taken in either the state or zip dropdowns.

    jobMapCityWrapper.setAttribute("hidden", "");

    jobMapInputs.forEach(function(input) {

      input.addEventListener("change", function() {

        jobMapCityWrapper.removeAttribute("hidden");

      });

    });

  }

}
