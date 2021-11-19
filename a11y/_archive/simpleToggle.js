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
