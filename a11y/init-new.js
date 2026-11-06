/*!

  Radancy MagicBullet: Accessibility Patch

  Contributor(s):
  Michael "Spell" Spellacy

*/

/* TODO

1. Add new fix for keyword autocomplete. See https://dwhite-rds.runmytests.com/documentation#section-auto-complete 
   Similar was implemented on Intuit some time ago. Will probably not use, except for refrence. See https://tbadmin.radancy.net/sassjs/updatejavascript/27595/27595/70305

*/ 

// Note: Load this file with <script type="module">. Each fix lives in ./patch/ and each utility in ./util/.

import { loadA11yPatch } from "./util/load-a11y-patch.js";
import { observeComponent, bindComponents } from "./util/observe-component.js";
import { runSafely } from "./util/run-safely.js";

import { fixA11y } from "./patch/a11y.js";
import { fixAdvancedSearchForm } from "./patch/advanced-search-form.js";
import { fixAltAttribute } from "./patch/alt-attribute.js";
import { fixAppliedFilter } from "./patch/applied-filter.js";
import { fixCookieManagement } from "./patch/cookie-management.js";
import { fixCMS } from "./patch/cms.js";
import { fixDataForm } from "./patch/data-form.js";
import { fixGlobalDisclosure } from "./patch/global-disclosure.js";
import { fixIframeElement } from "./patch/iframe-element.js";
import { fixKeywordSearch } from "./patch/keyword-search.js";
import { fixInputElements } from "./patch/input-elements.js";
import { fixMindReaderInput } from "./patch/mind-reader-input.js";
import { fixMindReaderList } from "./patch/mind-reader-list.js";
import { fixHeader } from "./patch/header.js";
import { fixJobDescription } from "./patch/job-description.js";
import { fixJobLocation } from "./patch/job-location.js";
import { fixJobMap } from "./patch/job-map.js";
import { fixSaveJobButton } from "./patch/save-job-button.js";
import { fixSavedJobsLink } from "./patch/saved-jobs-link.js";
import { fixSearchForm } from "./patch/search-form.js";
import { fixSearchFilters } from "./patch/search-filters.js";
import { fixSearchResults } from "./patch/search-results.js";
import { fixSearchSort } from "./patch/search-sort.js";
import { fixSearchPagination } from "./patch/search-pagination.js";
import { fixSitemap } from "./patch/sitemap.js";
import { fixSocialShare } from "./patch/social-share.js";
import { fixPrivacyNotice } from "./patch/privacy-notice.js";
// import { fixJobList } from "./patch/job-list.js"; // Retired, see file.

// Load the QA language pack on test domains, else the production one. Same domain check as the root init.js loader.

const hostName = location.hostname.substring(location.hostname.indexOf(".") + 1);

const testPaths = hostName === "runmytests.com" || hostName === "runmytests.eu" || hostName === "talentbrew.com" || hostName === "tmpqa.com";

var languagePackSrc;

if (testPaths) {

  languagePackSrc = "https://radancy.dev/magicbullet/language-pack.js";

} else {

  languagePackSrc = "https://services.tmpwebeng.com/magicbullet/language-pack.js";

}

loadA11yPatch(languagePackSrc, function(){

  console.log("%cMagicBullet: A11y%cv2.0.5", "background: #2d2d2d; color: #fff; padding: 6px 10px; border-radius: 16px 0 0 16px; font-weight: 600;" , "background: #6e00ee; color: #fff; padding: 6px 10px; border-radius: 0 16px 16px 0; font-weight: 600;");

  var a11yBody = document.body;

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magicbullet-a11y");

  // Add global aria-live to pass messages to when needed.

  let globalA11yMessage = document.querySelector("#magicbullet-message");

  if(!globalA11yMessage) {

    let a11yMessage = document.createElement("div");
  
    a11yMessage.classList.add("magicbullet-visually-hidden");
    a11yMessage.setAttribute("id", "magicbullet-message");
    a11yMessage.setAttribute("aria-live", "polite");
    a11yBody.append(a11yMessage);

  }

  // Architecture: Each component fix owns a MutationObserver scoped to its own container (see initComponentPatch()
  // and observeComponent()), so a change in one component only re-runs that component's fix. The one page-wide
  // observer below handles the two jobs that have no single container: running the sitewide fixes (images, iframes,
  // checkboxes, disclosures, save job buttons) and discovering component containers added or replaced after load.

  var targetNode = document.querySelector("#page") || document.body;

  var config = { childList: true, subtree: true };

  // Note: The first mutation disconnects the observer and schedules one run after the burst settles. No clearTimeout is
  // needed: the callback can't fire again until the timer has run and reconnected the observer. Mutations made while
  // disconnected are still covered, since the run scans the whole page.

  var sitewideObserver = new MutationObserver(function() {

    sitewideObserver.disconnect();

    setTimeout(function() {

      initDynamicPatch();

      bindComponents();

      sitewideObserver.observe(targetNode, config);

    }, 1000);

  });

  initStaticPatch();

  initDynamicPatch();

  initComponentPatch();

  sitewideObserver.observe(targetNode, config);

});

// Accessibility Patch: Dynamic (Sitewide)
// Desc: These fixes target elements that can appear anywhere on the page, with no single container to observe.
// They run on page load and again whenever the sitewide observer sees a change under #page.

function initDynamicPatch() {

  runSafely(fixAltAttribute);
  runSafely(fixGlobalDisclosure);
  runSafely(fixIframeElement);
  runSafely(fixInputElements);
  runSafely(fixSaveJobButton);

  console.log("%cMagicBullet: A11y%cDynamic Scripts \u2714", "background: #2d2d2d; color: #fff; padding: 6px 10px; border-radius: 16px 0 0 16px; font-weight: 600;" , "background: #228B22; color: #fff; padding: 6px 10px; border-radius: 0 16px 16px 0; font-weight: 600;");

}

// Accessibility Patch: Dynamic (Components)
// Desc: These fixes each target a specific component. Each component instance is fixed once when found, then
// re-fixed by its own observer whenever its container changes. See observeComponent() for the options.

function initComponentPatch() {

  observeComponent(".search-results-options", fixAppliedFilter);
  observeComponent(".data-form", fixDataForm);

  // Note: Observing the input's form so the fix re-runs if the autocomplete popup is added after load.
  // The popup's own contents are watched by the dedicated keywordObserver inside fixKeywordSearch().

  observeComponent(".search-keyword", fixKeywordSearch, { target: function(input) { return input.form || input.parentNode; } });
  observeComponent("input.search-location, input.keyword-category, input.keyword-location, input.keyword-facet", fixMindReaderInput, { target: function(input) { return input.form || input.parentNode; } });

  // Note: The list fix runs immediately (no debounce) so roles and IDs are on the options before the user arrows through them.

  observeComponent(".mindreader-status, #wrapper-sel-city", fixMindReaderList, { debounce: 0 });
  observeComponent("#system-imessage", fixPrivacyNotice);
  observeComponent("[data-selector-name=recentlyviewedjoblist]", fixSavedJobsLink, {

    target: function(jobList) { return jobList.parentNode; },
    config: { childList: true, subtree: true, attributes: true, attributeFilter: ["data-recently-viewed-jobs"] },
    debounce: 0

  });

  observeComponent("#search-filters", fixSearchFilters);

  // Note: #search-results is replaced wholesale on update, so these observe its parent. fixSearchResults and fixSearchSort
  // only bind once per component (they manage their own observer/listener), so they don't need a re-run observer.

  observeComponent("#search-results", fixSearchResults, { observe: false });
  observeComponent("select[data-search-results-sort-enhanced='true']", fixSearchSort, { observe: false });
  observeComponent("#search-results", fixSearchPagination, { target: function(searchResults) { return searchResults.parentNode; } });

  bindComponents();

  console.log("%cMagicBullet: A11y%cComponent Scripts ✔", "background: #2d2d2d; color: #fff; padding: 6px 10px; border-radius: 16px 0 0 16px; font-weight: 600;" , "background: #228B22; color: #fff; padding: 6px 10px; border-radius: 0 16px 16px 0; font-weight: 600;");

}

// Accessibility Patch: Static
// Desc: These fixes address issues that occur on page load only.

function initStaticPatch() {

  runSafely(fixA11y);
  runSafely(fixAdvancedSearchForm);
  runSafely(fixCookieManagement);
  runSafely(fixCMS);
  runSafely(fixHeader);
  runSafely(fixJobDescription);
  // fixJobList();
  runSafely(fixJobLocation); 
  runSafely(fixJobMap);
  runSafely(fixSearchForm);
  runSafely(fixSitemap);
  runSafely(fixSocialShare);

  console.log("%cMagicBullet: A11y%cStatic Scripts \u2714", "background: #2d2d2d; color: #fff; padding: 6px 10px; border-radius: 16px 0 0 16px; font-weight: 600;" , "background: #228B22; color: #fff; padding: 6px 10px; border-radius: 0 16px 16px 0; font-weight: 600;");

}
