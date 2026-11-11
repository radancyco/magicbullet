import { labelSaveJob } from "../lang.js";

// Accessibility Patch: Save Job Button 

export function fixSaveJobButton() {

  const btnSaveJobs = document.querySelectorAll(".js-save-job-btn");

  btnSaveJobs.forEach((btn) => {

    // Fix: Custom label needed to override the text toggle that delivery often adds (or removes). Text changes should never be used to convey state.
    // TODO: Add language support.

    btn.setAttribute("aria-label", labelSaveJob);

    // Fix: iOS, NVDA bug, state not reading back so need to implicitly add a role of "button" and remove type attribute. Do not remove until support better.

    btn.removeAttribute("type");
    btn.setAttribute("role", "button");

    // Fix: aria-pressed required, which will properly convey state of the button. Load correct state based on data-job-saved attr.

    if(btn.dataset.jobSaved === "true") {

      btn.setAttribute("aria-pressed", "true");

    } else {

      btn.setAttribute("aria-pressed", "false");

    }

    // Fix: Guard so the sitewide re-runs don't stack a new click listener on the same button each time.

    if (btn.dataset.a11ySaveJobBound === "1") return;

    btn.dataset.a11ySaveJobBound = "1";

    btn.addEventListener("click", function() {

      const pressedState = this.dataset.jobSaved === "true" ? "false" : "true";
      const jobId = this.dataset.jobId;
      const relatedSaveBtns = document.querySelectorAll(`.js-save-job-btn[data-job-id="${jobId}"]`);

      // The reason we target data-job-id is in event two or more buttons exist on the page for the same job. Job detail pages often have more than one. 

      relatedSaveBtns.forEach((saveBtn) => {
    
        saveBtn.setAttribute("aria-pressed", pressedState);

      });

    });

  });

}
