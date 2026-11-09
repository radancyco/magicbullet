import { formatMessage } from "../util/format-message.js";
import { preserveScrollPosition } from "../util/preserve-scroll-position.js";
import { labelResultsSorted } from "../language-pack.js";

// Accessibility Patch: Search Results Sort
// Desc: Sorting reorders existing results without changing the count, so fixSearchResults' change detection
// won't catch it. Announce the new sort order directly off the select's change event instead.

export function fixSearchSort(sortSelect) {

  if (sortSelect.dataset.a11ySortBound === "1") return;

  sortSelect.dataset.a11ySortBound = "1";

  sortSelect.addEventListener("change", function() {

    // Fix: Re-sorting is an in-place data refresh, not a navigation. The site's own script
    // runs a jQuery .animate({scrollTop}) once the reorder completes, visibly relocating the
    // user down the page.

    preserveScrollPosition();

    const ariaMsg = document.querySelector("#magicbullet-message");

    if (!ariaMsg) return;

    const selectedLabel = sortSelect.options[sortSelect.selectedIndex].text;

    // Wait for the reorder to actually finish rendering before announcing.

    setTimeout(function() {

      ariaMsg.textContent = formatMessage(labelResultsSorted, { label: selectedLabel });

    }, 1000);

  });

}
