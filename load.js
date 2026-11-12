/*!

  Radancy MagicBullet: Asset Loader

  Contributor(s):
  Michael "Spell" Spellacy

*/

(() => {

  const magicBulletLoader = document.getElementById("radancy-magicbullet");

  // Get hostname so that we can select between QA and Production files.

  let hostName = location.hostname;

  // Localhost (any port) loads the QA version too.

  const localHost = hostName === "localhost";

  // Strip subdomain for test paths

  hostName = hostName.substring(hostName.indexOf(".") + 1);

  const QADomains = localHost || hostName === "runmytests.com" || hostName === "runmytests.eu" || hostName === "talentbrew.com" || hostName === "tmpqa.com" || hostName === "radancy.net";

  // Add MagicBullet CSS

  const magicBulletCSS = document.createElement("link");
  magicBulletCSS.setAttribute("id", "magicbullet-css");
  magicBulletCSS.setAttribute("rel", "stylesheet");

  // Add MagicBullet Script

  const magicBulletScript = document.createElement("script");
  magicBulletScript.setAttribute("id", "magicbullet-js");
  magicBulletScript.setAttribute("type", "module");

  // Run QA version

  if (QADomains) {

    magicBulletCSS.setAttribute("href", "https://radancy.dev/magicbullet/init.css");
    magicBulletScript.setAttribute("src", "https://radancy.dev/magicbullet/init.js");

  } else {

    // Run production version. If this loader was included from clientfiles.tmpwebeng.com, or the
    // #radancy-magicbullet tag is missing, load the full path. 
    // Otherwise use the relative path on every career site set up with DDR.

    const assetOrigin = "https://clientfiles.tmpwebeng.com";
    const assetPath = "/shared-libraries/magicbullet/rolling/";
    const fullPath = assetOrigin + assetPath;
    const assetBase = !magicBulletLoader || magicBulletLoader.src.includes(assetOrigin) ? fullPath : assetPath;

    magicBulletCSS.setAttribute("href", assetBase + "init.css");
    magicBulletScript.setAttribute("src", assetBase + "init.js");

  }

  // Append CSS and Script to DOM.

  document.head.appendChild(magicBulletCSS);
  document.body.appendChild(magicBulletScript);

})();
