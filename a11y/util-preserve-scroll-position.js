// Accessibility Patch: Preserve Scroll Position (Utility)
// Desc: Some site scripts run a jQuery .animate({scrollTop}) after an in-place data refresh
// (sort, filter, pagination, etc.), visibly relocating the user even though nothing navigated.
// Call this right before triggering that refresh (e.g. at the top of a "change"/"click" handler)
// to snap back to the current scroll position the instant such a scroll starts, cancelling the
// site's animation via jQuery's own .stop() rather than fighting it frame by frame.

export function preserveScrollPosition(timeoutMs) {

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  const cancelUnwantedScroll = function() {

    if (window.scrollX === scrollX && window.scrollY === scrollY) return;

    window.removeEventListener("scroll", cancelUnwantedScroll);

    if (window.jQuery) {

      window.jQuery("html, body").stop(true, false);

    }

    window.scrollTo(scrollX, scrollY);

  };

  window.addEventListener("scroll", cancelUnwantedScroll, { passive: true });

  setTimeout(function() {

    window.removeEventListener("scroll", cancelUnwantedScroll);

  }, timeoutMs || 3000); // Safety net in case the expected scroll never happens.

}
