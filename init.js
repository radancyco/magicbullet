/*

  TalentBrew: Magic Bullet
  Developer: Michael "Spell" Spellacy, Email: michael.spellacy@tmp.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

(function() {

  console.log("New location running...");

  var magicBulletScript = document.getElementById("tmp-magicbullet");

  var magicBulletBody = document.body;

  var gdprScript = magicBulletScript.getAttribute("data-gdpr");

  var a11yScript = magicBulletScript.getAttribute("data-a11y");

  // Grab Hostname so that we can select between QA and Prod scripts.

  var hostName = location.hostname;

  hostName = hostName.substring(hostName.indexOf(".") + 1);

  // Execute GDPR

  if (gdprScript === "true") {

    magicBulletBody.classList.add("magic-bullet-gdpr");

    // Add GDPR CSS

    var gdprCSS = document.createElement("link");
    gdprCSS.setAttribute("id", "gdpr-css");
    gdprCSS.setAttribute("rel", "stylesheet");

    // Add GDPR Script

    var gdprExec = document.createElement("script");
    gdprExec.setAttribute("id", "gdpr-notice");

    if (location.hostname == "localhost" || location.hostname == "192.168.0.14" || location.hostname == "192.168.1.116" || location.hostname == "127.0.0.1") {

      gdprCSS.setAttribute("href", "qa.css");
      gdprExec.setAttribute("src", "qa.js");

    } else {

      if(hostName === "runmytests.com" || hostName === "talentbrew.com") {

        gdprCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/gdpr/qa/css/");
        gdprExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/gdpr/qa/");

      } else {

        gdprCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/gdpr/prod/css/");
        gdprExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/gdpr/prod/");

      }

    }

    document.head.appendChild(gdprCSS);
    document.body.appendChild(gdprExec);

  }

  // Execute A11y (Future addition)

  if (a11yScript === "true") {

    magicBulletBody.classList.add("magic-bullet-a11y");

    console.log("Accessibility script is loading...");

  }

})();
