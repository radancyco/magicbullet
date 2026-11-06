// Accessibility Patch: Search Filters

export function fixSearchFilters(searchFilters) {

  // TODO: After an ajax filter update, the site rebuilds the whole filter list and refocuses the checkbox
  // by matching id, but it's a brand-new DOM node. Screen readers treat that as a fresh focus target and
  // re-announce its full role/name/state, on top of the state change the user already heard from their own
  // click. Not fixable from this patch since focus events aren't cancelable and the node is already destroyed
  // by the time we run — needs the filter widget to patch its ajax response into the existing DOM instead of
  // replacing it, so the focused checkbox's node identity (and focus) is preserved across the refresh.
  // In short, ask the Sites Team why we need to reload filters at all and not just the content that is changing,
  // so thaat focus is never removed and repplied in filters.  
  // This is a long standing issue with the site, likely there from the very beginning.

  if (searchFilters) {

    // Fix: Add role and accName to Search Filter section. 
    // TODO: Add langauge support.
    
    searchFilters.setAttribute("role", "region");
    searchFilters.setAttribute("aria-label", "Search Filter");

    // TODO: It would be great if we could use aria-labelledby instead of aria-label as accName for region so that we would not requre custom translation, but heading has no distinct class to leverage. Look into adding unique ID to h2 instead maybe?

    // Fix: Each section element (`.expandable`) should contain a role of "group" as well as an accName. We will need to add an ID to each button for aria-labelledby.

    const sectionElement = searchFilters.querySelectorAll(".expandable");

    sectionElement.forEach((section) => {

      const sectionButtonID = section.querySelector(".expandable-parent").getAttribute("id");

      section.setAttribute("role", "group");
      section.setAttribute("aria-labelledby", sectionButtonID);

    });

    // Refined Search

    const refinedSearch = searchFilters.querySelector("#refined-search");

    if (refinedSearch) {

      const keyWordInput = refinedSearch.querySelector("#keyword-tag");
      const keywordError = refinedSearch.querySelector(".keyword-tag-error");

      // Fix: Add unique ID to error message and reference ID on input. When focus placed here, message will be read to AT. 

      keywordError.setAttribute("id", "keyword-error-msg");
      keyWordInput.setAttribute("aria-describedby", "keyword-error-msg");

      // Fix: Always place focus on input when error is visible

      const keyWordVisibility = keywordError.getAttribute("aria-hidden");

      if (keyWordVisibility === "false") {

        keyWordInput.focus();

      } 

      // Fix: Remove junk from error message

      keywordError.removeAttribute("aria-expanded");
      keywordError.removeAttribute("style");

    }

  }

}
