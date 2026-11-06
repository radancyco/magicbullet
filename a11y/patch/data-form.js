// Accessibility Patch: Data Form

export function fixDataForm(form) {

  const instructionTexts = form.querySelectorAll(".instruction-text");
  const requiredLabels = form.querySelectorAll(".form-field.required label");
  const ariaRequired = form.querySelectorAll(".form-field.required input:not([type='checkbox']), .form-field.required select, .form-field.required textarea");
  const requiredXHTML = form.querySelectorAll("*[required='required']");
  const validationMsg = form.querySelectorAll(".field-validation-valid");
  const requiredFields = form.querySelectorAll(".form-field.required input, .form-field.required select");
  const dataFormElement = form.querySelectorAll("input, select");
  const autoCompleteFirstName = form.querySelectorAll("input[name='FirstName']");
  const autoCompleteLastName = form.querySelectorAll("input[name='LastName']");
  const autoCompleteAddress = form.querySelectorAll("input[name='StreetAddress']");
  const autoCompleteCity = form.querySelectorAll("input[name='City']");
  const autoCompleteEmailAddress = form.querySelectorAll("input[name='EmailAddress']");
  const autoCompletePhoneNumber = form.querySelectorAll("input[name='MobilePhone']");
  const autoCompleteZipCode = form.querySelectorAll("input[name='PostalCode']");
  const autoCompleteStateProvince = form.querySelectorAll("select[name='Custom-92392']"); // Targeing custom filed; need better way to handle this, probably product side fix eventually.
  const addJobAlertButtons = form.querySelectorAll(".keyword-add");
  const keywordSelected = form.querySelectorAll(".keyword-selected");
  const fileUploadButtons = form.querySelectorAll(".form-field input[name='Resume']");
  const captchaBadge = form.querySelector(".grecaptcha-badge");
  const signUpButtons = form.querySelectorAll("button[type='submit']");
  const formMessage = form.querySelector(".form-field.form-message b");
  const formMessageButton = form.querySelector(".form-field.form-message a");
  const addJobAlertFieldset = form.querySelector("fieldset");
  const textInputsWithPlaceholder = form.querySelectorAll(".form-field input[type='text'][placeholder]");

  // Clean-up: Remove empty instruction-text spans as they can sometimes cause undesired spacing issues.

  instructionTexts.forEach(function(element) {

    if (element.textContent.trim() === "") {
  
      element.parentNode.removeChild(element);
  
    }
  
  });
  
  // Clean-up: Remove aria-required from various elements. This attribute is sometimes flagged in automated testing and just the boolean required attribute is now recommended.
  
  ariaRequired.forEach(function(element) {
  
    element.removeAttribute("aria-required");
  
  });
  
  // Clean-up: required="required" is XHTML serialization and may throw a11y validation issues if not set to blank or true.
  
  requiredXHTML.forEach(function(element) {
  
    element.setAttribute("required", "");
  
  });

  // Fix: Remove the CSS asterisk (see init.scss) because it reads out to assistive tech (AT) when added via content property and include a span with aria-hidden on it so that it is not picked up by AT. New asterisk applied via CSS.

  const iconClassName = "ico-required-indicator";
  const iconClass = "." + iconClassName;

  requiredLabels.forEach(function(label) {

    // Fix: Remove textNodes that are inline astericks, instead of using a pseudo-element. 

    const labelTextNode = label.childNodes[0]; 

    if (labelTextNode && labelTextNode.nodeType === Node.TEXT_NODE) {

      // var cleanedText = labelTextNode.nodeValue.trim().replace("*", ""); // Removing trim as it it causing some layout issues. labels with link in them, like privacy policy, were being trimmed, cauing pacing issues.

      const cleanedText = labelTextNode.nodeValue.replace("*", "");

      // Update the text node without the asterisk

      labelTextNode.nodeValue = cleanedText;

    }

    const span = document.createElement("span");
    span.classList.add(iconClassName);
    span.setAttribute("aria-hidden", "true");
    span.textContent = "*";

    // See if icon we wish to append already exists.

    const getRequiredIcon = label.querySelector(iconClass);

    if(getRequiredIcon === null) {

      // HACK: This check ensures that the asterisk is only added to labels that actually require it. 
      // Currently, the required class is applied to the fieldset itself, causing an asterisk to be added 
      // to all labels within the keyword area section, even when the associated field is not required.

      if (label.nextElementSibling?.matches("[class*='required']") || label.previousElementSibling?.matches("[class*='required']") || label.parentElement?.matches("[class*='required']")) {

        label.appendChild(span);

        // Fix: Set required on element that do not have them

        if (!label.nextElementSibling.hasAttribute("required")) {

          label.nextElementSibling.setAttribute("required", "");

        }

      }

    }

    // Fix: Remove asterick from Job Category and Location whenever "Add" keyowrd button is pressed. 
    // TODO: Revist all asterick logic eventually to see if we need to remove it on all labels when each filed is valid. 

    keywordSelected.forEach(function(region) {

      if (region.querySelector("li")) {

        const getAriaRequiredSpan = addJobAlertFieldset.querySelectorAll(".ico-required-indicator");

        getAriaRequiredSpan.forEach(function(element) {

          element.remove();

        });

      }

    });

  });

  // Fix: Remove placeholder text from text inputs when it duplicates the associated label. Redundant placeholders offer no additional value and can be confusing to AT users when the label and placeholder are announced back to back.

  textInputsWithPlaceholder.forEach(function(input) {

    const label = input.closest(".form-field")?.querySelector("label");

    if (!label) return;

    const labelClone = label.cloneNode(true);
    const requiredIcon = labelClone.querySelector(iconClass);

    if (requiredIcon) requiredIcon.remove();

    const labelText = labelClone.textContent.trim().toLowerCase();
    const placeholderText = input.getAttribute("placeholder").trim().toLowerCase();

    if (labelText === placeholderText) {

      input.removeAttribute("placeholder");

    }

  });

  // Fix: Remove "role" from field-validation-error (it's not needed).

  validationMsg.forEach(function(element) {

    element.removeAttribute ("role");

  });

  // Fix: All required fields should include aria-invalid="false" on page load.

  requiredFields.forEach(function(input) {

    if (input.classList.contains("input-validation-error")) {

      input.setAttribute("aria-invalid", "true");

    } else {

      input.setAttribute("aria-invalid", "false");

    }

  });

  // Fix: The input-validation-error class is removed when leaving a field, but aria-invalid remains set to true, so we address this by listening for blur event.

  // Add blur event listener to each element

  dataFormElement.forEach(function(element) {

    // Fix: Guard so the fix re-running on form changes doesn't stack a new blur listener each time.

    if (element.dataset.a11yBlurBound === "1") return;

    element.dataset.a11yBlurBound = "1";

    element.addEventListener("blur", function() {

        if (element.classList.contains("input-validation-error")) {

          element.setAttribute("aria-invalid", "true");

        } else {

          element.setAttribute("aria-invalid", "false");

        }

    });

  });

  // Fix: It is customary to include more useful autocomplete attributes so that certain fields will show the contextual menu for easier input. Adding autocompletes for First Name, Family Name, and Email. For email we are also changing the type from "text" to "email"

  // First Name

  autoCompleteFirstName.forEach(function(input) {

    input.setAttribute("autocomplete", "given-name");

  });

  // Last Name

  autoCompleteLastName.forEach(function(input) {

    input.setAttribute("autocomplete", "family-name");

  });

  // Email Address

  autoCompleteEmailAddress.forEach(function(input) {
    
    input.setAttribute("type", "email");
    input.setAttribute("autocomplete", "email");
    
  });

  // Phone Number

  autoCompletePhoneNumber.forEach(function(input) {
    
    input.setAttribute("autocomplete", "tel");
    
  });

  // Zip Code

  autoCompleteZipCode.forEach(function(input) {
    
      input.setAttribute("autocomplete", "postal-code");
        
  });

  // State/Province

  autoCompleteStateProvince.forEach(function(input) {
    
    input.setAttribute("autocomplete", "address-level1");
          
  });

  // Street Address

  autoCompleteAddress.forEach(function(input) {
    
    input.setAttribute("autocomplete", "street-address");
              
  });

  // City

  autoCompleteCity.forEach(function(input) {
    
    input.setAttribute("autocomplete", "address-level2");
          
  });

  // Fix: The "Add" button needs to be more explicit to AT so include "Add Job Alert"

  addJobAlertButtons.forEach(function(button) {

    button.setAttribute("aria-label", labelAddJobAlert);

  });

  // Fix: The keyword list requires a more accessible grouping to better identify it; adding proper role and accName, etc.

  const keywordSelectedRegionClassName = "keyword-region";
  const keywordSelectedRegionClass = "." + keywordSelectedRegionClassName;
  const keywordSelectedRegionLabel = labelSelectedJobAlerts;

  keywordSelected.forEach(function(region) {

    const keywordSelectedRegion = document.createElement("div");
    keywordSelectedRegion.classList.add(keywordSelectedRegionClassName);
    keywordSelectedRegion.setAttribute("role", "region");
    keywordSelectedRegion.setAttribute("aria-label", keywordSelectedRegionLabel);

    // See if region we wish to append already exists.

    const getKeywordRegion = form.querySelector(keywordSelectedRegionClass);

    if(getKeywordRegion === null) {

      region.parentNode.insertBefore(keywordSelectedRegion, region);
      keywordSelectedRegion.appendChild(region);

    }

  });

  // Fix: The keyword add section requires better focus management.

  // Issue: When adding new keywords, focus is lost after adding, so we will move focus to first keyword select.

  const keywordFieldsetSelector = "fieldset.form-field";

  const keywordAdd = form.querySelectorAll(`${keywordFieldsetSelector} .keyword-add`);

  keywordAdd.forEach((button) => {

    // Fix: Guard so re-runs don't stack click listeners or keywordRemoveObservers on the same button.

    if (button.dataset.a11yKeywordAddBound === "1") return;

    button.dataset.a11yKeywordAddBound = "1";

    button.addEventListener("click", () => {

      const fieldset = button.closest(keywordFieldsetSelector);

      if (!fieldset) return;

      const firstSelect = fieldset.querySelector(".keyword-category");

      if (!firstSelect) return;

      firstSelect.focus();

    });

    const keywordRegion = button.closest(keywordFieldsetSelector)?.querySelector(".keyword-region");

    if (keywordRegion) {

      // We need a mutation observer here to see when link is being added, so we can add a role to it. 

      const keywordRemoveObserver = new MutationObserver(() => {

        keywordRegion.querySelectorAll(".keyword-remove").forEach((link) => {

          link.setAttribute("role", "button");

        });

      });

      keywordRemoveObserver.observe(keywordRegion, { childList: true, subtree: true });

    }

  });

  // Issue: When a keyword is removed, focus is lost, so we will now manage it by placing it on next available element.
  // When all keywords are removed, focus is then placed on the first keyword select element. 
  // Time will tell if this is the best place for it or if we should place it elsewhere, but it should be easy to adjust regardless.  

  const keywordFieldsets = form.querySelectorAll(keywordFieldsetSelector);

  keywordFieldsets.forEach((fieldset) => {

    if (fieldset.dataset.keywordRemoveInitialized) return;

    fieldset.dataset.keywordRemoveInitialized = "true";

    const handleKeywordRemove = (event) => {

      if (event.type === "keydown" && event.key !== "Enter" && event.code !== "Space") return;

      const link = event.target.closest(".keyword-remove");

      if (!link) return;

      event.preventDefault();

      const listItem = link.closest("li");

      if (!listItem) return;

      const allLinks = [...fieldset.querySelectorAll(".keyword-remove")];
      const currentIndex = allLinks.indexOf(link);
      const nextLink = allLinks[currentIndex + 1] || allLinks[currentIndex - 1];

      listItem.remove();

      if (nextLink) {

        nextLink.focus();

      } else {

        const firstSelect = fieldset.querySelector(".keyword-category");

        if (firstSelect) firstSelect.focus();

      }

    };

    fieldset.addEventListener("click", handleKeywordRemove);
    fieldset.addEventListener("keydown", handleKeywordRemove);

  });

  // Fix: The file upload remove button is a link with an href hash. This is awful, so let's remedy it by replacing it with a button.

  fileUploadButtons.forEach(function(input) {

    const fileUploadLink = input.nextElementSibling;

    // Fix: Only replace the original link. On re-runs the sibling is already our button, and replacing it again
    // would reset it to display: none even while a file is attached.

    if (!fileUploadLink || fileUploadLink.tagName !== "A") return;

    const resumeRemoveLabel = fileUploadLink.textContent.trim();

    const fileUploadButton = document.createElement("button");
    fileUploadButton.setAttribute("type", "button"); // Without this, the button defaults to type="submit" and submits the form.
    fileUploadButton.setAttribute("aria-describedby", input.getAttribute("id"));
    fileUploadButton.classList.add("file-remove");
    fileUploadButton.style.display = "none";
    fileUploadButton.textContent = resumeRemoveLabel;

    fileUploadLink.parentNode.replaceChild(fileUploadButton, fileUploadLink);

  });

  // Fix: Adding an accName to textarea and removing iframe garbage.
  // Note: The badge should ideally come after the submit button in tab order, but we do not move it here. Moving an
  // element that contains an iframe reloads the iframe, which can reset the reCAPTCHA token. Needs a product-side fix.

  if(captchaBadge) {

    const captchaResponse = captchaBadge.querySelector(".g-recaptcha-response");
    const captchaResponseLabel = labelCaptcha;
    const captchaIframe = captchaBadge.querySelectorAll("iframe");

    // Add accName to textarea

    captchaResponse.setAttribute("aria-label", captchaResponseLabel);

    // Remove iframe junk (border: 0 now set in init.scss)

    captchaIframe.forEach(function(iframe){

      iframe.removeAttribute("frameborder");

    });

  }

  // Fix: The "Sign Up" button needs to be more explicit to AT.
  // TODO: Add language support.
  // UPDATE: Removing this functionality as it is causing too many accessibility issues with visible text not being in sync with visual label. eg. <button aria-label = "Sign-up for Job Alerts">Join Community</button>. Better to let dev deal with this on a case-by-case basis. 

  // var signUpButtonLabel = labelSubmitJobAlerts;

  // signUpButtons.forEach(function(button) {

    // button.setAttribute("aria-label", signUpButtonLabel);

  // });

  // Fix: The form message has an inline tabindex="0" on it. This is not ideal as messages that receive focus should only do so temporarily and not when user tabs back to it.

  if(formMessage) {

    formMessage.setAttribute("tabindex", "-1");

  }

  // Fix: The form message close link should really be a button, but for now we'll simply add a role.
  // TODO: Unbind or override current close event and add support for closing when Enter AND Spacebar is pressed.

  // Fix: Guard against appending a second close icon when the fix re-runs.

  if(formMessageButton && !formMessageButton.querySelector(".data-form__closeicon")) {

    formMessageButton.classList.add("data-form__close");
    formMessageButton.setAttribute("role", "button");

    const formMessageButtonIcon = document.createElement("span");
    formMessageButtonIcon.setAttribute("aria-hidden", "true");
    formMessageButtonIcon.classList.add("data-form__closeicon");

    formMessageButton.appendChild(formMessageButtonIcon);

  }

  // Form submission events
  // Fix: Guard so re-runs don't stack a new submit listener on the form each time.

  if (form.dataset.a11ySubmitBound === "1") return;

  form.dataset.a11ySubmitBound = "1";

  form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Fix: The Keyword Location field does not appear to have an aria-describedby on it when an error is returned, so we need to grab it from Keyword Category and dupe it here.
    // Note: Look Keyword Category up at submit time, since the listener is now bound once and the field may have been re-rendered since.

    const keyWordCategory = form.querySelector(".keyword-category");

    if(keyWordCategory) {

      const keyWordLocationDesc = keyWordCategory.getAttribute("aria-describedby");

      const keywordLocation = form.querySelector(".keyword-location");

      if(keywordLocation) {

        keywordLocation.setAttribute("aria-describedby", keyWordLocationDesc);

      }

    }

  });

}
