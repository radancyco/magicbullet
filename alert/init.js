/*

  System Alert
  Developer: Michael "Spell" Spellacy, Email: michael.spellacy@tmp.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

(function() {

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var alertBody = document.body;

  // Data Attributes

  var alertCloseButtonText = magicBulletScript.getAttribute("data-alert-button-text");
  var alertMessage = magicBulletScript.getAttribute("data-alert-message");
  var alertDomainName = magicBulletScript.getAttribute("data-alert-domain");
  var alertLanguage =  magicBulletScript.getAttribute("data-alert-language");
  var alertStatic =  magicBulletScript.getAttribute("data-alert-static");
  var alertCovid =  magicBulletScript.getAttribute("data-alert-covid");
  var alertRemoveCSS =  magicBulletScript.getAttribute("data-alert-remove-css");

  // Add alert hook for implementation team. May come in handy.

  alertBody.classList.add("magic-bullet-alert");

  // Helper: Get Cookie(s)

  function getCookie(name) {

    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value !== null) ? unescape(value[1]):null;

  }

  function setBanner() {

    var expDate = new Date();

    expDate.setDate(expDate.getDate() + 30);

    // Get custom domain name, if not present, then load in default domain.

    if(alertDomainName !== null) {

      // Expires (Future Enhancement):

      // document.cookie = "AlertDisplayed=true; expires=" + expDate + "; domain=" + alertDomainName + "; path=/";

      // Session:

      document.cookie = "AlertDisplayed=true; domain=" + alertDomainName + "; path=/";

    } else {

      // Expires (Future Enhancement):

      // document.cookie = "AlertDisplayed=true; expires=" + expDate + "; path=/";

      // Session:

      document.cookie = "AlertDisplayed=true; path=/";

    }

  }

  // Let's get our cookies...

  var alertDisplayed = getCookie("AlertDisplayed");

  if (alertDisplayed === null) {

    setBanner();

  }

  // Remove Alert

  var removeAlert = function() {

    // Remove Alert

    alertBody.removeChild(alertContainer);
    alertBody.classList.remove("system-alert-active");

  };

  // Languages

  if (alertLanguage === "es") {

    // Spanish

    var alertCloseBtn = "Cerca";

    // COVID-19 Message

    var alertCovidMessage = "<p>La salud y seguridad de nuestros empleados y candidatos es muy importante para nosotros. Debido a la situación actual relacionada con el Coronavirus (COVID-19), estamos aprovechando nuestras capacidades digitales para garantizar que podamos continuar reclutando a los mejores talentos.</p> <p>A medida que avanza su solicitud, es posible que se le solicite que use una de nuestras herramientas digitales para ayudarlo en su viaje de reclutamiento. Si es así, uno de nuestros colegas de Recursos le explicará cómo se utilizará nuestra tecnología de video-entrevista durante todo el proceso de reclutamiento y estará disponible para responder cualquier pregunta que pueda tener.</p>";

  } else {

    // English (Default)

    var alertCloseBtn = "Close";

    // COVID-19 Message

    var alertCovidMessage = "<p>The health and safety of our employees and candidates is very important to us. Due to the current situation related to the Coronavirus (COVID-19), we're leveraging our digital capabilities to ensure we can continue to recruit top talent.</p> <p>As your application progresses, you may be asked to use one of our digital tools to help you through your recruitment journey. If so, one of our colleagues will explain how these tools will be used throughout the recruitment process and will be on hand to answer any questions you might have.</p>";

  }

  // Only load banner if banner has NEVER been displayed before.

  if(alertDisplayed === null) {

    if (alertStatic === null) {

      alertBody.classList.add("system-alert-active");

    }

    // Create Alert

    var alertContainer = document.createElement("div");

    // Set Alert Attributes

    if (alertStatic !== null) {

      alertContainer.setAttribute("id", "system-alert-static");

    } else {

      alertContainer.setAttribute("id", "system-alert");

    }

    // For dev is they wish to not load some of the custom CSS

    if(alertRemoveCSS === null) {

      alertContainer.classList.add("system-alert-css");

    }

    // Now create the element...

    var alertContent = document.createElement("div");
    alertContent.setAttribute("id", "system-message");
    alertContent.setAttribute("role", "dialog");
    alertContent.setAttribute("aria-modal", "true");

    // Add custom message if present...

    if (alertCovid !== null) {

      alertContent.innerHTML = alertCovidMessage;

    } else {

      if (alertMessage !== null) {

        alertContent.innerHTML = alertMessage;

      } else {

        alertContent.innerHTML = "Please add a message using <b>data-alert-message</b>. Thanks!";

      }

    }

    alertContainer.appendChild(alertContent);

    // Create Alert Button

    var alertButton = document.createElement("button");

    // Set Alert Button Attributes

    alertButton.setAttribute("id", "system-alert-button");

    // Add Close Button Text

    if (alertCloseButtonText !== null) {

      alertButtonText = alertCloseButtonText;

    } else {

      alertButtonText = alertCloseBtn;

    }

    alertButton.textContent  = alertButtonText;

    /* if (alertButtonColor !== null) {

      alertButton.style.setProperty ("background-color", alertButtonColor, "important");

    }

    if (alertButtonColorText !== null) {

      alertButton.style.setProperty ("color", alertButtonColorText, "important");

    } */

    // Append Alert Button to Alert Dialog

    alertContent.appendChild(alertButton);

    // Prepend Alert to Body Element

    alertBody.insertBefore(alertContainer, alertBody.childNodes[0] || null);

    // Apply focus to close button

    alertButton.focus();

    var systemMessage = document.getElementById("system-message");

    trapFocus(systemMessage);

    /******* Consent Types *********/

    // Button Consent

    alertButton.onclick = function(){

      removeAlert();

      return false;

    };

  }

  // Escape Key

  window.onkeyup = function (event) {

    if (event.keyCode == 27) {

      removeAlert();

    }

  }

  // Trap Focus

  function trapFocus(element, namespace) {

    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),

    firstFocusableEl = focusableEls[0];
    lastFocusableEl = focusableEls[focusableEls.length - 1];

    KEYCODE_TAB = 9;

    element.addEventListener('keydown', function(e) {

      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

      if (!isTabPressed) {

        return;

      }

      if ( e.shiftKey ) /* shift + tab */ {

        if (document.activeElement === firstFocusableEl) {

          lastFocusableEl.focus();

          e.preventDefault();

        }

      } else {

        // Tab

        if (document.activeElement === lastFocusableEl) {

          firstFocusableEl.focus();

          e.preventDefault();

        }

      }

    });

  }

})();
