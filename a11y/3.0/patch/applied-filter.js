import { labelRemoveFilter } from "../language-pack.js";

// Accessibility Patch: Applied Filter

export function fixAppliedFilter(filter) {

  const appliedFiltersList = filter.querySelectorAll("ul[aria-labelledby]");
  const btnSearchFilter = filter.querySelectorAll(".filter-button:not([disabled]), .applied-filters__btn");

  // Fix: Remove aria-labeledby from UL

  appliedFiltersList.forEach(function(list){

    list.removeAttribute("aria-labelledby");

  });

  // Fix: Remove aria-hidden and aria-expanded and add aria-describedby and role to parent element (.search-results-option)
  // TODO: Regarding aria-labelledby on section wrapper, see if contextual support good enough here.
  // If it is, then we may be able to remove aria-labelledby and region role entirely. See https://www.w3.org/WAI/WCAG22/Techniques/html/H81

  filter.removeAttribute("aria-hidden");
  filter.removeAttribute("aria-expanded");
  filter.setAttribute("aria-labelledby", "applied-filters-label");
  filter.setAttribute("role", "group");

  // Fix: Add aria-label to each button that is not disabled. Include a better label that helps identify the functionality of the button.
  // BUG: When disabled filter button is present and last filter button is pressed, focus is placed on checkbox in filter section.

  btnSearchFilter.forEach(function(btn){

    btn.setAttribute("aria-label", labelRemoveFilter + " (" + btn.textContent + ")");

  });

}
