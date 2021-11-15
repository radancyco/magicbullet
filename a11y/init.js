
// Radancy: Accessibility Patch
// Developer(s): Michael "Spell" Spellacy, Twitter: spellacy, GitHub: michaelspellacy, michael.spellacy[at]radancy.com

(function(){

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var a11yBody = document.body;

  // Data Attributes

  var a11yJobList = magicBulletScript.getAttribute("data-a11y-job-list");
  var a11ySearchDataList = magicBulletScript.getAttribute("data-a11y-search-datalist");

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magic-bullet-a11y");

  // TalentBrew Accessibility Fixes

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0001

  $(".expandable-parent").attr("aria-expanded", "false").next().removeAttr("aria-expanded");

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0002

  $(".expandable-parent").on("click", function() {

    $(this).attr('aria-expanded', function (i, attr) {

    	return attr == 'true' ? 'false' : 'true'

    });

    $(this).next().removeAttr("aria-expanded");

  });

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0003

  $("img:not([alt])").attr("alt", "");

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0005

  $(".job-map-nearby a").removeAttr("target");

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0006

  $(".social-share-items a").append(" <span class='wai'>(Opens in new tab)</span>");

  // Job Description Garbage

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0007

  $(".ats-description").find("[tabindex]:not([tabindex='0']):not([tabindex^='-'])").removeAttr("tabindex");

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0008

  $(".ats-description table").attr("role", "presentation");

  $(".ats-description *").removeAttr("face size title id").html(function (i, html) {

      return html.replace(/&nbsp;/g, ""); // Remove nbsp;

  });

  $(".ats-description font").contents().unwrap(); // Remove font element.

  // Remove autocomplete from checkbox inputs (needs to be handled on AjaxComplete eventually).

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0009

  $("input[type=checkbox]").removeAttr("autocomplete");

  // Future Enhancement

  // Issue: We need to perform some additional form validation/manipulation after form is submitted

  /* $(".data-form").on("submit", function() {

    console.log ("Something accessible has happened");

  }); */

  // https://radancy.dev/tmp-magic-bullet/a11y/#issue-0004

  $(".search-form").attr("role", "search");

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

  $(".search-form .job-search-legend").each(function(i) {

    $(this).attr("id", "job-search-legend-" + (i + 1));
    $(this).parent().attr("aria-labelledby", "job-search-legend-" + (i + 1));

  });

  // Issue: The Job Search custom datalist is really horrible. Now that IE11 is not supported, we should begin using datalist instead.

  if(a11ySearchDataList !== null) {

    a11yBody.classList.add("a11y-search-location");

    var $searchLocation = $(".search-location");
    var $mindReaderResults = $(".mindreader-results");

    $searchLocation.attr("autocomplete", "postal-code"); // Adding postal code now to satisify certain requirements, but may need to remove.

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

  // Issue: Search Results pagination disabled button can be tabbed to (this is bad). To address this, we simply remove href. When removed, aria-hidden is not really needed, so we reove that, too!

  function fixDisabledButton() {

    $(".pagination-paging .disabled").removeAttr("aria-hidden href");

  }

  fixDisabledButton(); // Initial Page Load

  // Issue: The search navigation is often style not to look like a form and submit button is removed
  // So we need to strip this functionality and simply show text.

  function noFormPagination() {

    var pageStatusText = $(".pagination-current-label span").text() + " " + $(".pagination-current").val() + " " + $(".pagination-total-pages").text();

    var pageStatus = pageStatusText.trim();

    // While we are in here, let's indicate to screen readers what page they are on - cool!

    if (pageStatus !== "undefined"){

      $("#search-results").attr("aria-label", pageStatus);

    }

    if($(".pagination-no-form").length) {

      if(!$(".pagination-page-status").length) {

        $(".pagination-page-count").append("<p class='pagination-page-status' tabindex='0'>" + pageStatus + "</p>");

        $(".pagination-no-form").remove();

      }

    }

  }

  noFormPagination(); // Initial Page Load

  // Issue: The "Save Jobs" button has accessibility issues.

  function saveJobButton() {

    // Save Job for later

    var savedJobs = document.querySelectorAll("[data-a11y-saved-button]");

    for (var i = 0; i < savedJobs.length; i++) {

      savedJobs[i].setAttribute("type", "button"); // Needed for VoiceOver :-(

      if(savedJobs[i].dataset.jobSaved === "true") {

        savedJobs[i].setAttribute("aria-pressed", "true");

      } else {

        savedJobs[i].setAttribute("aria-pressed", "false");

      }

      savedJobs[i].addEventListener("click", function() {

        if(this.dataset.jobSaved === "true") {

          this.setAttribute("aria-pressed", "false");

        } else {

          this.setAttribute("aria-pressed", "true");

        }

      });

    }

  }

  saveJobButton(); // Initial Page Load

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

      $(this).attr("aria-label", "Remove " + $(this).text());

    });

  }

  fixFilterButton(); // Initial Page Load

  function miscA11yFixes() {

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

    // Issue: Clutter, remove unused elements from fields that are not required.

    /* $(".form-field:not(.required),").each(function() {

      $(this).find(".field-validation-valid").remove();

    }); */

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

    $("section[data-selector-name='joblist']").removeAttr("tabindex");

    // BUG: Sitemap pages have tabindex on certain header. Inactive elements should nto receive focus.

    $(".job-location h2, .job-category h2").removeAttr("tabindex aria-expanded").removeClass("expandable-parent");

    // Issue: Job Lists should really have the location appear inside of a link so that job links with same title can be more descriptive and discernable.

    if(a11yJobList !== null) {

      $(".job-list .location, .job-list .date").each(function() {

        $(this).appendTo($(this).prev());

      });

    }

    // Issue: Pagination in Search Results should really have a label so it can be differentiated between other navs on page.

    $(".pagination").attr("aria-label", "Pagination");

  }

  $(document).ajaxStop(function() {

    noFormPagination();

    fixDisabledButton();

    saveJobButton();

    setFilterButtonFocus();

    fixFilterButton();

    miscA11yFixes();

  });

  // Sometime we can only do things after TB has finished (slowly) loading it's portion of the DOM.

	setTimeout(function(){

    miscA11yFixes();

  }, 1000);

  // ++++++ Common Functions ++++++

  // ****** Simple Toggle ******

  var a11yButton = document.querySelectorAll("[data-a11y-button]");
  var a11yContent = document.querySelectorAll("[data-a11y-content]");
  var a11yButtonName = "a11y-button";
  var a11yContentName = "a11y-content";

  // For each button...

  for (var i = 0; i < a11yButton.length; i++) {

    var a11yButtonNode = a11yButton[i].nodeName;
    var a11yTarget = a11yButton[i].dataset.a11yTarget;
    var a11yExistingClass = a11yButton[i].className.trim();

    // See what type of element it is. If it's a button already, then enhance it...

    if(a11yButtonNode === "BUTTON") {

      a11yButton[i].setAttribute("aria-expanded", "false");
      a11yButton[i].setAttribute("aria-controls", a11yTarget);
      a11yButton[i].classList.add(a11yButtonName);

    // We never want to use a link to toggle hidden content. Links take us to destinations, while buttons do things.

    } else if(a11yButton[i].nodeName === "A") {

      // ...so we are going to transform it into a button.

      var oldButton = a11yButton[i];
      var newButton = document.createElement("button");

      newButton.innerHTML = oldButton.textContent;
      newButton.setAttribute("aria-expanded", "false");
      newButton.setAttribute("aria-controls", a11yTarget);

      // Carry over existing classes

      if(a11yExistingClass !== null) {

        newButton.className = a11yExistingClass;

      }

      newButton.classList.add(a11yButtonName);

      // Replace oldButton with newButton

      oldButton.parentNode.replaceChild(newButton, oldButton);

    } else {

      var oldButton = a11yButton[i];
      var newButton = document.createElement("button");

      newButton.innerHTML = oldButton.textContent;
      newButton.setAttribute("aria-expanded", "false");
      newButton.setAttribute("aria-controls", a11yTarget);
      newButton.classList.add(a11yButtonName);

      oldButton.innerHTML = "";
      oldButton.appendChild(newButton)

    }

    // Remove these attributes from parent element. We don't want them used as hooks.

    a11yButton[i].removeAttribute("data-a11y-button");
    a11yButton[i].removeAttribute("data-a11y-target");

  }

  // Add class to each content div.

  for (var i = 0; i < a11yContent.length; i++) {

    a11yContent[i].classList.add(a11yContentName);

    // Remove attribute from parent element. We don't want them used as hooks.

    a11yContent[i].removeAttribute("data-a11y-content");

  }

  var a11yContainer = document.getElementsByClassName(a11yContentName);

  // Loop through all newly created buttons and apply event(s)

  var a11yPush = document.getElementsByClassName(a11yButtonName);

  for (var i = 0; i < a11yPush.length; i++) {

    a11yPush[i].addEventListener("click", function(e) {

      simpleToggle(this);

      e.preventDefault();

    });

  }

  function simpleToggle(obj) {

    // Note: We are setting ARIA to indicate to screen readers when navigation is expanded.
    // We set this on the element being accessed (and not the element we are revealing - a common mistake).

    var targetElement = document.getElementById(obj.getAttribute("aria-controls"));

    if(obj.getAttribute("aria-expanded") === "true") {

      // Set button and content to close

      closeSimpleToggle();

    } else {

      // Set button and content to close

      closeSimpleToggle();

      // Set button and content to open

      obj.setAttribute("aria-expanded", "true");
      targetElement.classList.add("active");
      targetElement.setAttribute("tabindex", -1);
      targetElement.focus();

    }

    // Google Analytics

    if (typeof ga == "function") {

      //ga("send", "event", "Custom Event", "Click", gdprGACustomLabel);

    }

  }

  // Reset all active items that may be open (we only desire one section open at a time so as not to obstruct anything that may be adjacent to element)

  function closeSimpleToggle() {

    // Buttons

    for (var i = 0; i < a11yPush.length; i++) {

      a11yPush[i].setAttribute("aria-expanded", "false");

    }

    // Content

    for (var x = 0; x < a11yContainer.length; x++) {

      a11yContainer[x].classList.remove("active");
      a11yContainer[x].removeAttribute("tabindex");

    }

  }

  // Escape Key event(s) here

  document.onkeydown = function(e) {

    if (e.which === 27) {

      closeSimpleToggle();

    }

  };

})();
