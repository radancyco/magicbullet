
// TalentBrew: Accessibility Patch
// Developer(s): Michael "Spell" Spellacy, Twitter: spellacy, GitHub: michaelspellacy, michael.spellacy[at]tmp.com

(function(){

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var a11yBody = document.body;

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magic-bullet-a11y");

  // A11y Fixes

  // Issue: Validation Error (addLoadEvent)

  // Note: Asked Filip to remove.

  $("script[type='text/javascript']").removeAttr("type");

  // A11y: Remove "aria-expanded" from all adjacent elements of "expandable-parent"

  $(".expandable-parent").attr("aria-expanded", "false").next().removeAttr("aria-expanded");

  $(".expandable-parent").on("click", function() {

    $(this).attr('aria-expanded', function (i, attr) {

    	return attr == 'true' ? 'false' : 'true'

    });

    $(this).next().removeAttr("aria-expanded");

  });

  // Address any image with a missing alt attribute (usually tracking pixels, etc.)

  $("img:not([alt])").attr("alt", "");

  // Job Map Page - Remove target. These links only send information to Google Map UI. Target not needed.

  $(".job-map-nearby a").removeAttr("target");

  // Issue: Certain links require "Open New Window" text for assistive tech

  $(".social-share-items a").append(" <span class='wai'>(Opens in New Window)</span>");

  // Issue: Search Results pagination disabled button can be tabbed to. To address this, we simply remove href. When removed, aria-hidden is not really needed, so we reove that, too!

  function fixDisabledButton() {

    $(".pagination-paging .disabled").removeAttr("aria-hidden href");

  }

  fixDisabledButton(); // Initial Page Load

  // Issue: The search navigation is often style not to look like a form and submit button is removed
  // So we need to strip this functionality and simply show text.

  function noFormPagination() {

    var pageStatus = $(".pagination-current-label span").text() + " " + $(".pagination-current").val() + " " + $(".pagination-total-pages").text();

    // While we are in here, let's indicate to screen readers what page they are on - cool!

    $("#search-results").attr("aria-label", pageStatus);

    if($(".pagination-no-form").length) {

      if(!$(".pagination-page-status").length) {

        $(".pagination-page-count").append("<p class='pagination-page-status' role='status' tabindex='0'>" + pageStatus + "</p>");

        $(".pagination-no-form").remove();

      }

    }

  }

  noFormPagination(); // Initial Page Load

  $(document).ajaxStop(function() {

    // Issue: Applied Filters section (Search Results) has inappropriate ARIA on it. Removing.

  	$("#applied-filters").removeAttr("aria-hidden aria-expanded");

    noFormPagination();

    fixDisabledButton();

    // Save Job for later

    var savedJobs = document.querySelectorAll("[data-a11y-saved-button]");

    for (var i = 0; i < savedJobs.length; i++) {

      savedJobs[i].setAttribute("aria-expanded", "false");

      savedJobs[i].addEventListener("click", function() {

        alert("Test");

      });

    }

  });

  // Sometime we can only do things after TB has finished (slowly) loading it's portion of the DOM.

	setTimeout(function(){

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

	  $(".form-field:not(.required").each(function() {

      $(this).find(".field-validation-valid").remove();

		});

		// Issue: Remove inline style on honeypot field and use hidden attribute instead

		$(".form-field.confirm-email").prop("hidden", true).removeAttr("aria-hidden style");

		// Issue: Remove aria-hidden from honeybot label and input. The parent element should hide this from all assistive tech.
		// Note: Not CSS dependent, so fields will always be hidden.

		$(".form-field.confirm-email label, .form-field.confirm-email input").removeAttr("aria-hidden");

		// Issue: Remove Role from field-validation-error (it's really not needed)

		$(".field-validation-valid").removeAttr("role");

		// Issue: We need to alert AT when submission is successful, so let's do that...

		// $(".form-field.form-message").attr("role", "alert");

    // if Google Translate exists, then fix...

    $(".goog-te-combo").attr("id", "goog-te-combo").before("<label class='wai' for='goog-te-combo'>Translate this page:</label>");

    // Add title to spinner

    $(".goog-te-spinner").append("<title>Spinner</title>");

  }, 1000);

  // Issue: Job DEscriptions have horrible inaccessible garbage in them. This is an attemtp to remove some of that garbage...

  // Remove tabindex

  $(".ats-description").find("[tabindex]:not([tabindex='0']):not([tabindex^='-'])").remove();

	// Future Enhancement

	// Issue: We need to perform some additional form validation/manipulation after form is submitted

	$(".data-form").on("submit", function() {

		console.log ("Something accessible has happened");

	});

  // Add role of "presentation" to every table found within a job description.

  $(".ats-description table").attr("role", "presentation");

  // Remove autocomplete from checkbox inputs (needs to be handled on AjaxComplete eventually).

  $("input[type=checkbox]").removeAttr("autocomplete");

  // ++++++ Common Functions ++++++

  // ****** Simple Toggle ******

  var a11yButton = document.querySelectorAll("[data-a11y-button]");
  var a11yContent = document.querySelectorAll("[data-a11y-content]");
  var a11yButtonName = "a11y-button";

  for (var i = 0; i < a11yButton.length; i++) {

    var a11yButtonNode = a11yButton[i].nodeName;

    // No need to apply an extra div in these cases, so let's not...

    if(a11yButtonNode === "BUTTON" || a11yButtonNode === "DIV" ) {

      a11yButton[i].setAttribute("aria-expanded", "false");
      a11yButton[i].className = a11yButtonName;

    // We never want to use link to toggle content...

    } else if(a11yButton[i].nodeName === "A") {

      alert("Hyperlinks should not be used to toggle elements.");

    } else {

      var a11yPress = document.createElement("div");
      a11yPress.setAttribute("aria-expanded", "false");
      a11yPress.className = a11yButtonName;
      a11yPress.setAttribute("role", "button");
      a11yPress.setAttribute("tabindex", 0);

      // Insert wrapper before element in the DOM tree

      a11yButton[i].parentNode.insertBefore(a11yPress, a11yButton[i]);

      // Move element into the wrapper

      a11yPress.appendChild(a11yButton[i]);

    }

  }

  // Get all newly created or class applied buttons...

  var a11yPush = document.getElementsByClassName(a11yButtonName);

  for (var i = 0; i < a11yPush.length; i++) {

    a11yPush[i].addEventListener('click', function() {

      simpleToggle(this);

    });

    a11yPush[i].addEventListener('keydown', function(e) {

      var code = e.which;

      if((code === 32) || (code === 13)){

        simpleToggle(this);

        e.preventDefault();

      }

    });

  }

  function simpleToggle(obj) {

    // Note: We are setting ARIA to indicate to screen readers when navigation is expanded.
    // We set this on the element being accessed (and not the element we are revealing).

    if(obj.getAttribute("aria-expanded") === "true") {

      // Set expanded to false

      obj.setAttribute("aria-expanded", "false");

    } else {

      closeSimpleToggle();

      // Set expanded to true

      obj.setAttribute("aria-expanded", "true");

    }

    if (typeof ga == "function") {

      //ga("send", "event", "Custom Event", "Click", gdprGACustomLabel);

    }

  }

  // Reset ARIA to false on any currenty active items that may be open (we only desire one section open at a time so as not to obstruct anything that may be adjacent to element)

  function closeSimpleToggle() {

    for (var i = 0; i < a11yPush.length; i++) {

      a11yPush[i].setAttribute("aria-expanded", "false");

    }

  }

  // Manage all Escape Key events here

  document.onkeydown = function(e) {

    if (e.which === 27) {

      closeSimpleToggle();

    }

  };

})();
