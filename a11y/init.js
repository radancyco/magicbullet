
/*!

  Radancy MagicBullet: Accessibility Patch

  Contributor(s):
  Michael "Spell" Spellacy

*/

(function(){

  var magicBulletScript = document.getElementById("tmp-magic-bullet") ? document.getElementById("tmp-magic-bullet") : document.getElementById("radancy-magicbullet");
  var a11yBody = document.body;

  // Data Attributes

  var a11yJobList = magicBulletScript.getAttribute("data-a11y-job-list");
  var a11ySearchDataList = magicBulletScript.getAttribute("data-a11y-search-datalist");

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magic-bullet-a11y");

  // Career Site Accessibility Fixes

  // Global Issues

  // https://radancy.dev/magicbullet/a11y/#issue-0001

  $(".expandable-parent").attr("aria-expanded", "false").next().removeAttr("aria-expanded");

  // https://radancy.dev/magicbullet/a11y/#issue-0002

  $(".expandable-parent").on("click", function() {

    $(this).attr('aria-expanded', function (i, attr) {

    	return attr == 'true' ? 'false' : 'true'

    });

    $(this).next().removeAttr("aria-expanded");

  });

  // https://radancy.dev/magicbullet/a11y/#issue-0006

  $(".social-share-items a").append(" <span class='wai'>(Opens in new tab)</span>");

  // Job Description Garbage

  // https://radancy.dev/magicbullet/a11y/#issue-0007

  $(".ats-description").find("[tabindex]:not([tabindex='0']):not([tabindex^='-'])").removeAttr("tabindex");

  // https://radancy.dev/magicbullet/a11y/#issue-0008

  $(".ats-description table").attr("role", "presentation");

  $(".ats-description *").removeAttr("face size title id"); // Remove useless attributes.

  $(".ats-description font").contents().unwrap(); // Remove font element.

  // Remove autocomplete from checkbox inputs (needs to be handled on AjaxComplete eventually).

  // https://radancy.dev/magicbullet/a11y/#issue-0009

  $("input[type=checkbox]").removeAttr("autocomplete");

  // Issue: All Search forms appear to have issue with validation message not being read back and focus not being applied to focus field.

  // Note: Multiple Search location errors, require unique ID's

  $(".search-location-error").each(function(i) {

    $(this).attr({

      "id": "search-error-" + (i + 1),
      "style": "outline: 0 !important"

    });

  });

  // Note: Multiple Search location fields, require unique aria-describedby

  $(".search-location").each(function(i) {

    $(this).attr({

      "aria-describedby": "search-error-" + (i + 1),
      "aria-invalid": "false"

    });

  });

  $(".search-form button").on("click", function(){

    $(".search-location-error").removeAttr("tabindex");

    setTimeout(function(){

      if($(".search-location-error").is(":visible")){

        $(".search-location").attr("aria-invalid", "true").focus();

      } else {

        $(".search-location").attr("aria-invalid", "false");

      }

    }, 100);

  });

  $(".search-location").on("change", function(){

      if($(".search-location-error").is(":visible")){

        $(this).attr("aria-invalid", "true").focus();

      } else {

        $(this).attr("aria-invalid", "false");

      }

  });

  // Issue: Add unique ID to Search Form "legend" and aria-labelledby in parent group.
  // Note: Currently only used on Wegmans

  $(".search-form .job-search-legend, .advanced-search-form .job-search-legend").each(function(i) {

    $(this).attr("id", "job-search-legend-" + (i + 1));
    $(this).parent().attr("aria-labelledby", "job-search-legend-" + (i + 1));

  });

  // Issue "Keyword Selectd list requires a heading"

  $(".data-form .keyword-selected").each(function( index ) {

    $(this).attr("aria-labelledby", "selected-keywords-" + (index + 1) + "");
    $("<div hidden id=selected-keywords-" + (index + 1) + ">Selected Job Alerts</div>").insertBefore($(this));

  });

  // Issue. Removing CSS asterick, including as span with aria-hidden.

  $(".data-form .form-field.required label").append(" <span class='ico-required-indicator' aria-hidden='true'>*</span>");

  // Issue: Include More Friendly Autocompletes

  // First Name

  $(".data-form input[name='FirstName']").attr("autocomplete", "given-name");

  // Last Name

  $(".data-form input[name='LastName']").attr("autocomplete", "family-name");

  // Email

  $(".data-form input[name='EmailAddress']").attr({

    "type":"email",
    "autocomplete": "email",

  });

  // Issue: All required fields should include aria-invalid="false" on page load

  $(".data-form .form-field.required input, .data-form .form-field.required select").attr("aria-invalid", "false");

  // Issue: We need to perform some additional form validation/manipulation after form is submitted (and on change)

  $(".data-form").on("submit", function() {

    setTimeout(function(){

        var ariaDescribedByCategory = $(".data-form .keyword-category").attr("aria-describedby");

        $(".data-form .keyword-location").attr("aria-describedby", ariaDescribedByCategory);

        $(".data-form input, .data-form select").each(function() {

          if($(this).hasClass("input-validation-error")) {

            $(this).attr("aria-invalid", "true");

          } else {

            $(this).attr("aria-invalid", "false");

          }

        });

    }, 100);

  });

  $(".data-form input, .data-form select").on("blur", function(){

      setTimeout(function(){

        if($(this).hasClass("input-validation-error")) {

          $(this).attr("aria-invalid", "true");

        } else {

          $(this).attr("aria-invalid", "false");

        }

      }, 250);

  });

  // Issue: The Job Search custom datalist is really horrible. Now that IE11 is not supported, we should begin using datalist instead.

  if(a11ySearchDataList !== null) {

    a11yBody.classList.add("a11y-search-location");

    var $searchLocation = $(".search-location");
    var $mindReaderResults = $(".mindreader-results");

    // Adding postal code now to satisify certain requirements, but may need to remove.

    // $searchLocation.attr("autocomplete", "postal-code");

    $searchLocation.attr("list", "search-location-datalist").after("<datalist id='search-location-datalist' class='search-location-datalist'></div>");

    var $searchLocationDatalist = $(".search-location-datalist");

    $searchLocation.on("keypress", function() {

      var $htmlStr = $mindReaderResults.find("a");
      var $cloneList = $htmlStr.clone();

      // Get all links from mindreader, clone them, make a new list.

      $searchLocationDatalist.html($cloneList);

      var newList = $searchLocationDatalist.find("a");

      // Grag each data-* from list and apply to new element (option)

      newList.each(function(){

        var $targetId = $(this).data("target-id");
        var $lat = $(this).data("lat");
        var $lon = $(this).data("lon");
        var $lp = $(this).data("lp");
        var $lt = $(this).data("lt");
        var $pc = $(this).data("pc");
        var $htmlText = $(this).text();
        $(this).replaceWith("<option data-lat=" + $lat + " data-lon=" + $lon + " data-lp=" + $lp + " data-lt=" + $lt + " data-pc=" + $pc + ">" + $htmlText + "</option>");

      });

    });

    $searchLocation.on("change", function() {

      var val = $(this).val();

      var lat = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lat");

      var lon = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lon");

      var lp = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lp");

      var lt = $searchLocationDatalist.find("option").filter(function() {

        return this.value == val;

      }).data("lt");

      $(this).attr({

        "data-lon": lon,
        "data-lat": lat,
        "data-lp": lp,
        "data-lt": lt

      });

    });

  }

  // Issue: Focus is lost when "Filtered by" button is clicked

  function setFilterButtonFocus() {

    $(".filter-button").on("click", function() {

      var selectedButtonIndex = $(".filter-button").index(this);

      setTimeout(function(){

        var remainingButtonIndex = $(".filter-button").length;

        // console.log(selectedButtonIndex)

        if(remainingButtonIndex) {

          if(selectedButtonIndex >= remainingButtonIndex) {

            $(".filter-button").last().focus();

          } else {

            $(".filter-button").eq(selectedButtonIndex).focus();

          }

        } else {

          $("#search-results-list ul a:first, #search-results-list table a:first").focus();

        }

      }, 1000);

    });

  }

  setFilterButtonFocus(); // Initial Page Load

  // Issue: Filter Buttons could be more firendly to screen readers

  function fixFilterButton() {

    $("button.filter-button").each(function() {

      $(this).attr("aria-label", "Remove " + $(this).text() + " filter");

    });

  }

  fixFilterButton(); // Initial Page Load

  function miscA11yFixes() {

    // https://radancy.dev/magicbullet/a11y/#issue-0003

    $("img:not([alt])").attr("alt", "");

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

    // if Google Translate exists, then fix...

    $(".goog-te-combo").attr("id", "goog-te-combo").before("<label class='wai' for='goog-te-combo'>Translate this page:</label>");

    // Add title to spinner

    $(".goog-te-spinner").append("<title>Spinner</title>");

    // Issue: Applied Filters section (Search Results) has inappropriate ARIA on it. Removing.

    $("#applied-filters").removeAttr("aria-hidden aria-expanded");

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

    if(a11yJobList !== null) {

      $(".job-list .location, .job-list .date").each(function() {

        $(this).appendTo($(this).prev());

      });

    }

    // Issue: Older versions of slick that do not inlcude the accessibility flag, have several issues. We will fry to fix many of them here
    // but recommend upgrading to AccessibleSlick.

    setTimeout(function(){

      $(".slick-prev:not([aria-label])").attr("aria-label", "Previous");
      $(".slick-next:not([aria-label])").attr("aria-label", "Next");

    }, 3000);

    // Issue: Cookie Management Page has some aria-describedby attributes on the page that do nothing. Remove.

    $("input[aria-describedby='cookieDescriptionIdAttr']").removeAttr("aria-describedby");

    // Issue: Some scripts drop in their owm meta viewport tags, that can be harmful to pinch and zoom. This is an effort to address that:

    $("meta[content*='user-scalable=no']").remove();

    // Issue: Various Altru Fixes

    $(".altru-content").each(function() {

	     var videoTitle = $(this).find(".altru-question-text").text();

	     $(this).find(".altru-video-player__video").attr("aria-label", videoTitle + " (Video)");

     });

     // Issue: Altru: Remove aria-label from <time> element. No proper role on <time>, so why inclkude a label?

     $(".altru-video-overlay time").removeAttr("aria-label");

     // Issue: Altru: Duplicate ID

     $("g[id='Artboard'], polygon[id='Star']").removeAttr("id");

     // Olivia Chatbot

     $("#toggle-olivia").attr("aria-label", "Chat with our recruiting assistant");

     // If cooke banner present, place focus on it. 

    // Removed following because causing issues with cookies. See https://jira.tmp.com/browse/UDS-5793 

     /* if($("#igdpr-button").length){

        $("#igdpr-button").focus();
   
     } */

  }

  $(document).ajaxStop(function() {

    setFilterButtonFocus();

    fixFilterButton();

    miscA11yFixes();

  });

  // Sometime we can only do things after Career Site has finished (slowly) loading it's portion of the DOM.

	setTimeout(function(){

    miscA11yFixes();

  }, 1000);

  // *** Accessibility Patch: Functions ***

  function saveJobButton() {

    var btnSaveJobs = document.querySelectorAll(".js-save-job-btn");

    btnSaveJobs.forEach(function(btn){

      // aria-pressed not working with type attribute on it, which makes sense.
      // TODO: See if still an issue in VO, too.

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

  }

  // *** Accessibility Patch: Observer ***
  
  function initA11yRepair() {

    console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");

    // Data Forms 

      // A11Y0020: The CAPTCHA textarea has no accName. Sites team really needs to validate their work before releasing new features. 

      var captchaResponse = document.querySelectorAll(".g-recaptcha-response");

      captchaResponse.forEach(function(captcha){

        captcha.setAttribute("aria-label", "Captcha");

      });

    // Job Location Map

      // A11Y0005: https://radancy.dev/magicbullet/a11y/#issue-0005
      // TODO: These would be better served as buttons, not links. Including role="button" here for now, but we need to add tab key support eventually.
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

      saveJobButton();

      // A11Y0019: Pagination(s) in Search Results should really have an accName so it can be differentiated between other nav elements that may exist on page.

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


      // TODO: Add future fixes here.

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

})();









