// Focus is lost when button is removed from DOM.

btn.addEventListener("click", function() {

    var btnSearchFilter = document.querySelectorAll(".filter-button:not([disabled])");
    var firstJobListing = document.querySelector("#search-results-list ul a:first-child");
    var selectedButtonIndex = Array.from(btnSearchFilter).indexOf(this);
    var remainingButtonIndex = btnSearchFilter.length;

    if (remainingButtonIndex) {

        if (selectedButtonIndex >= remainingButtonIndex) {

            btnSearchFilter[remainingButtonIndex - 1].focus();

        } else {

            btnSearchFilter[selectedButtonIndex].focus();
    
        }

    } else {

        firstJobListing.focus();
    
    }

});