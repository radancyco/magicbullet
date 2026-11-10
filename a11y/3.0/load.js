/*!

  Radancy MagicBullet: Accessibility Patch - Asset Loader

  Contributor(s):
  Michael "Spell" Spellacy

*/

(() => {

  // Get hostname so that we can select between QA and Production files.

  let hostName = location.hostname;

  // Localhost (any port) loads the QA version too.

  const localHost = hostName === "localhost";

  // Strip subdomain for test paths

  hostName = hostName.substring(hostName.indexOf(".") + 1);

  const testPaths = localHost || hostName === "runmytests.com" || hostName === "runmytests.eu" || hostName === "talentbrew.com" || hostName === "tmpqa.com";

  // Add A11y CSS

  const magicBulletCSS = document.createElement("link");
  magicBulletCSS.setAttribute("id", "magicbullet-a11y-css");
  magicBulletCSS.setAttribute("rel", "stylesheet");

  // Create A11y Script. 3.0 uses import statements, so it must load as a module.

  const magicBulletScript = document.createElement("script");
  magicBulletScript.setAttribute("id", "magicbullet-a11y-js");
  magicBulletScript.setAttribute("type", "module");

  // Run QA version on following domains only...

  if (testPaths) {

    magicBulletCSS.setAttribute("href", "https://radancy.dev/magicbullet/a11y/3.0/init.css");
    magicBulletScript.setAttribute("src", "https://radancy.dev/magicbullet/a11y/3.0/init.js");

  } else {

    // ... else, run the production version, from the shared-libraries path every career site serves (root-relative,
    // so it loads from the same domain as the page).

    magicBulletCSS.setAttribute("href", "/shared-libraries/magicbullet/rolling/init.css");
    magicBulletScript.setAttribute("src", "/shared-libraries/magicbullet/rolling/init.js");

  }

  // Append CSS and Script to DOM.

  document.head.appendChild(magicBulletCSS);
  document.body.appendChild(magicBulletScript);

})();
