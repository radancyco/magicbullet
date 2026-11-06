// Accessibility Patch: Mindreader List

export function fixMindReaderList() {

  // Fix: Add role of listbox to each UL

  var mindReaderLists = document.querySelectorAll(".mindreader-results, .typeahead");

  mindReaderLists.forEach(function(list, index) {

    // Precompute list attributes

    var listID = list.getAttribute("id");
    var ariaLabelledBy = listID.replace("-mindreader", "-label");

    // Add ARIA attributes to each list

    list.setAttribute("role", "listbox");
    list.setAttribute("aria-labelledby", ariaLabelledBy);

    // Process each list item

    var items = list.querySelectorAll("li");

    items.forEach(function(item, itemIndex) {

      // Generate unique IDs for options

      var optionID = "combobox-item-" + (index + 1) + "-" + (itemIndex + 1);

      // Add role and ID to each item

      item.setAttribute("role", "option");
      item.setAttribute("id", optionID);

    });

  });

}
