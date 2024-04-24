// Declare a global variable to hold the MutationObserver instance
var a11yObserver = null;

// Function to initialize the MutationObserver
function initA11yRepair() {
    // Create a new MutationObserver instance
    a11yObserver = new MutationObserver(function(mutationsList, observer) {
        // Callback function body
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
    });

    // Configure the MutationObserver
    var config = { childList: true, subtree: true };

    // Start observing
    a11yObserver.observe(document.body, config);

    // Disconnect the observer after initial observation
    a11yObserver.disconnect();
}

// Call the initA11yRepair function on page load
window.addEventListener('load', function() {
    initA11yRepair();
});

// Function to reinitialize the observer when needed
function reinitializeObserver() {
    // Check if the observer is null or disconnected
    if (!a11yObserver) {
        initA11yRepair();
    }
}

// *** Accessibility Patch: Observer ***
function loadA11yPatch(url, callback) {
    var a11yBody = document.body;

    // Add A11y hook for implementation team. May come in handy.
    a11yBody.classList.add("magicbullet-a11y");

    // Install Language Pack.
    var componentLanguagePack = document.createElement("script");
    componentLanguagePack.setAttribute("src", url);
    componentLanguagePack.setAttribute("id", "component-library-language-pack");
    componentLanguagePack.onreadystatechange = callback;
    componentLanguagePack.onload = callback;

    // Only load one language pack per page.
    var getComponentLanguagePack = document.getElementById("component-library-language-pack");

    if(getComponentLanguagePack === null) {
        document.getElementsByTagName("head")[0].appendChild(componentLanguagePack);
    }

    // Run the function after content stops changing
    reinitializeObserver();
}
