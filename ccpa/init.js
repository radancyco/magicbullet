/*

  California Consumer Privacy Act (CCPA) Notice
  Developer: Michael "Spell" Spellacy, Email: michael.spellacy@tmp.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

(function() {

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var ccpaBody = document.body;

  // Data Attributes

  var ccpaBannerTop = magicBulletScript.getAttribute("data-ccpa-banner-top");
  var ccpaAcceptButtonText = magicBulletScript.getAttribute("data-ccpa-accept-button-text");
  var ccpaButtonColor = magicBulletScript.getAttribute("data-ccpa-button-color");
  var ccpaButtonColorText = magicBulletScript.getAttribute("data-ccpa-button-color-text");
  var ccpaClientName = magicBulletScript.getAttribute("data-ccpa-client-name");
  var ccpaCloseButtonText = magicBulletScript.getAttribute("data-ccpa-close-button-text");
  var ccpaCustomFormMessage = magicBulletScript.getAttribute("data-ccpa-custom-form-message");
  var ccpaCustomMessage = magicBulletScript.getAttribute("data-ccpa-custom-message");
  var ccpaDateExpire = magicBulletScript.getAttribute("data-ccpa-date-expire");
  var ccpaDomainName = magicBulletScript.getAttribute("data-ccpa-domain");
  var ccpaExplicitConsent = magicBulletScript.getAttribute("data-ccpa-explicit-consent");
  var ccpaFontSize = magicBulletScript.getAttribute("data-ccpa-font-size");
  var ccpaGACustomCategory = magicBulletScript.getAttribute("data-ccpa-ga-custom-category");
  var ccpaGACustomLabel = magicBulletScript.getAttribute("data-ccpa-ga-custom-label");
  var ccpaLanguage =  magicBulletScript.getAttribute("data-ccpa-language");
  var ccpaNewWindow = magicBulletScript.getAttribute("data-ccpa-new-window");
  var ccpaNoticeColor = magicBulletScript.getAttribute("data-ccpa-notice-color");
  var ccpaNoticeColorText = magicBulletScript.getAttribute("data-ccpa-notice-text-color");
  var ccpaOptIn = magicBulletScript.getAttribute("data-ccpa-opt-in");
  var ccpaPolicyURL = magicBulletScript.getAttribute("data-ccpa-policy-url");
  var ccpaTextAlign = magicBulletScript.getAttribute("data-ccpa-text-align");
  var ccpaformBypass = magicBulletScript.getAttribute("data-ccpa-form-bypass");
  var ccpazIndex = magicBulletScript.getAttribute("data-ccpa-z-index");

  // Targeted TalentBrew Elements

  var ccpaFormMessage = document.getElementsByClassName("ccpa-eu-tmp-notice");

  var ccpaDataFormSubmitBtn = document.querySelectorAll(".data-form:not([data-ccpa-form-msg-exception]) .form-field.submit");

  var ccpaPageRefresh = performance.navigation.type; // Not used now

  // Add ccpa hook for implementation team. May come in handy.

  ccpaBody.classList.add("magic-bullet-ccpa");

  // Helper: Get Cookie(s)

  function getCookie(name) {

    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value !== null) ? unescape(value[1]):null;

  }

  // Adding to Data Layer, if it exists, is done for both passive and explicit consent.
  // You can use Google Tag Assistant to view the new variables being set (https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en)
  // If client requires that we disable specific functionality or tracking based on user acceptance, then the SEO team
  // must be instructed to leverage the "Privacy Consent" variable instead of the system default, GDPN Consent, which is ignored
  // by this script.

  function setDataLayer(timestamp) {

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({

      "Privacy Consent": timestamp

    });

  }

  function setConsent() {

    var expDate = new Date();
    var consentDate = new Date();
    var convertDate = Date.parse(consentDate);

    // Some clients want cookies to expire after one day, so we'll accomodate that request...

    if(ccpaDateExpire !== null) {

      expDate.setDate(expDate.getDate() + 1);

    } else {

      expDate.setDate(expDate.getDate() + 30);

    }

    // Get custom domain name, if not present, then load in default domain.

    if(ccpaDomainName !== null) {

      document.cookie = "ConsentCapture=" + consentDate + "; Secure; SameSite=None; expires=" + expDate + "; domain=" + ccpaDomainName + "; path=/";

    } else {

      document.cookie = "ConsentCapture=" + consentDate + "; Secure; SameSite=None; expires=" + expDate + "; path=/";

    }

    // Only send info to data layer if client explicitly collectes data.

    if (ccpaOptIn !== null) {

      setDataLayer(convertDate);

    }

  }

  function setBanner() {

    var expDate = new Date();

    // Some clients want cookies to expire after one day, so we'll accomodate that request...

    if(ccpaDateExpire !== null) {

      expDate.setDate(expDate.getDate() + 1);

    } else {

      expDate.setDate(expDate.getDate() + 30);

    }

    // Get custom domain name, if not present, then load in default domain.

    if(ccpaDomainName !== null) {

      document.cookie = "BannerDisplayed=true; Secure; SameSite=None; expires=" + expDate + "; domain=" + ccpaDomainName + "; path=/";

    } else {

      document.cookie = "BannerDisplayed=true; Secure; SameSite=None; expires=" + expDate + "; path=/";

    }

  }

  // Let's get our cookies...

  var bannerDisplayed = getCookie("BannerDisplayed");
  var consentCapture = getCookie("ConsentCapture");

  // While the default behavior for the cookie is passive consent, there may be times
  // where we want to explicitly have user click on "Accept".
  // So we bypass default behavior by adding data-ccpa-explicit-consent

  if(ccpaExplicitConsent === null) {

    // If explicit consent not needed, check if bannerDisplayed exists. If not, then create it and set it's value to "yes".
    // It's presense on other pages, thoughout user session, will ensure that notice never appears again.

    if (bannerDisplayed === null) {

      setBanner();

    }

    // If bannerDisplayed exists and consent has NOT been set, then set consent when user visits another page.

    if(bannerDisplayed !== null && consentCapture === null) {

      setConsent();

    }

  }

  // If consent has been given, then set bannerDisplayed

  if(consentCapture !== null) {

    setBanner();

    // Only send info to data layer if client explicitly collectes data.

    if (ccpaOptIn !== null) {

      // We need to always be sending variable to Data Layer on each page load, so let's grab that from ConsentCapture cookie

      var userConsentedOn = Date.parse(consentCapture);

      setDataLayer(userConsentedOn);

    }

  }

  // Remove Alert

  var removeAlert = function() {

    // Remove Alert

    ccpaBody.removeChild(ccpaContainer);

    // Set Cookie

    setConsent();

  };

  // Languages

  if (ccpaLanguage === "es") {

    // Spanish

    var ccpaMessage = "Utilizamos cookies y otras tecnologías de seguimiento para ayudar con la navegación, mejorar nuestros productos y servicios, ayudar con nuestros esfuerzos de marketing y proporcionar contenido de terceros, de acuerdo con nuestra <a href=" + ccpaPolicyURL + " id='ccpa-policy-link' target='_blank' rel='noopener'>política de privacidad <span id='ccpa-a11y-message' class='visually-hidden'>(se abre en una nueva ventana)</span></a>.";

    var ccpaCloseBtn = "Cerca";

    var ccpaConsentBtn = "Aceptar";

    var formMessage = "Al enviar su información, usted reconoce que ha leído nuestra <a href=" + ccpaPolicyURL + " target='_blank' rel='noopener'>política de privacidad <span class='visually-hidden'>(se abre en una ventana nueva)</span></a> y acepta recibir comunicaciones por correo electrónico de " + ccpaClientName + ".";

  } else {

    // English (Default)

    var ccpaMessage = "We use cookies and other tracking technologies to assist with navigation, improve our products and services, assist with our marketing efforts, and provide content from third parties, in accordance with our <a href=" + ccpaPolicyURL + " id='ccpa-policy-link' target='_blank' rel='noopener'>privacy policy <span id='ccpa-a11y-message' class='visually-hidden'>(opens in new window)</span></a>.";

    var ccpaCloseBtn = "Close";

    var ccpaConsentBtn = "Accept";

    var formMessage = "By submitting your information, you acknowledge that you have read our <a href=" + ccpaPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(opens in new window)</span></a> and consent to receive email communication from " + ccpaClientName + ".";

  }

  if (ccpaPolicyURL === null && ccpaClientName === null) {

    var ccpaMessage = "A consent and privacy message cannot be generated until a client name and privacy policy URL have been provided. Please see <a href='https://tmpworldwide.dev/tmp-magic-bullet/ccpa/#banner-mandatory'>mandatory requirements</a> needed for this script to run.";

  }

  // Only load banner if banner has NEVER been displayed before.

  if(consentCapture === null) {

    if(bannerDisplayed === null) {

      // Create Alert

      var ccpaContainer = document.createElement("div");

      // Set Alert Attributes

      ccpaContainer.setAttribute("id", "ccpa-alert");
      ccpaContainer.setAttribute("role", "alert");

      if (ccpaBannerTop !== null) {

        ccpaContainer.classList.add("ccpa-banner-top");

      }

      if (ccpaNoticeColor !== null) {

        ccpaContainer.style.setProperty ("background-color", ccpaNoticeColor);

      }

      if (ccpaNoticeColorText !== null) {

        ccpaContainer.style.setProperty ("color", ccpaNoticeColorText);

      }

      if (ccpaFontSize !== null) {

        ccpaContainer.style.setProperty ("font-size", ccpaFontSize, "important");

      }

      if (ccpaTextAlign !== null) {

        ccpaContainer.style.setProperty ("text-align", ccpaTextAlign);

      }

      if (ccpazIndex !== null) {

        ccpaContainer.style.setProperty ("z-index", ccpazIndex);

      }

      // Now create the element...

      var ccpaContentTag = document.createElement("p");
      ccpaContentTag.setAttribute("id", "ccpa-content");

      var ccpaCustomContentTag = document.createElement("div");
      ccpaCustomContentTag.setAttribute("id", "ccpa-content");

      // Add custom message if present...

      if (ccpaCustomMessage !== null) {

        ccpaCustomContentTag.innerHTML = ccpaCustomMessage;
        ccpaContainer.appendChild(ccpaCustomContentTag);

      } else  {

        ccpaContentTag.innerHTML = ccpaMessage;
        ccpaContainer.appendChild(ccpaContentTag);

      }

      // Create Alert Button

      var ccpaButton = document.createElement("button");

      // Set Alert Button Attributes

      ccpaButton.setAttribute("id", "ccpa-button");

      // Change button text if opt-in a necessity.

      if (ccpaOptIn !== null) {

        // Add Accept Button Text

        if (ccpaAcceptButtonText !== null) {

          ccpaButtonText = ccpaAcceptButtonText;

        } else {

          ccpaButtonText = ccpaConsentBtn;

        }

      } else {

        // Add Close Button Text

        if (ccpaCloseButtonText !== null) {

            ccpaButtonText = ccpaCloseButtonText;

        } else {

          ccpaButtonText = ccpaCloseBtn;

        }

      }

      ccpaButton.textContent  = ccpaButtonText;

      if (ccpaButtonColor !== null) {

        ccpaButton.style.setProperty ("background-color", ccpaButtonColor, "important");

      }

      if (ccpaButtonColorText !== null) {

        ccpaButton.style.setProperty ("color", ccpaButtonColorText, "important");

      }

      // Tracking

      ccpaButton.setAttribute("data-custom-event", "true");

      if(ccpaGACustomCategory !== null) {

        ccpaButton.setAttribute("data-custom-category", ccpaGACustomCategory);

      } else {

        ccpaButton.setAttribute("data-custom-category", "ccpa");

      }

      if(ccpaGACustomLabel !== null) {

        ccpaButton.setAttribute("data-custom-label", ccpaGACustomLabel);

      } else {

        ccpaButton.setAttribute("data-custom-label", "ccpa Accept Button");

      }

      if (ccpaPolicyURL !== null && ccpaClientName !== null) {

        // Append Alert Button to Alert Policy

        ccpaContainer.appendChild(ccpaButton);

      }

      // Append Alert to Body Element

      if (ccpaBannerTop !== null) {

        ccpaBody.insertBefore(ccpaContainer, ccpaBody.childNodes[0] || null);

      } else {

        ccpaBody.appendChild(ccpaContainer);

      }

      // Remove Target Attribute

      if (ccpaNewWindow === "false") {

        var ccpaPolicyLink = document.getElementById("ccpa-policy-link");
        var ccpaPrivacyRefLink = document.getElementById("ccpa-privacy-preference-link");

        ccpaPolicyLink.removeAttribute("target");
        ccpaPolicyLink.removeAttribute("rel");
        ccpaPrivacyRefLink.removeAttribute("target");
        ccpaPrivacyRefLink.removeAttribute("rel");

        var ccpaA11yMessage = document.getElementById("ccpa-a11y-message");
        var ccpaPrivacyA11y = document.getElementById("ccpa-privacy-preference-a11y");

        ccpaPolicyLink.removeChild(ccpaA11yMessage);
        ccpaPrivacyRefLink.removeChild(ccpaPrivacyA11y);

      }

      /******* Consent Types *********/

      // Button Consent

      ccpaButton.onclick = function(){

        removeAlert();

        return false;

      };

    }

  }

  // Select Default or Custom Message...

  if (ccpaCustomFormMessage !== null) {

    var ccpaInlineMessage = ccpaCustomFormMessage;

  } else {

    var ccpaInlineMessage = formMessage;

  }

  // If form bypass is true...

  if (ccpaformBypass === "true") {

    // Append form message.

    if (ccpaFormMessage) {

      // Append to each form on page...

      for (var i = 0; i < ccpaFormMessage.length; i++) {

        if (ccpaClientName !== null) {

          ccpaFormMessage[i].innerHTML = ccpaInlineMessage;

        }

      }

    }

  } else {

    // Apply message above all submit buttons...

    for (var x = 0; x < ccpaDataFormSubmitBtn.length; x++) {

      var ccpaDynamicMessage = document.createElement("p");

      ccpaDynamicMessage.className = "form-field ccpa-eu-tmp-notice";

      ccpaDynamicMessage.innerHTML = ccpaInlineMessage;

      var dataFormSubmitBtn = ccpaDataFormSubmitBtn[x];

      var dataFormParent = dataFormSubmitBtn.parentNode;

      dataFormParent.insertBefore(ccpaDynamicMessage, dataFormSubmitBtn);

    }

  }

})();
