// HACK: NVDA is supressing arrow key functions, this solves it. Hopefully not an issue for AT users. 

var searchForm = document.querySelector(".search-form");

searchForm.setAttribute("role", "application");

// Remove tabbing from mindreader, allow arrow keys, send message to aria-live. 

var timer;
var inputKeyword = document.querySelector(".search-keyword");
var ariaLive = document.getElementById("keyword-results");

inputKeyword.addEventListener("keydown", announceUpdates);
inputKeyword.addEventListener("focus", announceUpdates);

function announceUpdates() {
    
  clearTimeout(timer);

  timer = setTimeout(function(){
    
    if(!inputKeyword.classList.contains("mindreader-loading")) {
      
      var allLinksTotal = document.querySelectorAll(".auto-complete-keyword-popup a").length;

      if(allLinksTotal > 0) {
      
        ariaLive.innerHTML = allLinksTotal + " items found. Use up and down arrows to navigate.";

      } else {
          
          ariaLive.innerHTML = "";
          
      }
      
    }
    
    if(inputKeyword.value === null || inputKeyword.value === "") {
        
         ariaLive.innerHTML = "";
    
    }
      
  }, 1000);
    
}

// Clear message when leaving keyword field

inputKeyword.addEventListener("blur", function(e) {
   
    ariaLive.innerHTML = "";
    
});

// Clear message when leaving keyword field

inputKeyword.addEventListener("keydown", function(e) {
   
    ariaLive.innerHTML = "";
    
});

document.addEventListener("keydown", function(e) {

  var allFocusElm = document.querySelectorAll(".auto-complete-keyword-popup *");

  if (allFocusElm) {
    
    allFocusElm.forEach(function(elm){

      elm.setAttribute("tabindex", "-1");
  
    });
    
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
  
      var focusElem = document.querySelector(":focus");

      var PrimaryElements = document.querySelectorAll(".search-keyword, .auto-complete-keyword-popup a");
      var tabElements = Array.from(PrimaryElements);
      var tabElementsCount = tabElements.length - 1;
  
      if (!tabElements.includes(focusElem)) return;
      
      var focusIndex = tabElements.indexOf(focusElem);
      var elemToFocus;
      
      e.preventDefault();
      e.stopPropagation();
  
      if (e.key === "ArrowUp") elemToFocus = tabElements[focusIndex > 0 ? focusIndex - 1 : tabElementsCount];

  
      if (e.key === "ArrowDown") elemToFocus = tabElements[focusIndex < tabElementsCount ? focusIndex + 1 : 0];
    
      elemToFocus.setAttribute("tabindex", "0");
      elemToFocus.focus();
  
  }
  
});