// Accessibility Patch: Global Disclosure

export function fixGlobalDisclosure() {

  var expandableParentBtn = document.querySelectorAll(".expandable-parent");

  expandableParentBtn.forEach(function(button) {

    // Note: Skip the keyword autocomplete popup's group headings. They reuse .expandable-parent but are static labels,
    // and fixKeywordSearch() strips their aria-expanded. Now that the two fixes run on separate observers (no longer in a
    // fixed order), this one could otherwise re-add aria-expanded after fixKeywordSearch() removed it.

    if (button.closest("[id$='-auto-complete-popup']")) return;

    // Fix: See if element is already open, set aria-expanded state to true if it is.

    if(button.classList.contains("expandable-child-open")) {

      button.setAttribute("aria-expanded", "true");
  
    } else {

      button.setAttribute("aria-expanded", "false");

    }

    // Fix: Remove aria-expanded from adjacent, non-interactive element.
  
    if (button.nextElementSibling) {
  
      button.nextElementSibling.removeAttribute("aria-expanded");
      button.nextElementSibling.removeAttribute("aria-hidden");

      // TODO: Instead of targeting nextElementSibling, go to parent element and querySelector(".search-filter-list"). 
      // Then we can move the aria-labelledby and role on the section element down to it's own div below the button. 
      // Great Clips brought this up recently and it is good point. See https://hub.accessible360.com/issues/454261/edit#comment-801093 
      // See note.txt
  
    }

    // Fix: New toggle functionality for newly added aria-expanded attribute.
    // Fix: Guard so the sitewide re-runs don't stack a new click listener on the same button each time.

    if (button.dataset.a11yDisclosureBound === "1") return;

    button.dataset.a11yDisclosureBound = "1";

    button.addEventListener("click", function() {

      if(this.classList.contains("expandable-child-open")) {

        this.setAttribute("aria-expanded", "true");

      } else { 

        this.setAttribute("aria-expanded", "false");

      }

      // Fix: Remove aria-expanded, aria-hidden being added to adjacent, non-interactive element, by CS Core.

      if (this.nextElementSibling) {

        this.nextElementSibling.removeAttribute("aria-expanded");
        this.nextElementSibling.removeAttribute("aria-hidden");

      }

    });

  });

}
