// Accessibility Patch: Job Description (Utility)

export function fixJobDescription() {

  var atsDescription = document.querySelectorAll(".ats-description");

  atsDescription.forEach(function(desc) {

    // Fix: Remove tabindex attribute from elements within .ats-description that have tabindex attribute not equal to "0" or starting with "-""

    desc.querySelectorAll("[tabindex]:not([tabindex='0']):not([tabindex^='-'])").forEach(function(tabindex) {
  
      tabindex.removeAttribute("tabindex");

    });

    // Fix: Add role="presentation" to tables within .ats-description

    desc.querySelectorAll("table").forEach(function(table) {
  
      table.setAttribute("role", "presentation");

    });

    // Fix: Remove useless attributes from all elements within .ats-description

    desc.querySelectorAll("*").forEach(function(element) {
  
      element.removeAttribute("face");
      element.removeAttribute("size");
      element.removeAttribute("title");
      element.removeAttribute("id");

    });

    // Fix: Remove <font> element and unwrap its contents within .ats-description

    desc.querySelectorAll("font").forEach(function(font) {
  
      var parent = font.parentNode;
  
      while (font.firstChild) {
  
        parent.insertBefore(font.firstChild, font);
  
      }
  
      parent.removeChild(font);

    });

    // Fix: Add hidden new window text to links that open in new windows. Delivery will need to add new window icons for now.  

    const attributeTarget = desc.querySelectorAll("a[target='_blank']");

    attributeTarget.forEach((el) => {

      const span = document.createElement("span");
      span.classList.add("magicbullet-visually-hidden");
      span.textContent = " (" + labelNewWindow + ")";
      el.append(span);

    });

  });

}
