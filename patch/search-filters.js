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

    // Fix: Add role and accName to Search Filter section. Role is "region" on large viewports and "dialog" on small
    // viewports, where the section becomes a slideout panel. See bindFilterDialog() below.
    // TODO: Add langauge support.

    bindFilterDialog(searchFilters);

    searchFilters.setAttribute("aria-label", "Search Filter"); // TODO: Translate this label for different languages.

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

// Small Viewport: Search Filter Dialog
// Desc: Below the site's breakpoint, the platform (FilterSlideOut in tb-corepack.js) turns #search-filters into a slideout
// panel opened by #filter-slideout-toggle. It looks and acts like a modal dialog, but has none of the markup or behavior.
// The platform adds the toggle only on small viewports and removes it on large ones, so the toggle being present is our
// signal that we're in the small viewport experience.
// Already handled by the platform, so not repeated here: focus returns to the toggle when closed. The platform also calls
// focus() on the panel when opened; observeFilterDialog() redirects that to the first interactive item.
// Note: Every checkbox change triggers an ajax refresh that replaces #search-filters, #search-results and the toggle, then
// reopens the panel. The sitewide observer only picks up replaced components after 1s, which is too late (the platform
// focuses the new panel ~200ms after reopening), so the dialog state is kept in sync by its own observer, which reacts
// immediately.

const filterDialogInertMarker = "data-magicbullet-inert";

let filterDialogObserver = null;
let filterDialogParent = null;

function bindFilterDialog(searchFilters) {

  syncFilterDialog();

  const parent = searchFilters.parentNode;

  if (!parent || parent === filterDialogParent) return;

  if (filterDialogObserver) {

    filterDialogObserver.disconnect();

  } else {

    // Watches the section's parent for the section being replaced (ajax refresh), and the section itself for being
    // opened, closed, shown or hidden (open class, style and aria-hidden are all set by the platform).

    filterDialogObserver = new MutationObserver(function() {

      observeFilterDialog();

      syncFilterDialog();

    });

    // Fix: Escape closes the dialog. Clicking the platform's own close button keeps its cookie and focus return in step.

    document.addEventListener("keydown", function(event) {

      if (event.key !== "Escape" || !isFilterDialogOpen()) return;

      const closeButton = document.getElementById("filter-close-toggle");

      if (closeButton) {

        event.preventDefault();

        closeButton.click();

      }

    });

  }

  filterDialogParent = parent;

  filterDialogObserver.observe(parent, { childList: true });

  observeFilterDialog();

}

function observeFilterDialog() {

  const searchFilters = document.getElementById("search-filters");

  if (!searchFilters || searchFilters.magicBulletDialogObserved) return;

  searchFilters.magicBulletDialogObserved = true;

  filterDialogObserver.observe(searchFilters, { attributes: true, attributeFilter: ["class", "style", "aria-hidden"] });

  // Fix: The platform calls focus() on the panel ~200ms after opening it. Overriding the element's own focus() catches that call
  // before focus moves (the platform's jQuery trigger("focus") calls it), so we can decide where focus actually goes:
  //   - Focus already inside the panel: do nothing. After each ajax refresh, the site puts focus back on the checkbox the user
  //     pressed (~100ms), then the platform reopens the panel and calls focus() (~200ms), which would pull focus off that checkbox.
  //   - Otherwise (opened from the toggle): focus the first interactive item instead of the panel itself. That's the refined
  //     search input (#keyword-tag) when present, else the first button (the Close button aside, which now comes first).

  searchFilters.focus = function(options) {

    const activeElement = document.activeElement;

    if (activeElement !== searchFilters && searchFilters.contains(activeElement)) return;

    const firstControl = getFirstFilterControl(searchFilters);

    if (firstControl) {

      firstControl.focus(options);

    }

  };

}

function getFirstFilterControl(searchFilters) {

  const candidates = [

    searchFilters.querySelector("#keyword-tag"),
    ...searchFilters.querySelectorAll("button:not(#filter-close-toggle):not([disabled])")

  ];

  return candidates.find(function(control) {

    return control && control.getClientRects().length > 0;

  });

}

function isFilterDialogOpen() {

  const searchFilters = document.getElementById("search-filters");

  return !!(searchFilters && document.getElementById("filter-slideout-toggle") && searchFilters.classList.contains("open"));

}

function syncFilterDialog() {

  const searchFilters = document.getElementById("search-filters");
  const filterToggle = document.getElementById("filter-slideout-toggle");

  if (!searchFilters) return;

  if (filterToggle) {

    // Fix: Small viewport. Toggle tells AT it opens a dialog, and the section gets dialog semantics.

    filterToggle.setAttribute("aria-haspopup", "dialog");

    searchFilters.setAttribute("role", "dialog");
    searchFilters.setAttribute("aria-modal", "true");

    // Fix: The platform appends the Close button to the end of the panel, and site CSS often shows it at the top (e.g. 3M uses
    // order: -1 on a flex column). Move it to the start of the panel so keyboard and screen reader order match the screen.

    const closeButton = searchFilters.querySelector("#filter-close-toggle");

    if (closeButton) {

      if (searchFilters.firstElementChild !== closeButton) {

        searchFilters.prepend(closeButton);

      }

      // Fix: The platform binds a blur handler to the Close button that focuses the panel, as a makeshift focus trap. With inert
      // doing the trapping, it only gets in the way: clicking any other control while Close has focus yanks focus to the first
      // control and the click is lost, and Shift+Tab from Close jumps forward. Remove it (jQuery-bound, so off() is the only way).

      if (window.jQuery) {

        window.jQuery(closeButton).off("blur");

      }

    }

  } else {

    // Fix: Large viewport. Filters sit inline with the results, so they're a region, not a dialog.

    searchFilters.setAttribute("role", "region");
    searchFilters.removeAttribute("aria-modal");

  }

  // Fix: Trap focus while open by making everything outside the dialog inert.

  if (isFilterDialogOpen()) {

    setFilterDialogInert(searchFilters);

  } else {

    clearFilterDialogInert();

  }

}

// The section can't be moved to <body> (the platform's script and CSS expect it where it is), so instead of inerting body's
// other children, walk up from the section and inert the siblings at every level. Runs again after each ajax refresh, so
// replaced content (e.g. a new #search-results) is inerted too. Elements the site already made inert are left alone, and
// MagicBullet's live region stays live so result counts are still announced.

function setFilterDialogInert(searchFilters) {

  let node = searchFilters;

  while (node.parentElement && node !== document.body) {

    Array.from(node.parentElement.children).forEach(function(sibling) {

      if (sibling === node || sibling.inert || sibling.id === "magicbullet-message") return;

      sibling.inert = true;
      sibling.setAttribute(filterDialogInertMarker, "");

    });

    node = node.parentElement;

  }

}

function clearFilterDialogInert() {

  document.querySelectorAll("[" + filterDialogInertMarker + "]").forEach(function(element) {

    element.inert = false;
    element.removeAttribute(filterDialogInertMarker);

  });

}
