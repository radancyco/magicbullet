import { labelViewSavedJobs } from "../lang.js";

// Accessibility Patch: Saved Jobs Link
// Desc: Adds additional information to the Saved Jobs link based on whether any jobs have been saved. This additional text will better serve AT users.
// Note: Previously part of fixSaveJobButton(), which created a new observer on every run. Now registered in initComponentPatch(),
// which observes the job list's parent (including data-recently-viewed-jobs changes) and re-runs this with no debounce.

export function fixSavedJobsLink(recentlyViewedJobList) {

  const savedJobsLink = "a";

  const isActive = recentlyViewedJobList.getAttribute("data-recently-viewed-jobs") === "true";

  const link = recentlyViewedJobList.closest(savedJobsLink) || recentlyViewedJobList.querySelector(savedJobsLink);

  if (!link) return;

  let labelText = link.textContent.trim();

  const numberMatch = labelText.match(/\p{Nd}+/u);

  let number = null;

  if (numberMatch) {

    number = numberMatch[0];

    // Use a regex to remove the first occurrence of that number safely

    labelText = labelText.replace(new RegExp(number), "").trim();

  }

  const savedJobsLabel = number ? `${number} ${labelText} (${labelViewSavedJobs})` : `${labelText} (View all)`;

  if (isActive) {

    link.setAttribute("aria-label", savedJobsLabel);

  } else {

    link.removeAttribute("aria-label");

  }

}
