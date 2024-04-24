

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

          if (!selected.classList.contains("keyword-region")) {var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
            var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
            var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
            var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
            var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
            var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
            var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
            var isExecutingCallback = false;

            function initA11yRepair() {
                var a11yObserver = new MutationObserver(function(mutationsList, observer) {
                    if (isExecutingCallback) return;
            
                    isExecutingCallback = true;
                    clearTimeout(a11yObserver.timeout);
            
                    a11yObserver.timeout = setTimeout(function() {
                        console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");
            
                        var dataForms = document.querySelectorAll(".data-form");
            
                        dataForms.forEach(function(form){
                            var keySelected = form.querySelectorAll('.keyword-selected');
                            
                            keySelected.forEach(function(selected) {
                                // Check if the element has already been processed
                                if (!selected.classList.contains("keyword-region")) {
                                    var selectedRegion = document.createElement("div");
                                    selectedRegion.classList.add("keyword-region");
                                    selectedRegion.setAttribute("role", "region");
                                    selectedRegion.setAttribute("aria-label", "Selected Job Alerts");
                                    
                                    selected.parentNode.insertBefore(selectedRegion, selected);
                                    selectedRegion.appendChild(selected);
                                    
                                    // Add a class to mark the element as processed
                                    selected.classList.add('keyword-region');
                                }
                            });
                        });
            
                        isExecutingCallback = false;
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
                                                                                                

            var selectedRegion = document.createElement("div");
            selectedRegion.setAttribute("role", "region");
            selectedRegion.setAttribute("aria-label", "Selected Job Alerts");

            selected.parentNode.insertBefore(selectedRegion, selected);
            selectedRegion.appendChild(selected);

            selectedRegion.classList.add("keyword-region");

          }

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