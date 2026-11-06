// Accessibility Patch: Mindreader Combobox

export function fixMindReaderInput(input) {

  // Precompute IDs and frequently used elements
  
  const inputId = input.getAttribute("id");
  const label = document.querySelector("label[for=" + inputId + "]");
  const mindReaderID = inputId + "-mindreader";

  // Set Autocomplete Description 

  const autoCompleteID = document.getElementById("autocomplete-message-" + inputId);

  if (!autoCompleteID) {

    const autoCompleteMessage = document.createElement("span");
    autoCompleteMessage.setAttribute("id", "autocomplete-message-" + inputId);
    autoCompleteMessage.setAttribute("hidden", "");
    autoCompleteMessage.textContent = labelAutoCompleteDesc;
    input.parentNode.appendChild(autoCompleteMessage);

  }

  // Fix: Set unique ID on label

  if(label) {

    label.setAttribute("id", inputId + "-label");

  }

  // Fix: Prep Comboboxes with proper ARIA
  
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-haspopup", "listbox");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-controls", mindReaderID);

  const currentDescribedBy = input.getAttribute("aria-describedby");

  const newDescriptionId = "autocomplete-message-" + inputId;

  if (currentDescribedBy) {

    if (!currentDescribedBy.includes(newDescriptionId)) {

      input.setAttribute("aria-describedby", currentDescribedBy + " " + newDescriptionId);

    }
  
  } else {
    
    input.setAttribute("aria-describedby", newDescriptionId);
  
  }

  // Fix: Update input as needed based on class presence
  
  function checkInput() {
  
    if(input.classList.contains("mindreader-results-open")) {

      input.setAttribute("aria-expanded", "true");
    
    } else {
  
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
  
    }
  
  }

  checkInput();

  // Function to check the active class in combobox list
  
  function checkActiveClass() {

    // Fix: Look up the list and status fresh each time. MindReader re-renders them, so references captured at
    // setup go stale (this was throwing "Cannot read properties of null" on second use, e.g. https://kpmg.runmytests.eu).

    const mindReader = document.getElementById(mindReaderID);

    if(mindReader) {

      const activeItem = mindReader.querySelector("a.active");

      if (activeItem) {

        // Get li ID

        const listID = activeItem.parentElement.getAttribute("id");

        // Remove redundant screen reader announcements

        const mindReaderStatus = document.getElementById(inputId + "-mindreader-status");

        if (mindReaderStatus) {

          mindReaderStatus.textContent = "";

        }

        // Pass selected ID to aria-activedescendant

        input.setAttribute("aria-activedescendant", listID);

      }

    }

  }

  // Fix: initDynamicPatch() re-runs this function on every DOM mutation. Guarding here prevents the listeners below
  // from stacking up on the same input each time.

  if (input.dataset.a11yComboboxBound === "1") return;

  input.dataset.a11yComboboxBound = "1";

  // Add event listener for when focus leaves the input field (focusout)

  input.addEventListener("focusout", function() {

    checkInput();  // Update aria-expanded to false

  });

  // Add event listener for when Escape key is pressed

  input.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

      checkInput();  // Update aria-expanded to false

    }

  });

  // Listen for both keydown and keyup events. Bound to the input rather than document, since focus stays on the
  // input while arrowing through options (aria-activedescendant), and one document listener per input per patch run was piling up.
  // Fix: Deferred with setTimeout. MindReader moves the "active" class in its own keyup handler, which runs after ours,
  // so reading it synchronously left aria-activedescendant one option behind.

  function checkActiveClassDeferred() {

    setTimeout(checkActiveClass, 0);

  }

  input.addEventListener("keydown", checkActiveClassDeferred);
  input.addEventListener("keyup", checkActiveClassDeferred);

}
