
// TalentBrew: Accessibility Patch
// Developer(s): Michael "Spell" Spellacy, Twitter: spellacy, GitHub: michaelspellacy, michael.spellacy[at]tmp.com

(function(){

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var a11yBody = document.body;

  // Add A11y hook for implementation team. May come in handy.

  a11yBody.classList.add("magic-bullet-a11y");

  // TalentBrew Accessibility Fixes

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0001

  $(".expandable-parent").attr("aria-expanded", "false").next().removeAttr("aria-expanded");

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0002

  $(".expandable-parent").on("click", function() {

    $(this).attr('aria-expanded', function (i, attr) {

    	return attr == 'true' ? 'false' : 'true'

    });

    $(this).next().removeAttr("aria-expanded");

  });

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0003

  $("img:not([alt])").attr("alt", "");

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0004

  $("form.search-form").attr("role", "search");

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0005

  $(".job-map-nearby a").removeAttr("target");

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0006

  $(".social-share-items a").append(" <span class='wai'>(Opens in New Window)</span>");

  // Job Description Garbage

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0007

  $(".ats-description").find("[tabindex]:not([tabindex='0']):not([tabindex^='-'])").remove();

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0008

  $(".ats-description table").attr("role", "presentation");

  // Remove autocomplete from checkbox inputs (needs to be handled on AjaxComplete eventually).

  // https://tmpworldwide.github.io/tmp-magic-bullet/a11y/#issue-0009

  $("input[type=checkbox]").removeAttr("autocomplete");

  // Future Enhancement

  // Issue: We need to perform some additional form validation/manipulation after form is submitted

  $(".data-form").on("submit", function() {

    console.log ("Something accessible has happened");

  });


  // Issue: Search Results pagination disabled button can be tabbed to (this is bad). To address this, we simply remove href. When removed, aria-hidden is not really needed, so we reove that, too!

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

  $(document).ajaxStop(function() {

    // Issue: Applied Filters section (Search Results) has inappropriate ARIA on it. Removing.

  	$("#applied-filters").removeAttr("aria-hidden aria-expanded");

    noFormPagination();

    fixDisabledButton();

    saveJobButton();

    // Issue: Remove aria-required from p element (it should not exist on this element) and various other elements.

	  $(".data-form .form-field.required, .form-field.required input:not([type='checkbox']), .form-field.required select, .form-field.required textarea").removeAttr("aria-required");


  });

  // Sometime we can only do things after TB has finished (slowly) loading it's portion of the DOM.

	setTimeout(function(){

	  // A11y Form Fixes


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

		// Issue: Remove aria-hidden from honeypot label and input. The parent element should hide this from all assistive tech.
		// Note: Not CSS dependent, so fields will always be hidden.

		$(".form-field.confirm-email label, .form-field.confirm-email input").removeAttr("aria-hidden");

		// Issue: Remove Role from field-validation-error (it's really not needed)

		$(".field-validation-valid").removeAttr("role");

		// Issue: The Job Alerts upload includes an aria-describedby with no associated ID when no Field Instructions are included.

    if(!$(".form-field input[name='Resume']").prev(".instruction-text").length) {

      // If upload instruction text does not exist, then remove aria-describedby

      $(".form-field input[name='Resume']").removeAttr("aria-describedby");

    }

    // The file upload remove button is a link with an href hash...can;t have that so let's change it....

    // First, get the text...

    var ResumeRemoveTxt = $(".form-field input[name='Resume']").next(".file-remove").text();

    // Now replace with a button

    $(".form-field input[name='Resume']").next(".file-remove").replaceWith("<button aria-hidden='true' class='file-remove'>" + ResumeRemoveTxt + "</button>");

    // if Google Translate exists, then fix...

    $(".goog-te-combo").attr("id", "goog-te-combo").before("<label class='wai' for='goog-te-combo'>Translate this page:</label>");

    // Add title to spinner

    $(".goog-te-spinner").append("<title>Spinner</title>");

  }, 3000);

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
