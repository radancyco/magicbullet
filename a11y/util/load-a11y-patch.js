// Accessibility Patch: Language Pack Loader (Utility)
// Desc: Loads language-pack.js (a classic script that declares the label* globals the fixes use), then runs callback.

export function loadA11yPatch(url, callback) {

  const getComponentLanguagePack = document.getElementById("magicbullet-language-pack");

  if (getComponentLanguagePack) {

    // Fix: The tag existing doesn't mean the file has finished executing. If it has, run now; otherwise wait for it.
    // Its one-shot "load" event may have already fired, so check the dedicated marker set in language-pack.js first.

    if (typeof magicBulletLanguagePackLoaded !== "undefined") {

      callback();

    } else {

      getComponentLanguagePack.addEventListener("load", callback);

    }

  } else {

    // Install Language Pack.

    const componentLanguagePack = document.createElement("script");

    componentLanguagePack.setAttribute("src", url);
    componentLanguagePack.setAttribute("id", "magicbullet-language-pack");
    componentLanguagePack.onreadystatechange = callback;
    componentLanguagePack.onload = callback;

    document.getElementsByTagName("head")[0].appendChild(componentLanguagePack);

  }

}
