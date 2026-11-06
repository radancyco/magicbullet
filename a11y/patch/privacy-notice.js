// Accessibility Patch: Privacy Notice

export function fixPrivacyNotice(privacyNotice) {

  // Fix: The Privacy Notice Button is missing an accName, so let's add it.

  let privacyNoticeClose = privacyNotice.querySelector("#system-ialert-close-button");

  if (privacyNoticeClose) {

    privacyNoticeClose.setAttribute("aria-label", labelDialogClose);

  }

  // Fix: The default aria-label on the modal window (aria-label="Important System Message") is not always diserable.
  // So we will make a hook to use to override this default behavior if desired. 

  let privacyNoticeCustomLabel = privacyNotice.querySelector("[data-custom-label]");

  if (privacyNoticeCustomLabel) {

    // If data-custom-label is in use, then it must also conain an ID for aria-labelledby to use.

    let privacyCustomLabelId = privacyNoticeCustomLabel.getAttribute("id");

    privacyNotice.removeAttribute("aria-label");
    privacyNotice.setAttribute("aria-labelledby", privacyCustomLabelId);

  }

}
