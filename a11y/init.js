var a11yObserver = null;
var observerEnabled = true;

function initA11yRepair() {
    if (!observerEnabled) return; // Check if the observer is enabled

    // Disconnect the observer temporarily
    if (a11yObserver) {
        a11yObserver.disconnect();
    }

    // Create a new MutationObserver instance
    a11yObserver = new MutationObserver(function(mutationsList, observer) {
        clearTimeout(a11yObserver.timeout);

        a11yObserver.timeout = setTimeout(function() {
            console.log("%c MagicBullet: Accessibility Patch v1.8 in use. ", "background: #6e00ee; color: #fff");

            // Reconnect the observer
            if (observerEnabled) {
                a11yObserver.observe(document.body, { childList: true, subtree: true });
            }
        }, 800); 

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
    });

    // Configure the MutationObserver
    var config = { childList: true, subtree: true };

    // Start observing
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

    if (getComponentLanguagePack === null) {
        document.getElementsByTagName("head")[0].appendChild(componentLanguagePack);
    }

    // Run the function after content stops changing
    initA11yRepair();
}

// Example usage:
loadA11yPatch("https://services.tmpwebeng.com/component-library/language-pack.js", function() {
    // Other functions

    console.log("test");
});