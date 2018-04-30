/*

  General Data Protection Regulation (GDPR) Notice
  Developer: Michael "Spell" Spellacy, Email: michael.spellacy@tmp.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

(function() {

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var gdprBody = document.body;

  // Data Attributes

  var gdprButtonColor = magicBulletScript.getAttribute("data-gdpr-button-color");
  var gdprButtonColorText = magicBulletScript.getAttribute("data-gdpr-button-color-text");
  var gdprButtonText = magicBulletScript.getAttribute("data-gdpr-button-text");
  var gdprClientName = magicBulletScript.getAttribute("data-gdpr-client-name");
  var gdprFontSize = magicBulletScript.getAttribute("data-gdpr-font-size");
  var gdprLanguage =  magicBulletScript.getAttribute("data-gdpr-language");
  var gdprNewWindow = magicBulletScript.getAttribute("data-gdpr-new-window");
  var gdprNoticeColor = magicBulletScript.getAttribute("data-gdpr-notice-color");
  var gdprNoticeColorText = magicBulletScript.getAttribute("data-gdpr-notice-color-text");
  var gdprPolicyURL = magicBulletScript.getAttribute("data-gdpr-policy-url");
  var gdprTextAlign = magicBulletScript.getAttribute("data-gdpr-text-align");
  var gdprformBypass = magicBulletScript.getAttribute("data-gdpr-form-bypass");
  var gdprzIndex = magicBulletScript.getAttribute("data-gdpr-z-index");

  // Targeted TalentBrew Elements

  var gdprFormMessage = document.getElementsByClassName("gdpr-eu-tmp-notice");

  var gdprDataFormSubmitBtn = document.querySelectorAll(".data-form .form-field.submit");

  var gdprPageRefresh = performance.navigation.type;

  // Helper: Get Cookie(s)

  function getCookie(name) {

    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value !== null) ? unescape(value[1]):null;

  }

  function setConsent() {

    var expDate = new Date();
    expDate.setMonth(expDate.getMonth() + 12);
    document.cookie = "ConsentCapture=" + new Date() + "; expires=" + expDate + "; Secure; path=/";

    // dataLayer.push({'ConsentCapture': new Date()});

  }

  function setBanner() {

    document.cookie = "BannerDisplayed=yes; Secure; path=/";

  }

  // Let's get our cookies...

  var bannerDisplayed = getCookie("BannerDisplayed");
  var consentCapture = getCookie("ConsentCapture");

  // If page has NOT been refreshed...

  if(gdprPageRefresh != 1) {

    // Upon entering the site, check if bannerDisplayed exists. If not, then create it and set it's value to "yes".
    // It's presense on other pages, thoughout user session, will ensure that notice never appears again.

    if (bannerDisplayed === null) {

      setBanner();

    }

    // If bannerDisplayed exists and consent has NOT been set, then set consent when user visits another page.

    if(bannerDisplayed !== null && consentCapture === null) {

      setConsent();

    }

    // If consent has been given, then set bannerDisplayed

    if(consentCapture !== null) {

      var bannerDisplayed = true;
      setBanner();

    }

  }

  // Remove Alert

  var removeAlert = function() {

    // Remove Alert

    gdprBody.removeChild(gdprContainer);

    // Set Cookie

    setConsent();

  };

  // Languages

  var gdprTrusteURL = "https://preferences-mgr.truste.com/"

  if (gdprLanguage === "nl") {

    // Dutch

    var gdprMessage = "Dutch translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "de") {

    // German

    var gdprMessage = "German translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "fr") {

    // French

    var gdprMessage = "French translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "fr-ch") {

    // Canadian French

    var gdprMessage = "Canadian French translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "es") {

    // Spanish

    var gdprMessage = "Usamos cookies y otras tecnologías de seguimiento para ayudar con la navegación, mejorar nuestros productos y servicios, ayudar con nuestros esfuerzos de marketing y proporcionar contenido de terceros. Al continuar utilizando este sitio, acepta nuestro uso de cookies de acuerdo con nuestra <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>política de privacidad <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(este contenido se abre en una nueva ventana)</span></a>. Para administrar preferencias de cookies de terceros, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>haga clic aquí <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(este contenido se abre en una nueva ventana)</span></a>.";

    var gdprConsentBtn = "Aceptar";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "pt-br") {

    // Brazilian Portuguese

    var gdprMessage = "Brazilian Portuguese translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "pt-es") {

    // Spanish Portuguese

    var gdprMessage = "Spanish Portuguese translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "jp") {

    // Japanese

    var gdprMessage = "Japanese translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "pl") {

    // Polish

    var gdprMessage = "Polish translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "cs") {

    // Czech

    var gdprMessage = "Czech translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "hu") {

    // Hungarian

    var gdprMessage = "Hungarian translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "zh-hans") {

    // Simplified Chinese

    var gdprMessage = "Simplified Chinese translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "zh-hans") {

    // Traditional Chinese

    var gdprMessage = "Traditional Chinese translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else if (gdprLanguage === "ru") {

    // Russian

    var gdprMessage = "Russian translation is pending...";

    var gdprConsentBtn = "Pending";

    var formMessage = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> eu libero sit amet quam egestas semper " + gdprClientName + ".";

  } else {

    // English (Default)

    var gdprMessage = "We use cookies and other tracking technologies to assist with navigation, improve our products and services, assist with our marketing efforts, and provide content from third parties. By continuing to use this site you agree to our use of cookies in accordance with our <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>privacy policy <span id='gdpr-a11y-message' class='visually-hidden'>(this content opens in new window)</span></a>. To manage third-party cookie preferences, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>click here <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(this content opens in new window)</span></a>.";

    var gdprConsentBtn = "Accept";

    var formMessage = "By submitting your information, you acknowledge that you have read our <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> and consent to receive email communication from " + gdprClientName + ".";

  }

  // Only load banner if banner has NEVER been displayed before.

  if(bannerDisplayed === null) {

    setBanner();

    // Create Alert

    var gdprContainer = document.createElement("div");

    // Set Alert Attributes

    gdprContainer.setAttribute("id", "gdpr-alert");
    gdprContainer.setAttribute("role", "alert");

    // gdprContainer.className = "dev-mode";

    if (gdprNoticeColor !== null) {

      gdprContainer.style.setProperty ("background-color", gdprNoticeColor);

    }

    if (gdprNoticeColorText !== null) {

      gdprContainer.style.setProperty ("color", gdprNoticeColorText);

    }

    if (gdprFontSize !== null) {

      gdprContainer.style.setProperty ("font-size", gdprFontSize, "important");

    }

    if (gdprTextAlign !== null) {

      gdprContainer.style.setProperty ("text-align", gdprTextAlign);

    }

    if (gdprzIndex !== null) {

      gdprContainer.style.setProperty ("z-index", gdprzIndex);

    }

    // Now create the element...

    var gdprContentTag = document.createElement("p");
    gdprContentTag.setAttribute("id", "gdpr-content");
    gdprContentTag.innerHTML = gdprMessage;

    // Now add message to notice...

    if (gdprPolicyURL !== null && gdprClientName !== null) {

        gdprContainer.appendChild(gdprContentTag);

    } else {

      var gdprMessage = "A consent message cannot be generated until a client name and privacy policy URL have been provided.";

      gdprContentTag.innerHTML = gdprMessage;
      gdprContainer.appendChild(gdprContentTag);

    }

    // Create Alert Button

    var gdprButton = document.createElement("button");

    // Set Alert Button Attributes

    gdprButton.setAttribute("id", "gdpr-button");

    // Add Alert Button Text

    if (gdprButtonText === null) {

      gdprButtonText = gdprConsentBtn;

    }

    gdprButton.textContent  = gdprButtonText;

    if (gdprButtonColor !== null) {

      gdprButton.style.setProperty ("background-color", gdprButtonColor, "important");

    }

    if (gdprButtonColorText !== null) {

      gdprButton.style.setProperty ("color", gdprButtonColorText, "important");

    }

    if (gdprPolicyURL !== null && gdprClientName !== null) {

      // Append Alert Button to Alert Policy

      gdprContainer.appendChild(gdprButton);

    }

    // Append Alert to Body Element

    gdprBody.appendChild(gdprContainer);

    // Remove Target Attribute

    if (gdprNewWindow === "false") {

      var gdprPolicyLink = document.getElementById("gdpr-policy-link");
      var gdprPrivacyRefLink = document.getElementById("gdpr-privacy-preference-link");

      gdprPolicyLink.removeAttribute("target");
      gdprPolicyLink.removeAttribute("rel");
      gdprPrivacyRefLink.removeAttribute("target");
      gdprPrivacyRefLink.removeAttribute("rel");

      var gdprA11yMessage = document.getElementById("gdpr-a11y-message");
      var gdprPrivacyA11y = document.getElementById("gdpr-privacy-preference-a11y");

      gdprPolicyLink.removeChild(gdprA11yMessage);
      gdprPrivacyRefLink.removeChild(gdprPrivacyA11y)

    }

    /******* Consent Types *********/

    // Button Consent

    gdprButton.onclick = function(){

      removeAlert();
      return false;

    };

  }

  // If form bypass is true...

  if (gdprformBypass === "true") {

    // Append form message.

    if (gdprFormMessage) {

      // Append to each form on page...

      for (var i = 0; i < gdprFormMessage.length; i++) {

        if (gdprClientName !== null) {

          gdprFormMessage[i].innerHTML = formMessage;

        }

      }

    }

  } else {

    // Apply message above all submit buttons...

    for (var x = 0; x < gdprDataFormSubmitBtn.length; x++) {

      var gdprDynamicMessage = document.createElement("p");

      gdprDynamicMessage.className = "gdpr-eu-tmp-notice";

      gdprDynamicMessage.innerHTML = formMessage;

      var dataFormSubmitBtn = gdprDataFormSubmitBtn[x]

      var dataFormParent = dataFormSubmitBtn.parentNode;

      dataFormParent.insertBefore(gdprDynamicMessage, dataFormSubmitBtn);

    }

  }

})();
