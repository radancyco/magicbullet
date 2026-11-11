// Accessibility Patch: Iframe Elements

export function fixIframeElement() {

  // Fix: Find YouTube embeds that may be missing the title attribute and add a generic one.

  const missingTitleYoutube = document.querySelectorAll("iframe[src*='https://www.youtube.com/']:not([title])");

  missingTitleYoutube.forEach(function(title){

    title.setAttribute("title", "Youtube video player");

  });

  const missingTitleVimeo = document.querySelectorAll("iframe[src*='https://player.vimeo.com/']:not([title])");

  missingTitleVimeo.forEach(function(title){

    title.setAttribute("title", "Vimeo video player");

  });

}
