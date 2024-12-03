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

  // Note: Instead of having an observer to watch _everything_ in main (#content), consider setting up multiple observers per component.
  // This might be better and less prone to creating interference on site. Similar to MindReaders seperate observer.

  var targetNode = document.getElementById("content");

  // TODO: Rather than observe everything in main, only observe certain components on page that may be impacted. 
  
  var config = { childList: true, subtree: true };
  
  var a11yObserver = new MutationObserver(function(mutationsList) {

    // Log mutations
  
    // console.log("Mutations:", mutationsList);
    
    clearTimeout(a11yObserver.timeout);
  
    a11yObserver.disconnect();
    
    a11yObserver.timeout = setTimeout(function() {
  
      initDynamicPatch();
  
      a11yObserver.observe(targetNode, config); 
    
    }, 1000);
    
  });
  
  a11yObserver.observe(targetNode, config);

  initStaticPatch();
  
  // initDynamicPatch(); Causing issue with functions like fixGlobalDisclosure. The onclick event firing twice when button pressed. Need to look into further. 

  // MindReader Observers 

  var mindReaderNodes = document.querySelectorAll(".mindreader-status, #wrapper-sel-city");

  function callback(mutationList, mindReaderObserver) {
 
    fixMindReaderList();

  }

  mindReaderNodes.forEach(function(node) {
  
    var mindReaderObserver = new MutationObserver(callback);
    
    mindReaderObserver.observe(node, config);

  });

});

// Accessibility Patch: Dynamic
// Desc: These fixes address issues that occur both on page load and during dynamic DOM changes. 
// For instance, a script might add a new node to the DOM or refresh content on the page. When this happens, each fix will be reapplied to DOM.
  
function initDynamicPatch() {

  console.log("%c MagicBullet: Accessibility Patch v2.0 in use. ", "background: #6e00ee; color: #fff");

  fixAltAttribute();
  fixAppliedFilter();
  fixDataForm();
  fixGlobalDisclosure();
  fixIframeElement();
  fixInputElements();
  fixMindReaderInput();
  fixNewWindows()
  fixSaveJobButton();
  fixSearchFilters();
  fixSearchResults();
  fixSearchPagination();

}

// Accessibility Patch: Static
// Desc: These fixes address issues that occur on page load only.

function initStaticPatch() {

  fixAltAttribute();
  fixAdvancedSearchForm();
  fixCookieManagement();
  fixJobDescription();
  fixJobList();
  fixJobLocation(); 
  fixJobMap();
  fixSearchForm();
  fixSitemap();
  fixSocialShare();

}

// Accessibility Patch: Advanced Search Form 

function fixAdvancedSearchForm() {

  var searchForm = document.querySelectorAll(".advanced-search-form");

  searchForm.forEach(function(form, i){

    var formID = (i + 1); // Not used (yet).
    var searchFormFields = form.querySelector(".advanced-search-form-fields");

    if(searchFormFields) {

      // Fix: Remove aria-expanded from .advanced-search-form-fields.

      searchFormFields.removeAttribute("aria-expanded");

    }

  });

}

// Accessibility Patch: Alt Attribute (Utility)

function fixAltAttribute() {

  // Fix: Look for images on page that do not contain an alt attribute and add one dynamically.
  // Fix: Alt text with spaces in them are not ideal and even get picked up by certain linters as an issue. 

  var allImages = document.querySelectorAll("img");

  allImages.forEach(function(img){

    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {

      img.setAttribute("alt", "");
    }

  });

  // Fix: While we are here, we may as well remove the alt attribute mistakenly placed on the source element of the image module. 

  var allSource = document.querySelectorAll("source");

  allSource.forEach(function(source){

    source.removeAttribute("alt");
 
  });

}

// Accessibility Patch: Applied Filter

function fixAppliedFilter() {

  var appliedFilters = document.querySelectorAll(".search-results-options");

  appliedFilters.forEach(function(filter){

    var appliedFiltersList = filter.querySelectorAll("ul[aria-labelledby]");
    var btnSearchFilter = filter.querySelectorAll(".filter-button:not([disabled])");

    // Fix: Remove aria-labeledby from UL

    appliedFiltersList.forEach(function(list){

      list.removeAttribute("aria-labelledby");

    });

    // Fix: Remove aria-hidden and aria-expanded and add aria-describedby and role to parent element (.search-results-option)
    // TODO: Regarding aria-labelledby on section wrapper, see if contextual support good enough here. 
    // If it is, then we may be able to remove aria-labelledby and region role entirely. See https://www.w3.org/WAI/WCAG22/Techniques/html/H81
  
    filter.removeAttribute("aria-hidden");
    filter.removeAttribute("aria-expanded");
    filter.setAttribute("aria-labelledby", "applied-filters-label");
    filter.setAttribute("role", "region");

    // Fix: Add aria-label to each button that is not disabled. Include a better label that helps identify the functionality of the button.
    // TODO: Add langauge suppoprt.
    // BUG: When disabled filter button is present and last filter button is pressed, focus is placed on checkbox in filter section.

    btnSearchFilter.forEach(function(btn){
  
      btn.setAttribute("aria-label", "Remove " + btn.textContent + " filter");

    });

  });

}

// Accessibility Patch: Cookie Management

function fixCookieManagement() {

  // Fix: Remove aria-describedby="cookieDescriptionIdAttr" from each input element.
  // Note: To fix, have product add @ to input aria-describedby. See https://app.screencast.com/9dzk8ozq864Pc (Thanks Paul!)

  var cookieDescriptionIdAttr = document.querySelectorAll("input[aria-describedby='cookieDescriptionIdAttr']");

  cookieDescriptionIdAttr.forEach(function(input) {

    input.removeAttribute("aria-describedby"); 

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
    var autoCompleteAddress = form.querySelectorAll("input[name='StreetAddress']");
    var autoCompleteCity = form.querySelectorAll("input[name='City']");
    var autoCompleteEmailAddress = form.querySelectorAll("input[name='EmailAddress']");
    var autoCompletePhoneNumber = form.querySelectorAll("input[name='MobilePhone']");
    var autoCompleteZipCode = form.querySelectorAll("input[name='PostalCode']");
    var autoCompleteStateProvince = form.querySelectorAll("select[name='Custom-92392']"); // Targeing custom filed; need better way to handle this, probably product side fix eventually.
    var addJobAlertButtons = form.querySelectorAll(".keyword-add");
    var keywordSelected = form.querySelectorAll(".keyword-selected");
    var fileUploadButtons = form.querySelectorAll(".form-field input[name='Resume']");
    var emailConfirmation = form.querySelectorAll(".form-field.confirm-email");
    var captchaBadge = form.querySelector(".grecaptcha-badge");
    var signUpButtons = form.querySelectorAll("button[type='submit']");
    var formMessage = form.querySelector(".form-field.form-message b");
    var formMessageButton = form.querySelector(".form-field.form-message a");
    var keyWordCategory = form.querySelector(".keyword-category");
    var formInputs = form.querySelectorAll("input, select");

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

    var iconClassName = "ico-required-indicator";
    var iconClass = "." + iconClassName;

    requiredLabels.forEach(function(label) {

      // Fix: Remove textNodes that are inline astericks, instead of using a pseudo-element. 

      var labelTextNode = label.childNodes[0]; 

      if (labelTextNode && labelTextNode.nodeType === Node.TEXT_NODE) {

        var cleanedText = labelTextNode.nodeValue.trim().replace("*", "");

        // Update the text node without the asterisk

        labelTextNode.nodeValue = cleanedText;

      }

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

    // Fix: Remove "role" from field-validation-error (it's not needed).

    validationMsg.forEach(function(element) {

      element.removeAttribute ("role");

    });

    // Fix: All required fields should include aria-invalid="false" on page load.

    requiredFields.forEach(function(input) {

      input.setAttribute("aria-invalid", "false");

    });

    // Fix: The input-validation-error class is removed when leaving a field, but aria-invalid remains set to true, so we address this by listening for blur event.

    // Add blur event listener to each element

    dataFormElement.forEach(function(element) {

      element.addEventListener("blur", function() {

        setTimeout(function() {

          if (element.classList.contains("input-validation-error")) {

            // element.setAttribute("aria-invalid", "true");

          } else {

            //  element.setAttribute("aria-invalid", "false");

          }

        }, 100);

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
    // TODO: Add language support.

    addJobAlertButtons.forEach(function(button) {

      button.setAttribute("aria-label", "Add Job Alert");

    });

    // Fix: The keyword list requires a more accessible grouping to better identify it; adding proper role and accName, etc.
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

      var getKeywordRegion = form.querySelector(keywordSelectedRegionClass);

      if(getKeywordRegion === null) {

        region.parentNode.insertBefore(keywordSelectedRegion, region);
        keywordSelectedRegion.appendChild(region);

      }

    });

    // Fix: The file upload remove button is a link with an href hash. This is awful, so let's remedy it by replacing it with a button.

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

    // Fix: Remove inline style on honeypot field and use hidden attribute instead.

    emailConfirmation.forEach(function(element) {

      element.setAttribute("hidden", "");
      element.removeAttribute ("aria-hidden");
      element.removeAttribute("style");

      // Clean-up: Remove aria-hidden from honeypot label and input. The parent element should hide this from all assistive tech without need to hide individually.

      var emailConfirmationFields = element.querySelectorAll("label, input");

      emailConfirmationFields.forEach(function(item) {

        item.removeAttribute ("aria-hidden");

      });

    });

    // Fix: Adding an accName to textarea, removing iframe garbage, and moving captcha to end of form to address tab order. It should not exist before submit button.

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

    }

    // Fix: The "Sign Up" button needs to be more explicit to AT.
    // TODO: Add language support.

    var signUpButtonLabel = "Sign Up for Job Alerts";

    signUpButtons.forEach(function(button) {

      button.setAttribute("aria-label", signUpButtonLabel);

    });

    // Fix: The form message has an inline tabindex="0" on it. This is not ideal as messages that receive focus should only do so temporarily and not when user tabs back to it.

    if(formMessage) {

      formMessage.setAttribute("tabindex", "-1");

    }

    // Fix: The form message close link should really be a button, but for now we'll simply add a role.
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

      console.log("hello");

      event.preventDefault();

      // Fix: The Keyword Location field does not appear to have an aria-describedby on it when an error is returned, so we need to grab it from Keyword Category and dupe it here.

      if(keyWordCategory) {

        var keyWordLocationDesc = keyWordCategory.getAttribute("aria-describedby");

        var keywordLocation = form.querySelector(".keyword-location");

        if(keywordLocation) {

          keywordLocation.setAttribute("aria-describedby", keyWordLocationDesc);

        }

      }

      // Fix: Now that we are including aria-invalid, we need to alter the values based on user input.

      console.log("hello");

      formInputs.forEach(function(input) {

        if (input.classList.contains("input-validation-error")) {

          console.log("true");

          input.setAttribute("aria-invalid", "true");

        } else {

          console.log("false");

          input.setAttribute("aria-invalid", "false");

        }

      });

    });

  });

}

// Accessibility Patch: Global Disclosure

function fixGlobalDisclosure() {

  var expandableParentBtn = document.querySelectorAll(".expandable-parent");

  expandableParentBtn.forEach(function(button) {

    // Fix: See if element is already open, set aria-expanded state to true if it is.

    if(button.classList.contains("expandable-child-open")) {

      button.setAttribute("aria-expanded", "true");
  
    } else {

      button.setAttribute("aria-expanded", "false");

    }

    // Fix: Remove aria-expanded from adjacent, non-interactive element.
  
    if (button.nextElementSibling) {
  
      button.nextElementSibling.removeAttribute("aria-expanded");
      button.nextElementSibling.removeAttribute("aria-hidden");
  
    }

    // Fix: New toggle functionality for newly added aria-expanded attribute.

    button.addEventListener("click", function() {

      var isExpanded = this.getAttribute("aria-expanded") === "true";

      this.setAttribute("aria-expanded", isExpanded ? "false" : "true");

      // Fix: Remove aria-expanded, aria-hidden being added to adjacent, non-interactive element, by CS Core.

      if (this.nextElementSibling) {

        this.nextElementSibling.removeAttribute("aria-expanded");
        this.nextElementSibling.removeAttribute("aria-hidden");

      }

    });

  });

}

// Accessibility Patch: Iframe Elements

function fixIframeElement() {

  // Fix: Find YouTube embeds that may be missing the title attribute and add a generic one.

  var missingTitleAttribute = document.querySelectorAll("iframe[src*='https://www.youtube.com/']:not([title]");

  missingTitleAttribute.forEach(function(title){

    title.setAttribute("title", "Youtube video player");

  });

}

// Accessibility Patch: Input Elements (Utility)

function fixInputElements() {

  // Fix: Input elements with type of "checkbox" should not contain autocomplete as it is not a text or select field, so we need to remove.

  var inputCheckBox = document.querySelectorAll("input[type='checkbox']");

  inputCheckBox.forEach(function(input) {

    input.removeAttribute("autocomplete");

  });

}

// Accessibility Patch: Mindreader Combobox

function fixMindReaderInput() {

  var comboBoxInput = document.querySelectorAll(".search-location, .keyword-location");

  comboBoxInput.forEach(function(input) {


    // Precompute IDs and frequently used elements
    
    var inputId = input.getAttribute("id");
    var label = document.querySelector("label[for=" + inputId + "]");
    var mindReaderID = inputId + "-mindreader";
    var mindReader = document.getElementById(mindReaderID);
    var mindReaderStatus = document.getElementById(inputId + "-mindreader-status");

    // Set Autocomplete Description 

    var autoCompleteID = document.getElementById("autocomplete-message-" + inputId);

    if (!autoCompleteID) {

      var autoCompleteMessage = document.createElement("span");
      autoCompleteMessage.setAttribute("id", "autocomplete-message-" + inputId);
      autoCompleteMessage.setAttribute("hidden", "");
      autoCompleteMessage.textContent = "When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.";
      input.parentNode.appendChild(autoCompleteMessage);

    }

    // Fix: Set unique ID on label

    if(label) {

      label.setAttribute("id", inputId + "-label");

    }

    // Fix: Prep Comboboxes with proper ARIA
    
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-haspopup", "listbox");
    input.setAttribute("aria-expanded", "false");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-controls", mindReaderID);

    var currentDescribedBy = input.getAttribute("aria-describedby");

    var newDescriptionId = "autocomplete-message-" + inputId;

    if (currentDescribedBy) {

      if (!currentDescribedBy.includes(newDescriptionId)) {

        input.setAttribute("aria-describedby", currentDescribedBy + " " + newDescriptionId);

      }
    
    } else {
      
      input.setAttribute("aria-describedby", newDescriptionId);
    
    }

    // Fix: Update input as needed based on class presence
    
    function checkInput() {
    
      var isResultsOpen = input.classList.contains("mindreader-results-open");
    
      input.setAttribute("aria-expanded", isResultsOpen ? "true" : "false");
    
      if (!isResultsOpen) {
    
        input.removeAttribute("aria-activedescendant");
    
      }
    
    }

    // Function to check the active class in combobox list
    
    function checkActiveClass() {
    
      var activeItem = mindReader.querySelector("a.active"); 
      
      // BUG: See https://kpmg.runmytests.eu, Dropdown works initially, but on second try, does not apper to work correctly. Throwing folling, can't find mindReader ID. 
      // Uncaught TypeError: Cannot read properties of null (reading 'querySelector') at HTMLDocument.checkActiveClass (init.js:720:35)
    
      if (activeItem) {
    
        // Get li ID
    
        var listID = activeItem.parentElement.getAttribute("id");
        
        // Remove redundant screen reader announcements
    
        mindReaderStatus.textContent = "";

        // Pass selected ID to aria-activedescendant
    
        input.setAttribute("aria-activedescendant", listID);
    
      }
    
    }

    // Fix: Use MutationObserver to watch class changes for timing issues
    
    const inputObserver = new MutationObserver(function(mutationsList) {
    
      mutationsList.forEach(function(mutation) {
    
        if (mutation.attributeName === "class") {
    
          checkInput(); // Check class and update aria-expanded
    
        }
    
      });
    
    });

    inputObserver.observe(input, { attributes: true });

    // Add event listener for when focus leaves the input field (focusout)
    
    input.addEventListener("focusout", function() {
    
      checkInput();  // Update aria-expanded to false
    
    });

    // Listen for both keydown and keyup events
    
    document.addEventListener("keydown", checkActiveClass); 
    document.addEventListener("keyup", checkActiveClass);

  });

}

// Accessibility Patch: Mindreader List

function fixMindReaderList() {

  // Fix: Add role of listbox to each UL

  var mindReaderLists = document.querySelectorAll(".mindreader-results, .typeahead");

  mindReaderLists.forEach(function(list, index) {

    // Precompute list attributes

    var listID = list.getAttribute("id");
    var ariaLabelledBy = listID.replace("-mindreader", "-label");

    // Add ARIA attributes to each list

    list.setAttribute("role", "listbox");
    list.setAttribute("aria-labelledby", ariaLabelledBy);

    // Process each list item

    var items = list.querySelectorAll("li");

    items.forEach(function(item, itemIndex) {

      // Generate unique IDs for options

      var optionID = "combobox-item-" + (index + 1) + "-" + (itemIndex + 1);

      // Add role and ID to each item

      item.setAttribute("role", "option");
      item.setAttribute("id", optionID);

    });

  });

}

// Accessibility Patch: Job Description (Utility)

function fixJobDescription() {

  var atsDescription = document.querySelectorAll(".ats-description");

  atsDescription.forEach(function(desc) {

    // Fix: Remove tabindex attribute from elements within .ats-description that have tabindex attribute not equal to "0" or starting with "-""

    desc.querySelectorAll("[tabindex]:not([tabindex='0']):not([tabindex^='-'])").forEach(function(tabindex) {
  
      tabindex.removeAttribute("tabindex");

    });

    // Fix: Add role="presentation" to tables within .ats-description

    desc.querySelectorAll("table").forEach(function(table) {
  
      table.setAttribute("role", "presentation");

    });

    // Fix: Remove useless attributes from all elements within .ats-description

    desc.querySelectorAll("*").forEach(function(element) {
  
      element.removeAttribute("face");
      element.removeAttribute("size");
      element.removeAttribute("title");
      element.removeAttribute("id");

    });

    // Fix: Remove <font> element and unwrap its contents within .ats-description

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

  // Fix: Move location in into Job List link.

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

  // Fix: Job map links should really be buttons, not links. Including role="button" for now, but we need to add spacebar key support eventually.
  // Fix: Links should never open in new windows without an exceptional reason, so removing target attribute.

  var mapButton = document.querySelectorAll(".job-map-nearby a");

  mapButton.forEach(function(btn){

    btn.setAttribute("role", "button");
    btn.removeAttribute("target");

  });

  // Fix: Google Form Related Fixes on Job Location Pages

  var mapFormInputs = document.querySelectorAll(".job-map-directions input");

  // Clean-up: Remove aria-required from various elements. This attribute is sometimes flagged in automated testing and just the boolean required attribute is now recommended.
  // Clean-up: required="required" is XHTML serialization and may throw a11y validation issues if not set to blank or true.
 
  mapFormInputs.forEach(function(element) {
    
    element.removeAttribute("aria-required");
    element.setAttribute("required", "");
  
  }); 

  // TODO: The "Search Nearby" and "Get Directions" sections should be regions with accNames.
  // TODO: Include Wegmans functionality to skip over Google Map.

}

// Accessibility Patch: Job Map

function fixJobMap() {

  var jobMapInputs = document.querySelector("#sel-state, #tbx-zip")
  var jobMapCityWrapper = document.querySelector("#wrapper-sel-city");

  if (jobMapInputs && jobMapCityWrapper) {

    // Since the select is blank on page load, it should not be shown until action taken in either the state or zip dropdowns. 

    jobMapCityWrapper.setAttribute("hidden", "");

    jobMapInputs.addEventListener("change", function() {

      jobMapCityWrapper.removeAttribute("hidden");

    });

  }

}

// Accessibility Patch: Remove New Windows

function fixNewWindows() {

  // Fix: Not all links should open in a new window, nor are they required too for SEO purposes (the usual justification given). This is an effort to alleviate this issue and remove target="_blank" where it is not required. 

  var targetLinks = document.querySelectorAll("footer a:not([href$='.pdf']):not(.target)");

  targetLinks.forEach(function(link){

    link.removeAttribute("target");

  });

}

// Accessibility Patch: Save Job Button

function fixSaveJobButton() {

  var btnSaveJobs = document.querySelectorAll(".js-save-job-btn");

  btnSaveJobs.forEach(function(btn){

    // Fix: Custom label needed to override the text toggle that delivery often adds (or removes). Text changes should never be used to convey state.
    // TODO: Add language support.

    btn.setAttribute("aria-label", "Save Job");

    // Fix: iOS, NVDA bug, state not reading back so need to implicitly add a role of "button" and remove type attribute. Do not remove until support better.

    btn.removeAttribute("type");
    btn.setAttribute("role", "button");

    // Fix: aria-pressed required, which will properly convey state of the button.
  
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

    // Fix: Our primary search form should include a distinct role so that it can aid in helping assistive technology users navigate the page, so adding role="search"

    form.setAttribute("role", "search");

    if(searchFormFields) {

      // Fix: Our primary search form should provide a better group description for the fields at hand. This can be achieved by adding a div with a class of "job-search-legend" (a heading should not be used) and the following script will take care of adding any needed associations by either adding aria-describedby or aria-label, with appropriate IDs.
    
      searchFormFields.setAttribute("role", "group");

      // Fix: Remove aria-expanded from .search-form-fields. 

      searchFormFields.removeAttribute("aria-expanded");

    }

    if(searchFormLegend) {

      // Think of this as a fieldset and legend element.

      searchFormFields.setAttribute("aria-labelledby", "job-search-legend-" + formID);
      searchFormLegend.setAttribute("id", "job-search-legend-" + formID);

    } else {

      // If the class (.job-search-legend) is not present then simply add a label of "Search Jobs" to the div wrapping the form elements (.search-form-fields)

      searchFormFields.setAttribute("aria-label", "Search Jobs");

    }

    // Fix: The way in which the validation is currently handled requires improvement to aid those using assistive technology and keyboard. Here we need to include aria-invalid and aria-describedby to the locations field and apply custom validation as well, so that keyboard users do not need to tab backwards to return to the locations field, which is initiating the error.

    if(searchFormLocationInput) {

      // Add aria-describedby and aria-invalid to the locations field. 

      searchFormLocationInput.setAttribute("aria-describedby", "search-error-" + formID);
      searchFormLocationInput.setAttribute("aria-invalid", "false");

      // Validate the locations field when change is made to it.

      searchFormLocationInput.addEventListener("change", function() {

        accessibleValidation();
  
      });

    }

    // Fix: Apply a unique ID to the error message. This is what locations field will read when focus is brought back to it, thanks to aria-describedby.

    if(searchFormLocationError) {

      searchFormLocationError.setAttribute("id", "search-error-" + formID);

    }

    // Fix: When search button is pressed, fire off custom validation. 

    searchFormSubmit.addEventListener("click", function() {

      accessibleValidation();

    });

    // Fix: Remove aria-hidden from the location pin. Often this is visually displayed, but aria-hidden is still present.

    if(searchFormLocationPin) {

      searchFormLocationPin.removeAttribute("aria-hidden");

    }

  });

}

// Accessibility Patch: Search Filters

function fixSearchFilters() {

  var searchFilters = document.getElementById("search-filters");

  if(searchFilters) {

    // Fix: Add role and accName to Search Filter section. 
    // TODO: Add langauge support.
    
    searchFilters.setAttribute("role", "region");
    searchFilters.setAttribute("aria-label", "Search Filter");

    // TODO: It would be great if we could use aria-labelledby instead of aria-label as accName for region so that we would not requre custom translation, but heading has no distinct class to leverage. Look into adding unique ID to h2 instead maybe?

    // Fix: Each section element (`.expandable`) should contain a role of "group" as well as an accName. We will need to add an ID to each button for aria-labelledby.

    var sectionElement = searchFilters.querySelectorAll(".expandable");

    sectionElement.forEach(function(section){

      var sectionButtonID = section.querySelector(".expandable-parent").getAttribute("id");

      section.setAttribute("role", "group");
      section.setAttribute("aria-labelledby", sectionButtonID);

    });

  }

}

// Accessibility Patch: Search Results

function fixSearchResults() {

  // Fix: When tabindex 0 was removed, visible focus is now lost. Product team should be applying tabindex -1 in addition to focus.
  // TODO: This may not be needed. Look into further.

  var searchResults = document.getElementById("search-results");

  if(searchResults) {

    searchResults.setAttribute("tabindex", "-1");

  }

}

// Accessibility Patch: Search Results Pagination

function fixSearchPagination() {

  var pagination = document.querySelectorAll(".pagination");

  pagination.forEach(function(pgn){

    // Fix: Pagination(s) in Search Results should really have an accName so it can be differentiated between other nav elements that may exist on page.
    // TODO: Add language support.

    pgn.setAttribute("aria-label", "Pagination");

    // Fix: Search Results pagination disabled button can be tabbed to (this is bad). To address this, we simply remove href. When removed, aria-hidden is not really needed, so we remove that, too!

    var controls = pgn.querySelectorAll(".pagination-paging .disabled");

    controls.forEach(function(link){

      link.removeAttribute("aria-hidden");
      link.removeAttribute("href");

    });

  });

}

// Accessibility Patch: Sitemap

function fixSitemap() {

  // Fix: Remove `tabindex`, `aria-expanded`, and `.expandable-parent` from `.job-location h2` and `.job-category h2`.
  // TODO: Investigate possibly removing this. Tabindex may have been addressed by product. 

  var sitemapHeadings = document.querySelectorAll(".job-location h2, .job-category h2");

  sitemapHeadings.forEach(function(heading) {

    heading.removeAttribute("tabindex");
    heading.removeAttribute("aria-expanded");
    heading.classList.remove("expandable-parent");

  });

}

// Accessibility Patch: Social Share

function fixSocialShare() {

  // Fix: Append the following element and helper text, `<span class="wai visually-hidden">(Opens in new tab)</span>`, to each `.social-share-items a` element.

  // TODO: Add language support.

  var socialShareLinks = document.querySelectorAll(".social-share-items a");

  socialShareLinks.forEach(function(link) {

    link.insertAdjacentHTML("beforeend", " <span class='wai visually-hidden'>(Opens in new tab)</span>");

  });

}
