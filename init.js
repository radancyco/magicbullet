/*

  TalentBrew: Magic Bullet - A script to chase all your troubles away.
  Developer: Michael "Spell" Spellacy, Email: michael.spellacy@tmp.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

(function() {

  // Get Magic Bullet Script

  var magicBulletScript = document.getElementById("tmp-magic-bullet");

  // Get body of page script loads on.

  var magicBulletBody = document.body;

  // Get data-gdpr attribute, if present.

  var gdprScript = magicBulletScript.getAttribute("data-gdpr");

  // Get data-a11y attribute, if present.

  var a11yScript = magicBulletScript.getAttribute("data-a11y");

  // Get hostname so that we can select between QA and Production scripts.

  var hostName = location.hostname;

  // Need to apply hostName to localHost var so we can load script locally.

  var localHost = hostName;

  hostName = hostName.substring(hostName.indexOf(".") + 1);

  function runScript(css, js) {



  }

  // Execute GDPR

  if (gdprScript === "true") {

    // Add GDPR hook for implementation team. May come in handy.

    magicBulletBody.classList.add("magic-bullet-gdpr");

    // Add GDPR CSS

    var gdprCSS = document.createElement("link");
    gdprCSS.setAttribute("id", "gdpr-css");
    gdprCSS.setAttribute("rel", "stylesheet");

    // Create and add GDPR script

    var gdprExec = document.createElement("script");
    gdprExec.setAttribute("id", "gdpr-notice");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localHost === "localhost" || localHost === "192.168.0.14" || localHost === "192.168.1.116" || localHost === "127.0.0.1") {

      gdprCSS.setAttribute("href", "/gdpr/qa.css");
      gdprExec.setAttribute("src", "/gdpr/qa.js");

    } else {

      // Run QA version on following domains only...

      if(hostName === "runmytests.com" || hostName === "talentbrew.com" || hostName === "github.io") {

        gdprCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/gdpr/qa/css/");
        gdprExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/gdpr/qa/");

        console.log("GDPR QA");

      } else {

        // ... else, run the production version.

        gdprCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/gdpr/prod/css/");
        gdprExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/gdpr/prod/");

        console.log("GDPR Production");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(gdprCSS);
    document.body.appendChild(gdprExec);

  }

  // Execute A11y (Future addition)

  if (a11yScript === "true") {

    // Add A11y hook for implementation team. May come in handy.

    magicBulletBody.classList.add("magic-bullet-a11y");

    // Create and add GDPR script

    var a11yExec = document.createElement("script");
    a11yExec.setAttribute("id", "a11y-fixes");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localHost === "localhost" || localHost === "192.168.0.14" || localHost === "192.168.1.116" || localHost === "127.0.0.1") {

      a11yExec.setAttribute("src", "/a11y/qa.js");

    } else {

      // Run QA version on following domains only...

      if(hostName === "runmytests.com" || hostName === "talentbrew.com" || hostName === "github.io") {

        a11yExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/a11y/qa/");

      } else {

        // ... else, run the production version.

        a11yExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/a11y/prod/");

        console.log("A11y Production");

      }

    }

    // Append Script to DOM.

    document.body.appendChild(a11yExec);

  }

})();
