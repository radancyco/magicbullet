/*

  TalentBrew: Magic Bullet - A script to chase all your troubles away.
  Developer: Michael "Spell" Spellacy, Email: michael.spellacy@tmp.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

(function() {

  // Get Magic Bullet Script

  var magicBulletScript = document.getElementById("tmp-magic-bullet");

  // Get body of page Magic Bullet loads on.

  var magicBulletBody = document.body;

  // Get data-gdpr attribute, if present.

  var gdprScript = magicBulletScript.getAttribute("data-gdpr");

  // Get data-location-aware, if present.

  var locationAware = magicBulletScript.getAttribute("data-location-aware");

  // Get data-a11y attribute, if present.

  var a11yScript = magicBulletScript.getAttribute("data-a11y");

  // Get data-ccpa attribute, if present.

  var ccpaScript = magicBulletScript.getAttribute("data-ccpa");

  // Get data-alert attribute, if present.

  var alertScript = magicBulletScript.getAttribute("data-alert");

  // Temp: Get alert type

  var alertBanner = magicBulletScript.getAttribute("data-alert-banner");

  // Get hostname so that we can select between QA and Production scripts.

  var hostName = location.hostname;

  // Need to apply hostName to localHost var so that we can load our script(s) locally.

  var localHost = hostName;

  hostName = hostName.substring(hostName.indexOf(".") + 1);

  var localPaths = localHost === "localhost";
  var testPaths = hostName === "runmytests.com" || hostName === "talentbrew.com" || hostName === "tmpworldwide.dev" || hostName === "tmpqa.com";

  // Check to see if both the GDPR and CCPA attributes exist together.

  if (gdprScript === "true" && ccpaScript === "true") {

    alert("CCPA & GDPR cannot be initiated on the same site. You may only use data-ccpa=\"true\" or data-gdpr=\"true\".");

  } else {

    // Execute GDPR

    if (gdprScript === "true") {

      if(locationAware  === "true") {

        //TB Country ID for Europe countries need to list full here

        //Albania,Armenia,Austria,Belarus,Belgium,Bulgaria,Croatia,Cyprus,Czech Republic,Denmark,Finland,France,Georgia,Germany,Greece,Hungary,Iceland,Ireland,Italy,Kazakhstan,Kosovo,Latvia,Lithuania,Luxembourg,Malta,Netherlands,Norway,Poland,Portugal,Romania,Russia,Serbia,Slovakia,Slovenia,Spain,Sweden,Switzerland,Turkey,Ukraine,UK

        // TODO: Eventually move this over to gdpr/init.js

        var locationIDEurope = '783754,174982,2782113,630336,2802361,732800,3202326,146669,3077311,2623032,660013,3017382,614540,2921044,390903,719819,2629691,2963597,3175395,1522867,831053,458258,597427,2960313,2562770,2750405,3144096,798544,2264397,798549,2017370,6290252,3057568,3190538,2510769,2661886,2658434,298795,690791,2635167';

        postAjax(function(dataLoc) {

          var location = dataLoc.l;
          var locationID = dataLoc.lp.split('-')[0];

          console.log("location = " + location);
          console.log("locationId = " + locationID);

          if(locationIDEurope.indexOf(locationID)!=-1) {

            // Show GDPR only for Europe

            showGDPR();

          }

        });

      } else {

        showGDPR();

      }

    }

    // Execute CCPA

    if (ccpaScript === "true") {

        showCCPA();

    }

  } // end check

  // Execute A11y

  if (a11yScript === "true") {

    showA11y();

  }

  // Execute Alert

  if (alertScript === "true") {

    showAlert();

  }

  // Functions

  function postAjax(success) {

    //To get Location data from Server

    var params = 'lat=&lon=&IsUsingGeolocation=true&HasHtml5GeoError=false&GeoType=ipambientonly';
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open('POST', "/search-jobs/SetSearchRequestGeoLocation");
    xhr.onreadystatechange = function() {

      if (xhr.readyState>3 && xhr.status==200) {
        //Send data to call back funtion
        success(JSON.parse(xhr.responseText));

      }

    };

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);

  }

  function showGDPR() {

    // Add GDPR CSS

    var gdprCSS = document.createElement("link");
    gdprCSS.setAttribute("id", "gdpr-css");
    gdprCSS.setAttribute("rel", "stylesheet");

    // Create and add GDPR script

    var gdprExec = document.createElement("script");
    gdprExec.setAttribute("id", "gdpr-notice-js");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      gdprCSS.setAttribute("href", "/gdpr/init.css");
      gdprExec.setAttribute("src", "/gdpr/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        gdprCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/gdpr/qa/css/");
        gdprExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/gdpr/qa/");

      } else {

        // ... else, run the production version.

        gdprCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/gdpr/prod/css/");
        gdprExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/gdpr/prod/");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(gdprCSS);
    document.body.appendChild(gdprExec);

  }

  function showCCPA() {

    // Add Privacy Notice CSS

    var ccpaCSS = document.createElement("link");
    ccpaCSS.setAttribute("id", "ccpa-css");
    ccpaCSS.setAttribute("rel", "stylesheet");

    // Create and add Privacy Notice script

    var ccpaExec = document.createElement("script");
    ccpaExec.setAttribute("id", "ccpa-js");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      ccpaCSS.setAttribute("href", "/ccpa/init.css");
      ccpaExec.setAttribute("src", "/ccpa/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        ccpaCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/ccpa/qa/css/");
        ccpaExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/ccpa/qa/");

      } else {

        // ... else, run the production version.

        ccpaCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/ccpa/prod/css/");
        ccpaExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/ccpa/prod/");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(ccpaCSS);
    document.body.appendChild(ccpaExec);

  }

  function showA11y() {

    // Create and add GDPR script

    var a11yExec = document.createElement("script");
    a11yExec.setAttribute("id", "a11y-fixes");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      a11yExec.setAttribute("src", "/a11y/qa/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        a11yExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/a11y/qa/");

      } else {

        // ... else, run the production version.

        a11yExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/a11y/prod/");

      }

    }

    // Append Script to DOM.

    document.body.appendChild(a11yExec);

  }

  function showAlert() {

    // Add Privacy Notice CSS

    var alertCSS = document.createElement("link");
    alertCSS.setAttribute("id", "alert-css");
    alertCSS.setAttribute("rel", "stylesheet");

    // Create and add Alert script

    var alertExec = document.createElement("script");
    alertExec.setAttribute("id", "alert-js");

    // Run script locally when these domains present...
    // Feel free to add your own IP address.

    if (localPaths) {

      if (alertBanner !== null) {

        alertCSS.setAttribute("href", "/alert/banner/init.css");

      } else {

        alertCSS.setAttribute("href", "/alert/modal/init.css");

      }

      // alertCSS.setAttribute("href", "/alert/init.css");

      alertExec.setAttribute("src", "/alert/init.js");

    } else {

      // Run QA version on following domains only...

      if(testPaths) {

        if (alertBanner !== null) {

          alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/qa/css/banner/");

        } else {

          alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/qa/css/modal/");

        }

        // alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/qa/css/");

        alertExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/alert/qa/");

      } else {

        // ... else, run the production version.

        if (alertBanner !== null) {

          alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/prod/css/banner/");

        } else {

          alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/prod/css/modal/");

        }

        // alertCSS.setAttribute("href", "https://services.tmpwebeng.com/magicbullet/alert/prod/css/");
        alertExec.setAttribute("src", "https://services.tmpwebeng.com/magicbullet/alert/prod/");

      }

    }

    // Append CSS and Script to DOM.

    document.head.appendChild(alertCSS);
    document.body.appendChild(alertExec);

  }

})();
