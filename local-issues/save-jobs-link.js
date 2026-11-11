// A11y Fix for Save Jobs link, which should indicate to AT users how many jobs have been saved upon updating.
// Setting observer to watch this element for changes.This is a bit of hack but it does appear to solve the problem. 

var savedJobsBtn = document.querySelector("#btn-saved-jobs");

if (savedJobsBtn) {

  var isInitialLoad = true;
  var previousSavedJobsText = null;

  var savedJobsObserver = new MutationObserver(function () {

    var savedJobsText = savedJobsBtn.textContent;

    if (isInitialLoad) {

      isInitialLoad = false;
      previousSavedJobsText = savedJobsText;
      return;

    }

    if (savedJobsText === previousSavedJobsText) {

      return;

    }

    previousSavedJobsText = savedJobsText;

    var atMessage = document.querySelector("#magicbullet-message");

    atMessage.textContent = savedJobsText;

  });

  savedJobsObserver.observe(savedJobsBtn, {

    childList: true,
    subtree: true

  });

}