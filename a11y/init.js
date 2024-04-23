
/*!

  Radancy MagicBullet: Accessibility Patch

  Contributor(s):
  Michael "Spell" Spellacy

*/

function loadA11yPatch(url, callback) {

  "use strict";

  var a11yBody = document.body;

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magic-bullet-a11y");

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

  var a11yObserver = new MutationObserver(function() {

    // Clear the previous timeout
  
    clearTimeout(a11yObserver.timeout);
  
    // Set a timeout to run after NN milliseconds of no mutations
  
    a11yObserver.timeout = setTimeout(function() {
  
      // Run the function after content stops changing
  
      initA11yRepair();
  
    }, 800); // Adjust the timeout period as needed
  
  });
  
  // Configure the MutationObserver to watch for changes to the child nodes of the body
  
  var config = { childList: true, subtree: true };
  
  a11yObserver.observe(document.body, config);

}

// *** Accessibility Patch: Observer ***
  
function initA11yRepair() {

  console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");

  var magicBulletScript = document.getElementById("tmp-magic-bullet") ? document.getElementById("tmp-magic-bullet") : document.getElementById("radancy-magicbullet");

  // Global Issues

    // A11Y0003: https://radancy.dev/magicbullet/a11y/#issue-0003

    var missingAltAttributes = document.querySelectorAll("img:not([alt])");

    missingAltAttributes.forEach(function(img){

      img.setAttribute("alt", "");

    });

  // Data Forms 

    // A11Y0020: The CAPTCHA textarea has no accName. Sites team really needs to validate their work before releasing new features. 
    // TODO: Add language support.

    var captchaResponse = document.querySelectorAll(".g-recaptcha-response");

    captchaResponse.forEach(function(captcha){

      captcha.setAttribute("aria-label", "Captcha");

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

  // A11y Form Fixes

  // Issue: Remove aria-required from p element (it should not exist on this element) and various other elements.

  $(".data-form .form-field.required, .form-field.required input:not([type='checkbox']), .form-field.required select, .form-field.required textarea").removeAttr("aria-required");

  // Required="required" is XHTML serialization and may throw a11y validation issues if not set to blank or true.

  $(".data-form input[required='required'], .data-form select[required='required'], .data-form textarea[required='required']").prop("required", true);

  // Checkboxes missing due to reset above, so let's add them back

  $("input[type='checkbox'][aria-required='true']").prop("required", true).removeAttr("aria-required");

  // Issue: Remove "autocomplete" from select element.

  $(".data-form select").removeAttr("autocomplete");

  // Issue: Since input element is "valid", it requires no aria-describedy attribute, since there is no validation message to ever bind it to.

  $(".valid").removeAttr("aria-describedby");

  // Issue: Clutter, remove empty instruction-text spans

  $(".instruction-text").each(function() {

    if ($(this).is(":empty")){

        $(this).remove();

    }

  });

  // Issue: "Add" button should be more explicit.
  // Hack, this is only for english at the moment.

  $("html[lang='en'] .data-form .keyword-add").attr("aria-label", "Add Job Alert");

  // Issue: "Sign Up" button should be more explicit.
  // Hack, this is only for english at the moment.

  $(".data-form .form-field.submit button").attr("aria-label", "Sign Up for Job Alerts");

  // Issue: Clutter, remove unused elements from fields that are not required.

  /* $(".form-field:not(.required),").each(function() {

    $(this).find(".field-validation-valid").remove();

  }); */

  // Issue: For some odd reason the Location and Category inout fields have an aria-label on them. These should not exist on any form fields.
  // Note: The aria-label is also being appended with the label text AND the placeholder text!!!! Ex: aria-label="Select a Location eg: New York, Arizona..."

  $(".data-form input, .data-form select").removeAttr("aria-label");

  // Issue: Remove inline style on honeypot field and use hidden attribute instead

  $(".form-field.confirm-email").prop("hidden", true).removeAttr("aria-hidden style");

  // Issue: Remove aria-hidden from honeypot label and input. The parent element should hide this from all assistive tech.
  // Note: Not CSS dependent, so fields will always be hidden.

  $(".form-field.confirm-email label, .form-field.confirm-email input").removeAttr("aria-hidden");

  // Issue: Remove Role from field-validation-error (it's really not needed)

  $(".field-validation-valid").removeAttr("role");

  // Issue: The Job Alerts upload includes an aria-describedby with no associated ID when no Field Instructions are included.

  // TODO: Need to upodate this so it works with ajax callback.

  if(!$(".form-field input[name='Resume']").prev(".instruction-text").length) {

    // If upload instruction text does not exist, then remove aria-describedby

    $(".form-field input[name='Resume']").removeAttr("aria-describedby");

  }

  // The file upload remove button is a link with an href hash...can't have that, so let's change it....

  // First, get the text...

  var ResumeRemoveTxt = $(".form-field input[name='Resume']").next(".file-remove").text();

  // Now replace with a button

  $(".form-field input[name='Resume']").next(".file-remove").replaceWith("<button class='file-remove' style='display:none;'>" + ResumeRemoveTxt + "</button>");

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

loadA11yPatch("https://services.tmpwebeng.com/component-library/language-pack.js", function(){



  // *** Accessibility Patch: Static ***
  
  // A11Y0001: https://radancy.dev/magicbullet/a11y/#issue-0001

  var expandableParent = document.querySelectorAll(".expandable-parent")

  expandableParent.forEach(function(expand) {

    expand.setAttribute("aria-expanded", "false");
  
    if (expand.nextElementSibling) {
  
      expand.nextElementSibling.removeAttribute("aria-expanded");
  
    }

});

// https://radancy.dev/magicbullet/a11y/#issue-0002
document.querySelectorAll('.expandable-parent').forEach(function(element) {
  element.addEventListener('click', function() {
      var ariaExpanded = this.getAttribute('aria-expanded');
      this.setAttribute('aria-expanded', ariaExpanded === 'true' ? 'false' : 'true');
      if (this.nextElementSibling) {
          this.nextElementSibling.removeAttribute('aria-expanded');
      }
  });
});

// https://radancy.dev/magicbullet/a11y/#issue-0006
document.querySelectorAll('.social-share-items a').forEach(function(anchor) {
  anchor.insertAdjacentHTML('beforeend', ' <span class="wai">(Opens in new tab)</span>');
});

// https://radancy.dev/magicbullet/a11y/#issue-0009
document.querySelectorAll('input[type="checkbox"]').forEach(function(input) {
  input.removeAttribute('autocomplete');
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

// Issue "Keyword Selected list requires a heading"
document.querySelectorAll('.data-form .keyword-selected').forEach(function(selected, index) {
  selected.setAttribute('aria-labelledby', 'selected-keywords-' + (index + 1));
  var div = document.createElement('div');
  div.id = 'selected-keywords-' + (index + 1);
  div.textContent = 'Selected Job Alerts';
  div.hidden = true;
  selected.parentElement.insertBefore(div, selected);
});

// Issue. Removing CSS asterisk, including as span with aria-hidden.
document.querySelectorAll('.data-form .form-field.required label').forEach(function(label) {
  var span = document.createElement('span');
  span.className = 'ico-required-indicator';
  span.setAttribute('aria-hidden', 'true');
  span.textContent = '*';
  label.appendChild(span);
});

// Issue: Include More Friendly Autocompletes
// First Name
document.querySelectorAll('input[name="FirstName"]').forEach(function(input) {
  input.setAttribute('autocomplete', 'given-name');
});

// Last Name
document.querySelectorAll('input[name="LastName"]').forEach(function(input) {
  input.setAttribute('autocomplete', 'family-name');
});

// Email
document.querySelectorAll('input[name="EmailAddress"]').forEach(function(input) {
  input.setAttribute('type', 'email');
  input.setAttribute('autocomplete', 'email');
});

// Issue: All required fields should include aria-invalid="false" on page load
document.querySelectorAll('.data-form .form-field.required input, .data-form .form-field.required select').forEach(function(input) {
  input.setAttribute('aria-invalid', 'false');
});


// Get all elements with class "data-form"
var forms = document.querySelectorAll('.data-form');

// Add submit event listener to each form
forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        setTimeout(function() {
            // Get the aria-describedby attribute from the first keyword-category element
            var ariaDescribedByCategory = form.querySelector('.keyword-category').getAttribute('aria-describedby');

            // Set aria-describedby attribute for keyword-location elements
            var keywordLocationElements = form.querySelectorAll('.keyword-location');
            keywordLocationElements.forEach(function(element) {
                element.setAttribute('aria-describedby', ariaDescribedByCategory);
            });

            // Set aria-invalid attribute for input and select elements
            var formInputs = form.querySelectorAll('input, select');
            formInputs.forEach(function(input) {
                if (input.classList.contains('input-validation-error')) {
                    input.setAttribute('aria-invalid', 'true');
                } else {
                    input.setAttribute('aria-invalid', 'false');
                }
            });
        }, 100);
    });
});

  // Get all input and select elements inside elements with class "data-form"
var elements = document.querySelectorAll('.data-form input, .data-form select');

// Add blur event listener to each element
elements.forEach(function(element) {
    element.addEventListener('blur', function() {

        setTimeout(function() {
            // Check if the element has class "input-validation-error"
            if (this.classList.contains('input-validation-error')) {
              this.setAttribute('aria-invalid', 'true');
            } else {
              this.setAttribute('aria-invalid', 'false');
            }
        }, 250);
    });
});


});









