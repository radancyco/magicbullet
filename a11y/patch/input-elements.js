// Accessibility Patch: Input Elements (Utility)

export function fixInputElements() {

  // Fix: Input elements with type of "checkbox" should not contain autocomplete as it is not a text or select field, so we need to remove.

  const inputCheckBox = document.querySelectorAll("input[type='checkbox']");

  inputCheckBox.forEach(function(input) {

    input.removeAttribute("autocomplete");

  });

}
