/*!

  Radancy MagicBullet Loader

  Contributor(s):
  Michael "Spell" Spellacy

*/

(function() {

  var scriptElement = document.getElementById("radancy-magicbullet");

  var isModule = scriptElement && scriptElement.type === "module";

  if (isModule) {

    import("./init.js");

    console.log("file imported");

  } else {

    var script = document.createElement("script");

    script.src = "./init.js";
    script.id = "radancy-magicbullet";
    script.setAttribute("data-gdpr", "true");

    console.log("file loaded traditionally");

    document.body.appendChild(script);

  }

})();
