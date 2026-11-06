// Accessibility Patch: Search Results Pagination

export function fixSearchPagination(searchResults) {

  // There can be multiple pagination components on a page, tho it is common to only see one, typically at the bottom of all search results. 
  
  // Fix: Remove title attributes from all "pagination-view-more" buttons. These are often redundant and read back twice to assistive technology. I recall asking product team to remove. 
  
  const viewMoreBtns = searchResults.querySelectorAll(".pagination-view-more");

  viewMoreBtns.forEach((btn) => {

    btn.removeAttribute("title");

  });

  const searchResultsPagination = searchResults.querySelectorAll(".pagination");

  searchResultsPagination.forEach((pagination) => {

    // Fix: Pagination(s) in Search Results should must have an accName so that they can be distinct amoung other navigational landmarks.

    if (!pagination.hasAttribute("aria-label")) {

      pagination.setAttribute("aria-label", labelPagination);

      // TODO: Add language support for "Pagination"

    }

    // Fix: Search Results pagination disabled button can be tabbed to (this is bad). To address this (along with console error being produced when focus is 
    // placed on an element with aria-hidden), we simply remove the href. Also removing rel and text as well.

    const paginationBtnDisabled = pagination.querySelector(".disabled");

    if (paginationBtnDisabled) {

      paginationBtnDisabled.removeAttribute("href");
      paginationBtnDisabled.removeAttribute("rel");
      paginationBtnDisabled.setAttribute("aria-disabled", "true");

      // Note: Ideally, it would be best to remove this element entirely with CSS, but this can break layout, so removing href is next best solution. 

    }

    // Fix: Remove superflous content hidden with label. This lable appears to be present to provide instructions to AT users, which is not really needed. 

    const labelInstructions = pagination.querySelector(".pagination-current-label b");

    if (labelInstructions) {

      labelInstructions.remove();
    
    }

    const paginationEvents = () => {

      // Fix: The "loading" announcement is now handled by fixSearchResults' mutation observer, which fires
      // on any search-results change (pagination included), so a separate message here would just double it up.

      // Observe the PARENT because #search-results may be replaced

      const parent = searchResults.parentElement;

      const searchResultsNavigation = new MutationObserver(() => {

        const getFirstLink = document.querySelector("#search-results a");

        // Note: The first mutation can land before the new results are in, so wait for a link rather than throwing on null.

        if (!getFirstLink) return;

        getFirstLink.focus();
        searchResultsNavigation.disconnect();

      });

      // Watch for ANY child changes under the parent. We need to do this because #search-results is replaced instead of it's contents being replaced. 

      searchResultsNavigation.observe(parent, { 

        childList: true, 
        subtree: true 

      });

    }

    const paginationBtns = pagination.querySelectorAll(".pagination-current, .pagination-page-jump, .prev, .next");

    paginationBtns.forEach((btn) => {

      // Fix: Guard so re-runs don't stack listeners. Stacked click listeners each spawned their own focus observer per click.

      if (btn.dataset.a11yPaginationBound === "1") return;

      btn.dataset.a11yPaginationBound = "1";

      btn.addEventListener("click", paginationEvents);

      // Input fields (".pagination-current") get Enter key support

      if (btn.matches(".pagination-current")) {
        
        btn.addEventListener("keydown", (event) => {
          
          if (event.key === "Enter") {
          
            paginationEvents();
          
          }
        
        });
      
      }

    });

    // Fix: The Next and Previous buttons should really read back as buttons and not links and trigger event with spacebar. 

    const paginationNextPrev = pagination.querySelectorAll(".prev, .next");

    paginationNextPrev.forEach((btn) => {

      btn.setAttribute("role", "button");

      // Fix: Guard so re-runs don't stack keydown listeners, which would fire btn.click() once per stacked listener.

      if (btn.dataset.a11yPaginationSpaceBound === "1") return;

      btn.dataset.a11yPaginationSpaceBound = "1";

      btn.addEventListener("keydown", (e) => {

        if (e.key === " " || e.key === "Spacebar") {

          e.preventDefault();
          btn.click();

        }

      });

    });

  });

}
