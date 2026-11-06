import { formatMessage } from "../util/format-message.js";

// Accessibility Patch: Search Results

export function fixSearchResults(searchResultsContainer) {

  // Fix: Remove skip links from search results page. These are no longer needed. 

  const searchResultsSkip = document.querySelectorAll(".access-link[href='#search-results-list'], .access-link[href='#search-filters']");

  searchResultsSkip.forEach(function(link){

    link.remove();

  });

  // Fix: Let user know how many results are now present on page, after an update:

  // Note: #search-results itself may be replaced wholesale on update, so we observe and flag the parent, which persists.
  // Fix: This runs again for each replacement #search-results that bindComponents() finds. Guarding the parent here
  // prevents a new observer from stacking up on top of previous ones each time, which was causing the aria message
  // to be set multiple times by multiple stale observers racing each other.

  const searchResultsParent = searchResultsContainer.parentNode;

  if (searchResultsParent.dataset.a11yResultsObserverBound === "1") return;

  searchResultsParent.dataset.a11yResultsObserverBound = "1";

  // Fix: The observer fires on any mutation nearby, including incidental DOM settling right after page load,
  // not just real filter/pagination updates. Track the last known result state and only announce when it
  // actually changes, so that noise doesn't trigger a false announcement.

  // Fix: Templates vary the markup around results (list, table, extra header rows, etc.), so counting
  // "#search-results-list > ul > li" breaks whenever a site's markup doesn't match that exact shape
  // (e.g. a header row ul sitting alongside the results ul). Each job link reliably carries
  // data-job-id regardless of the surrounding markup, so count those instead.

  const getResultState = function(container) {

    return container.dataset.totalResults + ":" + container.querySelectorAll("#search-results-list a[data-job-id]").length;

  };

  let lastAnnouncedState = getResultState(searchResultsContainer);

  // Fix: The mutations right after binding are just the page settling on initial load, not a real
  // filter/sort/pagination update, so the "loading" message shouldn't fire for them. Stay in this
  // initial state until the first debounce burst quiets down, then allow the loading message from then on.

  let isInitialSettle = true;

  const searchResultsObserver = new MutationObserver(() => {

    // Fix: Re-query both elements fresh each time, rather than relying on references captured at setup time,
    // in case #search-results was replaced since this observer was created.

    const ariaMsg = document.querySelector("#magicbullet-message");
    const currentContainer = document.querySelector("#search-results");

    if (!ariaMsg || !currentContainer) return;

    // Fix: Give screen reader users immediate feedback that an update is underway, rather than silence
    // during the debounce below. Only announce it on the first mutation of a burst (i.e. no debounce
    // already pending), so it isn't re-announced on every incidental mutation while the DOM settles.

    if (!isInitialSettle && !searchResultsObserver.timeout) {

      ariaMsg.textContent = labelLoadingMsg;

    }

    clearTimeout(searchResultsObserver.timeout);

    searchResultsObserver.timeout = setTimeout(function() {

      searchResultsObserver.timeout = null;
      isInitialSettle = false;

      const newState = getResultState(currentContainer);

      if (newState === lastAnnouncedState) return;

      lastAnnouncedState = newState;

      const searchResultTotal = currentContainer.dataset.totalJobResults;
      const searchResultCount = currentContainer.querySelectorAll("#search-results-list a[data-job-id]").length;
      ariaMsg.textContent = formatMessage(labelResultsAvailable, { count: searchResultCount, total: searchResultTotal });

    }, 1000);

  });

  searchResultsObserver.observe(searchResultsParent, {childList: true, subtree: true});

}
