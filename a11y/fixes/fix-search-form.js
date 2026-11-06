// Accessibility Patch: Search Form

export function fixSearchForm() {

  var searchForm = document.querySelectorAll(".search-form");

  searchForm.forEach(function(form, i){

    var formID = (i + 1);
    var searchFormLegend = form.querySelector(".job-search-legend");
    var searchFormFields = form.querySelector(".search-form-fields, .search-form__fields");
    var searchFormLocationInput = form.querySelector(".search-location");
    var searchFormLocationPin = form.querySelector(".location-pin");
    var searchFormLocationError = form.querySelector(".search-location-error, .search-form__location-error");
    var searchFormSubmit = form.querySelector("button, .search-form__search-btn");

    // Shared Function(s)

    function accessibleValidation() {

      setTimeout(function() {

        searchFormLocationError.removeAttribute("tabindex");

        var ariaHiddenHook = searchFormLocationError.getAttribute("aria-hidden");

          if(ariaHiddenHook === "false") {

            searchFormLocationInput.setAttribute("aria-invalid", "true");
            searchFormLocationInput.focus();

          } else { 

            searchFormLocationInput.setAttribute("aria-invalid", "false");

          }

      }, 100);

    }

    // Fix: Our primary search form should include a distinct role so that it can aid in helping assistive technology users navigate the page, so adding role="search"

    form.setAttribute("role", "search");

    if(searchFormFields) {

      // Fix: Our primary search form should provide a better group description for the fields at hand. This can be achieved by adding a div with a class of "job-search-legend" (a heading should not be used) and the following script will take care of adding any needed associations by either adding aria-describedby or aria-label, with appropriate IDs.
    
      searchFormFields.setAttribute("role", "group");

      // Fix: Remove aria-expanded from .search-form-fields. 

      searchFormFields.removeAttribute("aria-expanded");

    }

    if(searchFormLegend) {

      // Think of this as a fieldset and legend element.

      searchFormFields.setAttribute("aria-labelledby", "job-search-legend-" + formID);
      searchFormLegend.setAttribute("id", "job-search-legend-" + formID);

    } else {

      // If the class (.job-search-legend) is not present then simply add a label of "Search Jobs" to the div wrapping the form elements (.search-form-fields)

      if(searchFormFields) {
      
        searchFormFields.setAttribute("aria-label", labelSearchJobs);

      }

    }

    // Fix: The way in which the validation is currently handled requires improvement to aid those using assistive technology and keyboard. Here we need to include aria-invalid and aria-describedby to the locations field and apply custom validation as well, so that keyboard users do not need to tab backwards to return to the locations field, which is initiating the error.

    if(searchFormLocationInput) {

      // Add aria-describedby and aria-invalid to the locations field. 

      searchFormLocationInput.setAttribute("aria-describedby", "search-error-" + formID);
      searchFormLocationInput.setAttribute("aria-invalid", "false");

      // Validate the locations field when change is made to it.

      searchFormLocationInput.addEventListener("change", function() {

        accessibleValidation();
  
      });

    }

    // Fix: Apply a unique ID to the error message. This is what locations field will read when focus is brought back to it, thanks to aria-describedby.

    if(searchFormLocationError) {

      searchFormLocationError.setAttribute("id", "search-error-" + formID);

    }

    // Fix: When search button is pressed, fire off custom validation. 

    searchFormSubmit.addEventListener("click", function() {

      accessibleValidation();

    });

    // Fix: Remove aria-hidden from the location pin. Often this is visually displayed, but aria-hidden is still present.
    // We need to check the visability of the elmn before removing aria-hidden so it does not render on screen if featrue not activated in admin. 

    if(searchFormLocationPin && window.getComputedStyle(searchFormLocationPin).display !== "none") {

      searchFormLocationPin.removeAttribute("aria-hidden");

    }

  });

}
