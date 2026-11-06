// Accessibility Patch: Social Share

export function fixSocialShare() {

  // Fix: Append the following element and helper text, `<span class=".magicbullet-visually-hidden">(Opens in new tab or window)</span>`, to each `.social-share-items a` element.

  // TODO: Add language support.

  const socialShareLinks = document.querySelectorAll(".social-share a[target='_blank']");

  socialShareLinks.forEach(function(link) {

    const span = document.createElement("span");
    span.classList.add("magicbullet-visually-hidden");
    span.textContent = " (" + labelNewWindow + ")";
    link.append(span);

    // NICE TO HAVE: We don't really need the rel attribute anymore. Ask prodcut to eventually remove it.

  });

}
