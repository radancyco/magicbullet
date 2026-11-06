import { formatMessage } from "./util-format-message.js";

// Accessibility Patch: Keyword Search Results

export function fixKeywordSearch(input) {

  // Fix: On the keyword input, change type from "search" to "text". Due to the native "X" beign weird cross-browser. 
  // Gret read here: https://adrianroselli.com/2019/07/ignore-typesearch.html

  input.setAttribute("type", "text");

  // Precompute IDs and frequently used elements

  var inputId = input.getAttribute("id");
  var popupID = inputId + "-auto-complete-popup";
  var popup = document.getElementById(popupID);

  if (!popup) return;

  // Fix: Let the user know that matching job links will appear below as they type.

  var autoCompleteID = document.getElementById("autocomplete-message-" + inputId);

  if (!autoCompleteID) {

    var autoCompleteMessage = document.createElement("span");
    autoCompleteMessage.setAttribute("id", "autocomplete-message-" + inputId);
    autoCompleteMessage.setAttribute("hidden", "");
    autoCompleteMessage.textContent = labelSearchKeywordDesc;
    input.parentNode.appendChild(autoCompleteMessage);

  }

  var currentDescribedBy = input.getAttribute("aria-describedby");
  var newDescriptionId = "autocomplete-message-" + inputId;

  if (currentDescribedBy) {

    if (!currentDescribedBy.includes(newDescriptionId)) {

      input.setAttribute("aria-describedby", currentDescribedBy + " " + newDescriptionId);

    }

  } else {

    input.setAttribute("aria-describedby", newDescriptionId);

  }

  // Fix: Turn the popup into a labelled region, and remove the bogus aria-expanded
  // from each heading (they're static labels here, not actual expandable disclosure triggers).
  // The popup can contain an unknown number of these (one per results grouping), so every
  // heading gets its own id and all of them are referenced together in aria-labelledby.
  // Pulled into its own function because the site's autocomplete script re-renders the popup's
  // markup (wiping these attributes) on every keystroke, so this needs to re-run on every
  // mutation via keywordObserver below, not just once here.

  function applyKeywordPopupLabel() {

    var popupHeadings = popup.querySelectorAll(".expandable-parent");

    if (!popupHeadings.length) return;

    var headingIds = "";

    popupHeadings.forEach(function(popupHeading, index) {

      var headingId = popupID + "__hdr-" + index;

      popupHeading.setAttribute("id", headingId);
      popupHeading.removeAttribute("aria-expanded");
      popupHeading.removeAttribute("tabindex");

      headingIds += (headingIds ? " " : "") + headingId;

    });

    popup.setAttribute("role", "region");
    popup.setAttribute("aria-labelledby", headingIds);

  }

  applyKeywordPopupLabel();

  // Fix: Guard against binding more than one observer to the same popup.

  if (popup.dataset.a11yKeywordObserverBound === "1") return;

  popup.dataset.a11yKeywordObserverBound = "1";

  // Fix: Always return focus to the input when Escape is pressed, even if focus had moved onto
  // a result link inside the popup (the keydown bubbles up from the link to popup either way).

  popup.addEventListener("keydown", function(event) {

    if (event.key !== "Escape") return;

    input.focus();

  });

  // Fix: Re-apply the heading/region labelling immediately on every popup mutation (rather than
  // waiting on the page-wide debounced patch cycle), and announce the result count via the shared
  // live region whenever the results change.

  var keywordObserver = new MutationObserver(function() {

    applyKeywordPopupLabel();

    clearTimeout(keywordObserver.timeout);

    keywordObserver.timeout = setTimeout(function() {

      var ariaMsg = document.querySelector("#magicbullet-message");

      if (!ariaMsg) return;

      var resultCount = popup.querySelectorAll("li").length;

      ariaMsg.textContent = resultCount > 0 ? formatMessage(labelSearchKeywordFoundMsg, { count: resultCount }) : labelSearchKeywordNotFoundMsg;

    }, 500);

  });

  keywordObserver.observe(popup, { childList: true, subtree: true });

}
