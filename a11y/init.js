
/*!

  Radancy MagicBullet: Accessibility Patch

  Contributor(s):
  Michael "Spell" Spellacy

*/

function loadA11yPatch(url, callback) {

  var a11yBody = document.body;

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magicbullet-a11y");

  // Install Language Pack.

  var componentLanguagePack = document.createElement("script");

  componentLanguagePack.setAttribute("src", url);
  componentLanguagePack.setAttribute("id", "component-library-language-pack");
  componentLanguagePack.onreadystatechange = callback;
  componentLanguagePack.onload = callback;

  // Only load one language pack per page.

  var getComponentLanguagePack = document.getElementById("component-library-language-pack");

  if(getComponentLanguagePack === null) {

    document.getElementsByTagName("head")[0].appendChild(componentLanguagePack);

  }

  // Create a new MutationObserver instance

  var config = { childList: true, subtree: true };

  var a11yObserver = new MutationObserver(function(mutationsList) {

    console.log("Mutations:", mutationsList); // Log mutations
  
    clearTimeout(a11yObserver.timeout);

    a11yObserver.disconnect();
  
    a11yObserver.timeout = setTimeout(function() {

      console.log("%c MagicBullet: Accessibility Patch v1.95 in use. ", "background: #6e00ee; color: #fff");

      initGlobalPatch();
      initDataFormPatch();

      a11yObserver.observe(a11yBody, config); 

      // TODO: Only load observer with certain components on page, as these fixes only impace specifc components. 
  
    }, 1000);
  
  });
  
  a11yObserver.observe(a11yBody, config);

}

loadA11yPatch("https://services.tmpwebeng.com/component-library/language-pack.js", function(){

  // *** Accessibility Patch: Static ***
  
  // A11Y0003: https://radancy.dev/magicbullet/a11y/#issue-0006

  document.querySelectorAll(".social-share-items a").forEach(function(anchor) {

    anchor.insertAdjacentHTML("beforeend", " <span class='wai visually-hidden'>(Opens in new tab)</span>");

  });

  // A11Y0004: https://radancy.dev/magicbullet/a11y/#issue-0009 (HTML CLEANUP)

  document.querySelectorAll("input[type='checkbox']").forEach(function(input) {

    input.removeAttribute("autocomplete");

  });

  // Issue: All Search forms appear to have issue with validation message not being read back and focus not being applied to focus field.

  document.querySelectorAll('.search-location-error').forEach(function(error, i) {

    error.id = 'search-error-' + (i + 1);

    error.style.outline = '0 !important';

  });

  document.querySelectorAll('.search-location').forEach(function(location, i) {

    location.setAttribute('aria-describedby', 'search-error-' + (i + 1));

    location.setAttribute('aria-invalid', 'false');

  });

  document.querySelectorAll('.search-form button').forEach(function(button) {

    button.addEventListener('click', function() {

      document.querySelectorAll('.search-location-error').forEach(function(error) {

        error.removeAttribute('tabindex');

      });

      setTimeout(function() {

        var locationErrorVisible = document.querySelector('.search-location-error').style.display !== 'none';

        document.querySelectorAll('.search-location').forEach(function(location) {

          location.setAttribute('aria-invalid', locationErrorVisible ? 'true' : 'false');

          if (locationErrorVisible) {

            location.focus();

          }

        });

      }, 100);

    });

  });

  document.querySelectorAll('.search-location').forEach(function(location) {

    location.addEventListener('change', function() {

      var locationErrorVisible = document.querySelector('.search-location-error').style.display !== 'none';

      this.setAttribute('aria-invalid', locationErrorVisible ? 'true' : 'false');

      if (locationErrorVisible) {

        this.focus();

      }

    });

  });

  // Issue: Add unique ID to Search Form "legend" and aria-labelledby in parent group.

  document.querySelectorAll('.search-form .job-search-legend, .advanced-search-form .job-search-legend').forEach(function(legend, i) {

    legend.id = 'job-search-legend-' + (i + 1);

    legend.parentElement.setAttribute('aria-labelledby', 'job-search-legend-' + (i + 1));

  });

});

// Accessibility Patch: Global
  
function initGlobalPatch() {

  var magicBulletScript = document.getElementById("tmp-magic-bullet") ? document.getElementById("tmp-magic-bullet") : document.getElementById("radancy-magicbullet");

  // Global Issues

    // A11Y0001: https://radancy.dev/magicbullet/a11y/#issue-0001
    // A11Y0002: https://radancy.dev/magicbullet/a11y/#issue-0002
    // Note: Currently, this functionaly being overwritten can be found in the Seach Filters, though it may arrpar elsewhere. 

    var expandableParentBtn = document.querySelectorAll(".expandable-parent");

    expandableParentBtn.forEach(function(button) {

      // Set attribute on corrent element.

      button.setAttribute("aria-expanded", "false");

      // Remove aria-expanded from adjacent, non-interactive element.
    
      if (button.nextElementSibling) {
    
        button.nextElementSibling.removeAttribute("aria-expanded");
    
      }

      // New toggle functionality for newly added aria-expanded attribute.

      button.addEventListener("click", function() {

        if(button.getAttribute("aria-expanded") === "false") {

          button.setAttribute("aria-expanded", "true");

        } else {

          button.setAttribute("aria-expanded", "false");

        }

        // Always remove aria-expanded being added to adjacent, non-interactive element, by TB Core.

        if (button.nextElementSibling) {

          button.nextElementSibling.removeAttribute("aria-expanded");

        }

      });



    });

    // A11Y0003: https://radancy.dev/magicbullet/a11y/#issue-0003

    var missingAltAttributes = document.querySelectorAll("img:not([alt])");

    missingAltAttributes.forEach(function(img){

      img.setAttribute("alt", "");

    });

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

  // Search Forms 

    // A11Y0004: https://radancy.dev/magicbullet/a11y/#issue-0004

    var searchForm = document.querySelectorAll(".search-form, .advanced-search-form");

    searchForm.forEach(function(form){

      form.setAttribute("role", "search");

    });

  // Search Results & Job Description

    // A11Y0018: Custom "Save Job" button functionality

    var btnSaveJobs = document.querySelectorAll(".js-save-job-btn");

    btnSaveJobs.forEach(function(btn){

      // aria-pressed not working with type attribute on it, which makes sense.
      // TODO: See if still an issue in VO, too.
      // TODO: Add language support.

      btn.removeAttribute("type");
      btn.setAttribute("role", "button"); // iOS, NVDA bug, state not reading back so need to implicitly call role. Do not remove until support better.
      btn.setAttribute("aria-label", "Save Job");

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

  // Search Results: Applied Filters

    // A11Y00XX: 
    
      // The filters section has incorrect ARIA on it. Remove aria-hidden and aria-expanded.
      // Move aria-labelledby from ul to section wrapper, added region role.
      // Make remove buttons more contextually friendly to AT.
      // Adjust focus when button with focus is removed. Note: This is now handled by the product. See search.js. Open ticket. See https://wegmans-refresh2.runmytests.com/en/search-jobs?fl=6252001&glat=40.5751&glon=-75.51963 
      // TODO: Add language support to buttons.
      // TODO: Regarding aria-labelledby on section wrapper, see if contextual support good enough here. 
      // If it is, then may be able to remove aria-labelledby and region role. See https://www.w3.org/WAI/WCAG22/Techniques/html/H81
      // BUG: When disabled filter button is present and last filter button is pressed, focus is placed on checkbox in filter section.

    var appliedFilters = document.querySelectorAll(".search-results-options");

    appliedFilters.forEach(function(section){

      // Remove aria-labeledby from UL.

      var appliedFiltersList = section.querySelectorAll("ul[aria-labelledby]");

      appliedFiltersList.forEach(function(list){

        list.removeAttribute("aria-labelledby");

      });

      // Remove/Add ARIA to parent section warpper (.search-results-option)
    
      section.removeAttribute("aria-hidden");
      section.removeAttribute("aria-expanded");
      section.setAttribute("aria-labelledby", "applied-filters-label");
      section.setAttribute("role", "region");

      // Add ARIA label to each button that is not disabled.

      var btnSearchFilter = section.querySelectorAll(".filter-button:not([disabled])");

      btnSearchFilter.forEach(function(btn){
    
        btn.setAttribute("aria-label", "Remove " + btn.textContent + " filter");

      });

    });

    // A11Y0019: Pagination(s) in Search Results should really have an accName so it can be differentiated between other nav elements that may exist on page.
    // TODO: Add language support.

    var paginationNav = document.querySelectorAll(".pagination");

    paginationNav.forEach(function(nav){

      nav.setAttribute("aria-label", "Pagination");

    });

    // A11Y0020: Search Results pagination disabled button can be tabbed to (this is bad). To address this, we simply remove href. When removed, aria-hidden is not really needed, so we reove that, too!

    var paginationPage = document.querySelectorAll(".pagination-paging .disabled");

    paginationPage.forEach(function(page){

      page.removeAttribute("aria-hidden");
      page.removeAttribute("href");

    });

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

  // Issue: Remove role="status" from h1 and h2 elements

  $(".search-results h1, .search-results h2").removeAttr("role");

  // Issue: Remove tabindex from search-filter element. Only interactive elements should receive focus.

  $("#search-filters").removeAttr("tabindex", 0);

  // BUG: When tabindex 0 was removed, visible focus is now lost. Product team should be applying tabindex -1 in addition to focus.
  // For now, a hacky fix...

  $("#search-results").attr("tabindex", -1);

  // BUG: All section elements used for personbalization, appear to have tabindex="0" on them. These should not exist.

  $("section[data-module-type='Personalization']").removeAttr("tabindex");

  // BUG: Sitemap pages have tabindex on certain header. Inactive elements should nto receive focus.

  $(".job-location h2, .job-category h2").removeAttr("tabindex aria-expanded").removeClass("expandable-parent");

  // Issue: Job Lists should really have the location appear inside of a link so that job links with same title can be more descriptive and discernable.

  var a11yJobList = magicBulletScript.getAttribute("data-a11y-job-list");

  if(a11yJobList !== null) {

    $(".job-list .location, .job-list .date").each(function() {

      $(this).appendTo($(this).prev());

    });

  }

  // Issue: Cookie Management Page has some aria-describedby attributes on the page that do nothing. Remove.

  $("input[aria-describedby='cookieDescriptionIdAttr']").removeAttr("aria-describedby");

  // TODO: Add future fixes here.

}

// Accessibility Patch: Data Forms

function initDataFormPatch() {

  var dataForms = document.querySelectorAll(".data-form");

  dataForms.forEach(function(form){

    // A11YFORM001
    // Clutter. Removing empty instruction-text spans as they can sometimes cause undesired spacing issues.

    var instructionTexts = form.querySelectorAll(".instruction-text");

    instructionTexts.forEach(function(element) {

      if (element.textContent.trim() === "") {

        element.parentNode.removeChild(element);

      }

    });

    // A11YFORM002
    // Removing the CSS asterisk (see init.scss) because it reads out to assistive tech (AT) when added via content proprty. 
    // Including a span with aria-hidden so that it is not picked up by AT.
    // Note: May need to add another, visually hidden. required messages to this in the future.

    var requiredLabels = form.querySelectorAll(".form-field.required label");
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

    var ariaRequired = form.querySelectorAll(".form-field.required input:not([type='checkbox']), .form-field.required select, .form-field.required textarea");

    ariaRequired.forEach(function(element) {

      element.removeAttribute("aria-required");

    });

    // A11YFORM004
    // Issue: required="required" is XHTML serialization and may throw a11y validation issues if not set to blank or true.

    var requiredXHTML = form.querySelectorAll("*[required='required']");

    requiredXHTML.forEach(function(element) {

      element.setAttribute("required", "");

    });

    // A11YFORM005
    // Issue: Remove "role" from field-validation-error (it's not needed).

    var validationMsg = form.querySelectorAll(".field-validation-valid");

    validationMsg.forEach(function(element) {

      element.removeAttribute ("role");

    });

    // A11YFORM006
    // All required fields should include aria-invalid="false" on page load.

    var requiredFields = form.querySelectorAll(".form-field.required input, .form-field.required select");

    requiredFields.forEach(function(input) {

      input.setAttribute("aria-invalid", "false");

    });

    // A11YFORM007
    // The input-validation-error class is removed when leaving a field, but aria-invalid still remains set to true.

    var dataFormElement = form.querySelectorAll("input, select");

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

    var autoCompleteFirstName = form.querySelectorAll("input[name='FirstName']");

    autoCompleteFirstName.forEach(function(input) {

      input.setAttribute("autocomplete", "given-name");

    });

    // Last Name

    var autoCompleteLastName = form.querySelectorAll("input[name='LastName']");

    autoCompleteLastName.forEach(function(input) {

      input.setAttribute("autocomplete", "family-name");

    });

    // Email Address

    var autoCompleteEmailAddress = form.querySelectorAll("input[name='EmailAddress']");

    autoCompleteEmailAddress.forEach(function(input) {
      
      input.setAttribute("type", "email");
      input.setAttribute("autocomplete", "email");
      
    });

    // A11YFORM009
    // The "Add" button needs to be more explicit to AT.
    // TODO: Add language support.

    var addJobAlertButtons = form.querySelectorAll(".keyword-add");

    addJobAlertButtons.forEach(function(button) {

      button.setAttribute("aria-label", "Add Job Alert");

    });

    // A11YFORM010
    // The keyword list requires a more accessible grouping to better identify it.
    // TODO: Add language support.

    var keywordSelected = form.querySelectorAll(".keyword-selected");
    var keywordSelectedRegionClassName = "keyword-region";
    var keywordSelectedRegionClass = "." + keywordSelectedRegionClassName;
    var keywordSelectedRegionLabel = "Selected Job Alerts";

    keywordSelected.forEach(function(region) {

      var keywordSelectedRegion = document.createElement("div");
      keywordSelectedRegion.classList.add(keywordSelectedRegionClassName);
      keywordSelectedRegion.setAttribute("role", "region");
      keywordSelectedRegion.setAttribute("aria-label", keywordSelectedRegionLabel);

      // See if region we wish to append already exists.

      var getKeywordRegion = form.querySelector(keywordSelectedRegionClass);

      if(getKeywordRegion === null) {

        region.parentNode.insertBefore(keywordSelectedRegion, region);
        keywordSelectedRegion.appendChild(region);

      }

    });

    // A11YFORM011
    // Issue: The file upload remove button is a link with an href hash. This is awful, so let's remedy it by replacing it.

    var fileUploadButtons = form.querySelectorAll(".form-field input[name='Resume']");

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

    var emailConfirmation = form.querySelectorAll(".form-field.confirm-email");

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

    var captchaBadge = form.querySelector(".grecaptcha-badge");

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

    var signUpButtons = form.querySelectorAll("button[type='submit']");
    var signUpButtonLabel = "Sign Up for Job Alerts";

    signUpButtons.forEach(function(button) {

      button.setAttribute("aria-label", signUpButtonLabel);

    });

    // A11YFORM015
    // The form message has an inline tabindex="0" on it. This is not ideal as messages that receive focus should only do so temporarily and not when user tabs back to it.

    var formMessage = form.querySelector(".form-field.form-message b");

    if(formMessage) {

      formMessage.setAttribute("tabindex", "-1");

    }

    // A11YFORM016
    // The form message close link should really be a button, but for now we'll simply add a role.
    // TODO: Unbind or override current close event and add support for closing when Enter AND Spacebar is pressed.

    var formMessageButton = form.querySelector(".form-field.form-message a");

    if(formMessageButton) {

      formMessageButton.setAttribute("role", "button");

      var formMessageButtonIcon = document.createElement("span");
      formMessageButtonIcon.setAttribute("aria-hidden", "true");
      formMessageButtonIcon.classList.add("btn-close-success-message");

      formMessageButton.appendChild(formMessageButtonIcon);

    }

    // Form submission events

    form.addEventListener("submit", function(event) {

      event.preventDefault();

      // A11YFORM017
      // The Keyword Location field does not appear to have an aria-describedby on it when an error is returned, so we need to grab it from Keyword Category and dupe it here.

      var keyWordCategory = form.querySelector(".keyword-category");

      if(keyWordCategory) {

        var keyWordLocationDesc = keyWordCategory.getAttribute("aria-describedby");

        var keywordLocation = form.querySelector(".keyword-location");

        if(keywordLocation) {

          keywordLocation.setAttribute("aria-describedby", keyWordLocationDesc);

        }

      }

      // A11YFORM018
      // Now that we are including aria-invalid, we need to alter the values based on user input.

      var formInputs = form.querySelectorAll("input, select");

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