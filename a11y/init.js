

loadA11yPatch("https://services.tmpwebeng.com/component-library/language-pack.js", function(){

// Other functions

console.log("test");

});

// *** Accessibility Patch: Observer ***
  
function initA11yRepair() {

  var a11yObserver = new MutationObserver(function() {

    clearTimeout(a11yObserver.timeout);

    a11yObserver.timeout = setTimeout(function() {

      console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");

      var dataForms = document.querySelectorAll(".data-form");

      dataForms.forEach(function(form){

        var keySelected = form.querySelectorAll('.keyword-selected');

        keySelected.forEach(function(selected) {

          var selectedRegion = document.createElement("div");
          selectedRegion.classList.add("keyword-region");
          selectedRegion.setAttribute("role", "region");
          selectedRegion.setAttribute("aria-label", "Selected Job Alerts");

          selected.parentNode.insertBefore(selectedRegion, selected);
          selectedRegion.appendChild(selected);

        });

      });

    }, 800); 

  });
          
  var config = { childList: true, subtree: true };
  a11yObserver.observe(document.body, config);

}

function loadA11yPatch(url, callback) {

  var a11yBody = document.body;

  a11yBody.classList.add("magicbullet-a11y");

  var componentLanguagePack = document.createElement("script");

  componentLanguagePack.setAttribute("src", url);
  componentLanguagePack.setAttribute("id", "component-library-language-pack");
  componentLanguagePack.onreadystatechange = callback;
  componentLanguagePack.onload = callback;

  var getComponentLanguagePack = document.getElementById("component-library-language-pack");

  if(getComponentLanguagePack === null) {

    document.getElementsByTagName("head")[0].appendChild(componentLanguagePack);

  }
  
  initA11yRepair();

}