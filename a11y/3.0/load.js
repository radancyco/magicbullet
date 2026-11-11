/*!

  Radancy MagicBullet: Accessibility Patch - Asset Loader

  Contributor(s):
  Michael "Spell" Spellacy

*/

(() => {

  const magicBullet = document.getElementById("radancy-magicbullet");

  // Get hostname so that we can select between QA and Production files.

  let hostName = location.hostname;

  // Localhost (any port) loads the QA version too.

  const localHost = hostName === "localhost";

  // Strip subdomain for test paths

  hostName = hostName.substring(hostName.indexOf(".") + 1);

  const testPaths = localHost || hostName === "runmytests.com" || hostName === "runmytests.eu" || hostName === "talentbrew.com" || hostName === "tmpqa.com";

  // Add MagicBullet CSS

  const magicBulletCSS = document.createElement("link");
  magicBulletCSS.setAttribute("id", "magicbullet-css");
  magicBulletCSS.setAttribute("rel", "stylesheet");

  // Add MagicBullet Script

  const magicBulletScript = document.createElement("script");
  magicBulletScript.setAttribute("id", "magicbullet-js");
  magicBulletScript.setAttribute("type", "module");

  // Run QA version...

  if (testPaths) {

    magicBulletCSS.setAttribute("href", "https://radancy.dev/magicbullet/a11y/3.0/init.css");
    magicBulletScript.setAttribute("src", "https://radancy.dev/magicbullet/a11y/3.0/init.js");

  } else {

    // ... else, run the production version. If this loader was included from clientfiles.tmpwebeng.com, or the
    // #radancy-magicbullet tag is missing, load the files from clientfiles too (full path). 
    // Otherwise use the shared-libraries path every career site set up via DDR 

    const clientFiles = "https://clientfiles.tmpwebeng.com";
    const relativePath = "/shared-libraries/magicbullet/rolling/";
    const fullPath = clientFiles + relativePath;
    const path = !magicBullet || magicBullet.src.includes(clientFiles) ? fullPath : relativePath;

    magicBulletCSS.setAttribute("href", path + "init.css");
    magicBulletScript.setAttribute("src", path + "init.js");

  }

  // Append CSS and Script to DOM.

  document.head.appendChild(magicBulletCSS);
  document.body.appendChild(magicBulletScript);

})();
