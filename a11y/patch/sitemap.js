// Accessibility Patch: Sitemap

export function fixSitemap() {

  // Fix: Remove `tabindex`, `aria-expanded`, and `.expandable-parent` from `.job-location h2` and `.job-category h2`.
  // TODO: Investigate possibly removing this. Tabindex may have been addressed by product. 

  const sitemapHeadings = document.querySelectorAll(".job-location h2, .job-category h2");

  sitemapHeadings.forEach(function(heading) {

    heading.removeAttribute("tabindex");
    heading.removeAttribute("aria-expanded");
    heading.classList.remove("expandable-parent");

  });

}
