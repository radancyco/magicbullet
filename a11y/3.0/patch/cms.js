import { labelNewWindow } from "../language-pack.js";

// Accessibility: Patch: CMS Content

export function fixCMS() {

  // Our CMS often strips needed HTML attributes, so this fix seeks to circumvent some of those removals. 

  // Fix: Lang Attributes are required to address shift in langauge in screen readers/AT. 

  const attributeLang = document.querySelectorAll("[data-cms-mb-lang]");

  attributeLang.forEach((el) => {

    el.setAttribute("lang", el.getAttribute("data-cms-mb-lang"));

  });

  // Fix: Tables created in CMS require scope attributes, which is beign stripped out by WYSIWYG editor. 

  const attributeScope = document.querySelectorAll("[data-cms-mb-scope]");

  attributeScope.forEach((el) => {

    el.setAttribute("scope", el.getAttribute("data-cms-mb-scope"));

  });

  // Fix: Add accessibly hidden new window text to CMS created links that open in new windows. Delivery will need to add new window icons for now. 

  const attributeTarget = document.querySelectorAll("a[target='_blank'][data-custom-category='UserCreatedContent']");

  attributeTarget.forEach((el) => {

    const span = document.createElement("span");
    span.classList.add("magicbullet-visually-hidden");
    span.textContent = " (" + labelNewWindow + ")";
    el.append(span);

  });

}
