
/*!

  Radancy MagicBullet: Accessibility Patch

  Contributor(s):
  Michael "Spell" Spellacy

*/

function loadA11yPatch(url, callback) {

  var getComponentLanguagePack = document.getElementById("component-library-language-pack");

  if (getComponentLanguagePack) {

    callback();

  } else {

    // Install Language Pack.

    var componentLanguagePack = document.createElement("script");

    componentLanguagePack.setAttribute("src", url);
    componentLanguagePack.setAttribute("id", "component-library-language-pack");
    componentLanguagePack.onreadystatechange = callback;
    componentLanguagePack.onload = callback;

    document.getElementsByTagName("head")[0].appendChild(componentLanguagePack);

  }

}

loadA11yPatch("https://services.tmpwebeng.com/component-library/language-pack.js", function(){

  var magicBulletScript = document.getElementById("tmp-magic-bullet") ? document.getElementById("tmp-magic-bullet") : document.getElementById("radancy-magicbullet");

  var a11yBody = document.body;

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magicbullet-a11y");

  // Create a new MutationObserver instance

  var targetNode = document.getElementById("content");

  // TODO: Rather than observe everything in main, only observe certain components on page that may be impacted. 
  
  var config = { childList: true, subtree: true };
  
  var a11yObserver = new MutationObserver(function(mutationsList) {
  
    console.log("Mutations:", mutationsList); // Log mutations
    
    clearTimeout(a11yObserver.timeout);
  
    a11yObserver.disconnect();
    
    a11yObserver.timeout = setTimeout(function() {
  
      console.log("%c MagicBullet: Accessibility Patch v1.98 in use. ", "background: #6e00ee; color: #fff");
  
      initDynamicPatch();
  
      a11yObserver.observe(targetNode, config); 
    
    }, 1000);
    
  });
  
  a11yObserver.observe(targetNode, config);

  initStaticPatch();

});

// Accessibility Patch: Dynamic
// Desc: These fixes address issues that occur both on page load and during dynamic DOM changes. 
// For instance, a script might add a new node to the DOM or refresh content on the page. When this happens, each fix must be reapplied.
  
function initDynamicPatch() {

  fixAltAttribute();
  fixDataForm();
  fixAppDisclosure();
  fixAppliedFilter();
  fixInputElements();
  fixSaveJobButton();
  fixSearchResults();
  fixSearchPagination();

}

// Accessibility Patch: Static
// Desc: These fixes address issues that occur on page load only.

function initStaticPatch() {

  fixCookieManagement();
  fixJobDescription();
  fixJobList();
  fixJobLocation(); 
  fixSearchForm();
  fixSitemap();
  fixSocialShare();

}

// Accessibility Patch: Alt Attribute

function fixAltAttribute() {

  // A11Y0003: https://radancy.dev/magicbullet/a11y/#issue-0003

  var missingAltAttribute = document.querySelectorAll("img:not([alt])");

  missingAltAttribute.forEach(function(img){

    img.setAttribute("alt", "");

  });

}

// Accessibility Patch: Application Disclosure

function fixAppDisclosure() {

  // A11Y0001: https://radancy.dev/magicbullet/a11y/#issue-0001
  // A11Y0002: https://radancy.dev/magicbullet/a11y/#issue-0002
  // Note: Currently, this functionaly being overwritten can be found in the Seach Filters, though it may appear elsewhere. 

  var expandableParentBtn = document.querySelectorAll(".expandable-parent");

  expandableParentBtn.forEach(function(button) {

    // Set attribute on corrent element.

    // See if element is already open, set aria-expanded state to true if it is.

    if(button.classList.contains("expandable-child-open")) {

      button.setAttribute("aria-expanded", "true");
  
    } else {

      button.setAttribute("aria-expanded", "false");

    }

    // Remove aria-expanded from adjacent, non-interactive element.
  
    if (button.nextElementSibling) {
  
      button.nextElementSibling.removeAttribute("aria-expanded");
  
    }

    // New toggle functionality for newly added aria-expanded attribute.

    button.addEventListener("click", function() {

      if(this.getAttribute("aria-expanded") === "true") {

        this.setAttribute("aria-expanded", "false");

      } else {

        this.setAttribute("aria-expanded", "true");

      }

      // Always remove aria-expanded being added to adjacent, non-interactive element, by TB Core.

      if (this.nextElementSibling) {

        this.nextElementSibling.removeAttribute("aria-expanded");

      }

    });

  });

}

// Accessibility Patch: Cookie Management

function fixCookieManagement() {

  // Issue: Cookie Management Page has some aria-describedby attributes on the page that do nothing.

  var cookieDescriptionIdAttr = document.querySelectorAll("input[aria-describedby='cookieDescriptionIdAttr']");

  cookieDescriptionIdAttr.forEach(function(input) {

    input.removeAttribute("aria-describedby"); 

  });

}

// Accessibility Patch: Applied Filter

function fixAppliedFilter() {

  // A11YAF001
    
  // The filters section has incorrect ARIA on it. Remove aria-hidden and aria-expanded.
  // Move aria-labelledby from ul to section wrapper, added region role.
  // Make remove buttons more contextually friendly to AT.
  // Adjust focus when button with focus is removed. Note: This is now handled by the product. See search.js. Open ticket. See https://wegmans-refresh2.runmytests.com/en/search-jobs?fl=6252001&glat=40.5751&glon=-75.51963 
  // TODO: Add language support to buttons.
  // TODO: Regarding aria-labelledby on section wrapper, see if contextual support good enough here. 
  // If it is, then may be able to remove aria-labelledby and region role. See https://www.w3.org/WAI/WCAG22/Techniques/html/H81
  // BUG: When disabled filter button is present and last filter button is pressed, focus is placed on checkbox in filter section.

  var appliedFilters = document.querySelectorAll(".search-results-options");

  appliedFilters.forEach(function(filter){

    var appliedFiltersList = filter.querySelectorAll("ul[aria-labelledby]");
    var btnSearchFilter = filter.querySelectorAll(".filter-button:not([disabled])");

    // A11YAF001
    // Remove aria-labeledby from UL.

    appliedFiltersList.forEach(function(list){

      list.removeAttribute("aria-labelledby");

    });

    // A11YAF002
    // Remove aria-hidden and aria-expanded and add aria-describedby and role to parent element (.search-results-option)
  
    filter.removeAttribute("aria-hidden");
    filter.removeAttribute("aria-expanded");
    filter.setAttribute("aria-labelledby", "applied-filters-label");
    filter.setAttribute("role", "region");

    // A11YAF003
    // Add ARIA label to each button that is not disabled.

    btnSearchFilter.forEach(function(btn){
  
      btn.setAttribute("aria-label", "Remove " + btn.textContent + " filter");

    });

  });

}

// Accessibility Patch: Input Elements

function fixInputElements() {

  // A11Y0004: https://radancy.dev/magicbullet/a11y/#issue-0009 (HTML CLEANUP)

  var inputCheckBox = document.querySelectorAll("input[type='checkbox']");

  inputCheckBox.forEach(function(input) {

    input.removeAttribute("autocomplete");

  });

}

// Accessibility Patch: Data Form

function fixDataForm() {

  var dataForms = document.querySelectorAll(".data-form");

  dataForms.forEach(function(form){

    var instructionTexts = form.querySelectorAll(".instruction-text");
    var requiredLabels = form.querySelectorAll(".form-field.required label");
    var ariaRequired = form.querySelectorAll(".form-field.required input:not([type='checkbox']), .form-field.required select, .form-field.required textarea");
    var requiredXHTML = form.querySelectorAll("*[required='required']");
    var validationMsg = form.querySelectorAll(".field-validation-valid");
    var requiredFields = form.querySelectorAll(".form-field.required input, .form-field.required select");
    var dataFormElement = form.querySelectorAll("input, select");
    var autoCompleteFirstName = form.querySelectorAll("input[name='FirstName']");
    var autoCompleteLastName = form.querySelectorAll("input[name='LastName']");
    var autoCompleteEmailAddress = form.querySelectorAll("input[name='EmailAddress']");
    var addJobAlertButtons = form.querySelectorAll(".keyword-add");
    var keywordSelected = form.querySelectorAll(".keyword-selected");
    var getKeywordRegion = form.querySelector(keywordSelectedRegionClass);
    var fileUploadButtons = form.querySelectorAll(".form-field input[name='Resume']");
    var emailConfirmation = form.querySelectorAll(".form-field.confirm-email");
    var captchaBadge = form.querySelector(".grecaptcha-badge");
    var signUpButtons = form.querySelectorAll("button[type='submit']");
    var formMessage = form.querySelector(".form-field.form-message b");
    var formMessageButton = form.querySelector(".form-field.form-message a");
    var keyWordCategory = form.querySelector(".keyword-category");
    var formInputs = form.querySelectorAll("input, select");

    // A11YFORM001
    // Clutter. Removing empty instruction-text spans as they can sometimes cause undesired spacing issues.

    instructionTexts.forEach(function(element) {

      if (element.textContent.trim() === "") {

        element.parentNode.removeChild(element);

      }

    });

    // A11YFORM002
    // Removing the CSS asterisk (see init.scss) because it reads out to assistive tech (AT) when added via content proprty. 
    // Including a span with aria-hidden so that it is not picked up by AT.
    // Note: May need to add another, visually hidden. required messages to this in the future.

    var iconClassName = "ico-required-indicator";
    var iconClass = "." + iconClassName;

    requiredLabels.forEach(function(label) {

      var span = document.createElement("span");
      span.classList.add(iconClassName);
      span.setAttribute("aria-hidden", "true");
      span.textContent = "*";

      // See if icon we wish to append already exists.

      var getRequiredIcon = label.querySelector(iconClass);

      if(getRequiredIcon === null) {

        label.appendChild(span);

      }

    });

    // A11YFORM003
    // Removing aria-required from various elements. This attribute is sometimes flagged in automated testing and just the required attribue is now recommended.

    ariaRequired.forEach(function(element) {

      element.removeAttribute("aria-required");

    });

    // A11YFORM004
    // Issue: required="required" is XHTML serialization and may throw a11y validation issues if not set to blank or true.

    requiredXHTML.forEach(function(element) {

      element.setAttribute("required", "");

    });

    // A11YFORM005
    // Issue: Remove "role" from field-validation-error (it's not needed).

    validationMsg.forEach(function(element) {

      element.removeAttribute ("role");

    });

    // A11YFORM006
    // All required fields should include aria-invalid="false" on page load.

    requiredFields.forEach(function(input) {

      input.setAttribute("aria-invalid", "false");

    });

    // A11YFORM007
    // The input-validation-error class is removed when leaving a field, but aria-invalid still remains set to true.

    // Add blur event listener to each element

    dataFormElement.forEach(function(element) {

      element.addEventListener("blur", function() {

        if (element.classList.contains("input-validation-error")) {

          element.setAttribute("aria-invalid", "true");

        } else {

          element.setAttribute("aria-invalid", "false");

        }

      });

    });

    // A11YFORM008
    // It is customary to include more useful autocomplete attributes so that certain fields will show the contextual menu for easier input.

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

    // A11YFORM009
    // The "Add" button needs to be more explicit to AT.
    // TODO: Add language support.

    addJobAlertButtons.forEach(function(button) {

      button.setAttribute("aria-label", "Add Job Alert");

    });

    // A11YFORM010
    // The keyword list requires a more accessible grouping to better identify it.
    // TODO: Add language support.

    var keywordSelectedRegionClassName = "keyword-region";
    var keywordSelectedRegionClass = "." + keywordSelectedRegionClassName;
    var keywordSelectedRegionLabel = "Selected Job Alerts";

    keywordSelected.forEach(function(region) {

      var keywordSelectedRegion = document.createElement("div");
      keywordSelectedRegion.classList.add(keywordSelectedRegionClassName);
      keywordSelectedRegion.setAttribute("role", "region");
      keywordSelectedRegion.setAttribute("aria-label", keywordSelectedRegionLabel);

      // See if region we wish to append already exists.

      if(getKeywordRegion === null) {

        region.parentNode.insertBefore(keywordSelectedRegion, region);
        keywordSelectedRegion.appendChild(region);

      }

    });

    // A11YFORM011
    // Issue: The file upload remove button is a link with an href hash. This is awful, so let's remedy it by replacing it.

    fileUploadButtons.forEach(function(input) {

      var fileUploadLink = input.nextElementSibling;
      var resumeRemoveLabel = fileUploadLink.textContent.trim();

      var fileUploadButton = document.createElement("button");
      fileUploadButton.setAttribute("aria-describedby", input.getAttribute("id"));
      fileUploadButton.classList.add("file-remove");
      fileUploadButton.style.display = "none";
      fileUploadButton.textContent = resumeRemoveLabel;

      fileUploadLink.parentNode.replaceChild(fileUploadButton, fileUploadLink);

    });

    // A11YFORM012
    // Remove inline style on honeypot field and use hidden attribute instead.

    emailConfirmation.forEach(function(element) {

      element.setAttribute("hidden", "");
      element.removeAttribute ("aria-hidden");
      element.removeAttribute("style");

      // Remove aria-hidden from honeypot label and input. The parent element should hide this from all assistive tech without need to hide individually.

      var emailConfirmationFields = element.querySelectorAll("label, input");

      emailConfirmationFields.forEach(function(item) {

        item.removeAttribute ("aria-hidden");

      });

    });

    // A11YFORM013
    // Adding an accName to textarea, removing iframe garbage, and moving captcha to end of form to address tab order. It should not exist before submit button.

    if(captchaBadge) {

      var captchaResponse = captchaBadge.querySelector(".g-recaptcha-response");
      var captchaResponseLabel = "Captcha";
      var captchaIframe = captchaBadge.querySelectorAll("iframe");

      // Add accName to textarea

      captchaResponse.setAttribute("aria-label", captchaResponseLabel);

      // Remove iframe junk (border: 0 now set in init.scss)

      captchaIframe.forEach(function(iframe){

        iframe.removeAttribute("frameborder");

      });

      // Moving badge to end of form.
      // Note: Badge appears to refresh and flash briefly on submit. Likely due to Mutation Observer reinitiating patch.

      form.appendChild(captchaBadge);

    }

    // A11YFORM014
    // The "Sign Up" button needs to be more explicit to AT.
    // TODO: Add language support.

    var signUpButtonLabel = "Sign Up for Job Alerts";

    signUpButtons.forEach(function(button) {

      button.setAttribute("aria-label", signUpButtonLabel);

    });

    // A11YFORM015
    // The form message has an inline tabindex="0" on it. This is not ideal as messages that receive focus should only do so temporarily and not when user tabs back to it.

    if(formMessage) {

      formMessage.setAttribute("tabindex", "-1");

    }

    // A11YFORM016
    // The form message close link should really be a button, but for now we'll simply add a role.
    // TODO: Unbind or override current close event and add support for closing when Enter AND Spacebar is pressed.

    if(formMessageButton) {

      formMessageButton.classList.add("data-form__close");
      formMessageButton.setAttribute("role", "button");

      var formMessageButtonIcon = document.createElement("span");
      formMessageButtonIcon.setAttribute("aria-hidden", "true");
      formMessageButtonIcon.classList.add("data-form__closeicon");

      formMessageButton.appendChild(formMessageButtonIcon);

    }

    // Form submission events

    form.addEventListener("submit", function(event) {

      event.preventDefault();

      // A11YFORM017
      // The Keyword Location field does not appear to have an aria-describedby on it when an error is returned, so we need to grab it from Keyword Category and dupe it here.

      if(keyWordCategory) {

        var keyWordLocationDesc = keyWordCategory.getAttribute("aria-describedby");

        var keywordLocation = form.querySelector(".keyword-location");

        if(keywordLocation) {

          keywordLocation.setAttribute("aria-describedby", keyWordLocationDesc);

        }

      }

      // A11YFORM018
      // Now that we are including aria-invalid, we need to alter the values based on user input.

      formInputs.forEach(function(input) {

        if (input.classList.contains("input-validation-error")) {

          input.setAttribute("aria-invalid", "true");

        } else {

          input.setAttribute("aria-invalid", "false");

        }

      });

    });

  });

}

// Accessibility Patch: Job Description

function fixJobDescription() {

  // Job Description: Garbage Removal

  var atsDescription = document.querySelectorAll(".ats-description");

  atsDescription.forEach(function(desc) {

    // Issue-0007: Remove tabindex attribute from elements within .ats-description that have tabindex attribute not equal to '0' or starting with '-'

    desc.querySelectorAll("[tabindex]:not([tabindex='0']):not([tabindex^='-'])").forEach(function(tabindex) {
  
      tabindex.removeAttribute("tabindex");

    });

    // Issue-0008: Add role="presentation" to tables within .ats-description

    desc.querySelectorAll("table").forEach(function(table) {
  
      table.setAttribute("role", "presentation");

    });

    // Remove useless attributes from all elements within .ats-description

    desc.querySelectorAll("*").forEach(function(element) {
  
      element.removeAttribute("face");
      element.removeAttribute("size");
      element.removeAttribute("title");
      element.removeAttribute("id");

    });

    // Remove <font> element and unwrap its contents within .ats-description

    desc.querySelectorAll("font").forEach(function(font) {
  
      var parent = font.parentNode;
  
      while (font.firstChild) {
  
        parent.insertBefore(font.firstChild, font);
  
      }
  
      parent.removeChild(font);

    });

  });

}

// Accessibility Patch: Job List

function fixJobList() {

  // Issue: Job Lists should really have the location appear inside of a link so that job links with same title can be more descriptive and discernable.

  var jobListElements = document.querySelectorAll(".job-list .location, .job-list .date");

  jobListElements.forEach(function(element) {

    var previousElement = element.previousElementSibling;
  
    if (previousElement) {
  
      previousElement.appendChild(element);
  
    }

  });

}

// Accessibility Patch: Job Location

function fixJobLocation() {

  // Job Location Map

  // A11Y0005: https://radancy.dev/magicbullet/a11y/#issue-0005
  // TODO: These would be better served as buttons, not links. Including role="button" for now, but we need to add space bar key support eventually.
  // TODO: The "Search Nearby" and "Get Directions" sections should be regions with accNames.
  // TODO: Include Wegmans functionality to skip over Google Map.

  var mapButton = document.querySelectorAll(".job-map-nearby a");

  mapButton.forEach(function(btn){

    btn.setAttribute("role", "button");
    btn.removeAttribute("target");

  });

}

// Accessibility Patch: Save Job Button

function fixSaveJobButton() {

  var btnSaveJobs = document.querySelectorAll(".js-save-job-btn");

  btnSaveJobs.forEach(function(btn){

    // A11YSAVEJOB001
    // Custom label needed to override the text toggle that delivery often adds (or removes). Text changes should never be used to convery state.
    // Adding aria-pressed, which will properly convey state. 
    // Other housecleaning.
    // TODO: Add language support.

    btn.setAttribute("aria-label", "Save Job");

    // iOS, NVDA bug, state not reading back so need to implicitly call role. Do not remove until support better.

    btn.removeAttribute("type");
    btn.setAttribute("role", "button");
  
    if(btn.dataset.jobSaved === "true") {

      btn.setAttribute("aria-pressed", "true");

    } else {

      btn.setAttribute("aria-pressed", "false");

    }

    btn.addEventListener("click", function() {

      if(this.dataset.jobSaved === "true") {

        this.setAttribute("aria-pressed", "false");

      } else {

        this.setAttribute("aria-pressed", "true");

      }

    });

  });

}

// Accessibility Patch: Search Form

function fixSearchForm() {

  var searchForm = document.querySelectorAll(".search-form");

  searchForm.forEach(function(form, i){

    var formID = (i + 1);
    var searchFormLegend = form.querySelector(".job-search-legend");
    var searchFormFields = form.querySelector(".search-form-fields");
    var searchFormLocationInput = form.querySelector(".search-location");
    var searchFormLocationPin = form.querySelector(".location-pin");
    var searchFormLocationError = form.querySelector(".search-location-error");
    var searchFormSubmit = form.querySelector("button");

    // Shared Function(s)

    function accessibleValidation() {

      setTimeout(function() {

        searchFormLocationError.removeAttribute("tabindex");

        var ariaHiddenHook = searchFormLocationError.getAttribute("aria-hidden");

          if(ariaHiddenHook === "false") {

            searchFormLocationInput.setAttribute("aria-invalid", "true");
            searchFormLocationInput.focus();

          } else { 

            searchFormLocationInput.setAttribute("aria-invalid", "false");

          }

      }, 100);

    }

    // A11YSEARCH001
    // Our primary search form should include a distinct role so that it can aid in helping assistive technology users navigate the page.

    form.setAttribute("role", "search");

    // A11YSEARCH002
    // Our primary search form should provide a better group description for the fields at hand. This can be achived by adding a div with a class of "job-search-legend" (a heading should not be used) and the following script will take care of adding any needed associations.

    searchFormFields.setAttribute("role", "group");

    if(searchFormLegend) {

      // Think of this as a fieldset and legend element.

      searchFormFields.setAttribute("aria-labelledby", "job-search-legend-" + formID);
      searchFormLegend.setAttribute("id", "job-search-legend-" + formID);

    } else {

      // If the class (.job-search-legend) is not present then simply add a label of "Search Jobs" to the div wrapping the form elements (.search-form-fields)

      searchFormFields.setAttribute("aria-label", "Search Jobs");

    }

    // A11YSEARCH003
    // The way in which the validation is currently handled requires improvement to aid those using assisitve tehcnology. Here we need to include aria-invalid and aria-describedby to the locations field and apply custom validation as well, so that keyboard users do not need to tab backwards to return to the locations field, which is initiating the error.

    if(searchFormLocationInput) {

      // Add aria-describedby and aria-invalid to the locations field.

      searchFormLocationInput.setAttribute("aria-describedby", "search-error-" + formID);
      searchFormLocationInput.setAttribute("aria-invalid", "false");

      // Validate the locations field when change is made to it.

      searchFormLocationInput.addEventListener("change", function() {

        accessibleValidation();
  
      });

    }

    // Apply a unique ID to the error message. This is what locations field will read when focus is brought back to it, thanks to aria-describedby.

    if(searchFormLocationError) {

      searchFormLocationError.setAttribute("id", "search-error-" + formID);

    }

    // When search button is pressed, fire off custom validation. 

    searchFormSubmit.addEventListener("click", function() {

      accessibleValidation();

    });

    // A11YSEARCH004
    // Remove aria-hidden from the location pin. Often this is visually displayed, but aria-hidden is still present.

    if(searchFormLocationPin) {

      searchFormLocationPin.removeAttribute("aria-hidden");

    }

  });

}

// Accessibility Patch: Search Results

function fixSearchResults() {

  // BUG: When tabindex 0 was removed, visible focus is now lost. Product team should be applying tabindex -1 in addition to focus.
  // For now, a hacky fix...

  var searchResults = document.getElementById("search-results");

  if(searchResults) {

    searchResults.setAttribute("tabindex", "-1");

  }

}

// Accessibility Patch: Search Results Pagination

function fixSearchPagination() {

  var pagination = document.querySelectorAll(".pagination");

  pagination.forEach(function(pgn){

    // A11YPAGE001    
    // Pagination(s) in Search Results should really have an accName so it can be differentiated between other nav elements that may exist on page.
    // Add language support.

    pgn.setAttribute("aria-label", "Pagination");

    // A11YPAGE002
    // Search Results pagination disabled button can be tabbed to (this is bad). To address this, we simply remove href. When removed, aria-hidden is not really needed, so we reove that, too!

    var controls = pgn.querySelectorAll(".pagination-paging .disabled");

    controls.forEach(function(link){

      link.removeAttribute("aria-hidden");
      link.removeAttribute("href");

    });

  });

}

// Accessibility Patch: Sitemap

function fixSitemap() {

  // Sitemap

  // BUG: Sitemap pages have tabindex on certain header. Inactive elements should nto receive focus.

  var sitemapHeadings = document.querySelectorAll(".job-location h2, .job-category h2");

  sitemapHeadings.forEach(function(heading) {

    heading.removeAttribute("tabindex");
    heading.removeAttribute("aria-expanded");
    heading.classList.remove("expandable-parent");

  });

}

// Accessibility Patch: Social Share

function fixSocialShare() {

  // A11Y0003: https://radancy.dev/magicbullet/a11y/#issue-0006
  // This loads on job description and ajd pages mostly
  // TODO: Add language support.
  // Social Share Module

  var socialShareLinks = document.querySelectorAll(".social-share-items a");

  socialShareLinks.forEach(function(link) {

    link.insertAdjacentHTML("beforeend", " <span class='wai visually-hidden'>(Opens in new tab)</span>");

  });

}
