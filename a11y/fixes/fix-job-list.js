// Note: Retired. Not imported by init-new.js. Kept for reference until the Job List markup is revisited.

// Accessibility Patch: Job List

 // Fix: Move location in into Job List link.

/* function fixJobList() {

  Removing for now. Paul brought interesting issue to my attention where job lists have multiple labels, in addition to location, so placing
  an element in previous element is causing issues. Revisit the markup of this component with the Base GST amd Site Admin team. 

  var jobListElements = document.querySelectorAll(".job-list .location, .job-list .date");

  jobListElements.forEach(function(element) {

    var previousElement = element.previousElementSibling;
  
    if (previousElement) {
  
      previousElement.appendChild(element);
  
    }

  });

} */
