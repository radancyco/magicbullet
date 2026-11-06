// Accessibility Patch: Advanced Search Form 

export function fixAdvancedSearchForm() {

  var searchForm = document.querySelectorAll(".advanced-search-form");

  searchForm.forEach(function(form, i){

    form.setAttribute("role", "search"); // Fix: Add search role to form so that it becomes a seach landmark. 

    var formID = (i + 1); // Not used (yet).
    var searchFormFields = form.querySelector(".advanced-search-form-fields");

    if(searchFormFields) {

      // Fix: Remove aria-expanded from .advanced-search-form-fields.

      searchFormFields.removeAttribute("aria-expanded");

    }

  });

}
