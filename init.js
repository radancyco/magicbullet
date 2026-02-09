/*!

  Radancy MagicBullet

  Contributor(s):
  Michael "Spell" Spellacy

*/

(() => {

  // Allow disabling MagicBullet via URL parameter

  const params = new URLSearchParams(window.location.search);

  const magicBulletDisabled = params.get("magicbullet") === "false";

  // If disabled, bail out immediately

  if (magicBulletDisabled) {

    console.log("%cMagicBullet Disabled", "background: #FFA500; color: #000; padding: 6px 10px; border-radius: 16px; font-weight: 600;");
    return;

  }

  console.log("%cMagicBullet%cv2.2", "background: #2d2d2d; color: #fff; padding: 6px 10px; border-radius: 16px 0 0 16px; font-weight: 600;" , "background: #6e00ee; color: #fff; padding: 6px 10px; border-radius: 0 16px 16px 0; font-weight: 600;");

  // Get MagicBullet Script

  const magicBulletScript = document.getElementById("tmp-magic-bullet") ? document.getElementById("tmp-magic-bullet") : document.getElementById("radancy-magicbullet");

  // Get data-a11y attribute, if present.

  const a11yScript = magicBulletScript.getAttribute("data-a11y");

  // Get data-alert attribute, if present.

  const alertScript = magicBulletScript.getAttribute("data-alert");

  // Temp: Get alert type

  const alertBanner = magicBulletScript.getAttribute("data-alert-banner");
  
  // Get data-gdpr attribute, if present.

  const gdprScript = magicBulletScript.getAttribute("data-gdpr");

  // Get hostname so that we can select between QA and Production scripts.

  // Get data-ccpa attribute, if present.

  const ccpaScript = magicBulletScript.getAttribute("data-ccpa");

  let hostName = location.hostname;

  const hostWithPort = location.host;

  // Strip subdomain for test paths

  hostName = hostName.substring(hostName.indexOf(".") + 1);

  // TRUE only for localhost:4010

  const localPaths = hostWithPort === "localhost:4010";

  const testPaths = hostName === "runmytests.com" || hostName === "runmytests.eu" || hostName === "talentbrew.com" || hostName === "tmpqa.com";

  // Execute A11y

  if (a11yScript !== null) {

    showA11y();

  }

  // Execute Alert

  if (alertScript !== null) {

    showAlert();

  }

  // Check to see if both the GDPR and CCPA attributes exist together.

  if (gdprScript !== null && ccpaScript !== null) {

    alert("CCPA & GDPR cannot be initiated on the same site. You may only use data-ccpa=\"true\" or data-gdpr=\"true\".");

  } else {

    // Execute GDPR

    if (gdprScript !== null) {

      if(gdprScript === "true") {

          showGDPR();

      }

    }

    // Execute CCPA

    if (ccpaScript !== null) {

      if(ccpaScript === "true") {

        showCCPA();

      }

    }

  }

  // Functions

  function showA11y() {

    // Add A11y CSS

    const a11yCSS = document.createElement("link");
    a11yCSS.setAttribute("id", "a11y-patch-css");
    a11yCSS.setAttribute("rel", "stylesheet");

    // Create A11y Script

    const a11yExec = document.createElement("script");
    a11yExec.setAttribute("id", "a11y-patch-js");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      a11yCSS.setAttribute("href", "/a11y/init.css");
      a11yExec.setAttribute("src", "/a11y/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        a11yCSS.setAttribute("href", "https://radancy.dev/magicbullet/a11y/init.css");
        a11yExec.setAttribute("src", "https://radancy.dev/magicbullet/a11y/init.js");

      } else {

        // ... else, run the production version.

        a11yCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/a11y/init.css");
        a11yExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/a11y/init.js");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(a11yCSS);
    document.body.appendChild(a11yExec);

  }

  function showAlert() {

    // Create Alert CSS

    const alertCSS = document.createElement("link");
    alertCSS.setAttribute("id", "alert-css");
    alertCSS.setAttribute("rel", "stylesheet");

    // Create Alert Script

    const alertExec = document.createElement("script");
    alertExec.setAttribute("id", "alert-js");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      if (alertBanner !== null) {

        alertCSS.setAttribute("href", "/alert/banner.css");

      } else {

        alertCSS.setAttribute("href", "/alert/dialog.css");

      }

      alertExec.setAttribute("src", "/alert/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        if (alertBanner !== null) {

          alertCSS.setAttribute("href", "https://radancy.dev/magicbullet/alert/banner.css");

        } else {

          alertCSS.setAttribute("href", "https://radancy.dev/magicbullet/alert/dialog.css");

        }

        alertExec.setAttribute("src", "https://radancy.dev/magicbullet/alert/init.js");

      } else {

        // ... else, run the production version.

        if (alertBanner !== null) {

          alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/banner.css");

        } else {

          alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/dialog.css");

        }

       alertExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/alert/init.js");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(alertCSS);
    document.body.appendChild(alertExec);

  }

  function showGDPR() {

    // Add GDPR CSS

    const gdprCSS = document.createElement("link");
    gdprCSS.setAttribute("id", "gdpr-css");
    gdprCSS.setAttribute("rel", "stylesheet");

    // Create and add GDPR script

    const gdprExec = document.createElement("script");
    gdprExec.setAttribute("id", "gdpr-js");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      gdprCSS.setAttribute("href", "/gdpr/init.css");
      gdprExec.setAttribute("src", "/gdpr/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        gdprCSS.setAttribute("href", "https://radancy.dev/magicbullet/gdpr/init.css");
        gdprExec.setAttribute("src", "https://radancy.dev/magicbullet/gdpr/init.js");

      } else {

        // ... else, run the production version.

        gdprCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/gdpr/init.css");
        gdprExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/gdpr/init.js");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(gdprCSS);
    document.body.appendChild(gdprExec);

  }

  function showCCPA() {

    // Create Privacy Notice CSS

    const ccpaCSS = document.createElement("link");
    ccpaCSS.setAttribute("id", "ccpa-css");
    ccpaCSS.setAttribute("rel", "stylesheet");

    // Create Privacy Notice script

    const ccpaExec = document.createElement("script");
    ccpaExec.setAttribute("id", "ccpa-js");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      ccpaCSS.setAttribute("href", "/ccpa/init.css");
      ccpaExec.setAttribute("src", "/ccpa/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        ccpaCSS.setAttribute("href", "https://radancy.dev/magicbullet/ccpa/init.css");
        ccpaExec.setAttribute("src", "https://radancy.dev/magicbullet/ccpa/init.js");

      } else {

        // ... else, run the production version.

        ccpaCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/ccpa/init.css");
        ccpaExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/ccpa/init.js");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(ccpaCSS);
    document.body.appendChild(ccpaExec);

  }

})();