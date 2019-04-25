
// TalentBrew: Maintenance Message
// Developer(s): Michael "Spell" Spellacy, Twitter: spellacy, GitHub: michaelspellacy, michael.spellacy[at]tmp.com

(function(){

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var noticeBody = document.body;

  // Data Attributes

  var noticeCustomMessage = magicBulletScript.getAttribute("data-notice-custom");
  var noticeTimeStart = Date(magicBulletScript.getAttribute("data-notice-start"));
  var noticeTimeEnd = Date(magicBulletScript.getAttribute("data-notice-end"));
  var noticeTarget = magicBulletScript.getAttribute("data-notice-target");

  // Add A11y hook for implementation team. May come in handy.

  noticeBody.classList.add("magic-bullet-notice");

  // Create Notice

  var noticeContainer = document.createElement("div");

  // Set Alert Attributes

  noticeContainer.setAttribute("id", "notice-alert");

  // Now create the element...

  var noticeContentTag = document.createElement("p");
  noticeContentTag.setAttribute("id", "notice-content");

  var noticeMessage = "This is the default message";

  // Add custom message if present...

  if (noticeCustomMessage !== null) {

    noticeContentTag.innerHTML = noticeCustomMessage;

  } else  {

    noticeContentTag.innerHTML = noticeMessage;

  }

  noticeContainer.appendChild(noticeContentTag);

  // Create Notice Button

  var noticeButton = document.createElement("button");

  // Set Alert Button Attributes

  noticeButton.setAttribute("id", "notice-button");
  noticeButton.textContent  = "Close";

  noticeContainer.appendChild(noticeButton);

  // Prepend Notice to target, otherwise just prepend to body

  if (noticeTarget !== null) {

    var noticeElement = document.getElementById(noticeTarget);

    noticeElement.insertAdjacentElement("beforebegin", noticeContainer);

  } else {

    noticeBody.insertAdjacentElement("afterbegin", noticeContainer);

  }


  // Button Consent

  noticeButton.onclick = function(){

    noticeContainer.remove();

  };


  var d = Date.parse(noticeTimeStart);




alert(d);

})();
